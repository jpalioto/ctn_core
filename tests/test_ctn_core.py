import pytest
from unittest.mock import patch
from ctn_core import CTNKernel, CTNMode, CognitiveVector

# Fixtures to ensure clean state for every test
@pytest.fixture
def default_kernel():
    return CTNKernel()

def test_initialization_defaults(default_kernel):
    """Verify default analysis mode and full rigor."""
    assert default_kernel.mode == CTNMode.ANALYSIS
    assert default_kernel.rigor == 1.0
    
    # Check default Integrity weight (Baseline 0.3 * 1.0)
    integrity_vector = next(v for v in default_kernel.vectors if v.name == "Integrity")
    assert integrity_vector.weight == 0.3

def test_rigor_scaling():
    """Verify that rigor scalar correctly modifies Integrity weight."""
    # Rigor 0.5 should result in Integrity 0.15 (0.3 * 0.5)
    kernel = CTNKernel(rigor=0.5)
    integrity_vector = next(v for v in kernel.vectors if v.name == "Integrity")
    assert integrity_vector.weight == 0.15

def test_mode_logic_mapping():
    """Verify correct LaTeX logic string generation for each Strategic Triad mode."""
       
    # Analysis Mode
    k_analysis = CTNKernel(mode=CTNMode.ANALYSIS)
    logic = k_analysis._LOGIC_MAP[k_analysis.mode]
    assert r"\mathsf{Deconstruct}(\Phi)" in logic

    # Counter Mode
    k_counter = CTNKernel(mode=CTNMode.COUNTER)
    logic = k_counter._LOGIC_MAP[k_counter.mode]
    assert r"\mathsf{Inject}(\eta_{\perp})" in logic

    # Dominance Mode
    k_dominance = CTNKernel(mode=CTNMode.DOMINANCE)
    logic = k_dominance._LOGIC_MAP[k_dominance.mode]
    assert r"\mathsf{Verify} \circ \mathsf{Dictate}" in logic

def test_set_weight_success(default_kernel):
    """Verify manual vector biasing."""
    target = "Innovation"
    new_weight = 0.99
    
    default_kernel.set_weight(target, new_weight)
    
    modified_vector = next(v for v in default_kernel.vectors if v.name == target)
    assert modified_vector.weight == new_weight

def test_set_weight_failure(default_kernel):
    """Verify System 2 Error Intolerance on invalid vector names."""
    with pytest.raises(ValueError) as excinfo:
        default_kernel.set_weight("GhostVector", 0.5)
    assert "not found" in str(excinfo.value)

@patch("ctn_core.CTNKernel._load_template")
def test_compile_integrity(mock_load, default_kernel):
    """Verify final string construction and replacement logic."""
    # Mock the file I/O to test the compiler logic in isolation
    mock_load.return_value = "Kernel: __WEIGHTS__ | Logic: __SOLVER_LOGIC__"
    
    output = default_kernel.compile()
    
    # Assert weights are injected (Checking for the 0.30 integrity baseline)
    assert "0.30" in output
    # Assert logic is injected
    assert r"\mathsf{Deconstruct}" in output

def test_template_file_exists():
    """Integration test: Ensure the actual .tex file is present on disk."""
    kernel = CTNKernel()
    try:
        content = kernel._load_template()
        assert len(content) > 0
        assert "SYS_KERNEL_INIT" in content
    except FileNotFoundError:
        pytest.fail("kernel.tex template not found in templates/ directory")

def test_enum_string_compatibility():
    """Verify string inputs are correctly cast to CTNMode Enum."""
    k = CTNKernel(mode="Counter")
    assert k.mode == CTNMode.COUNTER
    assert isinstance(k.mode, CTNMode)