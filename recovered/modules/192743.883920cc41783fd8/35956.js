/* Recovered shipped factory. Module 35956.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 642824..643050
 * Raw property SHA-256: 752a49235e73e71bb8b2b616df0724d8190233be3a8b81161dc61b5298a31666
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(257943),
    o = n(410323),
    a = n(485155),
    i = URLSearchParams.prototype,
    u = o(i.forEach);
  !r ||
    "size" in i ||
    a(i, "size", {
      get: function () {
        var e = 0;
        return (
          u(this, function () {
            e++;
          }),
          e
        );
      },
      configurable: !0,
      enumerable: !0,
    });
}
