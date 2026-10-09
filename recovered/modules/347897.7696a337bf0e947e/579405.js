/* Recovered shipped factory. Module 579405.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1004588..1005148
 * Raw property SHA-256: a0c85746f544cd7a97876cb5b3d0b4fcec233870122bb6408509bc7c91b68a88
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619)("%Array.prototype%"),
    i = r(333654),
    o = r(870064),
    a = r(741623),
    s = r(358073),
    l = r(568898),
    u = r(528574);
  e.exports = function (e) {
    if (!s(e) || e < 0) throw new a("Assertion failed: `length` must be an integer Number >= 0");
    if (e > l) throw new i("length is greater than (2**32 - 1)");
    var t = arguments.length > 1 ? arguments[1] : n,
      r = [];
    if (t !== n) {
      if (!u)
        throw new o(
          "ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]",
        );
      u(r, t);
    }
    return (0 !== e && (r.length = e), r);
  };
}
