/* Recovered shipped factory. Module 928039.
 * Source: recovered/web/assets/d8ce586d5e601df9.js
 * UTF-16 property offsets: 95..849
 * Raw property SHA-256: 635292077fca3150e726577007fa2205563726db268c7fa7b15e1128c455b97a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, r) {
  r.d(l, { A: () => a });
  var t = r(582128),
    o = r(887129),
    n = r(17928),
    u = r(775602);
  function a(e, l, r) {
    let a = (0, n.bG)([u.Ay], () => u.Ay.keyboardModeEnabled),
      c = t.useCallback(
        (e) => {
          let r = l.current,
            t = r?.getScrollerNode()?.querySelector(e);
          null != t && null != r && (t.focus(), r.scrollIntoViewNode({ node: t, padding: 80 }));
        },
        [l],
      ),
      s = t.useCallback(
        () =>
          new Promise((e) => {
            let r = l.current;
            if (null == r) return e();
            r.scrollTo({ to: 0, callback: () => requestAnimationFrame(() => e()) });
          }),
        [l],
      ),
      i = t.useCallback(
        () =>
          new Promise((e) => {
            let r = l.current;
            if (null == r) return e();
            r.scrollTo({
              to: Number.MAX_SAFE_INTEGER,
              callback: () => requestAnimationFrame(() => e()),
            });
          }),
        [l],
      );
    return (0, o.Ay)({
      id: e,
      isEnabled: a,
      setFocus: c,
      defaultFocused: r?.defaultFocused,
      scrollToStart: s,
      scrollToEnd: i,
      orientation: r?.orientation,
    });
  }
}
