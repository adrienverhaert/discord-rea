/* Recovered shipped factory. Module 765178.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9886423..9886708
 * Raw property SHA-256: 68d2cf001348b50ce32197f9ff2e9ffc50c9c80ca5e9bfe4d0962406e35177bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => a });
  var i = n(230906);
  let r = new Map(),
    a = {
      announce: i.iP,
      clearAnnouncements: i.pA,
      moveTo: function (e, t) {
        null == t || r.has(e) || ((0, i.vS)(t), r.set(e, t));
      },
      remove: function (e) {
        if (!r.delete(e)) return;
        let t = Array.from(r.values()).pop();
        (0, i.vS)(null != t ? t : null);
      },
    };
}
