/* Recovered shipped factory. Module 855859.
 * Source: recovered/web/assets/727bfe23677fd05e.js
 * UTF-16 property offsets: 37852..38141
 * Raw property SHA-256: 90e9fd497b90d08e9a698c16cc2a02d97dd541e1c9dbfab3432cd1628fee0321
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { b: () => i, x: () => o });
  var r = n(582128);
  let s = new Set();
  function i(e, t) {
    for (let n of s) n(e, t);
  }
  function o(e, t) {
    let n = r.useRef(t);
    (r.useLayoutEffect(() => {
      n.current = t;
    }),
      r.useEffect(() => {
        if (null == e) return;
        let t = (t, r) => {
          t === e && n.current(r);
        };
        return (
          s.add(t),
          () => {
            s.delete(t);
          }
        );
      }, [e]));
  }
}
