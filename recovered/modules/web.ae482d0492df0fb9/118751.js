/* Recovered shipped factory. Module 118751.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11741110..11742023
 * Raw property SHA-256: 5eb986029060e3bc54ab7a1554469fb81285b4c251e3a9aaaf798e3914dfe9a8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $h: () => s, cG: () => o, l9: () => d, s_: () => l });
  var i = n(855522);
  let r = new Map();
  function a(e, t) {
    let n = `${e}|${t ?? ""}`,
      i = r.get(n);
    return (
      null == i &&
        ((i = new Intl.NumberFormat(e, null != t ? { maximumFractionDigits: t } : void 0)),
        r.set(n, i)),
      i
    );
  }
  function s(e) {
    if (e < 1e6) return a(i.A.getLocale()).format(e);
    let t = (e / 1e6).toFixed(1);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: t });
  }
  let l = (e, t) => {
    let n = Math.round(10 * e) / 10;
    if (e < 1e6) return a(t, +(n % 1 != 0)).format(e);
    let r = a(t, +((Math.round((e / 1e6) * 10) / 10) % 1 != 0)).format(e / 1e6);
    return i.A.Messages.NUMBER_ABBREVIATIONS_MILLION.format({ num: r });
  };
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e) return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
  }
  function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0, ...n }).format(t);
  }
}
