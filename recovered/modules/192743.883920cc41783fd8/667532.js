/* Recovered shipped factory. Module 667532.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 639418..639884
 * Raw property SHA-256: 13a8b492ac5087699e5d38ef1988c24bf60a21c39e8c7933c95da826b846762b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(557939),
    o = n(250594),
    a = n(503199),
    i = n(496538),
    u = n(762503),
    l = n(732376);
  r(
    {
      target: "Array",
      proto: !0,
      arity: 1,
      forced:
        1 !== [].unshift(0) ||
        !(function () {
          try {
            Object.defineProperty([], "length", { writable: !1 }).unshift();
          } catch (e) {
            return e instanceof TypeError;
          }
        })(),
    },
    {
      unshift: function (e) {
        var t = o(this),
          n = a(t),
          r = arguments.length;
        if (r) {
          l(n + r);
          for (var s = n; s--;) {
            var c = s + r;
            s in t ? (t[c] = t[s]) : u(t, c);
          }
          for (var f = 0; f < r; f++) t[f] = arguments[f];
        }
        return i(t, n + r);
      },
    },
  );
}
