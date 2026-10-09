/* Recovered shipped factory. Module 508300.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 640787..641580
 * Raw property SHA-256: f853769934c921eda6a92c20f248f86b5a7cb396b94c25843168aed8ca2d34f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(557939),
    o = n(860511),
    a = n(230606),
    i = n(231977),
    u = n(4940).f,
    l = n(210140),
    s = n(61132),
    c = n(486724),
    f = n(862784),
    d = n(753609),
    h = n(949186),
    p = n(257943),
    y = n(105712),
    m = "DOMException",
    v = a("Error"),
    g = a(m),
    b = function () {
      s(this, w);
      var e = arguments.length,
        t = f(e < 1 ? void 0 : arguments[0]),
        n = f(e < 2 ? void 0 : arguments[1], "Error"),
        r = new g(t, n),
        o = new v(t);
      return ((o.name = m), u(r, "stack", i(1, h(o.stack, 1))), c(r, this, b), r);
    },
    w = (b.prototype = g.prototype),
    _ = "stack" in new v(m),
    k = "stack" in new g(1, 2),
    x = g && p && Object.getOwnPropertyDescriptor(o, m),
    S = !!x && !(x.writable && x.configurable),
    E = _ && !S && !k;
  r({ global: !0, constructor: !0, forced: y || E }, { DOMException: E ? b : g });
  var O = a(m),
    T = O.prototype;
  if (T.constructor !== O) {
    for (var R in (y || u(T, "constructor", i(1, O)), d))
      if (l(d, R)) {
        var A = d[R],
          C = A.s;
        l(O, C) || u(O, C, i(6, A.c));
      }
  }
}
