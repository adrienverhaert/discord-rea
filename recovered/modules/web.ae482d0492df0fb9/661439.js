/* Recovered shipped factory. Module 661439.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 635587..635995
 * Raw property SHA-256: a5b659e7bc21679b289e896d137ca35c9811ac238544164ad0698336d735ca6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(90165),
    s = n(927813),
    l = n(652215);
  let o = 6 * s.A.Millis.HOUR;
  async function d() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < o))
      try {
        let e = await i.Bo.get({
          url: l.Rsh.USER_ACTIVITY_STATISTICS,
          oldFormErrors: !0,
          rejectWithError: (0, i.fT)(),
        });
        r.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
      } catch (e) {
        return e;
      }
  }
}
