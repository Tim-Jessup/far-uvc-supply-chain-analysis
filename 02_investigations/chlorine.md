# Purified Chlorine (Cl₂) Gas

**Checklist item:** C2 — Purified chlorine (Cl₂) source
**Parent BoM item:** KrCl excimer lamp gas fill (Stage C)
**Analysis date:** 2026-05-29

---

**Description.** Chlorine gas (Cl₂) is the halogen component of the KrCl\* excimer that generates 222 nm far-UVC radiation. In a KrCl lamp the fill mixture is predominantly krypton with a small fraction of Cl₂ (typically 0.5–3% by volume at fill pressures of 100–200 mbar). At lamp-grade purity the gas must be free of moisture and metal contaminants that would degrade the discharge and corrode the envelope; the required grade is broadly analogous to the electronics/semiconductor-grade Cl₂ used in wafer etching. Bulk industrial chlorine is an enormous commodity produced by chlor-alkali electrolysis; the specialty high-purity Cl₂ segment is a small sub-market dominated by a handful of industrial gas companies.

---

### Confidence and completeness

Bulk chlorine production data is well-covered by multiple market research reports and industry bodies (World Chlorine Council, Euro Chlor, Chlorine Institute). These figures are internally consistent and carry reasonable confidence. The high-purity specialty gas sub-segment is much harder to quantify: most figures come from paywalled market research reports or company announcements, and the numbers in the public domain are rough. The estimate of Cl₂ consumed per lamp is derived from physical first principles (ideal gas law + published lamp parameters) and is more reliable than volume-based lamp production forecasts. Overall, the production-volume data for bulk chlorine is solid; the specialty-grade segment data is weak; the per-lamp consumption figure is a reasonable engineering estimate.

---

### Key sources used

- IndexBox, "Global Chlorine Market's Steady Growth to 19 Million Tons and $24.5 Billion by 2035" — https://www.indexbox.io/blog/chlorine-world-market-overview-2024-5/ — 2024 — Aggregator; internally consistent with other sources on the ~18 Mt headline figure.
- Chemical Engineering, "Showa Denko to acquire high-purity chlorine business from Air Products" — https://www.chemengonline.com/showa-denko-to-acquire-high-purity-chlorine-business-from-air-products/ — trade press — Useful for high-purity production capacity (1,000 mt/yr Kawasaki plant).
- The Elec, "PKC to Expand Semiconductor Chlorine Output by 50% at Samsung's Request" — https://www.thelec.net/news/articleView.html?idxno=10802 — trade press — Confirms order-of-magnitude for a single high-purity Cl₂ plant (1,400–2,200 mt/yr).
- Bidawat et al., "Analysis and characterization of Kr/Cl₂ based 222 nm far UV-C excimer source" — Asian Journal of Physics Vol 32, 2023 — peer-reviewed — Provides experimental and simulation data on Kr/Cl₂ fill conditions: total pressure 100–200 mbar, Cl₂ fraction 0.5–5%.
- World Chlorine Council / Euro Chlor capacity data (cited in multiple market reports) — ~500 producers, >650 sites, ~58 Mt capacity.
- Grand View Research, SNS Insider, Mordor Intelligence (various) — market share and end-use breakdown estimates — 2024–2025 — Secondary aggregators; figures vary between sources, used for ranges only.

### Sources flagged but not accessed

- World Chlorine Council membership reports — would give the most authoritative annual production figures by region; not publicly available.
- Euro Chlor "Chlorine Industry Review" — detailed European capacity and output; behind membership paywall.
- IHS Markit / S&P Global chlor-alkali database — most detailed producer-level capacity data; expensive subscription.
- Showa Denko / Resonac annual reports — would confirm current high-purity Cl₂ capacity after the 2023 merger.

---

### Global annual production

- **Best guess:** 18 million metric tons Cl₂ per year ⚠️
- **Range (low / high):** 16 / 20 million mt/yr
- **Reference year:** 2024
- **Method(s):** Multiple market reports converge on ~18 Mt actual production against a nameplate capacity of ~58 Mt (≈31% utilization, consistent with the co-product constraint: Cl₂ must be produced with caustic soda in a fixed ~0.89:1 mass ratio, so output is demand-limited on the caustic side as much as the chlorine side). ✅ on headline figure; ⚠️ on utilization rate inference.
- **Key assumptions:**
  - Figures refer to elemental Cl₂ produced, not including downstream derivatives.
  - China accounts for roughly 35–40% of global production; exact figure varies by source.
  - Capacity utilization of ~30% reflects the co-product constraint common to chlor-alkali operations.

---

### High-purity (electronics/lamp-grade) Cl₂ sub-segment

- **Best guess:** 5,000–15,000 metric tons/yr globally ❓
- **Range:** not well-constrained; single-plant capacities suggest the segment is small (thousands, not tens of thousands, of mt/yr)
- **Method:** Bottom-up from known plant capacities. Showa Denko Kawasaki: ~1,000 mt/yr; PKC Gunsan (expanded): ~2,100–2,200 mt/yr; multiple other plants (Air Liquide, Linde, Messer, MSSA) each presumed to be 500–2,000 mt/yr. Summing ~5–8 known/implied plants at 500–2,000 mt/yr yields an order-of-magnitude range of 5,000–15,000 mt/yr. ❓ No public aggregate figure found.
- **Key assumption:** "High-purity" here means ≥4N (99.99%) Cl₂ suitable for semiconductor etching or excimer lamp fill; this segment is distinct from merchant industrial Cl₂ (which is ~99.5% and used in PVC, water treatment, etc.).

---

### Cl₂ consumption per KrCl excimer lamp (engineering estimate)

Fill conditions from literature (Bidawat et al. 2023 and related patents):
- Fill pressure: 100–200 mbar (0.10–0.20 atm)
- Cl₂ fraction: 0.5–3% by volume (typically ~1–2%)
- Discharge volume: depends on lamp size; a small/medium module (e.g. coaxial DBD, ~50 cm³ discharge gap) is used below

Using ideal gas law at 150 mbar, 2% Cl₂, 50 cm³ discharge volume, 20 °C:

```
n_total = PV/RT = (15,000 Pa × 50×10⁻⁶ m³) / (8.314 J/mol·K × 293 K)
        = 0.75 / 2,436
        = 3.08 × 10⁻⁴ mol total gas

n_Cl₂   = 3.08 × 10⁻⁴ × 0.02 = 6.2 × 10⁻⁶ mol
m_Cl₂   = 6.2 × 10⁻⁶ × 71 g/mol ≈ 0.44 mg per lamp
```

Sensitivity: discharge volume and fill pressure are the dominant variables. A larger lamp (200 cm³) at 200 mbar and 3% Cl₂ would consume ~7 mg. A compact lamp (20 cm³) at 100 mbar and 1% Cl₂ would consume ~0.06 mg.

**Working range: ~0.1–10 mg Cl₂ per lamp.** ⚠️ (based on published discharge conditions; exact lamp volumes not confirmed from manufacturer datasheets)

---

### Application breakdown

| Application | Share of bulk Cl₂ | Confidence | Notes |
|---|---|---|---|
| EDC / PVC production | ~33–38% | ⚠️ | Largest single use globally; varies by source |
| Organic chemicals (other) | ~20–25% | ⚠️ | Includes solvents, intermediates |
| Water treatment / disinfection | ~15–20% | ⚠️ | Municipal water and wastewater |
| Inorganic chemicals | ~10% | ❓ | Bleach, HCl, chlorinated inorganics |
| Pulp & paper | ~5% | ⚠️ | Declining share (shift to chlorine dioxide) |
| Pharmaceuticals / agrochemicals | ~5% | ❓ | Includes synthesis intermediates |
| Semiconductors / electronics (high-purity) | < 0.1% | ❓ | ~5,000–15,000 mt vs. 18,000,000 mt total |
| Far-UVC excimer lamps | << 0.001% | ❓ | See per-lamp estimate above |

Note: The application split figures above apply to bulk/industrial Cl₂. The high-purity segment is a physically separate supply chain — it starts from either purified bulk Cl₂ or direct electrochemical synthesis — and its own end-use breakdown is dominated by semiconductor etching and LCD manufacturing, not PVC.

---

### Producers and geographic concentration

Bulk chlorine is produced by ~500 companies across >650 sites globally (World Chlorine Council). China dominates, accounting for an estimated 35–42% of global output; the US, Germany, Japan, and India each contribute significant fractions. Major Western producers include Olin Corporation (world's largest, ~5.8 Mt/yr nameplate Cl₂ capacity across 25 facilities), Westlake Chemical, Occidental Chemical, Solvay, and Dow. The chlor-alkali process ties Cl₂ production to caustic soda demand: operators cannot produce one without the other, which makes output sensitive to NaOH market conditions rather than Cl₂ demand alone.

High-purity Cl₂ is a separate, much smaller market. It is geographically concentrated in East Asia (Japan, South Korea, Taiwan) and Europe, following semiconductor fab geography. Key producers include Showa Denko (now Resonac), PKC (South Korea), and the specialty gas divisions of Air Liquide, Linde, and Messer. Taiwan and South Korea are particularly important nodes given their dense semiconductor manufacturing base.

---

### Potential supply considerations

- **Co-product constraint.** Bulk Cl₂ output is co-determined by caustic soda demand. A downturn in NaOH markets can curtail chlorine availability even if chlorine demand is stable. This is an intrinsic feature of chlor-alkali economics and has caused periodic Cl₂ tightness historically.
- **Purity grade gap.** Standard merchant Cl₂ (≥99.5%) is not suitable for lamp or semiconductor use without further purification. The purification step (cryogenic distillation, adsorption) is performed by a small number of specialty gas producers. Disruption at any of those facilities — e.g., the PKC Gunsan plant serving Samsung — could tighten availability for electronics-grade Cl₂.
- **Geographic concentration of high-purity supply.** Most high-purity Cl₂ capacity is in East Asia. A supply disruption (natural disaster, trade restriction, facility outage) could limit access to lamp-grade material for non-Asian lamp makers.
- **Moisture and contamination sensitivity.** Cl₂ is highly reactive with moisture and metals. Handling, transport, and storage infrastructure (cylinder materials, valves, regulators) must be compatible. This is a standard challenge for anyone new to using this gas rather than a macro supply constraint.
- **Regulatory and safety burden.** Cl₂ is a Schedule 3 chemical under the Chemical Weapons Convention. Procurement, storage, and use require regulatory compliance that may add lead time and cost, particularly for smaller lamp manufacturers.

---

### Alternative materials

No direct substitute for Cl₂ exists in the KrCl excimer chemistry — the KrCl\* exciplex specifically requires a chlorine donor. Some patents reference HCl or Cl₂/rare gas/buffer mixtures as variations, but the halogen source remains chlorine-based. Switching to a different excimer wavelength (e.g. XeCl at 308 nm or KrBr at 207 nm) would change the emission wavelength entirely and is not a drop-in substitute for 222 nm applications.

---

### Open questions / follow-ups

- **Exact lamp-grade purity specification.** What purity (4N, 5N?) and what specific impurity limits (H₂O, HCl, O₂, metals) do excimer lamp manufacturers specify? This would clarify whether semiconductor-grade Cl₂ is required or whether a lower-cost grade suffices.
- **Cl₂ cylinder vs. HCl cracking.** Some industrial users generate Cl₂ on-site from HCl via catalytic oxidation (Sumitomo/Mitsui Benson process). Would on-site generation be feasible for lamp manufacturers, and at what scale?
- **Actual discharge volume of commercial lamps.** Per-lamp Cl₂ consumption is highly sensitive to lamp volume. Obtaining datasheet dimensions from commercial far-UVC modules (Ushio Care222, Acuity, etc.) would sharpen the per-lamp estimate.
- **Shelf life and Cl₂ consumption during lamp aging.** KrCl lamps are known to consume Cl₂ over their operating life (Cl₂ is depleted through wall reactions and formation of stable by-products). The fill quantity must exceed the minimum needed for rated lamp lifetime. Quantifying this "extra" reserve Cl₂ would refine the per-lamp consumption figure.
- **High-purity Cl₂ pricing.** No public pricing data was found. Understanding the cost premium over bulk Cl₂ (which trades around $200–400/mt) would help assess the economic materiality of this input.
