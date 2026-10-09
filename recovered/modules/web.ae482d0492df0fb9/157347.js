/* Recovered shipped factory. Module 157347.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5159666..5160377
 * Raw property SHA-256: 91cc31bdcf53004b39bccf129798d47cd5f2e80666c07d049707475a60fcee6d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { OA: () => s, hL: () => u, vn: () => _, wN: () => o, wp: () => l });
  var i,
    r = n(469881),
    a = n(660183);
  let s = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" },
    l = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
  var o =
    (((i = {})[(i.JOINED_AT = 0)] = "JOINED_AT"), (i[(i.ACCOUNT_AGE = 1)] = "ACCOUNT_AGE"), i);
  function d() {
    return {
      seconds: a.t["FsBhl/"],
      minutes: a.t["4d1mgT"],
      hours: a.t["2wkczD"],
      days: a.t["ocdS+f"],
      months: a.t["az14+h"],
      years: a.t["5Gk1ns"],
    };
  }
  function c() {
    return { hours: a.t.JZP2Rs, days: a.t["3moSHc"], months: a.t["0Ddwr1"], years: a.t.cR7lcs };
  }
  function u(e, t) {
    return (0, r.A)(e, 0 === t ? d : 1 === t ? c : void 0, !1);
  }
  function _(e) {
    return (null != e ? new Date(e) : new Date()).getTime();
  }
}
