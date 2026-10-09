/* Recovered shipped factory. Module 168900.
 * Source: recovered/web/assets/ec5af3adedac9ad7.js
 * UTF-16 property offsets: 1437..2107
 * Raw property SHA-256: 98d49992d2cd555bc268d3c322d6feae2a7ba9834a61a3d598e8696d625e82a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, a) {
  a.d(r, { J: () => l });
  var o = a(477900);
  a(582128);
  let t =
    "https://cdn.discordapp.com/assets/content/f6be7075b3756dfb89ce77617b82d7a9a863a31483e03dfedb07377038197910.riv";
  var d = a(845867),
    n = a(799226);
  let i = {
      "Gem L2": { reducedMotion: "boolean" },
      Sparkle: { reducedMotion: "boolean" },
      Sparkle_Tiny: { reducedMotion: "boolean" },
    },
    c = { "Gem L2": ["SM_Hover"], Sparkle: ["SparkleSM"], Sparkle_Tiny: ["SparkleSM"] };
  function l(e) {
    let { artboard: r = "Gem L2", stateMachine: a, ...l } = e,
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
