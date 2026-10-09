/* Recovered shipped factory. Module 861807.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6515429..6515978
 * Raw property SHA-256: f19d00831445a30320d6c514009c37dd86de3583292a022fa47b0e392586fb17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = !1;
  class s extends i.Ay.PersistedStore {
    static displayName = "ParentalConsentStore";
    static persistKey = "ParentalConsentStore";
    initialize(e) {
      a = e?.shouldShowGuardianConnect ?? !1;
    }
    getShouldShowGuardianConnect() {
      return a;
    }
    getState() {
      return { shouldShowGuardianConnect: a };
    }
  }
  let l = new s(r.h, {
      GUARDIAN_CONNECT_REQUIRED: function (e) {
        let { shouldShowGuardianConnect: t } = e;
        ((a = !0 === t), l.persist());
      },
      GUARDIAN_CONNECT_CLEARED: function () {
        ((a = !1), l.persist());
      },
      NUF_COMPLETE: function () {
        ((a = !1), l.persist());
      },
    }),
    o = l;
}
