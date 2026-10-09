/* Recovered shipped factory. Module 196765.
 * Source: recovered/web/assets/933399.5793fe5eebec71ea.js
 * UTF-16 property offsets: 104556..104906
 * Raw property SHA-256: 584753759caf54c4f53ddbb33ec942c3b13e7ef6a5947938fa5fd900fefb2ffa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { P: () => a, v: () => u });
  var n = r(582128),
    i = r(976245);
  let o = (e) => e;
  function a(e, t = o) {
    let r = n.useSyncExternalStore(
      e.subscribe,
      n.useCallback(() => t(e.getState()), [e, t]),
      n.useCallback(() => t(e.getInitialState()), [e, t]),
    );
    return (n.useDebugValue(r), r);
  }
  let s = (e) => {
      let t = (0, i.y)(e),
        r = (e) => a(t, e);
      return (Object.assign(r, t), r);
    },
    u = (e) => (e ? s(e) : s);
}
