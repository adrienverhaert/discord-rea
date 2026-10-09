/* Recovered shipped factory. Module 570950.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10394624..10395530
 * Raw property SHA-256: 0bdc924e2395ba9c544ed17b6a8abd588d70e3968e3b8851fe89900edee8167f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { s: () => d });
  var i = n(477900);
  n(582128);
  let r =
    "https://cdn.discordapp.com/assets/content/bd712b6e0f8e5ee33f7f102f7bb02e40850fe06ccdf425523f3093c838ef6a28.riv";
  var a = n(845867),
    s = n(799226);
  let l = {
      HoverDarkmode: { posy: "number", posx: "number" },
      ButtonFillDarkmode: {},
      BaseGlowRemapped: {},
      BaseGlow: {},
      HoverLightmode: { posy: "number", posx: "number" },
      ButtonFillLightmode: {},
    },
    o = {
      HoverDarkmode: ["Main State Machine"],
      ButtonFillDarkmode: ["Main State Machine"],
      BaseGlowRemapped: ["State Machine 1"],
      BaseGlow: ["Main State Machine"],
      HoverLightmode: ["Main State Machine"],
      ButtonFillLightmode: ["Main State Machine"],
    };
  function d(e) {
    let { artboard: t = "HoverDarkmode", stateMachine: n, ...d } = e,
      { status: c, buffer: u } = (0, s.CE)(r),
      _ = (0, s.m2)(r);
    return c === s.BW.Loading
      ? null
      : (0, i.jsx)(a.w, {
          ...(_ ? { key: "override" } : {}),
          buffer: u,
          artboard: t,
          stateMachine: n,
          artboardProperties: l,
          artboardStateMachines: o,
          ...d,
        });
  }
  d.riveSrc = r;
}
