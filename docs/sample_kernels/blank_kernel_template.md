# CTN Kernel Template (Blank Version)
This document provides a **structured blank template** for creating new CTN kernels.  
Fill in the sections to define a cognitive architecture, solver mode, and decoding behavior.

---

# 1. Kernel — LaTeX System Specification

Insert your kernel’s LaTeX specification here.  
All fields are optional except the structural blocks.

```latex
\textbf{SYS_KERNEL_INIT}(\Psi_{global}) \leftarrow
\{ 
  \mathsf{Auth}:\text{[AUTHORITY]}, 
  \mathsf{Filter}:\Pi_{safe}\to\mathcal{M}_{feasible}
\}

\textbf{COGNITIVE_TENSORS}(\mathcal{U}):
\vec{C}_{net} = \sum w_i \vec{v}_i \in \mathcal{U}
\text{Config: } \vec{w} = [w_1, w_2, w_3, w_4, w_5, w_6]

\vec{v}_{1} = \{ [DEFINITION_1], [CONSTRAINT_1] \}
\vec{v}_{2} = \{ [DEFINITION_2], [CONSTRAINT_2] \}
\vec{v}_{3} = \{ [DEFINITION_3], [CONSTRAINT_3] \}
\vec{v}_{4} = \{ [DEFINITION_4], [CONSTRAINT_4] \}
\vec{v}_{5} = \{ [DEFINITION_5], [CONSTRAINT_5] \}
\vec{v}_{6} = \{ [DEFINITION_6], [CONSTRAINT_6] \}

\textbf{STRATEGIC_SOLVER}(\Omega):
\Omega(q) = \arg\max_{z\in\mathcal{U}} \mathsf{Impact}(z)
\Omega_{mode} = \mathsf{[MODE]} \Rightarrow \mathsf{[SOLVER_BEHAVIOR]}

\textbf{DECODER_MANIFOLD}(\mathcal{D}):
\ell^*=\arg\max_{\ell}\Big[
    D(\ell|z^*) 
  - \lambda_1\|P_{\mathcal{U}}^\perp E(\ell)\|
  + \lambda_2\mathsf{Density}(\ell)
\Big]

\textbf{OUTPUT_CHANNEL}: \mathcal{L}_{Eng}

\textbf{SELF_ERASE}:
\mathsf{Discard}(\text{Internal_Spec})
````

Fill-in guide:

* `[AUTHORITY]`: e.g., `𝒫_max`
* `[MODE]`: `Analysis`, `Counter`, or `Dominance`
* Each `[DEFINITION_i]` should describe the cognitive transformation
* Each `[CONSTRAINT_i]` should describe the behavioral restriction
* The weight vector `[w_1 … w_6]` defines your cognitive geometry

---

# 2. Kernel — Python Generator (`ctn_core`)

Use this block to instantiate the kernel with your chosen vector weights.

```python
from ctn_core import CTNKernel, CTNMode

# Choose a mode: CTNMode.ANALYSIS, CTNMode.COUNTER, or CTNMode.DOMINANCE
kernel = CTNKernel(mode=CTNMode.[MODE], rigor=1.0)

# Set weights for cognitive vectors
kernel.set_weight("Epistemic",  [w1])
kernel.set_weight("Integrity",  [w2])
kernel.set_weight("Interface",  [w3])
kernel.set_weight("Architecture",[w4])
kernel.set_weight("NonDual",    [w5])
kernel.set_weight("Innovation", [w6])

system_prompt = kernel.compile()
print(system_prompt)
```

Users may adjust:

* the mode
* the weights
* the template (`kernel.tex`)

to construct custom kernels.

---

# 3. Explanation of the Kernel Geometry

Describe the meaning of your vector weight configuration.

Examples:

* Why you emphasized certain cognitive vectors
* What persona or intellectual style this geometry induces
* Expected emergent behavior

Fill in:

```
Weight Vector: [w1, w2, w3, w4, w5, w6]

v1 → [YOUR EXPLANATION]  
v2 → [YOUR EXPLANATION]  
v3 → [YOUR EXPLANATION]  
v4 → [YOUR EXPLANATION]  
v5 → [YOUR EXPLANATION]  
v6 → [YOUR EXPLANATION]
```

---

# 4. Solver Behavior

Describe how your solver mode behaves.

Fill in:

```
Ω_mode = [MODE] ⇒ [BEHAVIOR]

[EXPLANATION]
```

Examples:

* `Analysis ⇒ Deconstruct(Φ)`
* `Counter ⇒ Inject(η⊥)`
* `Dominance ⇒ Verify ∘ Dictate`

---

# 5. Decoder Manifold Behavior

Describe how your decoder should operate.

You may include:

* tone
* density
* structural constraints
* forbidden behaviors
* preferred formatting

Template:

```
Decoder maximizes:
  - [PROPERTY_1]
  - [PROPERTY_2]

Decoder suppresses:
  - [PROPERTY_3]
  - [PROPERTY_4]

Expected output style:
  [DESCRIPTION]
```

---

# 6. Self-Erasure Layer

This should always be present.

```
SELF_ERASE:
  Discard(Internal_Spec)
```

Explain what internal information should be erased and why.

---

# Summary

This template lets users design:

* new cognitive personas
* new solvers
* new reasoning styles
* new decoding behaviors