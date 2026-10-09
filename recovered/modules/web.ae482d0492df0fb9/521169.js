/* Recovered shipped factory. Module 521169.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7823221..7823528
 * Raw property SHA-256: 4db630836806622607d28ab7d39a964c75fdccdbaaace66fdbad06dc4b7486e9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { n: () => a, w: () => r });
  let i = (0, n(945810).mj)({
    name: "2026-08-tiny-bronco",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
  }
  function a(e) {
    return i.getConfig({ location: e }).enabled;
  }
}
