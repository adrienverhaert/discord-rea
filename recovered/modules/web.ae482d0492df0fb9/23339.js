/* Recovered shipped factory. Module 23339.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11753461..11754327
 * Raw property SHA-256: d6ca384601d9ea20880f5d765874109350462514043b74ddd487ca210f8b930e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $G: () => s, EJ: () => l, S8: () => c, oN: () => o, sS: () => d, xI: () => i.xI });
  var i = n(621466);
  let r = /[\u0300-\u036f]/g,
    a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function s(e) {
    return null == e ? "" : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
  }
  let l = function (e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\u2026";
    if (null == e || null == t) return "";
    if (e.length > t) {
      let i = a.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
      return `${i.replace(/[\s.]+$/, "")}${n}`;
    }
    return e;
  };
  function o(e) {
    return null != e
      ? e
          .replace(/'s /g, " ")
          .replace(/\w+/g, (e) => e[0])
          .replace(/\s/g, "")
      : "";
  }
  let d =
      null == String.prototype.normalize
        ? (e) => e
        : (e) => e.normalize("NFD").replace(r, "").normalize("NFC"),
    c =
      null == String.prototype.normalize
        ? (e) => e
        : function (e) {
            let t = n(209034),
              i = "";
            return (
              [...e.normalize("NFD")].forEach((e) => {
                i += t[e] ?? e;
              }),
              i.normalize("NFD").toLocaleLowerCase()
            );
          };
}
