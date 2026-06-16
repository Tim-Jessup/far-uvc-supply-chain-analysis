/* ============================================================================
   Far-UVC supply-chain tree — EDITABLE ASSUMPTIONS
   ----------------------------------------------------------------------------
   This file holds every quantitative assumption behind the "Lamps buildable"
   view. Edit it freely as firmer figures arrive (e.g. from Heraeus, Ushio) —
   nothing in the diagram HTML needs to change.

   For each material:
     supply   = estimated GLOBAL annual production, expressed in `unit`
     perLamp  = material DRAWN FROM SUPPLY to build ONE finished lamp, same `unit`.
                Now includes conversion ratios AND full-chain process wastage
                (yield from the supply node through to a good, shippable lamp),
                not just the functional amount inside the lamp.
     note     = free-text reminder of where the numbers came from

   Conversion/wastage factors and their reasoning are documented in
   ../02_investigations/material-conversion-and-wastage-estimates.md (central estimates
   used here; ranges and confidence flags recorded there).

   Lamps buildable from a material  =  supply / perLamp
   (i.e. the theoretical ceiling if 100% of global supply were diverted to lamps).

   `id` keys below must match the `id` of each material node in the diagram.
   ========================================================================== */
window.LAMP_PARAMS = {

  // Target-production slider range (lamps per year), logarithmic.
  slider: { min: 1e4, max: 1e9, start: 1e4 },

  materials: {

    // ---- Envelope branch ----------------------------------------------------
    fused_silica_envelope: { unit:"g",  supply: 1.0e8,   perLamp: 100,
      note:"Suprasil-class UV tube ~100 t/yr (central of 50-200 t). Envelope ~75 g in lamp / 0.75 tube->lamp yield (cut+trim 0.88 x lamp fab 0.85) = ~100 g/lamp. Range 91-115." },
    sicl4_envelope:        { unit:"g",  supply: 1.3e12,  perLamp: 495,
      note:"SiCl4 ~1.3 Mt/yr. 75 g SiO2 x 2.83 stoich / 0.43 full-chain yield (capture 0.80 x sinter 0.92 x draw 0.78 x tube->lamp 0.75) = ~495 g/lamp. Range 386-708." },

    // ---- Gas fill -----------------------------------------------------------
    krypton:               { unit:"mL", supply: 1.2e11,  perLamp: 8,
      note:"~120,000 m3/yr = 1.2e11 mL. ~5 mL Kr sealed in / 0.62 fill yield (fill eff 0.65 x post-fill reject 0.95) = ~8 mL/lamp. Range 6.7-11." },
    chlorine:              { unit:"g",  supply: 1.0e10,  perLamp: 0.00106,
      note:"High-purity Cl2 ~10,000 t/yr (central of 5-15 kt). ~0.44 mg sealed in / 0.41 fill yield (reactive fill eff 0.45 x reject 0.92) = ~1.06 mg/lamp. Range 0.73-1.5 mg." },

    // ---- Bandpass filter ----------------------------------------------------
    fused_silica_window:   { unit:"g",  supply: 4.0e8,   perLamp: 10,
      note:"UV-grade windows ~400 t/yr (central of 200-800 t). ~8.6 g finished window / 0.85 coating+assembly yield = ~10 g/lamp. (Polishing loss carried on sicl4_window to avoid double counting.) Range 9.3-11.5." },
    sicl4_window:          { unit:"g",  supply: 1.3e12,  perLamp: 71,
      note:"SiCl4 ~1.3 Mt/yr. 8.6 g SiO2 x 2.83 stoich / 0.34 full-chain yield (capture 0.80 x sinter 0.92 x blank+polish 0.55 x coating+assembly 0.85) = ~71 g/lamp. Range 54-97." },
    hfo2:                  { unit:"g",  supply: 6.0e6,   perLamp: 0.0235,
      note:"Optical-grade HfO2 ~6 t/yr (central of 3-10 t). ~20 mg raw (incl ~30% target util) / 0.85 filter reject = ~23.5 mg/lamp. NOTE: component-02 alt model gives ~0.26 g (filter-design discrepancy, unresolved)." },
    sio2:                  { unit:"g",  supply: 5.0e8,   perLamp: 0.00042,
      note:"Optical-coating SiO2 ~500 t/yr. ~0.36 mg raw (incl ~30% source util) / 0.85 filter reject = ~0.42 mg/lamp." },

    // ---- Electrodes ---------------------------------------------------------
    nickel:                { unit:"g",  supply: 3.5e12,  perLamp: 15,
      note:"Refined Ni ~3.5 Mt/yr. ~10 g Ni200/Ni201 in lamp / 0.67 yield (forming 0.70 x assembly 0.95) = ~15 g/lamp gross draw. Stamping scrap largely recyclable, so net new Ni lower. Range 12.5-18." },

    // ---- Driver -------------------------------------------------------------
    capacitors:            { unit:"$",  supply: 1.5e9,   perLamp: 3.1,
      note:"HV pulse capacitor market ~$1.5 Bn/yr. ~$3 of HV caps per driver / 0.96 PCBA scrap = ~$3.1. Value basis, so wastage only loosely meaningful." },

    // ---- Housing ------------------------------------------------------------
    aluminium:             { unit:"g",  supply: 1.15e14, perLamp: 440,
      note:"Total Al ~115 Mt/yr. ~300 g in module / 0.68 yield (cast/machine 0.70 x assembly 0.97) = ~440 g/lamp gross draw. Chips/runners highly recyclable, so net primary much lower. Range 353-545." }
  }
};
