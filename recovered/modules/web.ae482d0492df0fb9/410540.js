/* Recovered shipped factory. Module 410540.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4141544..4141837
 * Raw property SHA-256: 5f0612284f61ced2bdd505b50dd53265b9f57dbe7e3d0a84a5a1aec9683b45f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(280450),
    a = n(290863),
    s = n(685396),
    l = n(652215);
  function o(e) {
    let t = (0, i.bG)([r.default], () => r.default.getId() === e),
      n = (0, s.K)(),
      o = (0, i.bG)([a.A], () =>
        a.A.findActivity(e, (e) => {
          let { type: t } = e;
          return t === l.$pd.CUSTOM_STATUS;
        }),
      );
    return t ? n : o;
  }
}
