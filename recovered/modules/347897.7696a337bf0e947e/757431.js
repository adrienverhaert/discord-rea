/* Recovered shipped factory. Module 757431.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1005149..1005576
 * Raw property SHA-256: 5e965d805acb2e58741874ade5235262739fc73d96710728907fc4bd90359812
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619)("%Symbol.species%", !0),
    i = r(741623),
    o = r(358073),
    a = r(579405),
    s = r(605468),
    l = r(32561),
    u = r(450460),
    c = r(227106);
  e.exports = function (e, t) {
    if (!o(t) || t < 0) throw new i("Assertion failed: length must be an integer >= 0");
    if (!l(e)) return a(t);
    var r = s(e, "constructor");
    if ((n && c(r) && null === (r = s(r, n)) && (r = void 0), void 0 === r)) return a(t);
    if (!u(r)) throw new i("C must be a constructor");
    return new r(t);
  };
}
