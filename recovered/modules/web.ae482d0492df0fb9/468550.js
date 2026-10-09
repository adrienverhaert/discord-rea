/* Recovered shipped factory. Module 468550.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3764808..3765090
 * Raw property SHA-256: 3ad0ad2e8afb5379fbdd15e4072d8678df3f6f4bdb3934576f3447e9f751507b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M8: () => r, kF: () => a, sY: () => i });
  let i = (0, n(196765).v)(() => ({ isOpen: !1, openedAt: null, applicationId: null }));
  function r(e) {
    i.setState({ isOpen: !0, openedAt: Date.now(), applicationId: e });
  }
  function a() {
    i.setState({ isOpen: !1, openedAt: null, applicationId: null });
  }
}
