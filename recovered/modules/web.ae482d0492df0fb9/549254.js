/* Recovered shipped factory. Module 549254.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10396730..10397485
 * Raw property SHA-256: 94bec29f5cceab9d52d05b693319c6d45d3d225e6ff3108ce5d519d572e9d325
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => d });
  var i = n(477900);
  n(582128);
  let r =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
  var a = n(845867),
    s = n(799226);
  let l = {
      "Tab Gradient Dawn": {
        Color_GradientCenter: "color",
        Color_InnerRing: "color",
        Color_OuterRing: "color",
        DimmerWidth: "number",
        NitroVFX: "boolean",
        posX: "number",
      },
      "Nitro VFX": {},
    },
    o = { "Tab Gradient Dawn": ["State Machine 1"], "Nitro VFX": ["State Machine 1"] };
  function d(e) {
    let { artboard: t = "Tab Gradient Dawn", stateMachine: n, ...d } = e,
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
