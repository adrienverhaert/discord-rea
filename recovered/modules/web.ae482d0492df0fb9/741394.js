/* Recovered shipped factory. Module 741394.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9616381..9616821
 * Raw property SHA-256: 0285536fbfdff2125dfc0af7d28db179a058be5dd22193a81a7cd9f3cc8376fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CN: () => r, kh: () => s, uk: () => a });
  var i = n(723702);
  function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = (0, i.isWindows)() ? "\\" : "/";
    return t.filter((e) => e.length > 0).join(r);
  }
  function a(e, t) {
    let n = e.split(/[/\\]/),
      i = "" !== n[n.length - 1] ? n[n.length - 1] : e;
    return (null != t && i.endsWith(t) && (i = i.slice(0, -t.length)), i);
  }
  function s(e) {
    let t = a(e),
      n = t.lastIndexOf(".");
    return n <= 0 ? t : t.slice(0, n);
  }
}
