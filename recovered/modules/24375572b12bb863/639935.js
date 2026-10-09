/* Recovered shipped factory. Module 639935.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 405..759
 * Raw property SHA-256: cb8aebf46c472d2346452d1ad8b0aead927b46346c8a59918e2e1d2d98c4676a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { Z: () => u, b: () => d });
  var s = t(73153),
    n = t(287809),
    i = t(249203),
    a = t(695904);
  function r(e) {
    return e !== n.default.getCurrentUser()?.id && null != (0, a.aS)();
  }
  function u(e) {
    r(e) && s.h.dispatch({ type: "PROFILE_READ_STATE_MARK_VIEWED", userId: e });
  }
  function d(e) {
    r(e) &&
      null == i.A.getEntry(e) &&
      s.h.dispatch({ type: "PROFILE_READ_STATE_SEED_VIEWED", userId: e });
  }
}
