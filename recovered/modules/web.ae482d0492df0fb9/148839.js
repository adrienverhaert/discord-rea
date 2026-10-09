/* Recovered shipped factory. Module 148839.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11658180..11658441
 * Raw property SHA-256: 79c2efb66ff8db3efcb7d6f2da5a9ad843af43ea4be234333f9912ae808ab564
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(582128);
  function r(e) {
    let t = i.useRef(e);
    return (
      i.useInsertionEffect(() => {
        t.current = e;
      }),
      i.useCallback(function () {
        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
        return t.current(...n);
      }, [])
    );
  }
}
