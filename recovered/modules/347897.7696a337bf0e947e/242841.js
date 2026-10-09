/* Recovered shipped factory. Module 242841.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 645919..646373
 * Raw property SHA-256: a33883c4fd0aa4b77b1b6613a4fd6e3bb589ee790d5b74f4f659d1c50dc9d6b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r(249759)();
  var n = r(120858),
    i = r(325473),
    o = r(136411),
    a = r(225314),
    s = r(439619),
    l = r(142896),
    u = l(s("%Promise.all%")),
    c = l(s("%Promise.reject%"));
  e.exports = function (e) {
    var t = this;
    if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
    return u(
      t,
      a(o(e), function (e) {
        var r = n(t, e);
        try {
          return r.then(
            function (e) {
              return { status: "fulfilled", value: e };
            },
            function (e) {
              return { status: "rejected", reason: e };
            },
          );
        } catch (e) {
          return c(t, e);
        }
      }),
    );
  };
}
