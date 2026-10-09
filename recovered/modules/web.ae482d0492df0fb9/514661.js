/* Recovered shipped factory. Module 514661.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5435653..5435959
 * Raw property SHA-256: e3c2bbe1e7f02a25a8ff2e4e704c61c8f026ca79f36fee72573bd1a02d32257d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(582128),
    r = n(933725),
    a = n(849841);
  function s(e, t) {
    let [n, s] = i.useState(!1),
      l = i.useCallback(async () => {
        (null != e && (s(!0), await (0, r.m)(e, !0), s(!1)), t?.());
      }, [e, t]),
      o = (0, a.A)(e);
    return {
      isAdopting: n,
      onAdoptTag: l,
      onEditProfile: i.useCallback(() => {
        (t?.(), o());
      }, [o, t]),
    };
  }
}
