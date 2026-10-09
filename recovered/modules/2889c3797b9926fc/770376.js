/* Recovered shipped factory. Module 770376.
 * Source: recovered/web/assets/2889c3797b9926fc.js
 * UTF-16 property offsets: 95..488
 * Raw property SHA-256: 1738633729161b862c92ed33393807a0358f7ae87e9c9a9c0004afdd65e40584
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (o, i, t) {
  t.d(i, { A: () => r, f: () => d });
  var S = t(554146),
    s = t(506774),
    e = t(501419),
    n = t(927813),
    E = t(49999);
  let _ = "doNotShowReorderModal";
  function d() {
    (0, e.uh)(S.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, { dismissAction: E.i.USER_DISMISS });
  }
  function r() {
    null != s.w.get(_) && s.w.remove(_);
    let { isDismissed: o } = (0, e.FZ)(S.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
      cooldownDurationMs: n.A.Millis.WEEK,
    });
    return !o;
  }
}
