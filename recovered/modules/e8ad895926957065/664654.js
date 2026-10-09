/* Recovered shipped factory. Module 664654.
 * Source: recovered/web/assets/e8ad895926957065.js
 * UTF-16 property offsets: 94..505
 * Raw property SHA-256: da6da31e1a53c9f2088d7cba2a787f2e1c2cbd6182b8ab92e4a0598f8572f337
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { J: () => u, Z: () => n });
  var s = r(582128),
    a = r(17928),
    l = r(803306),
    f = r(287809),
    h = r(851746);
  let n = 3;
  function u() {
    let e = (0, a.yK)([h.A], () => h.A.getSentUserIds()),
      t = (0, a.yK)([f.default], () => e.map((e) => f.default.getUser(e)).filter((e) => null != e));
    return (
      s.useEffect(() => {
        e.forEach((e) => {
          (0, l.wz)(e);
        });
      }, [e]),
      {
        referralSentUsers: t,
        hasSentAllReferrals: e.length === n,
        refreshAt: (0, a.bG)([h.A], () => h.A.getRefreshAt()),
      }
    );
  }
}
