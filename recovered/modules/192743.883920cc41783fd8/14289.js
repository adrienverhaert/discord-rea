/* Recovered shipped factory. Module 14289.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 642421..642823
 * Raw property SHA-256: 72838e82eefe9f020dc13e0ddd37fc1bd258704952fb1699bfa5eb1f159d4838
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(693655),
    o = n(410323),
    a = n(304880),
    i = n(627),
    u = URLSearchParams,
    l = u.prototype,
    s = o(l.getAll),
    c = o(l.has),
    f = new u("a=1");
  (f.has("a", 2) || !f.has("a", void 0)) &&
    r(
      l,
      "has",
      function (e) {
        var t = arguments.length,
          n = t < 2 ? void 0 : arguments[1];
        if (t && void 0 === n) return c(this, e);
        var r = s(this, e);
        i(t, 1);
        for (var o = a(n), u = 0; u < r.length;) if (r[u++] === o) return !0;
        return !1;
      },
      { enumerable: !0, unsafe: !0 },
    );
}
