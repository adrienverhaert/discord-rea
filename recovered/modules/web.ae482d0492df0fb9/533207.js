/* Recovered shipped factory. Module 533207.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7627348..7627835
 * Raw property SHA-256: f4ca6a3558b44f01018d6b1dd44b30ba08b0b203bedf91506084dd503ba39fc7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(729937),
    s = n(981616),
    l = n(285933),
    o = n(227005);
  async function d(e, t, d) {
    let { hasSpotifyAccount: c, activity: u, user: _ } = e;
    (0, o.A)(c) &&
      null != u &&
      null != u.sync_id &&
      (await (0, s.dM)(),
      await (0, s.G8)().catch(
        (e) => (
          (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("173547"), n.e("503371")]).then(
              n.bind(n, 990726),
            );
            return (t) => (0, i.jsx)(e, { ...t });
          }),
          Promise.reject(e)
        ),
      ),
      a.OH(u, _.id),
      (0, l.A)(t, _, u, d));
  }
}
