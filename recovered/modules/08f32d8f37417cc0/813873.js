/* Recovered shipped factory. Module 813873.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 95..303
 * Raw property SHA-256: 0fdb6115df9c4bd1a319a847ad4b33033483bd0d7c8e3ff0cf5a369def2526dc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { U: () => r });
  let l = (0, n(945810).mj)({
    name: "2026-08-split-payments",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function r(e) {
    return { enabled: l.useConfig(e).enabled };
  }
}
