/* Recovered shipped factory. Module 12994.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 999535..999771
 * Raw property SHA-256: 4760fec9a8b5685e30cb64998e8876d1989d7ac33cdc2848bc3a1b8bdd4c4ed1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  ((e.exports = function (e) {
    var t = Object(e),
      r = [];
    for (var n in t) r.unshift(n);
    return function e() {
      for (; r.length;) if ((n = r.pop()) in t) return ((e.value = n), (e.done = !1), e);
      return ((e.done = !0), e);
    };
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports));
}
