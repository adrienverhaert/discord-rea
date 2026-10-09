/* Recovered shipped factory. Module 932318.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 459483..459781
 * Raw property SHA-256: 2021c42df36c43ef0594521c0ca83fdca13e4a48bcbd454248ae5a20be650f7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e, t) {
    var n,
      i,
      o,
      a,
      s,
      l,
      u = [];
    for (o = 0, n = r(246734)(e), a = r(976617), s = r(577360), l = r(921194); o < n.length; ++o)
      (a[(i = n[o])] && (i = a[i]),
        t && "keypress" !== t && s[i] && ((i = s[i]), u.push("shift")),
        l(i) && u.push(i));
    return ((t = this.pickBestAction(i, u, t)), { key: i, modifiers: u, action: t });
  };
}
