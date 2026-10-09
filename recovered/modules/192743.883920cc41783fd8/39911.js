/* Recovered shipped factory. Module 39911.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 637826..638633
 * Raw property SHA-256: 5a5973bf30d6ea752fff85e835c0eafbcff063356b31eb02ad3e1952e5bc464e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(503628),
    o = n(380744),
    a = n(257943),
    i = n(105712),
    u = o("iterator");
  e.exports = !r(function () {
    var e = new URL("b?a=1&b=2&c=3", "https://a"),
      t = e.searchParams,
      n = new URLSearchParams("a=1&a=2&b=3"),
      r = "";
    return (
      (e.pathname = "c%20d"),
      t.forEach(function (e, n) {
        (t.delete("b"), (r += n + e));
      }),
      n.delete("a", 2),
      n.delete("b", void 0),
      (i && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", void 0) || n.has("b"))) ||
        (!t.size && (i || !a)) ||
        !t.sort ||
        "https://a/c%20d?a=1&c=3" !== e.href ||
        "3" !== t.get("c") ||
        "a=1" !== String(new URLSearchParams("?a=1")) ||
        !t[u] ||
        "a" !== new URL("https://a@b").username ||
        "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
        "xn--e1aybc" !== new URL("https://\u0442\u0435\u0441\u0442").host ||
        "#%D0%B1" !== new URL("https://a#\u0431").hash ||
        "a1c3" !== r ||
        "x" !== new URL("https://x", void 0).host
    );
  });
}
