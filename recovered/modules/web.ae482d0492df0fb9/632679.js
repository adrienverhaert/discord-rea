/* Recovered shipped factory. Module 632679.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10397486..10398283
 * Raw property SHA-256: 4aab180bf521fb0174f1b0f09780d6a690421e54b250ecab263faa43ec56a373
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => d });
  var i = n(477900);
  n(582128);
  let r =
    "https://cdn.discordapp.com/assets/content/0e8095ebdbf89e1289f83a859a892a5790e8a76949d9bf9bb02e4dfc16190d10.riv";
  var a = n(845867),
    s = n(799226);
  let l = {
      "Teen Screen Time Illo": {},
      "Gradient Vertical": {},
      "RAW ILLO (Do not deploy)": {},
      "Gradient Horizontal": {},
    },
    o = {
      "Teen Screen Time Illo": ["State Machine 1"],
      "Gradient Vertical": ["State Machine 1"],
      "RAW ILLO (Do not deploy)": ["State Machine 1"],
      "Gradient Horizontal": ["State Machine 1"],
    };
  function d(e) {
    let { artboard: t = "Teen Screen Time Illo", stateMachine: n, ...d } = e,
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
