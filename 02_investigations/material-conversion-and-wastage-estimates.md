# Material conversion & wastage estimates for the supply-chain tree

**Purpose.** The supply-chain tree (`../03_diagrams/supply-chain-params.js`) expresses each
material's requirement as `perLamp` — the amount drawn from that material's global supply pool to
build **one finished, shippable lamp**. Originally most `perLamp` figures were the *functional*
amount (the mass that ends up inside the lamp), with conversion and process wastage only partly
applied. This document records the conversion ratios and process-yield factors now folded into
those figures, so the numbers remain auditable.

**Convention.** For every material:

```
perLamp = (functional amount in lamp) × (conversion ratio) ÷ (cumulative process yield)
```

The cumulative yield runs from the material's *supply node* all the way to a finished lamp ("full
chain to finished lamp"), so each `perLamp` reflects total material consumed per *good* lamp,
including units scrapped at any downstream step. Central point estimates are used in the live
model; the low/high range and a confidence flag are recorded here.

**Confidence flags.** ✅ reasonably grounded · ⚠️ derived/indirect · ❓ largely unverified
estimate. Almost every *yield* figure below is ⚠️ or ❓: process yields for UV-grade fused silica,
electrode forming and gas filling are closely-held and not published. These are first-order
engineering estimates, not measured values. They are recorded so they can be replaced as firmer
data arrives (e.g. from Heraeus, Ushio, Shin-Etsu).

> **Note on scope.** These factors change *how much of each material is consumed per lamp*. They
> deliberately draw no conclusion about whether any material is or is not a binding constraint —
> that falls out of the model once supply and per-lamp figures are firm.

---

## Summary table

| Material (node) | Functional in-lamp | Conversion | Cumulative yield | **New perLamp (central)** | Range | Old perLamp |
|---|---|---|---|---|---|---|
| Fused silica envelope (tube) | 75 g | 1.0 | 0.75 | **100 g** | 91–115 g | 75 g |
| SiCl₄ → envelope | 75 g SiO₂ | ×2.83 | 0.43 | **495 g** | 386–708 g | 212 g |
| Krypton fill | 5 mL | 1.0 | 0.62 | **8 mL** | 6.7–11 mL | 5 mL |
| Chlorine donor | 0.44 mg | 1.0 | 0.41 | **1.06 mg** | 0.73–1.5 mg | 0.44 mg |
| Fused silica window (substrate) | 8.6 g | 1.0 | 0.85 | **10 g** | 9.3–11.5 g | 10 g |
| SiCl₄ → window | 8.6 g SiO₂ | ×2.83 | 0.34 | **71 g** | 54–97 g | 24.3 g |
| HfO₂ coating | ~6 mg in-film | (incl. 30% util) | 0.85 | **0.024 g** | 0.022–0.027 g | 0.02 g |
| SiO₂ coating | ~109 µg in-film | (incl. 30% util) | 0.85 | **0.42 mg** | 0.39–0.48 mg | 0.36 mg |
| Nickel electrodes | 10 g | 1.0 | 0.67 | **15 g** | 12.5–18 g | 10 g |
| HV capacitors | $3 value | 1.0 | 0.96 | **$3.1** | $3.06–3.23 | $3 |
| Aluminium housing | 300 g | 1.0 | 0.68 | **440 g** | 353–545 g | 300 g |

---

## Per-material reasoning

### Fused silica envelope (tube) — `fused_silica_envelope`
**Supply basis:** finished Suprasil-class UV drawn tube (~100 t/yr). The upstream
deposition/sinter/draw losses are *already* behind this node, so only tube → lamp losses apply.

- **Cut & trim, 0.88** ⚠️ — tube ships in 1–3 m lengths and is cut to lamp-body length; end
  sections, diameter-transition zones and kerf are culled (A4 investigation: "cut to lamp-body
  length at Stage A5, incurring further trim waste").
- **Lamp fabrication yield, 0.85** ⚠️ — end-forming, electrode/end-cap sealing, evacuation, leak
  test and burn-in all reject some units; a scrapped lamp wastes its whole envelope.
- **Cumulative 0.75** → 75 g ÷ 0.75 ≈ **100 g**. Range from 0.65–0.82 yield.

### Ultra-high-purity SiCl₄ → envelope — `sicl4_envelope`
**Supply basis:** SiCl₄ feedstock (~1.3 Mt/yr). Must traverse the entire glass chain, so all
upstream yields stack here.

- **Conversion ×2.83** ✅ — stoichiometric SiCl₄ + 2H₂O → SiO₂ + 4HCl, MW 169.9/60.1 = 2.83 g
  SiCl₄ per g SiO₂ (silicon-tetrachloride.md). Theoretical; practical consumption is higher,
  captured by the capture term below.
- **Flame-hydrolysis capture, 0.80** ❓ — fraction of vaporised SiCl₄ that deposits as adhering
  soot rather than being lost to the dust collector/exhaust (A2 open question on soot yield). The
  off-gas SiCl₄ may be partly recycled in some plants, which would raise effective capture.
- **Sinter (soot → ingot), 0.92** ⚠️ — cracking, bubble and striae rejection during consolidation
  (A3).
- **Draw (ingot → tube), 0.78** ⚠️ — A3/A4 estimate ingot-to-usable-tube yield at 70–85% (end
  culls, defect sections).
- **Tube → lamp, 0.75** — as above.
- **Cumulative 0.43** → 75 g × 2.83 ÷ 0.43 ≈ **495 g** (≈ 6.6 g SiCl₄ per g of in-lamp silica,
  vs 2.83 g at pure stoichiometry). Range 0.30–0.55 → 386–708 g. **The single largest revision**,
  because the original figure counted only the silica that ends up in the lamp.

### Krypton fill — `krypton`
**Supply basis:** ~120,000 m³/yr (1.2 × 10¹¹ mL) recovered Kr.

- **Fill efficiency, 0.65** ❓ — evacuate/backfill and purge cycles, plus fill-line dead volume,
  consume gas beyond the sealed-in charge. Sophisticated fill stations reclaim some Kr; assumed
  modest reclaim.
- **Post-fill reject, 0.95** ⚠️ — lamps failing leak/output test after filling waste their charge.
- **Cumulative 0.62** → 5 mL ÷ 0.62 ≈ **8 mL**. Range 6.7–11 mL.

### Chlorine donor — `chlorine`
**Supply basis:** high-purity Cl₂ (~10 kt/yr).

- **Reactive-gas fill efficiency, 0.45** ❓ — trace Cl₂ dosing involves large gas-cabinet/line
  purges relative to the milligram-scale charge; reactive-gas handling wastes proportionally more
  than inert Kr.
- **Post-fill reject, 0.92** ⚠️.
- **Cumulative 0.41** → 0.44 mg ÷ 0.41 ≈ **1.06 mg**. Range 0.73–1.5 mg.

### Fused silica window / filter substrate — `fused_silica_window`
**Supply basis:** finished UV-grade optical windows (~400 t/yr). Polishing/shaping loss is upstream
of this node (it belongs to the SiCl₄ → window line), so only the coating-stage loss applies here.

- **Coating & assembly yield, 0.85** ⚠️ — a substrate scrapped during the multilayer coating run
  or filter assembly is lost.
- **Cumulative 0.85** → 8.6 g ÷ 0.85 ≈ **10 g**. Numerically close to the previous 10 g, but the
  basis is corrected: the old note attributed the extra mass to polishing loss, which actually
  sits upstream and is now carried on the SiCl₄ → window line instead (avoiding double counting).

### Ultra-high-purity SiCl₄ → window — `sicl4_window`
**Supply basis:** SiCl₄ feedstock. Full chain through a *polished* substrate.

- **Conversion ×2.83** ✅ — as above.
- **Capture 0.80** ❓, **Sinter 0.92** ⚠️ — shared glass-making chain.
- **Blank slicing + polishing, 0.55** ⚠️ — D1 investigation: precision optical polishing removes
  30–60% of blank mass; raw consumption is 1.5–2.5× the finished part (midpoint ≈ 1.8× → ~0.55
  yield).
- **Coating & assembly, 0.85** ⚠️.
- **Cumulative 0.34** → 8.6 g × 2.83 ÷ 0.34 ≈ **71 g**. Range 0.25–0.45 → 54–97 g. Large revision
  (windows are wasteful to polish), previously counted at stoichiometry only.

### HfO₂ coating — `hfo2`
**Supply basis:** optical-grade HfO₂ feedstock (~6 t/yr).

- The 20 mg/filter figure **already includes ~30% sputter-target utilisation** (HfO2.md
  first-principles: ~6 mg in-film, ~20 mg raw at 30% util).
- **Filter reject, 0.85** ⚠️ — added: a filter scrapped during coating wastes its deposited HfO₂.
- → 20 mg ÷ 0.85 ≈ **23.5 mg (0.024 g)**.
- ❓ **Open discrepancy:** component note 02 models ~0.26 g HfO₂/lamp (different layer count /
  aperture). The model retains the 20 mg first-principles basis; the order-of-magnitude difference
  is a *filter-design* question, not a wastage one, and is flagged for resolution rather than
  resolved here.

### SiO₂ coating — `sio2`
**Supply basis:** optical-coating SiO₂ feedstock (~500 t/yr).

- 360 µg/filter **already includes ~30% source utilisation** (D2: 109 µg in-film → 360 µg
  feedstock).
- **Filter reject, 0.85** ⚠️ → 360 µg ÷ 0.85 ≈ **424 µg (0.42 mg)**.

### Nickel electrodes — `nickel`
**Supply basis:** refined Ni (~3.5 Mt/yr).

- **Forming yield, 0.70** ⚠️ — stamping/etching mesh or foil electrodes leaves skeleton/offcut
  scrap of roughly 30%. Much of this scrap is recyclable, so *net new* nickel demand is lower than
  the gross draw — but gross draw is the right figure for "material consumed per lamp."
- **Assembly, 0.95** ⚠️.
- **Cumulative 0.67** → 10 g ÷ 0.67 ≈ **15 g**. Range 12.5–18 g.

### HV pulsed capacitors — `capacitors`
**Supply basis:** market *value* (~$1.5 Bn/yr), not mass, so material wastage is only loosely
meaningful.

- **PCBA scrap, 0.96** ⚠️ — driver-board assembly/test reject of a few percent.
- → $3 ÷ 0.96 ≈ **$3.1**. Effectively unchanged; recorded for consistency.

### Aluminium housing & heatsink — `aluminium`
**Supply basis:** total Al (~115 Mt/yr).

- **Process yield, 0.70** ⚠️ — die-cast runners/gates/overflow or machined chips from
  extrusion/billet; gross-to-part draw ~1.4×. Aluminium scrap is highly recyclable (secondary Al
  is ~36% of supply per F1), so *net primary* demand is much lower than the gross draw.
- **Assembly, 0.97** ⚠️.
- **Cumulative 0.68** → 300 g ÷ 0.68 ≈ **440 g**. Range 353–545 g.

---

## What changed vs. the original model

- **Already correct, kept:** SiCl₄ stoichiometry (×2.83); coating utilisation (~30%) folded into
  HfO₂ and SiO₂; the window's in-lamp mass.
- **Newly applied wastage:** fabrication/fill/forming/machining yields on the envelope tube,
  nickel, aluminium, krypton and chlorine (previously functional in-lamp amounts only).
- **Newly applied full-chain yield:** both SiCl₄ lines now carry the entire glass-making chain
  (capture → sinter → draw/polish → fabrication), not just stoichiometry. These two lines move the
  most.
- **Basis correction:** window polishing loss reassigned from the finished-window line (where it
  would have double-counted) to the SiCl₄ → window line.

## Highest-leverage figures to firm up

All ❓ yields, in rough order of impact on the model:

1. Flame-hydrolysis **soot capture efficiency** and SiCl₄ recycle rate (drives both SiCl₄ lines).
2. **Ingot → tube draw yield** and **polishing yield** for windows.
3. **Lamp fabrication yield** (envelope tube → good lamp).
4. **Electrode forming scrap** and recyclability split.
5. **Gas fill efficiency** for Kr and reactive Cl₂.
