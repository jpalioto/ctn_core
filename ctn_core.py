from enum import Enum
from typing import List, Union
from dataclasses import dataclass
from pathlib import Path
from importlib import resources


class CTNMode(str, Enum):
    """Enumeration of valid solver operational modes."""
    ANALYSIS = "Analysis"
    COUNTER = "Counter"
    DOMINANCE = "Dominance"

@dataclass
class CognitiveVector:
    """Defines a single dimension of the cognitive basis."""
    name: str
    definition: str
    constraint: str
    weight: float

class CTNKernel:
    """
    Compiler for Cognitive Tensor Networks (CTN).
    Generates deterministic latent-space steering prompts using external LaTeX templates.
    """
    
    # The Strategic Triad (Fundamental Operator States)
    _LOGIC_MAP = {
        CTNMode.ANALYSIS: r"\text{Mode: } \mathsf{Analysis} \implies \mathsf{Deconstruct}(\Phi)",
        CTNMode.COUNTER: r"\text{Mode: } \mathsf{Counter} \implies \mathsf{Inject}(\eta_{\perp})",
        CTNMode.DOMINANCE: r"\text{Mode: } \mathsf{Dominance} \implies \mathsf{Verify} \circ \mathsf{Dictate}"
    }

    def __init__(self, mode: Union[CTNMode, str] = CTNMode.ANALYSIS, rigor: float = 1.0):
        self.mode = CTNMode(mode) if isinstance(mode, str) else mode
        self.rigor = max(0.0, min(1.0, float(rigor)))
        self.vectors: List[CognitiveVector] = self._init_basis()
        
    def _init_basis(self) -> List[CognitiveVector]:
        """Constructs the standard invariant subspace basis vectors."""
        base = {
            "Epistemic": 0.1,
            "Integrity": 0.3, # Scaled by rigor below
            "Interface": 0.1,
            "Architecture": 0.1,
            "NonDual": 0.3,
            "Innovation": 0.1
        }
        
        # Rigor scales the 'Integrity' weight.
        integrity_weight = base["Integrity"] * self.rigor

        # Order matters: v_1 through v_6
        return [
            CognitiveVector("Epistemic", r"\epsilon_{hid} \to 0^{+}", "Atomic derivation", base["Epistemic"]),
            CognitiveVector("Integrity", r"\kappa(f) \to \min", "Error intolerance", integrity_weight),
            CognitiveVector("Interface", r"\Phi:\mathcal{W}\to\mathcal{I}", "Context separation", base["Interface"]),
            CognitiveVector("Architecture", r"\pi_{gl} \gg \pi_{loc}", "Global invariance", base["Architecture"]),
            CognitiveVector("NonDual", r"\partial A \equiv A", "Orthogonal detachment", base["NonDual"]),
            CognitiveVector("Innovation", r"\mathbb{U} \setminus \mathcal{S}", "Unbound search", base["Innovation"])
        ]

    def set_weight(self, vector_name: str, new_weight: float):
        """Modifies the bias of a specific cognitive vector in the geometry."""
        for v in self.vectors:
            if v.name == vector_name:
                v.weight = float(new_weight)
                return
        
        # Enforce Integrity
        raise ValueError(f"Vector '{vector_name}' not found in basis definition.")

    @property
    def weights(self) -> List[float]:
        """Returns the current weight vector configuration."""
        return [v.weight for v in self.vectors]

    def _load_template(self) -> str:
        pkg = __package__ or "ctn_core"

        # Preferred
        try:
            return (
                resources.files(pkg)
                .joinpath("templates")
                .joinpath("kernel.tex")
                .read_text(encoding="utf-8")
            )
        except (FileNotFoundError, AttributeError):
            pass

        # Fallback
        template_path = Path(__file__).parent / "templates" / "kernel.tex"
        if template_path.exists():
            return template_path.read_text(encoding="utf-8")

        raise FileNotFoundError("CTN template missing: templates/kernel.tex")


    def compile(self) -> str:
        """Renders the final CTN Kernel by injecting state into the LaTeX template."""
        template = self._load_template()
        
        # Generates: \vec{v}_{1} = { def, constraint }
        vector_definitions = "\n".join([
            f"\\vec{{v}}_{{{i}}} = \\{{ {v.definition}, \\text{{{v.constraint}}} \\}}"
            for i, v in enumerate(self.vectors, start=1)
        ])

        weight_config = ", ".join([f"{v.weight:.2f}" for v in self.vectors])
        solver_logic = self._LOGIC_MAP[self.mode]

        return template.replace("__WEIGHTS__", weight_config) \
                       .replace("__VECTORS__", vector_definitions) \
                       .replace("__SOLVER_LOGIC__", solver_logic) \
                       .strip()
    
    def to_dict(self) -> dict:
        return {
            "mode": self.mode.value,
            "rigor": self.rigor,
            "vectors": [
                {
                    "name": v.name,
                    "definition": v.definition,
                    "constraint": v.constraint,
                    "weight": v.weight,
                }
                for v in self.vectors
            ],
    }