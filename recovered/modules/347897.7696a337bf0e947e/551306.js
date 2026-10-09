/* Recovered shipped factory. Module 551306.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 578441..578840
 * Raw property SHA-256: c93615ac834139b2afd08d68adc0af0b1a3815b7ade0c526f9d61e729036b1ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t,
    r = "function" == typeof Map && Map.prototype ? Map : null,
    n = "function" == typeof Set && Set.prototype ? Set : null;
  n ||
    (t = function (e) {
      return !1;
    });
  var i = r ? Map.prototype.has : null,
    o = n ? Set.prototype.has : null;
  (t ||
    o ||
    (t = function (e) {
      return !1;
    }),
    (e.exports =
      t ||
      function (e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if ((o.call(e), i))
            try {
              i.call(e);
            } catch (e) {
              return !0;
            }
          return e instanceof n;
        } catch (e) {}
        return !1;
      }));
}
