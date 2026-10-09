/* Recovered shipped factory. Module 861193.
 * Source: recovered/web/assets/438027.d9881a5f46a8759c.js
 * UTF-16 property offsets: 22911..23559
 * Raw property SHA-256: 573cac8e99cb8bc39d485ca7f6375a4e793bc530cbf2977396a0b4a32815fe26
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  "use strict";
  function n(t) {
    return "/" === t.charAt(0);
  }
  function o(t, r) {
    for (var e = r, n = e + 1, o = t.length; n < o; e += 1, n += 1) t[e] = t[n];
    t.pop();
  }
  e.d(r, { A: () => i });
  let i = function (t, r) {
    void 0 === r && (r = "");
    var e,
      i = (t && t.split("/")) || [],
      f = (r && r.split("/")) || [],
      u = t && n(t),
      s = r && n(r),
      a = u || s;
    if ((t && n(t) ? (f = i) : i.length && (f.pop(), (f = f.concat(i))), !f.length)) return "/";
    if (f.length) {
      var h = f[f.length - 1];
      e = "." === h || ".." === h || "" === h;
    } else e = !1;
    for (var p = 0, c = f.length; c >= 0; c--) {
      var l = f[c];
      "." === l ? o(f, c) : ".." === l ? (o(f, c), p++) : p && (o(f, c), p--);
    }
    if (!a) for (; p--;) f.unshift("..");
    !a || "" === f[0] || (f[0] && n(f[0])) || f.unshift("");
    var y = f.join("/");
    return (e && "/" !== y.substr(-1) && (y += "/"), y);
  };
}
