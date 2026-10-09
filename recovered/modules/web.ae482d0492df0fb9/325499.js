/* Recovered shipped factory. Module 325499.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6530331..6530645
 * Raw property SHA-256: b8815c473b36118109367dfc6bead09558e9edb153006c0539e30fb04297d452
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { b: () => r, i: () => a });
  let i = (0, n(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
  }
  function a(e) {
    let { enabled: t } = i.getConfig({ location: e });
    return t;
  }
}
