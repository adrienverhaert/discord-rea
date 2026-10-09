/* Recovered shipped factory. Module 107766.
 * Source: recovered/web/assets/d0633f231486dd87.js
 * UTF-16 property offsets: 95..577
 * Raw property SHA-256: 153719d480461943e20253b485044e91b7b0cd7eee4dc669bc7484f7dbbdae43
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { Ew: () => l, nk: () => o });
  var a = t(477900);
  t(582128);
  var d = t(192308),
    i = t(138054);
  function l(e, n) {
    (0, d.openModalLazy)(
      async () => {
        let { default: d } = await Promise.all([
          t.e("684986"),
          t.e("531997"),
          t.e("774542"),
          t.e("689913"),
          t.e("202669"),
          t.e("673859"),
          t.e("890078"),
        ]).then(t.bind(t, 904685));
        return (t) => (0, a.jsx)(d, { ...t, userId: e, linkCode: n });
      },
      { modalKey: "family-center-request-modal" },
    );
  }
  function o() {
    let e = i.A.getPendingConnection();
    return null != e && (l(e.teenId, e.linkCode), !0);
  }
}
