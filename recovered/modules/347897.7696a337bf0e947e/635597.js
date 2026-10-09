/* Recovered shipped factory. Module 635597.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1187780..1188370
 * Raw property SHA-256: 5c61458270cebfd20b698e5b3c78825fdfda159bbe21b15f613aabe71f498498
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var n = r(582128);
  function i() {
    let e = (0, n.useRef)(new Map()),
      t = (0, n.useCallback)((t, r, n, i) => {
        let o = i?.once
          ? (...t) => {
              (e.current.delete(n), n(...t));
            }
          : n;
        (e.current.set(n, { type: r, eventTarget: t, fn: o, options: i }),
          t.addEventListener(r, o, i));
      }, []),
      r = (0, n.useCallback)((t, r, n, i) => {
        let o = e.current.get(n)?.fn || n;
        (t.removeEventListener(r, o, i), e.current.delete(n));
      }, []),
      i = (0, n.useCallback)(() => {
        e.current.forEach((e, t) => {
          r(e.eventTarget, e.type, t, e.options);
        });
      }, [r]);
    return (
      (0, n.useEffect)(() => i, [i]),
      { addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: i }
    );
  }
}
