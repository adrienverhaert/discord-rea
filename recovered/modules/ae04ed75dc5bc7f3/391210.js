/* Recovered shipped factory. Module 391210.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 254198..254588
 * Raw property SHA-256: 66b9bc0fdbc54da9f6ed926e052bce4e116741cba0aace5622f9b0f64a0d83d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var i = n(582128),
    l = n(172218);
  function s() {
    let [e, t] = i.useState(!1),
      n = i.useRef(null),
      s = i.useCallback((e) => {
        e
          ? null == n.current &&
            (n.current = setTimeout(() => {
              ((n.current = null), t(!0));
            }, 1e3))
          : null != n.current && (clearTimeout(n.current), (n.current = null));
      }, []);
    i.useEffect(
      () => () => {
        null != n.current && (clearTimeout(n.current), (n.current = null));
      },
      [],
    );
    let r = (0, l.K)(s, 0.5, !e);
    return [e, r];
  }
}
