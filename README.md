# Far-UVC supply-chain analysis

An exploration of the supply chain of **222 nm KrCl excimer lamps** for air disinfection / pandemic preparedness. The goal is to determine bottlenecks and possible solutions to a rapid scale up of this technology.

## Investigation Approach


## Interactive Diagram

**[View the supply-chain tree →](https://tim-jessup.github.io/far-uvc-supply-chain-analysis/03_diagrams/supply-chain-tree.html)**

## Structure

```
supply-chain-analysis/
├── 01_sources/         Source documents + reference material
├── 02_investigations/  Per-material research write-ups
├── 03_diagrams/        Interactive supply-chain tree
└── 04_report/          Project report - Pending
```

Per-material research (`02_investigations/`) feeds the conversion & wastage
estimates, whose central figures populate `03_diagrams/supply-chain-params.js`,
which in turn drives the `supply-chain-tree.html` diagram. Source and hardware
inputs in `01_sources/` underpin the material estimates.
