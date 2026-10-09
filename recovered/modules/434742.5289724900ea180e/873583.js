/* Recovered shipped factory. Module 873583.
 * Source: recovered/web/assets/434742.5289724900ea180e.js
 * UTF-16 property offsets: 429..696
 * Raw property SHA-256: 9422d0eba2304226323078a3fd569cfcf2bb070d28024f7019012971ab51db9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  var o = e(491238),
    n = e(24011),
    c = e(377482),
    p = e(574151),
    i = 1 / 0,
    u = o ? o.prototype : void 0,
    a = u ? u.toString : void 0;
  t.exports = function t(r) {
    if ("string" == typeof r) return r;
    if (c(r)) return n(r, t) + "";
    if (p(r)) return a ? a.call(r) : "";
    var e = r + "";
    return "0" == e && 1 / r == -i ? "-0" : e;
  };
}
