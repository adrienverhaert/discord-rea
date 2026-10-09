/* Recovered shipped factory. Module 251494.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2276085..2276316
 * Raw property SHA-256: 8e1d97a3397e85ca95a55d6000553309ead3b7aa148843bd19db8cd2ab54c766
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { X: () => s });
  var i = n(775602),
    r = n(625494),
    a = n(652215);
  let s = {
    binds: ["return"],
    action() {
      if (!i.Ay.keyboardModeEnabled && r._.hasSubscribers(a.jej.MODAL_SUBMIT))
        return (r._.dispatch(a.jej.MODAL_SUBMIT), !1);
    },
  };
}
