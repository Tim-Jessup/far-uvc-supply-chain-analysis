# Optical-grade hafnium oxide (HfO2)

**Description.** HfO2 is a refractory white ceramic with high refractive index (~2.35 at 222 nm), low absorption from ~220 nm into the mid-IR, and a melting point of 2758 °C. It is sold as powder, sintered/HIP ceramic sputter targets, evaporation pellets/granules, and (separately) as ALD precursor chemicals. All hafnium originates as a byproduct of nuclear-grade zirconium refining; zircon (ZrSiO4) contains Hf:Zr at ~1:36–1:50 by mass, so Hf supply is structurally tied to nuclear Zr production. Optical-grade is typically 99.9–99.99% (3N–4N) with low ZrO2 contamination; semiconductor grade is 99.999% (5N). Optical and semi grades share upstream feedstock and powder produced for one can in principle be diverted to the other (semi 5N → optical 3N is trivial; the reverse needs additional purification).

## Confidence and completeness

⚠️ Moderate. Hf metal supply figures converge well across sources (USGS, IMARC, Mordor, Quest within ~±15%), but USGS explicitly declines to publish global Hf production. The HfO2-specific split, and especially the optical-grade slice, rests on a single paywalled market source (Mordor public extract) plus cross-checks. Numbers below are good for order-of-magnitude bottleneck analysis, not for precise scenario modelling.

## Key sources used

- USGS Mineral Commodity Summaries (Zirconium and Hafnium), 2022 / 2024 / 2025 — primary; global Hf production not reported but trade flows and producer roster are.
- SCRREEN EU CRM Factsheets, Hafnium, 2020 and Jan 2024 — secondary EU-funded review; quotes ~71 t (2016) global refined Hf.
- IMARC Group, Hafnium Market 2024 — secondary; 87.9 t total Hf (2024).
- Mordor Intelligence, Hafnium Market 2026 public extract — 95.7 t (2025) → 132 t (2031); superalloy 57.4% of Hf consumption; HfO2 the fastest-growing type (6.1% CAGR).
- Quest Metals industry blog (Jul 2025) — 70–75 t/yr current capacity; France 30 → 45 t; US potential +50 t; China stated target 140 t (industry-sceptical).
- Intel Market Research / PW Consulting on HfO2-for-semiconductors — $280M consumption in 2023; "fewer than 10" facilities producing 5N HfO2 globally.
- Dataintelo, Global Hafnium Oxide Market — HfO2 market $85M (2023) → $160M (2032).
- Supplier catalogues (Stanford Advanced Materials, Heeger, AEM, Princeton Powder, Lesker, Innovacera) — fabricator ecosystem and powder → target conversion route.

## Sources flagged but not accessed

Per project direction, not pursued. The biggest gap is Mordor's full segment-share table (would resolve optical vs semi share of HfO2) and TECHCET semiconductor materials data.

## Global annual production

- **Best guess (2024):** ~90 t Hf metal-equivalent globally, of which ~25–40 t/yr flows through oxide form, of which ~3–10 t/yr is optical-grade ⚠️
- **Range (low / high):** 75 t / 120 t Hf metal-equivalent total
- **Reference year:** 2023–2025 (mixed; most ~2024)
- **Methods used:**
  1. *Direct totals from market trackers:* IMARC 87.9 t (2024), Mordor 95.7 t (2025), SCRREEN 71 t (2016), Quest 70–75 t (2025 capacity). Converge on ~85–95 t Hf in 2024.
  2. *Reverse-derivation from market value:* HfO2 market $85M (2023) ÷ ~$500/kg blended price ≈ 170 t. Exceeds total Hf supply, indicating the market value figure captures value-added forms (sputter targets at ~$5000+/kg, ALD precursors, evaporation pellets), not raw powder mass. Not used for primary estimate but rules out the figure being raw powder.
  3. *Application sum:* Superalloy (~57% of Hf, ~50 t, almost all metal form) + nuclear/plasma cutting (Hf metal) + HfO2 applications (~25–30%, ~25 t HfO2-equivalent) ≈ ~90 t total Hf. Consistent with method 1.
- **Key assumptions:**
  - Hf production figures are reported as Hf content; convert to HfO2 by ×1.18.
  - "Optical-grade HfO2" includes powder destined for sputter targets, evaporation pellets/cones, and ion-plating feedstock. Excludes ALD precursor chemistry (different supply chain).
  - HfO2 share of total Hf is estimated at 25–30% (Mordor public extract describes HfO2 as the fastest-growing type alongside HfC and "other"); optical coating share of total Hf at 3–8% based on Mordor's listed application segments.

## Application breakdown (of HfO2 specifically, not all hafnium)

| Application | Share of HfO2 demand | Confidence | Notes |
|---|---|---|---|
| Semiconductor high-k dielectrics (gate oxide, DRAM, 3D NAND, ReRAM, FeFET) | ~60–75% | ⚠️ | Dominant and fastest-growing; mostly ALD precursors with some sputter targets. |
| EUV multilayer mirror coatings (ASML supply chain) | ~5–10% | ❓ | Mentioned in market reports but not quantified separately. |
| Optical coatings (UV laser, AR, dichroic, bandpass incl. 222 nm) | ~10–15% | ⚠️ | Sputter targets and evaporation pellets. The slice relevant to far-UVC. |
| Refractory ceramics, radiosensitiser medical, catalysts, other | ~5–10% | ❓ | Mostly bulk technical grade. |
| **— of which HfO2 ceramic sputter targets (all end uses)** | ~25–35% of HfO2 | ❓ | Form factor split; remainder is precursor, evaporation, powder. |

## Producers and geographic concentration

Hafnium refining (the upstream binding step) is concentrated in four countries.

- **France:** Framatome / Cézus, Jarrie plant. ~30 t/yr, expanding to 45 t.
- **United States:** ATI Inc (Albany, OR) and Westinghouse / Western Zirconium (UT). Combined potential to add ~50 t with existing permits.
- **China:** Multiple producers including China Nuclear Jinghuan Zirconium; stated target ~140 t but no confirmed timeline, treated sceptically.
- **Russia:** Smaller and opaque.

France + US historically accounted for >85% of global supply. The 2025 USGS MCS lists China, Germany and the Netherlands as leading exporters of unwrought Hf; Germany and Netherlands likely reflect re-export. Downstream HfO2 powder purification and target/pellet fabrication is much more dispersed (dozens of specialist firms in the US, EU, Japan, China) and is not the bottleneck.

## Potential bottlenecks

- **Byproduct constraint.** Hf cannot be scaled independently of nuclear-grade Zr demand. Even with strong Hf pull, ramping zircon → Hf separation (solvent extraction or ion exchange columns) takes years.
- **Producer concentration.** Four companies in four countries supply >90% of refined Hf. Framatome's Jarrie plant is the biggest single-point-of-failure.
- **Already supply-constrained.** Hf prices swung from ~$1200/kg to $6950/kg in 2023 then settled at $3700–3900/kg, indicating tight headroom. Demand-supply gap in 2023 estimated at 44–49 t.
- **5N facility count.** Public secondary claim of "fewer than 10" 5N HfO2 facilities globally; if accurate, this matters for semi-grade. Optical-grade 3N–4N is much more broadly produced and not similarly constrained.
- **Geopolitical exposure.** Significant Chinese flow into Western HfO2 supply (21% of US unwrought Hf imports 2020–23 from China; Chinese-supplied HfO2 powder underlies many Western target fabricators).
- **Not bottlenecks at far-UVC scale.** HfO2 powder → sputter target conversion (hot pressing or HIP) is standard ceramic powder metallurgy with 2–5 week typical lead times and dozens of capable fabricators.

## Alternative materials

For 222 nm high-index dielectric layers, candidates are limited. **Sc2O3** (n ≈ 2.0 at 220 nm, lower laser damage threshold, Sc itself supply-constrained); **LaF3** and **Al2O3 + LaF3 fluoride stacks** (lower index, need more layers); **MgF2/LaF3** for deep UV. HfO2 is preferred for index, transparency to ~220 nm, and process maturity. Substitution is technically feasible but needs stack redesign and requalification, and typically gives more layers per filter, reducing transmission.

## Open questions / follow-ups

1. **HfO2 mass per 222 nm filter (first-principles).** Assume 25-layer HfO2/SiO2 stack at QWOT for 222 nm (n = 2.35 → 23.6 nm physical per layer), 10 cm² filter aperture, 30% sputter target utilisation. Raw HfO2: ~20 mg per filter. At 1M lamps/yr ≈ 20 kg HfO2; 100M lamps/yr ≈ 2 t; 1B lamps/yr ≈ 20 t. Worth validating layer count with Holger or OSLUV.
2. **IBS vs IAD share of 222 nm filter coating.** Determines whether the relevant form factor is sputter targets (Ushio likely IBS) or evaporation pellets (some open-source designs). HfO2 supply is fine either way but the question affects which fabricator pool matters.
3. **Validate "fewer than 10 facilities for 5N HfO2" claim.** Single secondary source. Largely irrelevant if filter coatings use 4N (which they typically do), but worth a sanity check.
4. **China's claimed 140 t Hf target.** If real, the upstream byproduct constraint relaxes substantially over 5–10 years and HfO2 supply ceases to be even a long-tail concern.

## Implication for lamp production

At any plausible far-UVC deployment scale below ~100 million lamps/yr, HfO2 is **not a binding constraint**: raw material consumption stays under ~5% of current optical-grade HfO2 supply. Even at the >500M lamps/yr scale, the constraint that bites is the **filter coating step itself** (IBS/IAD machine time, deep-UV thin-film expertise, yield), not the HfO2 powder feeding those machines. HfO2 supply is consistent with your prior framing of coating capacity, not material input, as the limit. The one scenario where HfO2 supply would matter is multi-billion lamps/yr concurrent with continued semiconductor demand growth, at which point the upstream zirconium byproduct constraint would be the underlying issue rather than anything specific to optical grade.
