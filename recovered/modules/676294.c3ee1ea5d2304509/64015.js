/* Recovered shipped factory. Module 64015.
 * Source: recovered/web/assets/676294.c3ee1ea5d2304509.js
 * UTF-16 property offsets: 2294..2556
 * Raw property SHA-256: 0bb6059eefde8b487ca189d22a451c0958cc8bfdb8ec0a753d742303c5b30028
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var i = n(649852),
    r = n(980320);
  e.exports = function (e, t, n) {
    var o = !0,
      s = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
      r(n) && ((o = "leading" in n ? !!n.leading : o), (s = "trailing" in n ? !!n.trailing : s)),
      i(e, t, { leading: o, maxWait: t, trailing: s })
    );
  };
}
