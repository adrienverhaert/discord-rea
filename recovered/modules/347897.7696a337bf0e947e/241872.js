/* Recovered shipped factory. Module 241872.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1187007..1187248
 * Raw property SHA-256: f9b99379309106c5ffabf8091b27d7f8d1f791316e1d4a69f66f63e85d8c60a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { J: () => a });
  var n = r(361854),
    i = r(582128);
  let o = i.useInsertionEffect ?? n.N;
  function a(e) {
    let t = (0, i.useRef)(null);
    return (
      o(() => {
        t.current = e;
      }, [e]),
      (0, i.useCallback)((...e) => {
        let r = t.current;
        return r?.(...e);
      }, [])
    );
  }
}
