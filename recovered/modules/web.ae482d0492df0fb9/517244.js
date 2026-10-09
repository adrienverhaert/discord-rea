/* Recovered shipped factory. Module 517244.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3917877..3918228
 * Raw property SHA-256: 7ae387f2707239384ca864a7536c9cddd8fb454d78cdc8a2b39a61714778df3c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { k: () => o, p: () => l }), n(134528), n(947204));
  var i = n(89505);
  let r = new Map(),
    a = new Map();
  function s(e, t) {
    let n = a.get(e);
    null != n && n.source !== t && Date.now() - n.at < 3e4
      ? a.delete(e)
      : (a.set(e, { source: t, at: Date.now() }), i.A.reloadAppFrames(e));
  }
  function l(e, t) {
    return r.get(e) !== t && (r.set(e, t), s(e, "frame"), !0);
  }
  function o(e) {
    s(e, "deploy");
  }
}
