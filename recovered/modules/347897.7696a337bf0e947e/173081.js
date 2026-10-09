/* Recovered shipped factory. Module 173081.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1006514..1006929
 * Raw property SHA-256: e5ce5ba4f738a654522a0446b34347828699b0f173821567558867298c5e9aff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(741623),
    i = r(14665),
    o = r(798493),
    a = r(44650),
    s = r(159367),
    l = r(732937),
    u = r(94535),
    c = r(228047),
    f = r(227106);
  e.exports = function (e, t, r) {
    if (!f(e)) throw new n("Assertion failed: Type(O) is not Object");
    if (!l(t)) throw new n("Assertion failed: P is not a Property Key");
    var p = i(r) ? r : c(r);
    if (!i(p)) throw new n("Assertion failed: Desc is not a valid Property Descriptor");
    return o(s, u, a, e, t, p);
  };
}
