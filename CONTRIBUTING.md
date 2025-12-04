# **CONTRIBUTING.md**

### Cognitive Tensor Networks (CTN) — Contribution Guidelines

CTN is an open research effort.
If the ideas here work, they matter.
If they don’t, we want to discover that fast.

This project is intentionally MIT-licensed so the community can test, challenge, extend, or contradict any part of it.
There is no “center of control” here.
We care about results and rigor, not ownership.

CTN is a **cognitive geometry protocol** for LLMs.
This repository contains:

* the CTN kernel generator (`ctn_core`)
* the experimental design
* the initial benchmark framework
* evaluation scaffolding
* documentation of expected reasoning behavior

Your contributions—positive, negative, corrective, or adversarial—are welcome.

---

# **How to Contribute**

## **1. Try CTN Kernels Against Your Model of Choice**

The fastest way to help is to run:

* baseline system prompt
* CTN kernel (any version)

on the same query under deterministic decoding:

```json
{
  "temperature": 0,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}
```

If you see meaningful differences:

* hallucination suppression
* presupposition correction
* drift reduction
* or sparks of innovation

please submit:

* the prompt,
* the baseline output,
* the CTN output,
* and the model/version used.

These go in `examples/` or `results/` depending on scale.

---

## **2. Add Benchmark Prompts**

Benchmark prompts live under:

```
bench/
  factuality/
  summarization/
  presupposition/
  conceptual/
```

Each test case is a JSON file with:

* `id`
* `type`
* `prompt`
* `expected_result`
* `expected_reasoning`

Follow the schema in `EXPERIMENTAL_DESIGN.md`.

Your prompts should evaluate:

* hallucination behavior
* summarization drift
* presupposition handling
* emergent reasoning
* symbol invention
* or unexpected reasoning improvements

We want *rotational coverage* of each concept—multiple phrasing variants, multiple angles of attack.

---

## **3. Improve the Evaluation Harness**

The harness under `eval/` is minimal by design.

You can contribute:

* scripts
* JSON schemas
* scoring utilities
* visualization tools
* reproducibility helpers
* error analyzers

Please keep scoring rules deterministic and transparent.

---

## **4. Document Reasoning Deltas and Sparks of Innovation**

CTN’s core hypothesis is:

* reasoning deltas (ΔR)
* emergence deltas (ΔE)
* and innovation sparks (β)

These should be observable and measurable under the CTN kernel.

If you find:

* **unexpected helpful reasoning**
* **consistent emergent abstractions**
* **stable invented symbols**
* **cross-domain reframing that baseline models do not produce**

add them to `results/emergence/` with a short note.

This is important scientific evidence.

---

## **5. Propose New CTN Vectors (v₈, v₉, …)**

The CTN vector space is not fixed.

Current CTN uses v₁–v₇.
Emergent behaviors in 𝕌⊥ (DOE space) may justify new basis vectors.

If you observe:

* consistent emergent reasoning patterns
* structural shifts across multiple prompts
* identifiable new cognitive dimensions

propose a new vector with:

* name
* definition
* intended impact
* impact-free dimensions
* examples

Open a PR or issue under `ctn_core/vectors/`.

---

## **6. Challenge the Design**

If you find:

* failures
* contradictions
* regressions
* degenerate CTN behaviors
* DOE patterns that destabilize reasoning
* or theoretical errors in the design

file an issue.
Adversarial contributions are encouraged.

CTN is not dogma.
It is an experiment.

---

# **Philosophy**

We are not trying to “control” models.
We are trying to understand:

* how reasoning geometries form,
* how they collapse,
* how they can be stabilized,
* and where emergent innovation appears.

CTN is a shared cognitive interface.
If someone else sees something before we do, good.
If someone disproves it, also good.

This is an invitation to explore a new slice of model behavior that has not been systematized before.

The gold is in the emergence.

---

# **License**

MIT.
Use CTN for research, benchmarking, tools, startups, or whatever helps accelerate understanding.
Please cite the repo if you build on it.
