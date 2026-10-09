/* Recovered shipped factory. Module 427603.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9805109..9805285
 * Raw property SHA-256: 560af27187740570fb1a675ccd052c522910e5de72d83e7610d24fc5f2b8efcc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(773371);
  function r() {
    let e = i.default.getFocusedPID();
    return null != e && (i.default.isReady(e) || i.default.isCrashed(e)) ? e : null;
  }
}
