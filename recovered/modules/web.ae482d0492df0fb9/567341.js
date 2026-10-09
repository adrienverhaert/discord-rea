/* Recovered shipped factory. Module 567341.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10393159..10393705
 * Raw property SHA-256: cf06a6f9352733b4afa7dea8ad7a072c8b192e11b6b099f6e393f89c7e9591db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => d });
  var i = n(477900);
  n(582128);
  let r =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
  var a = n(845867),
    s = n(799226);
  let l = { Torbs_Main: {} },
    o = { Torbs_Main: ["SM_Torbs"] };
  function d(e) {
    let { artboard: t = "Torbs_Main", stateMachine: n, ...d } = e,
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
