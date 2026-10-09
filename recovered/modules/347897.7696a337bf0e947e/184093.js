/* Recovered shipped factory. Module 184093.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1178439..1179312
 * Raw property SHA-256: 71c3bc094bf15bdc137f1c48cce1cad68286134b30a2689c8df01d70d1fb7d1e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { v: () => s });
  var n = r(241453),
    i = r(295551),
    o = r(814204);
  let a = function () {
    for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
      (e = arguments[r]) &&
        (t = (function e(t) {
          var r,
            n,
            i = "";
          if ("string" == typeof t || "number" == typeof t) i += t;
          else if ("object" == typeof t)
            if (Array.isArray(t)) {
              var o = t.length;
              for (r = 0; r < o; r++) t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
            } else for (n in t) t[n] && (i && (i += " "), (i += n));
          return i;
        })(e)) &&
        (n && (n += " "), (n += t));
    return n;
  };
  function s(...e) {
    let t = { ...e[0] };
    for (let r = 1; r < e.length; r++) {
      let s = e[r];
      for (let e in s) {
        let r = t[e],
          l = s[e];
        "function" == typeof r &&
        "function" == typeof l &&
        "o" === e[0] &&
        "n" === e[1] &&
        e.charCodeAt(2) >= 65 &&
        90 >= e.charCodeAt(2)
          ? (t[e] = (0, n.c)(r, l))
          : ("className" === e || "UNSAFE_className" === e) &&
              "string" == typeof r &&
              "string" == typeof l
            ? (t[e] = a(r, l))
            : "id" === e && r && l
              ? (t.id = (0, i.Tw)(r, l))
              : "ref" === e && r && l
                ? (t.ref = (0, o.P)(r, l))
                : (t[e] = void 0 !== l ? l : r);
      }
    }
    return t;
  }
}
