/* Recovered shipped factory. Module 232258.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 577516..577915
 * Raw property SHA-256: 284e884c51bfcf8581c04b959c554fefdcdc637481aa58dcc05731436730bff3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t,
    r = "function" == typeof Map && Map.prototype ? Map : null,
    n = "function" == typeof Set && Set.prototype ? Set : null;
  r ||
    (t = function (e) {
      return !1;
    });
  var i = r ? Map.prototype.has : null,
    o = n ? Set.prototype.has : null;
  (t ||
    i ||
    (t = function (e) {
      return !1;
    }),
    (e.exports =
      t ||
      function (e) {
        if (!e || "object" != typeof e) return !1;
        try {
          if ((i.call(e), o))
            try {
              o.call(e);
            } catch (e) {
              return !0;
            }
          return e instanceof r;
        } catch (e) {}
        return !1;
      }));
}
