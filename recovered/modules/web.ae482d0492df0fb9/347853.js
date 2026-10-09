/* Recovered shipped factory. Module 347853.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6073938..6074814
 * Raw property SHA-256: 3da84e64eed65ff3721235e33de3668e1179cf987617f0381164ef1f86ec8d90
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, D: () => o });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(73153),
    s = n(573879);
  function l() {
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("376922"),
          n.e("204264"),
          n.e("179582"),
          n.e("28386"),
        ]).then(n.bind(n, 623161));
        return (t) => (0, i.jsx)(e, { ...t });
      },
      {
        onCloseCallback: () => {
          a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
        },
        modalKey: s.ov,
      },
    );
  }
  function o() {
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("807432"),
          n.e("461123"),
          n.e("715528"),
          n.e("590275"),
          n.e("352456"),
          n.e("314479"),
          n.e("70376"),
          n.e("960235"),
          n.e("373122"),
          n.e("808979"),
          n.e("989545"),
          n.e("104736"),
          n.e("772238"),
          n.e("290966"),
          n.e("935412"),
          n.e("878439"),
          n.e("201490"),
        ]).then(n.bind(n, 365225));
        return (t) => (0, i.jsx)(e, { ...t, onBackPressed: l });
      },
      {
        onCloseCallback: () => {
          a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
        },
        modalKey: s.Gl,
      },
    );
  }
}
