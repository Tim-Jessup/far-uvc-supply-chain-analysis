## Silicon Dioxide (SiO₂) Optical Coating Material

**Parent BoM item:** D2 — Dielectric coating materials (low-index layer of the 222 nm KrCl excimer lamp bandpass filter)
**Date:** 2026-05-30
**Investigator:** Automated scheduled task (supply-chain-analysis skill)

**Description.** SiO₂ is the standard low-index dielectric for optical thin-film stacks across the UV–NIR range (transparency ~200 nm to 9 µm, n ≈ 1.45–1.46 at 550 nm). In the context of this checklist it is the low-index partner to HfO₂ in the alternating multilayer bandpass filter that limits far-UVC lamp output to 222 ± ~10 nm. The coating form factors are fused silica evaporation granules (1–5 mm) for electron-beam deposition, and fused silica sputter targets for IBS/magnetron processes. Source material is either natural quartz (fused into amorphous glass) or CVD-derived SiO₂ from SiCl₄ hydrolysis; for DUV use, radiation hardness and low metallic impurities are important, favouring higher-purity starting material. SiO₂ uniquely retains its stoichiometry through the evaporation/sputtering process, making it technically easier to work with than sub-oxide starting materials.

---

### Confidence and completeness

⚠️ Low–moderate overall. No primary source publishes a tonnage figure for "optical-grade SiO₂ coating material" (granules + targets) as a distinct market category. The bulk SiO₂ market is very well documented (multiple sources converge on the total), but the optical-coating slice is estimated by subtraction and application-share data from high-purity SiO₂ reports. The per-filter mass estimates are first-principles derivations and carry significant uncertainty on layer count; treat them as order-of-magnitude only.

---

### Key sources used

- Materion, "Manufacturing Critical Optical Coating Materials" — [materion.com](https://www.materion.com/en/about-materion/news/coating-materials-news/manufacturing-critical-optical-coating-materials) — Jan 2024 — Primary manufacturer technical article; explains SiO₂ source material pathways (natural quartz vs CVD/Siemens), deposition behaviour, and DUV-specific considerations. Good reliability.
- Materion, "Optical Coating Materials for Thin Film Deposition" — materion.com/en/products/electronic-materials/advanced-chemicals/optical-coating-materials — 2024 — Primary; confirms EVAPro® ultra-high-purity (99.999%) SiO₂ evaporation materials for UV–IR.
- PhotonExport, "Silicon Oxides for optical coatings" — [photonexport.com](https://photonexport.com/optical-coating-materials/silicon-oxides/) — Jan 2025 — Distributor product page; specifications table (purity 99.9–99.99%, granule sizes, e-beam technique). Good reliability for product specs.
- IndexBox, "World's Silicon Dioxide Market Overview 2024" — [indexbox.io](https://www.indexbox.io/blog/silicon-dioxide-world-market-overview-2024-5/) — 2024 — Aggregator; global SiO₂ consumption ~5.7 M t, value $9.1B (2024). China 31% of production, 50% of exports. ⚠️ Single aggregator.
- Business Research Insights, "High Purity Silicon Dioxide Market" — businessresearchinsights.com — 2024 — Secondary; high-purity SiO₂ market ~$880M (2024), semiconductors ~35% of demand, CAGR ~6%. ⚠️ Aggregator with limited primary sourcing.
- Straits Research, "Optical Coatings Market" — [straitsresearch.com](https://straitsresearch.com/report/optical-coatings-market) — 2024 — Secondary; global optical coatings market ~$23.5B (2024), silicon dioxide stated as "largest share" of coating materials segment. ⚠️ Aggregator.
- DataDriven Solutions, "Sputtering Target and Evaporation Material Market" — 2024 — Secondary; overall sputtering target + evaporation materials market $3.5B (2022) → $5.4B (2030) at 6% CAGR. ⚠️ Single source.
- Heeger Materials, Stanford Advanced Materials, AEM Deposition, Lesker, Plasmaterials — product pages (various dates 2024–2025) — Primary for product availability and supplier landscape; no production volume data.

---

### Sources flagged but not accessed

- QY Research / Valuates "Optical Coating Materials Market" — would provide structured tonnage by material type (SiO₂ vs TiO₂ vs HfO₂ etc.) — paywalled (~$3–5k)
- Mordor Intelligence "Silica Market" — structured breakdown of specialty vs commodity silica — paywalled
- Jiangsu Pacific Quartz (SSE 603688) annual reports — Chinese SSE filings; the only listed pure-play producer whose segment revenues would anchor optical-grade volumes — Chinese-language, not retrieved

---

### Global annual production

**Framing note.** SiO₂ spans a vast range from bulk industrial filler (~$50/t) to optical-grade evaporation granules (>$100/kg). Relevant to this investigation is the "optical coating material" sub-segment: fused-quartz-derived granules and sputter targets ≥99.9% purity.

- **Total SiO₂ market best guess (2024):** ~5.7 M tonnes/yr (industrial + specialty, all grades) ⚠️
- **Range (low / high):** 5 M / 20 M t — wide spread reflects inclusion/exclusion of industrial filler, fumed silica, quartz sand. ⚠️
- **High-purity SiO₂ sub-market:** ~$880M in 2024; at ~$500–1000/kg blended average ≈ 880–1760 t/yr value-bearing high-purity material ❓
- **Optical coating SiO₂ specifically (targets + evaporation granules):** No direct figure found. Derivation: optical coatings market ~$23.5B; SiO₂ "largest share" of coating materials — but this is the applied coating market value, not the feedstock mass. Feedstock mass is tiny by weight vs the semiconductor or solar silica sub-markets. Rough estimate: hundreds to low thousands of tonnes/yr at optical grade. ❓
- **Reference year:** 2024
- **Method(s):** Total market from IndexBox aggregator; high-purity sub-segment from Business Research Insights; optical-coating sub-segment estimated by elimination. Estimates do not converge to a single number because no source distinguishes "optical coating SiO₂" from the broader high-purity bucket.
- **Key assumptions:**
  - "High purity" SiO₂ defined as ≥99.9% metals-grade
  - Optical coating SiO₂ is a small fraction (<5%) of the high-purity SiO₂ market by mass
  - Unit price ~$100–$500/kg for evaporation-grade granules vs $500–$5000/kg for targets (depending on size, bond, purity)

---

### Application breakdown

| Application | Share of high-purity SiO₂ | Confidence | Notes |
|---|---|---|---|
| Semiconductor (gate oxide, isolation, ILD, MEMS) | ~35% | ⚠️ | Largest single segment; dominated by PECVD/CVD SiO₂ deposited in-situ, not granule feedstock |
| Electronics / display panels | ~20% | ⚠️ | Anti-reflective coatings, encapsulants, ITO underlayers |
| Solar PV (anti-reflection coatings) | ~15–20% | ⚠️ | SiN and SiO₂ ARC on cells; large volume, low purity requirement vs UV optics |
| Optical fibers | ~10% | ⚠️ | Preform soot via VAD/OVD; high-purity synthetic route overlaps with coating SiO₂ |
| Optical coatings (precision optics incl. UV bandpass filters) | ~2–5% | ❓ | Sub-fraction of optical coating market; very low mass per unit |
| — of which 222 nm bandpass filters (far-UVC lamps) | <0.01% | ❓ | See per-lamp estimate below |
| Other (pharmaceuticals, cosmetics, rubber fillers) | remainder | ✅ | Well-documented but different grade |

**First-principles per-lamp estimate.** Assume a 222 nm bandpass filter with a 25-layer HfO₂/SiO₂ alternating stack (13 SiO₂ layers), filter aperture ~10 cm², quarter-wave optical thickness per SiO₂ layer at 222 nm: physical thickness = (222 nm / 4) / 1.46 ≈ 38 nm. Total SiO₂ thickness: 13 × 38 nm ≈ 494 nm. SiO₂ density 2.2 g/cm³. Mass deposited = 494e-7 cm × 10 cm² × 2.2 g/cm³ ≈ **109 µg per filter**. At 30% target/source utilisation, feedstock consumed ≈ 360 µg per filter per lamp. ❓

| Scale | SiO₂ feedstock/yr |
|---|---|
| 1 M lamps | ~0.36 kg |
| 100 M lamps | ~36 kg |
| 1 B lamps | ~360 kg |
| 10 B lamps | ~3.6 t |

SiO₂ mass per filter is approximately 4× the HfO₂ mass per filter (more layers, lower density). Even at 10 billion lamps/yr, consumption (~3.6 t) is far below even conservative estimates of optical-grade SiO₂ supply.

---

### Producers and geographic concentration

The supply chain for optical-grade SiO₂ coating material has two tiers. **Upstream** (raw fused silica production): dominated by a small number of large players — Heraeus Covantics (Germany/global), Tosoh (Japan), Shin-Etsu (Japan), Corning (US), AGC (Japan), Jiangsu Pacific Quartz (China, SSE listed), Feilihua Quartz (China). These firms are the same suppliers that produce lamp envelope tubing (Stage A) and filter substrates (Stage D1); optical coating granules are a by-product or secondary cut of the same production process. **Downstream** (target fabrication and distribution): Materion (US), Plansee (Austria), Lesker (US), AEM Deposition (China), Heeger Materials (China), Stanford Advanced Materials (US/China), PhotonExport (Spain), and dozens of smaller Chinese distributors. Target fabrication is simpler for SiO₂ than for refractory metals — hot-press or cold-press sintering of natural quartz or CVD powder. No credible concentration data exist for optical-grade SiO₂ coating material specifically; the upstream fused silica market (covered in the uv_grade_fused_silica investigation) is dominated by Japan, Germany, and China. Geographic risk is lower than for HfO₂ because SiO₂ production is not byproduct-constrained.

---

### Potential bottlenecks

- **None identified at any plausible far-UVC lamp production scale.** SiO₂ is the most abundant compound in the Earth's crust; the optical-coating sub-grade is produced by dozens of facilities globally; per-lamp consumption is sub-milligram.
- **DUV-specific purity requirements** (low metallic contamination, appropriate OH content, radiation hardness) narrow the supplier pool vs commodity silica but do not create a bottleneck — multiple qualified sources exist in the US, EU, and Japan.
- **Source material quality control** (particle ejection during e-beam evaporation, "spitting") is a process-engineering concern rather than a supply concern; Materion (2024) identifies this as a deposition challenge, not a feedstock availability problem.
- **If reactive sputtering (from silicon targets) replaces SiO₂ granules**, the upstream becomes silicon metal, not SiO₂. Silicon target supply is dominated by semiconductor-grade silicon production and is not constrained at optical-coating volumes.
- **The actual limit in 222 nm filter production** is IBS/IAD coating chamber time, deep-UV process expertise, and yield, as previously identified in the HfO₂ investigation — consistent with this analysis.

---

### Alternative materials

SiO₂ has no realistic substitute as the low-index layer in UV multilayer stacks. MgF₂ (n ≈ 1.38) is used in some UV designs and gives a larger index contrast with HfO₂, but is hygroscopic and mechanically fragile. Al₂O₃ (n ≈ 1.63–1.67 at 222 nm) has a higher index and lower contrast, requiring more layers. For the 222 nm bandpass filter, SiO₂ is effectively the only proven low-index material.

---

### Open questions / follow-ups

1. **Validate layer count for 222 nm bandpass filters.** The per-lamp mass estimate above assumes a 25-layer stack. Actual commercial 222 nm filters (e.g. Ushio Care222 units) may use 30–50+ layers for sharper cut-on at 230 nm. This changes the SiO₂ mass per filter by the same factor (still sub-milligram, but worth validating).
2. **IBS vs e-beam vs IAD process choice.** Materion (2024) notes e-beam evaporation is preferred for SiO₂; IBS uses SiO₂ or Si targets with reactive O₂. Which method Ushio, Seoul Viosys, and other 222 nm lamp manufacturers use determines whether evaporation granules or sputter targets are the relevant feedstock form.
3. **Overlap with Stage A and D1 suppliers.** The same fused-silica producers (Heraeus, Tosoh, etc.) supply the lamp envelope, filter substrate, and coating granules. Demand aggregation across these three BoM items at scale should be modelled jointly, even if per-item volumes are small for the coating material.
4. **Radiation hardness testing for DUV coatings.** Materion (2024) notes that radiation stability of SiO₂ films depends on upstream Si/SiO₂ process contaminants (residual H, O from CVD routes). Whether commercially sourced optical-grade granules consistently meet radiation-stability requirements for long-life far-UVC lamp service is worth confirming.
