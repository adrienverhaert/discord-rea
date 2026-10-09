/* Recovered shipped factory. Module 289704.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10393706..10394623
 * Raw property SHA-256: 4da192e4e173b68aa16843756f56eea936441c8f0a42bb80ff12160561652721
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => d });
  var i = n(477900);
  n(582128);
  let r =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
  var a = n(845867),
    s = n(799226);
  let l = {
      Game_Server_Hosting_Main: { reducedMotion: "boolean" },
      c_chara_5: {},
      hytale_gameplay: { reducedMotion: "boolean" },
      c_chara_1: {},
      c_chara_4: {},
      c_chara_2: {},
      c_chara_3: {},
    },
    o = {
      Game_Server_Hosting_Main: ["SM_Auto", "SM_Main_Int"],
      c_chara_5: ["State Machine 1"],
      hytale_gameplay: ["State Machine 1"],
      c_chara_1: ["State Machine 1"],
      c_chara_4: ["State Machine 1"],
      c_chara_2: ["State Machine 1"],
      c_chara_3: ["State Machine 1"],
    };
  function d(e) {
    let { artboard: t = "Game_Server_Hosting_Main", stateMachine: n, ...d } = e,
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
