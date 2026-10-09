/* Recovered shipped factory. Module 418842.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7761910..7762325
 * Raw property SHA-256: 8c87008f4006654ceb51a65f478226fff1735957f2d81b91dedc1da30acb0782
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => s });
  var i = n(582128),
    r = n(885386),
    a = n(157146);
  function s() {
    let e = r.Xi.useSetting(),
      t = (function () {
        let [e, t] = i.useState(() => (window.matchMedia(a.Un).matches ? "cozy" : "compact"));
        return (
          i.useEffect(() => {
            let e = window.matchMedia(a.Un);
            function n(e) {
              t(e.matches ? "cozy" : "compact");
            }
            return (
              e.addEventListener("change", n),
              () => {
                e.removeEventListener("change", n);
              }
            );
          }, []),
          e
        );
      })();
    return (0, a.dV)(e, t);
  }
}
