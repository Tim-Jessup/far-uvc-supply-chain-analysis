# Far-UVC supply-chain analysis

A bottom-up look at what limits the manufacture of **222 nm KrCl excimer lamps**
(far-UVC, for air disinfection / pandemic preparedness).

The approach is deliberately material-by-material: for each input in the lamp's
bill of materials, estimate the **global annual supply** and the **amount drawn
from that supply to build one finished, shippable lamp**. Dividing one by the
other gives a theoretical ceiling on lamps-per-year for that material. The aim is
to gather and present these figures with their sources and confidence, so the
numbers can speak for themselves.

## Layout

```
supply-chain-analysis/
├── 01_sources/         Source documents + hardware reference (inputs)
├── 02_investigations/  Per-material research write-ups
├── 03_diagrams/        Interactive supply-chain tree + its assumptions
└── 04_report/          Final write-up (blog post / website) — to come
```

### 01_sources/
Primary source documents the analysis draws on: the *Blueprint for Far-UVC*
(full markdown + executive-summary PDF), the field strategy note, and a
`hardware-reference/` subfolder of physical/hardware inputs used to estimate lamp
materials (CT scan, CAD, patent, and placeholders for the OSLUV open-source
hardware). See `01_sources/hardware-reference/README.md`.

### 02_investigations/
One markdown file per bill-of-materials item, each documenting global production,
geographic concentration, end-use split, substitutability, and a confidence flag.
Covered so far: fused silica envelope and its precursors (`fused-silica-envelope`,
`silicon-tetrachloride`, `silicon-dioxide`), the bandpass filter materials
(`fused-silica-window`, `hafnium-dioxide`), the gas fill (`krypton`, `chlorine`),
electrodes (`nickel`), and housing (`aluminium-alloy`).

`material-conversion-and-wastage-estimates.md` records the conversion ratios and
process-yield factors that turn "mass inside the lamp" into "mass drawn from
global supply", keeping the per-lamp figures auditable.

### 03_diagrams/
`supply-chain-tree.html` is a self-contained interactive D3 view (no build step,
open in any browser). It reads its numbers from `supply-chain-params.js`, which
holds every quantitative assumption. See `03_diagrams/README.md` for how to edit
the figures.

### 04_report/
Empty for now. Reserved for the final write-up (blog post + website) once the
investigations and diagram settle.

## How the pieces connect

Per-material research (`02_investigations/`) feeds the conversion & wastage
estimates, whose central figures populate `03_diagrams/supply-chain-params.js`,
which in turn drives the `supply-chain-tree.html` diagram. Source and hardware
inputs in `01_sources/` underpin the material estimates.

## Conventions

- Numbered folder prefixes (`01_`–`04_`) set reading order.
- Each investigation carries an explicit confidence flag; figures are
  order-of-magnitude unless stated otherwise.
- Quantitative assumptions live in one place (`supply-chain-params.js`) so the
  diagram never hard-codes numbers.
