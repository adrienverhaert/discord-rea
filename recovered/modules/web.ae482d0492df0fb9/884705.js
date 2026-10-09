/* Recovered shipped factory. Module 884705.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2721365..2721633
 * Raw property SHA-256: 6d4eb647acb5a00138034e374dc9e40580fefa29b70bd988eeb7a74cbc4c5046
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = !1;
  function s() {
    a = !1;
  }
  class l extends i.Ay.Store {
    isTogglesDisabled() {
      return a;
    }
  }
  let o = new l(r.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
      a = e.disabled ?? !1;
    },
    CONNECTION_OPEN: s,
    LOGOUT: s,
  });
}
