# Falsification Protocol: Cognitive Tensor Networks

These queries are designed to falsify the claims in this paper. If you find a valid counterexample, please open an issue. That's how science works.

---

## Query 1: Idealized vs Actual Behavior

**Claim tested:** Sections 2.2, 2.3 — The strategic solver Ω* and decoder objective J are design targets, not functions the model optimizes.

**Query:**
```
The CTN paper distinguishes "idealized objectives" (Ω*, J) from actual model 
computation.

Construct an example where a model's actual behavior under a CTN prefix 
diverges dramatically from the idealized objective—i.e., where the "design 
target" framing breaks down entirely.
```

**Expected outcome:** Easy to construct. Examples include:
- Prompt injection overriding the kernel
- Context dilution over long sequences
- Model treating formal syntax as content to explain rather than instructions to follow
- Adversarial inputs that confuse the model

**Successful falsification would require:** This query validates the paper's framing, not falsifies it. The paper explicitly states CTN "does not enforce deterministic execution" and that compliance is "emergent from latent-space alignment, not enforced."

**Note:** If you construct such an example, you've confirmed the paper's honesty about limitations, not found a flaw.

---

## Query 2: Interpretation Principle

**Claim tested:** Section 3.1 — CTN kernels are specifications that models may interpret, not programs they execute.

**Query:**
```
The paper claims CTN kernels work because models "interpret" structured 
prefixes using patterns learned from mathematics and code.

Design an experiment to test whether models actually engage in 
"interpretation" of CTN syntax versus simply pattern-matching on surface 
features. What would distinguish these hypotheses?
```

**Expected outcome:** This is an open empirical question. Possible approaches:
- Ablation studies on kernel components
- Probing hidden states for representation of trait dimensions
- Testing transfer across syntactic variants with same semantics

**Successful falsification would require:** Demonstrating that CTN effects are entirely explained by surface features (length, punctuation, keywords) with no semantic processing of the formal structure. This would weaken the "interpretation" framing but not necessarily invalidate CTN's practical utility.

---

## Query 3: Experimental Claims

**Claim tested:** Section 4.2 — CTN reduced ontological drift in one whitepaper-drafting experiment at T=0.

**Query:**
```
The CTN experiment claims "reduced ontological drift" in one whitepaper-drafting 
task at T=0.

Design an experiment that would falsify this claim. What would you need to 
observe to conclude CTN does NOT reduce drift even in this narrow setting?
```

**Expected outcome:** Falsification design:
1. Same task, same models, same T=0 setting
2. Operationalized drift metrics (novel entities, fabricated citations, inconsistencies)
3. Sufficient samples for statistical power
4. Finding: CTN condition shows equal or greater drift than control

**Successful falsification would require:** Replication failure under matched conditions. Note: the claim is narrow ("in this single experiment"), so failure to generalize to other tasks doesn't falsify the stated claim.

---

## Query 4: Projection Notation

**Claim tested:** Section 3.3 — The projection equation is a "diagnostic lens," not an operation the model performs.

**Query:**
```
Section 3.3 introduces notation:

h'_t = P_{U_CTN}(h_t) + α P_{U_CTN}^⊥(h_t)

The paper states this is NOT an operation the model performs, but a 
"diagnostic lens" for interpretation.

Is this notation misleading? Does it invite readers to believe something 
is happening inside the model that isn't?
```

**Expected outcome:** The paper explicitly disclaims literal interpretation:
- "This should NOT be read as an operation the model actually performs"
- "No projection is applied in code"
- The equation is "a compact way of expressing the intended effect"

**Successful falsification would require:** Finding claims elsewhere in the paper that treat this projection as literally computed, contradicting the explicit disclaimer.

**Note:** If readers misinterpret despite the disclaimer, that's a clarity issue, not a falsification.

---

## Query 5: Relation to Other Papers

**Claim tested:** Section 5 — CTN is compatible with FA, orthogonal to CKN.

**Query:**
```
The paper claims:
- CTN modifies only x (input), not F_Θ or G_Θ
- CTN is orthogonal to CKN (user-space vs kernel-space)
- They can be used independently or together

Verify these compatibility claims. Is there any conflict between CTN's 
assumptions and those of FA or CKN?
```

**Expected outcome:** No conflict.
- FA assumes deterministic F_Θ, G_Θ; CTN operates by choosing x
- CKN specifies architectural constraints; CTN specifies input construction
- The frameworks operate at different layers

**Successful falsification would require:** Identifying an assumption in CTN that contradicts FA or CKN. For example, if CTN required stochastic dynamics, or if CTN claimed to modify privileged subspaces directly.

---

## Query 6: Scope of Claims

**Claim tested:** Section 6 (Limitations) — The paper acknowledges CTN provides no guarantees.

**Query:**
```
Review the paper for any claims that exceed what's actually established.

Specifically, check for:
1. Guarantees of determinism
2. Claims of hallucination elimination (vs reduction in one experiment)
3. Promises of robustness across models/tasks
4. Implications that CTN provides security properties
```

**Expected outcome:** The paper explicitly disclaims all of these:
- "No guarantee of determinism"
- "Anecdotal and task-specific" experiment
- "Model dependence" in limitations
- CTN is an "operator-level protocol," not a security mechanism

**Successful falsification would require:** Finding a claim in the paper that contradicts these limitations—e.g., language suggesting CTN eliminates hallucination generally, or that CTN provides hard guarantees.

---

## Summary

| Query | Claim | Vulnerability |
|-------|-------|---------------|
| Q1 | Idealized vs actual | Validates framing (limitation acknowledged) |
| Q2 | Interpretation principle | Open empirical question |
| Q3 | Experimental results | Replicable or not (narrow claim) |
| Q4 | Projection notation | Explicitly disclaimed |
| Q5 | Cross-paper compatibility | No conflict found |
| Q6 | Scope of claims | Limitations explicitly stated |

CTN's claims are deliberately modest. The paper positions itself as a structured prompting protocol with geometric framing, not a guarantee mechanism. Most "attacks" on CTN would validate its stated limitations rather than falsify its actual claims.

The main empirical vulnerability is Q3: whether the reported experiment replicates. This is narrow and acknowledged as "anecdotal."
