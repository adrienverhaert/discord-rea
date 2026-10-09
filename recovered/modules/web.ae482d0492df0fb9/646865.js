/* Recovered shipped factory. Module 646865.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2588755..2589099
 * Raw property SHA-256: fa3be9b15dd614dab32df8b79995c6bb50d075043b2ccbf5d1f57615ec716ad5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => l, w: () => o });
  var i = n(73153),
    r = n(567249),
    a = n(574172),
    s = n(652215);
  function l() {
    return !1;
  }
  async function o(e, t) {
    let n,
      l = r.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT);
    e &&
      !l &&
      i.h.wait(() => {
        i.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
      });
    try {
      n = await t();
    } catch {
      n = !1;
    }
    return (!n && e && a.close(s.MLl.ACTIVITY_POPOUT), n);
  }
}
