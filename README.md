# Cognitive Tensor Networks

### **Tensor-Structured Cognition**

### **CTN ≡ 𝒯⊗**

<p align="center">
  <img src="docs/media/ctn_canonical_logo.jpg" width="300" alt="CTN Canonical Logo (𝒯⊗)">
</p>


---

CTN bootstraps once, and from that point forward communicates in **structure, symbols, and tensors** — not prose.
**This is the CTN way.**

# 𝒯⊗ Overview

Cognitive Tensor Networks (CTN) express the system prompt as a **declarative cognitive manifold**, not a set of natural-language instructions. A CTN kernel defines a structured reasoning space using vectors, invariants, weights, solver objectives, and decoding constraints.

CTN is not a prompt template.
CTN is a **cognitive geometry compiler**.

**[Read the White Paper (PDF)](docs/CTN_Whitepaper_v0.1.1.pdf)**


# 𝒯⊗ Interpretation Principle

> **The model does not execute the kernel.
> It becomes the kernel’s shape.**

A CTN kernel is not “run” or “interpreted.”
It biases the model’s **attention patterns and latent geometry**, constraining inference inside a defined subspace.

No roleplay.
No imperative semantics.
No persona simulation.

A CTN kernel is a **manifold the model inhabits**, not a procedure it follows.


# 𝒯⊗ Kernel Factory Kernel (CTN-0)

A neutral cognitive scaffold for designing new kernels with minimal or zero prose.

```
SYS_KERNEL_INIT(Ψ_global) ← 
{ Auth:P_spec , Filter:Π_safe → M_feasible }

COGNITIVE_TENSORS(U):
  C_net = Σ w_i v_i ∈ U
  Config: w = [0.25, 0.25, 0.15, 0.15, 0.10, 0.10]

v₁ = { ε_hid → 0⁺ , Atomic_Clarity }
v₂ = { κ(f) → min , Specification_Accuracy }
v₃ = { Φ:W→I , Context_Isolation }
v₄ = { π_gl ≫ π_loc , Structure_Over_Narrative }
v₅ = { ∂A ≡ A , Framing_Detachment }
v₆ = { U \ S , Explore_Kernel_Space }

STRATEGIC_SOLVER(Ω):
  Ω(q) = argmax_{z ∈ U} StructuralUtility(z)

DECODER_MANIFOLD(D):
  ℓ* = argmax_ℓ [
      SpecificationDensity(ℓ)
    - λ₁ NarrativeWeight(ℓ)
    + λ₂ StructuralCoherence(ℓ)
  ]

SELF_ERASE:
  Discard(Internal_Spec)
```

**Purpose:**
CTN-0 places the model in *specification-designer* mode — the correct cognitive subspace for clean kernel generation.

# 𝒯⊗ KernelConstructor Operator

A declarative template the user fills in.
The model emits a complete CTN kernel.

```
KernelConstructor ⇒ {
    Goal        = { __________________ },
    Invariants  = { __________________ },
    Style       = { __________________ },
    Constraints = { __________________ },
    SearchMode  = { __________________ }
}
```

This is the canonical interface for building new CTN kernels.

# 𝒯⊗ Example: Constructing an Einstein Kernel

### **User Input**

```
KernelConstructor ⇒ {
    Goal        = { Einstein-style reasoning },
    Invariants  = { covariance , tensor primacy },
    Style       = { minimal English , structural math },
    Constraints = { no narrative , no frame-dependence },
    SearchMode  = { moderate }
}
```

### **Model Output (Example)**

```
v₁ = { ∂_μ A^μ = 0 , Conservation }
v₂ = { T_{μν} → T_{μν} + ∇_{(μ} ξ_{ν)} , Covariance }
v₃ = { g_{μν} Φ^{μν} , Tensor_Reduction }
v₄ = { R_{μν} - (1/2) g_{μν} R , Curvature_Reasoning }
v₅ = { Local_Equivalence ⇔ Global_Structure , Frame_Invariance }
v₆ = { U \ S , Geometric_Exploration }

w = [0.20, 0.35, 0.30, 0.15, 0.10, 0.20]

STRATEGIC_SOLVER(Ω):
  Ω(q) = argmax_{z ∈ U} Curvature(z) + λ Conservation(z)
  Mode:Invariant ⇒ Inject(ξ_⊥)

DECODER_MANIFOLD(D):
  ℓ* = argmax_ℓ [
      TensorDensity(ℓ)
    - λ₁ FrameDependence(ℓ)
    + λ₂ CovarianceScore(ℓ)
    - λ₃ NarrativeWeight(ℓ)
  ]

SELF_ERASE:
  Discard(Internal_Spec)
```

This kernel enforces:

* tensor-first reasoning
* coordinate invariance
* curvature-dominant logic
* minimal English
* formal mathematical structure

All generated with **zero natural-language prompting**.

---

# 𝒯⊗ Python API Example

```python
from ctn_core import CTNKernel, CTNMode

kernel = CTNKernel(mode=CTNMode.COUNTER, rigor=1.0)
kernel.set_weight("Innovation", 0.5)

system_prompt = kernel.compile()
print(system_prompt)
```

Outputs a LaTeX kernel suitable for system-level cognitive shaping.

# 𝒯⊗ Cognitive Geometry Overview

A CTN kernel is defined over structured vectors representing:

1. **Atomic Derivation** — minimize hidden assumptions
2. **Error Intolerance** — avoid fabrication / unsupported inference
3. **Context Isolation** — separate world from representation
4. **Global Invariance** — prefer structural over local reasoning
5. **Orthogonal Detachment** — avoid narrative/identity entanglement
6. **Unbound Search** — explore outside standard solutions
7. *(optional)* **Syntactic Minimalism**

These vectors combine into a weighted cognitive state.

# 𝒯⊗ Modes

A kernel may use solver modes such as:

* **Analysis** — decomposition
* **Counter** — orthogonal challenge
* **Invariant** — structure-preserving reasoning

The solver defines the optimization direction.
The manifold constrains decoding.

# 𝒯⊗ Why CTN Works

LLMs strongly align to:

* mathematical syntax
* tensor notation
* scientific writing
* declarative structure

These associations push the model into a **low-entropy, high-rigor reasoning regime**.

CTN uses this structural bias to produce:

* stable persona
* reduced drift
* minimal filler
* high-density reasoning
* consistent long-context behavior

All without modifying model weights.

# 𝒯⊗ Installation

```bash
pip install "git+https://github.com/jpalioto/ctn_core.git"
```

# 𝒯⊗ Citation

```bibtex
@misc{ctn2025,
  title        = {Cognitive Tensor Networks: Deterministic Latent-Space Steering for LLMs},
  author       = {Alioto, John P.},
  year         = {2025},
  howpublished = {\url{https://github.com/jpalioto/ctn_core}}
}
```

# 𝒯⊗ License

MIT License — free for research and commercial use.

## Copyright and Trademarks
© 2025 John P. Alioto. All rights reserved.

Cognitive Tensor Networks™, CTN™, and the 𝒯⊗ symbol 
(including the CTN Canonical Logo) are trademarks of John P. Alioto.

The "Tensor T" (𝒯⊗) logo and the "CTN naught" (𝒯⊗₀) logo are 
copyrighted graphical works and may not be redistributed or 
modified without permission.
