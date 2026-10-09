/* Recovered shipped factory. Module 397562.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6928504..6928735
 * Raw property SHA-256: 4647233f323ab1d817f24dbe1177c3a64bc6f021b8d25bee99e06cd89e33a2d4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(582128),
    r = n(10392),
    a = n(82498),
    s = n(652215);
  function l(e, t, n) {
    let l = t?.isLoaded ?? !1;
    i.useEffect(() => {
      l &&
        (0, r.sq)(s.U7l.USER_PROFILE_ACTION, e, function () {
          return (0, a.E4)(t, n);
        });
    }, [l]);
  }
}
