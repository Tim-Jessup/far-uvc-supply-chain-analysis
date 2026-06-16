# F1 — Aluminium Alloy Stock (Housing & Heatsink)

**Description.** Aluminium alloy (principally 6xxx and die-cast ADC12/A380 series) is the dominant structural and thermal management material in lamp module housings, heatsinks, and mounting hardware. It is produced in two routes: primary smelting (electrolytic reduction of alumina from bauxite via the Hall-Héroult process) and secondary smelting (scrap remelting). Primary aluminium is one of the highest-volume commodity metals globally; secondary aluminium now accounts for roughly 36% of total supply and is growing. The material has no supply-criticality designation in any major government CRM list.

---

## Confidence and completeness

✅ High for global production volumes — USGS MCS 2026 (Feb 2026) provides authoritative primary smelter data with country-level breakdowns; secondary production figures are well-corroborated by industry trackers. ⚠️ Moderate for the end-use application breakdown: the sector shares below are drawn from US domestic consumption data (USGS) and cross-checked against global industry reports; the global split is broadly consistent but not precisely reported by any single authoritative source. ❓ Low for the far-UVC-specific share: no published data exists; this is derived from first-principles mass estimates and comparison to the LED lighting analogue.

---

## Key sources used

- USGS Mineral Commodity Summaries 2026 — [mcs2026-aluminum.pdf](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-aluminum.pdf) — Feb 2026 — Primary source; full country-by-country smelter production and US end-use sector breakdown
- alcircle.com, "Global Aluminium Scrap Tracker 2025" — [link](https://www.alcircle.com/news/global-aluminium-scrap-tracker-2025-a-41-7mt-backbone-under-pressure-as-demand-rises-3-87-117391) — 2025 — Secondary; 41.7 Mt global recycled figure; cross-checked against Mordor Intelligence and Mysteel
- International Aluminium Institute, "Opportunities For Aluminium In A Post-Covid Economy" — [link](https://international-aluminium.org/resources/opportunities-for-aluminium-in-a-post-covid-economy/) — secondary; global demand-sector attribution (transport, construction, packaging, electrical as ~75% of demand)
- nextmsc.com / AdTech, "Top Companies Shaping Aluminum Production" — [link](https://www.nextmsc.com/blogs/top-companies-shaping-the-future-of-aluminum-production-and-supply) — 2025 — Secondary; producer roster

---

## Sources flagged but not accessed

- International Aluminium Institute primary demand statistics database — granular application split by sector for each region; would sharpen the "electrical → lighting" sub-share estimate. Accessible at members.world-aluminium.org but requires registration.
- CRU Group / Wood Mackenzie aluminum market reports — most granular application breakdowns (including lighting sub-segment); paywalled.
- IEA "Aluminium" sector data — would provide energy-adjusted production figures useful for green-aluminium share; not fetched.

---

## Global annual production

- **Best guess (2024):** ~115 million metric tons total aluminium supply (primary + secondary) ✅
  - Primary smelter: **72.8 Mt** (USGS MCS 2026)
  - Secondary (recycled): **~41.7 Mt** (alcircle.com tracker) — ~36% of total
- **Range (low / high):** 110 Mt / 120 Mt total
- **Reference year:** 2024
- **Methods used:**
  1. *Direct USGS figure:* World total smelter production 72,800 thousand metric tons (2024). ✅
  2. *Secondary via scrap tracker:* 41.7 Mt global recycled output (2024). Consistent with ~95 Mt primary implied demand (primary 72.8 + recycled 41.7 = 114.5 Mt gross supply; some double-counting in traded scrap removed).
  3. *Cross-check via demand:* Global aluminium demand reported at ~100.8 Mt (consumption basis, 2024) with ~55.2 Mt "low-carbon" supply (primary hydro + secondary). Consistent with 72.8 Mt primary + 41.7 Mt secondary once export/import netting is applied.
- **Key assumptions:**
  - Primary figure = smelter production (unwrought ingot); excludes downstream fabrication losses.
  - Secondary figure = all recovered aluminium from purchased scrap; includes both old and new scrap routes.
  - The two figures are additive for gross supply but not additive for apparent consumption (new/manufacturing scrap loops back within the same production year).

---

## Application breakdown

Global sector shares are reported with higher confidence for the US (USGS MCS 2026, 2025 reference year). Global figures from IAI and market reports are broadly consistent.

| Application | Share of aluminium demand | Confidence | Notes |
|---|---|---|---|
| Transportation (automotive, aerospace, rail, marine) | ~36% (US); ~30–35% globally | ✅ | Largest single sector; growing with EV adoption |
| Packaging (beverage cans, foil, containers) | ~24% (US); ~20–25% globally | ✅ | Largely secondary alloy; major recycling stream |
| Building & construction (windows, curtain wall, roofing) | ~13% (US); ~20–25% globally | ⚠️ | Higher globally due to China construction intensity |
| Electrical & electronics (wiring, busbars, transformers, motors) | ~9% (US); ~8–12% globally | ⚠️ | Includes lighting fixture housings as a sub-segment |
| Consumer durables (appliances, furniture, etc.) | ~8% (US) | ⚠️ | |
| Machinery & equipment | ~8% (US) | ⚠️ | |
| Other | ~2% | ❓ | |
| — of which: lighting fixture housings & heatsinks | ~0.5–1.5% of total aluminium demand | ❓ | Derived (see below); sub-segment of electrical + consumer durables |
| — of which: **far-UVC lamp module housing & heatsinks (F1)** | < 0.001% at any near-term deployment scale | ❓ | First-principles estimate (see below) |

### Derivation — lighting sub-segment share

LED lighting is the principal end use driving aluminium demand for lamp housings and heatsinks. Global LED lighting market: ~5–10 billion units sold annually (2024). Average aluminium content per fixture varies widely: small retrofit bulbs ~10–30 g; commercial downlights ~100–300 g; industrial high-bays ~500–2,000 g. Using ~200 g/unit average across the mix:

> 7.5 billion units × 200 g = 1.5 million tonnes/yr ❓

As a cross-check: 1.5 Mt is ~1.3% of total 115 Mt supply, which sits plausibly within the "electrical + consumer durables" combined ~16–17% share. Treating it as 0.5–1.5% of total demand provides a reasonable bracket. ⚠️

### Derivation — far-UVC lamp module share

A far-UV lamp module (Care222-class KrCl excimer) housing + heatsink + hardware might reasonably contain 150–600 g of aluminium alloy (comparable to a small commercial LED downlight or a handheld UV device with heatsink). Using 300 g as a central estimate:

| Deployment scale | Al per lamp (g) | Total Al (tonnes) | Share of global primary (72.8 Mt) |
|---|---|---|---|
| 1 million lamps/yr | 300 | 300 | 0.0004% |
| 10 million lamps/yr | 300 | 3,000 | 0.004% |
| 100 million lamps/yr | 300 | 30,000 | 0.04% |
| 1 billion lamps/yr | 300 | 300,000 | 0.41% |

At no plausible near-term deployment scale does far-UVC represent a material fraction of aluminium supply.

---

## Producers and geographic concentration

China dominates primary production at ~44 Mt in 2024, approximately **60% of global output**. ✅ The next-largest producers are India (~4.2 Mt, ~5.8%), Russia (~3.9 Mt, ~5.3%), Canada (~3.3 Mt, ~4.6%), and the UAE (~2.7 Mt, ~3.7%). The top five producers account for ~80% of global primary supply. Key Chinese producers include China Hongqiao Group and Chalco (Aluminum Corporation of China Limited), which together account for a large fraction of domestic Chinese capacity. Outside China, Rio Tinto Aluminium (Canada, Australia, Iceland, New Zealand), Rusal (Russia), and Alcoa (US, Australia) are major operators. Secondary aluminium is far more geographically dispersed — China accounts for ~38–40% of global recycled output (~15+ Mt/yr), with the US, Europe, and Japan making up most of the remainder.

---

## Potential bottlenecks

- **China concentration.** ~60% of primary smelter production is in China. Trade policy changes, export restrictions, or geopolitical disruption could tighten supply for non-Chinese buyers, though secondary aluminium would partly buffer this. US 2025–2026 tariffs (25–50%) are already restructuring trade flows.
- **Energy cost and availability.** Hall-Héroult smelting consumes ~13–15 MWh/tonne. Aluminium production in energy-expensive or grid-constrained regions is vulnerable to power price shocks; multiple EU and US smelters have curtailed or closed since 2021 for this reason.
- **Alloy-grade specificity.** Lamp housings typically use die-cast alloys (ADC12, A380) or extruded 6061/6063. These are commodity grades with abundant fabricator supply; no specialty-grade constraint applies.
- **Lead times for machined/extruded components.** Not a raw-material constraint; standard fabrication lead times of 2–8 weeks from stock.
- **Bauxite reserve adequacy.** USGS estimates 55–75 billion tonnes global bauxite resources — sufficient for well over a century at current rates. No long-term scarcity concern.

---

## Alternative materials

For lamp housings and heatsinks, practical alternatives include **zinc die-cast** (higher density, lower thermal conductivity), **magnesium alloys** (lighter, more expensive, less corrosion-resistant), **engineering plastics with thermal inserts** (lower cost, acceptable for low-power units, inadequate for high-wattage configurations), and **copper** (superior thermal conductivity but 3× denser and significantly more expensive). Aluminium's combination of thermal conductivity (~150–200 W/m·K for common casting alloys), weight, formability, and cost gives it a dominant position for lamp housings. Substitution is technically possible but does not reduce any supply-chain pressure at far-UV scales.

---

## Open questions / follow-ups

1. **Actual housing + heatsink mass for a specific lamp design.** The 150–600 g range above spans an order of magnitude. CAD weight or BOM line-item from a reference design (e.g., Ushio Care222, Acuity Brands) would sharpen the per-unit intensity figure.
2. **Die-cast vs. extruded alloy split.** Affects which fabricator tier matters. Die-cast (ADC12) supports higher geometry complexity; extruded 6061/6063 is used for fin heatsinks. Both are commodity grades with no supply distinction at far-UV scale.
3. **Impact of US tariffs on lamp module component supply chains.** If module assembly is in the US but aluminium castings are sourced from China, the 50% tariff adds cost pressure worth quantifying.
4. **Secondary aluminium quality for lamp housings.** High-recycled-content alloys can introduce tramp element contamination affecting surface finish and anodising quality. Worth checking with fabricators whether this is a practical constraint.

---

*Research date: 2026-05-30. Primary data reference: USGS MCS 2026 (Feb 2026). Methodology per supply-chain-analysis skill v1.*
