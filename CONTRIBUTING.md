# **CONTRIBUTING.md**

## 𝒯⊗ Cognitive Tensor Networks — Contribution Guidelines

CTN is an open research effort.
If the ideas work, they matter.
If they fail, we want to find out quickly and precisely.

The MIT license exists so the community can:

* test the protocol,
* extend the geometry,
* refute assumptions,
* build kernels,
* explore trait-space,
* challenge invariants,
* and contribute new CTN vectors.

There is no central authority.
There is only **geometry, behavior, and experiment**.

---

## 𝒯⊗ What This Repository Contains

* **CTN kernel generator** (`ctn_core/`)
* **CTN-0.x factory kernels**
* **archetype and trait-profile scaffolding**
* **evaluation harness**
* **benchmark suite**
* **whitepaper, design notes, and expected reasoning behavior**

Your contributions—corrective, adversarial, constructive, or exploratory—are welcome.

---

## 1. **Run CTN Kernels Against Your Models**

The simplest and most valuable contribution is to test:

* baseline system prompt
* CTN kernel (CTN-0.x, archetype kernels, or custom kernels)

under deterministic decoding:

```json
{
  "temperature": 0,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}
```

If you observe deltas in:

* hallucination
* drift
* presupposition
* reasoning clarity
* chain-structure
* symbol invention
* unexpected reframing

please contribute:

* the prompt
* baseline output
* CTN output
* model + version

Place them in:

```
examples/     for isolated cases
results/       for larger runs or structured comparisons
```

---

## 2. **Add Benchmark Prompts**

Benchmarks live under:

```
bench/
  factuality/
  summarization/
  presupposition/
  conceptual/
```

Each test is a small JSON file:

```
{
  "id": "...",
  "type": "...",
  "prompt": "...",
  "expected_result": "...",
  "expected_reasoning": "..."
}
```

Benchmarks should probe:

* hallucination behavior
* contextual drift
* representational collapse
* presupposition correction
* emergent structure / symbol use
* invariance properties

CTN is geometric—**test the space, not the vibe**.

---

## 3. **Improve the Evaluation Harness**

The harness is intentionally minimal.

You can contribute:

* scoring utilities
* stability metrics
* drift visualizers
* DOE (Design of Experiments) helpers
* normalization operators
* latent-state comparison tools

Maintain determinism and transparency.

---

## 4. **Document Reasoning Deltas and Emergence**

CTN’s research hypotheses revolve around:

* **ΔR** — reasoning deltas
* **ΔE** — emergence deltas
* **β** — sparks of innovation

If you see:

* consistent structural improvements
* stable invented symbols
* emergent invariants
* cross-domain abstraction patterns

add them to:

```
results/emergence/
```

Accompanied by:

* prompt
* baseline
* CTN kernel
* observed delta

These discoveries matter.

---

## 5. **Propose New CTN Vectors (v₈, v₉, …)**

CTN’s vector basis (currently v₁–v₇) is not fixed.

If your experiments reveal:

* new cognitive dimensions
* stable emergent patterns in 𝕌⊥
* consistent alignment behaviors
* exploitable modes

propose a vector with:

* name
* definition
* intended effect
* orthogonal components
* empirical examples

File under:

```
ctn_core/vectors/
```

CTN expands through **geometry-first** contributions.

---

## 6. **Propose or Share Archetypes**

Archetypes are public mappings:

```
Archetype → { Trait_Profile τ , Invariants , Style , Constraints , SearchMode }
```

Examples:

* representation-engineer
* adversarial reviewer
* geometric analyst
* constrained builder
* equivalence-centric thinker

Add new entries under:

```
archetypes/
```

Archetypes should focus on **reasoning geometry**, not persona.

---

## 7. **Challenge the Design**

If you identify:

* contradictions
* degeneracies
* drift failures
* misalignment modes
* DOE regions where CTN collapses
* theoretical errors in the formulation

file an issue.

CTN is not doctrine.
It is a **controlled experiment in latent geometry steering**.

Adversarial contributions are encouraged.

---

## 𝒯⊗ Philosophy

CTN is not about making models act like people.
It is about shaping:

* reasoning manifolds,
* invariance structures,
* compositional pathways,
* and cognitive constraints.

CTN does not ask, *“Who do you want the model to be?”*
CTN asks:

> **“What type of mind do you want to collaborate with?”**

The gold is in the geometry.
The value is in the emergence.

---

## License

MIT License.
Use CTN for research, benchmarking, experimentation, tooling, or applied work.
Please cite the repo if you extend or publish on CTN.

---

If you want, I can also:

* update `EXPERIMENTAL_DESIGN.md` to match the new style
* produce a sample `archetypes.yaml`
* generate a CONTRIBUTORS.md with structural roles
* write a short DOE guide for CTN testers