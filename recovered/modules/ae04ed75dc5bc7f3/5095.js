/* Recovered shipped factory. Module 5095.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 58736..59299
 * Raw property SHA-256: 4b355a643647bb9fec6b500a6015c8e84c803489eeeba03e4387a2f4d8a7f5c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { _f: () => c, xC: () => d });
  var i,
    l = n(17928),
    s = n(36149),
    r = n(702841),
    a = n(900019),
    o = n(138054),
    d =
      (((i = {}).MARK_AS_FALSE_POSITIVE = "mark_as_false_positive"),
      (i.AGE_VERIFICATION_RETRY = "age_verification_retry"),
      (i.CONNECT_TO_TEEN = "connect_to_teen"),
      (i.AGE_VERIFICATION_MANUAL_REVIEW = "age_verification_manual_review"),
      i);
  function c(e, t) {
    let n = null != (0, r.bG)([a.A], () => a.A.getFpMessageInfo(e)),
      i = (0, s.YU)(t, e),
      d = null != (0, l.bG)([o.A], () => o.A.getPendingConnection()) && (0, s.lW)(t, e);
    return n
      ? "mark_as_false_positive"
      : i
        ? "age_verification_retry"
        : d
          ? "connect_to_teen"
          : void 0;
  }
}
