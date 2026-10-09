/* Recovered shipped factory. Module 227327.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7498249..7498661
 * Raw property SHA-256: ec468d7445a2b2fc29e1604da806dc5e5aac4431d0c16e5088df1a95f980a62a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Z_: () => r, m5: () => a, rg: () => s }), n(321073));
  let i = /^[0-9]+$/;
  function r(e) {
    let t = [];
    for (let n of e) if (!(!i.test(n) || t.includes(n)) && (t.push(n), 6 === t.length)) break;
    return t;
  }
  function a(e, t) {
    return `${e.join(",")}-${t}`;
  }
  function s(e) {
    let t = e.split("-");
    if (2 !== t.length) return null;
    let [n, a] = t;
    if (!i.test(a)) return null;
    let s = r(n.split(","));
    return 0 === s.length ? null : { scopeId: a, skuIds: s };
  }
}
