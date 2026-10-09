/* Recovered shipped factory. Module 711950.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 590191..590660
 * Raw property SHA-256: 4152597140a01faace3e2645c303e6007d8a43fbff20c4baa8756ccb78aada6b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(73153),
    r = n(924283),
    a = n(976860),
    s = n(652215);
  function l(e) {
    i.h.dispatch({ type: "FRIENDS_SET_SECTION", section: e });
  }
  let o = {
    transitionToSection(e) {
      let { explicit: t = !1 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ((0, a.JK)().location.pathname !== s.BVt.FRIENDS && (0, a.pX)(s.BVt.FRIENDS),
        l(e),
        t && (0, r.A)({ tab_opened: e }));
    },
    setSection: l,
    setInitialSection(e) {
      i.h.dispatch({ type: "FRIENDS_SET_INITIAL_SECTION", section: e });
    },
  };
}
