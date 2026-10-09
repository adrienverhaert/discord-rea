/* Recovered shipped factory. Module 323874.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 641820..642420
 * Raw property SHA-256: f92be6bcadb35f8fe16299675f9294c0f2bc3ddd645e816e24da39b461c961a6
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
    s = o(l.append),
    c = o(l.delete),
    f = o(l.forEach),
    d = o([].push),
    h = new u("a=1&a=2&b=3");
  (h.delete("a", 1),
    h.delete("b", void 0),
    h + "" != "a=2" &&
      r(
        l,
        "delete",
        function (e) {
          var t,
            n = arguments.length,
            r = n < 2 ? void 0 : arguments[1];
          if (n && void 0 === r) return c(this, e);
          var o = [];
          (f(this, function (e, t) {
            d(o, { key: t, value: e });
          }),
            i(n, 1));
          for (var u = a(e), l = a(r), h = 0, p = 0, y = !1, m = o.length; h < m;)
            ((t = o[h++]), y || t.key === u ? ((y = !0), c(this, t.key)) : p++);
          for (; p < m;) ((t = o[p++]).key !== u || t.value !== l) && s(this, t.key, t.value);
        },
        { enumerable: !0, unsafe: !0 },
      ));
}
