/* Recovered shipped factory. Module 814204.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1179313..1179630
 * Raw property SHA-256: ac9b239dd4e7f1109fd731ab3cbf2d4e818344245c30f8e39675518bcfed7336
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(...e) {
    return 1 === e.length && e[0]
      ? e[0]
      : (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = i(e, t);
              return ((r ||= "function" == typeof n), n);
            });
          if (r)
            return () => {
              n.forEach((t, r) => {
                "function" == typeof t ? t() : i(e[r], null);
              });
            };
        };
  }
  function i(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
  }
  r.d(t, { P: () => n });
}
