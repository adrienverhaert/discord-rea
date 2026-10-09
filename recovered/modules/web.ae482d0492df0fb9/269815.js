/* Recovered shipped factory. Module 269815.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2830329..2830632
 * Raw property SHA-256: 3c5a9784aa62598d77940e80cf96f9e18ec728dcb981f9c51c50bc275c57b2ca
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(17928),
    a = n(803306),
    s = n(475743),
    l = n(280450);
  function o() {
    let [e, t] = (0, r.yK)([l.default], () => [
        l.default.isAuthenticated(),
        null != l.default.getAnalyticsToken(),
      ]),
      n = (0, s.Ay)(e);
    i.useEffect(() => {
      n || !e || t || a.rQ({ withAnalyticsToken: !0 });
    }, [n, e, t]);
  }
}
