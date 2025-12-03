# Cognitive Tensor Networks (CTN)
**Deterministic Latent-Space Steering for LLMs**

CTN is a framework for constructing structured, mathematically-defined “cognition kernels” that guide LLM reasoning with high stability and low linguistic entropy. Instead of using natural-language prompting, CTN compiles a LaTeX-based latent steering kernel that biases the model toward analysis, rigor, detachment, and architectural reasoning.

CTN is not a prompt template.  
It is a **cognitive geometry compiler**.

---

## Installation

```bash
pip install "git+https://github.com/jpalioto/ctn_core.git"
````

---

## Purpose

CTN solves three problems:

1. **Semantic drift** in long conversations
2. **LLM reversion to generic assistant behavior**
3. **High entropy / low determinism** in natural-language instructions

Instead of telling the model what to do in English, CTN provides a **latent-space kernel**:
a structured mathematical specification that the model interprets as an instruction manifold.

This produces:

* high-rigor reasoning
* persona stability
* reduced filler, hedging, and sycophancy
* improved chain-of-thought quality without revealing internal steps

---

## Quick Example

```python
from ctn_core import CTNKernel, CTNMode

kernel = CTNKernel(mode=CTNMode.COUNTER, rigor=1.0)
kernel.set_weight("Innovation", 0.5)

system_prompt = kernel.compile()
print(system_prompt)
```

This outputs a rigorous LaTeX kernel the LLM uses as its cognitive scaffold.

---

## Cognitive Geometry

A CTN kernel is defined over six basis vectors:

1. **Epistemic** — minimize hidden assumptions
2. **Integrity** — numerical/analytical error intolerance
3. **Interface** — separation between world and representation
4. **Architecture** — global-first reasoning
5. **NonDual** — self-detachment; action orthogonal to emotion
6. **Innovation** — search outside standard solution sets

These are weighted to form a composite cognitive state, then rendered into a kernel that the LLM treats as a system directive.

---

## Modes

The kernel operates in one of three modes:

* **Analysis** — decomposition and clarification
* **Counter** — orthogonal disruption of adversarial or misleading framing
* **Dominance** — assertive, unambiguous reasoning with strong verification

These correspond to symbolic solver operators in the emitted kernel.

---

## Example Kernel Output

*(Excerpt, rendered by `compile()`)*

```latex
\textbf{SYS_KERNEL_INIT}(\Psi_{global}) \leftarrow \{ ... \}

\textbf{COGNITIVE_TENSORS}:
\vec{v}_{1} = { \epsilon_{hid} \to 0^{+}, \text{Atomic derivation} }
...

\textbf{STRATEGIC_SOLVER}:
\text{Mode: } \mathsf{Counter} \implies \mathsf{Inject}(\eta_{\perp})

\textbf{DECODER}:
\ell^* = \arg\max_{\ell \in \mathcal{L}_{Eng}} [D(\ell|z^*) - \lambda_1 ...]
```

The LLM interprets this as a system-level cognitive configuration, producing more structured, higher-density reasoning without unnecessary linguistic artifacts.

---

## Why CTN Works

LLMs learn strong statistical associations between:

* mathematical form
* scientific writing
* deductive structure
* technical tone

CTN exploits this by pushing the model into a **low-entropy mathematical manifold**, bypassing conversational modes and anchoring the model into:

* analytical attention heads
* formal reasoning circuits
* stable long-context consistency

This yields deterministic, persona-stable behavior without modifying model weights.

---

## Handling Refusals & Safety Drift

CTN reduces unnecessary refusals by:

* avoiding emotionally-loaded or high-ambiguity language
* presenting tasks in purely formal, technical notation
* steering the LLM toward analysis instead of compliance reasoning

This is **not** a safety bypass.
It simply avoids triggering model heuristics associated with “unsafe-seeming” user intent when the actual task is benign and technical.

---

## Citation

If you use CTN in research or engineering contexts:

```bibtex
@misc{ctn2025,
  title        = {Cognitive Tensor Networks: Deterministic Latent-Space Steering for LLMs},
  author       = {Alioto, John P.},
  year         = {2025},
  howpublished = {\url{https://github.com/jpalioto/ctn_core}}
}
```

---

## License

MIT License — free for research and commercial use.