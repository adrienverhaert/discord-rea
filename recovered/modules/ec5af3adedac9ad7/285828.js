/* Recovered shipped factory. Module 285828.
 * Source: recovered/web/assets/ec5af3adedac9ad7.js
 * UTF-16 property offsets: 766..1436
 * Raw property SHA-256: 6673945682c7c9f11448bd6ca2843fe4d759ceb85509ff01bf4b6d44b039c5da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, a) {
  a.d(r, { z: () => l });
  var o = a(477900);
  a(582128);
  let t =
    "https://cdn.discordapp.com/assets/content/3f8d8cb2278b39eb8975ff5c252ed36a67addd54ae228a2b0d34691ddffa9104.riv";
  var d = a(845867),
    n = a(799226);
  let i = {
      "Gem L3": { reducedMotion: "boolean" },
      Sparkle: { reducedMotion: "boolean" },
      Sparkle_Tiny: { reducedMotion: "boolean" },
    },
    c = { "Gem L3": ["SM_Hover"], Sparkle: ["SparkleSM"], Sparkle_Tiny: ["SparkleSM"] };
  function l(e) {
    let { artboard: r = "Gem L3", stateMachine: a, ...l } = e,
      { status: b, buffer: p } = (0, n.CE)(t),
      s = (0, n.m2)(t);
    return b === n.BW.Loading
      ? null
      : (0, o.jsx)(d.w, {
          ...(s ? { key: "override" } : {}),
          buffer: p,
          artboard: r,
          stateMachine: a,
          artboardProperties: i,
          artboardStateMachines: c,
          ...l,
        });
  }
  l.riveSrc = t;
}
