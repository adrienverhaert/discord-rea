/* Recovered shipped factory. Module 452082.
 * Source: recovered/web/assets/6bbbda6dedaac36e.js
 * UTF-16 property offsets: 619..1005
 * Raw property SHA-256: 203b95e36773905db0012a9e7cf869e3e37ea44005c2f056eed567a1b434e1aa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { j: () => l });
  var i = n(349435),
    a = n(963555),
    r = n(617641),
    s = n(168447),
    u = n(546140);
  function l(e, t) {
    let n = (0, r.Lc)({ location: t }),
      l = (0, u.L)(),
      o = (0, s.Y)(e),
      p = (0, a.F)(e, i._j.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
      n &&
      l &&
      0 !== o.length &&
      !o.some(
        (e) =>
          e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
          (e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
      )
    )
      return p;
  }
}
