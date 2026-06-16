# Diagrams

The Far-UVC supply-chain tree diagram lives here.

## Files

| File | Role |
|------|------|
| `supply-chain-tree.html` | The diagram. Self-contained interactive D3 view (D3 loaded from CDN). Open directly in a browser. |
| `supply-chain-params.js` | All quantitative assumptions behind the "Lamps buildable" view — global supply, per-lamp draw, and notes for each material. |

The HTML loads `supply-chain-params.js` at runtime, so the two files must stay together.

## Editing the numbers

Every assumption sits in `supply-chain-params.js` — edit it there as firmer figures
arrive. Nothing in the HTML needs to change; reload the page
to see updates. The `id` keys in the params file must match the material node `id`s in the diagram.

Conversion and wastage factors, with ranges and confidence flags, are documented in
`../02_investigations/material-conversion-and-wastage-estimates.md`. The params file uses the central estimates from that document.

## Viewing

Open `supply-chain-tree.html` in any modern browser. No build step or server required.
