/* Recovered shipped factory. Module 153488.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8879022..8879678
 * Raw property SHA-256: 53f644c092d1e07e442b6c05f5507e818c50b375f01308cdf80899d8fd27feaa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153);
  let a = !1,
    s = !1,
    l = {},
    o = null;
  class d extends i.Ay.Store {
    static displayName = "ConsentStore";
    hasConsented(e) {
      return null != l[e] && l[e].consented;
    }
    get consents() {
      return l;
    }
    get fetchedConsents() {
      return a;
    }
    get receivedConsentsInConnectionOpen() {
      return s;
    }
    getAuthenticationConsentRequired() {
      return o;
    }
  }
  let c = new d(r.h, {
    CONNECTION_OPEN: function (e) {
      let { consents: t } = e;
      null != t && ((l = { ...l, ...t }), (s = !0));
    },
    OVERLAY_INITIALIZE: function (e) {
      let { consents: t } = e;
      ((l = { ...t }), (a = !0));
    },
    UPDATE_CONSENTS: function (e) {
      let { consents: t } = e;
      ((l = { ...t }), (a = !0));
    },
    SET_CONSENT_REQUIRED: function (e) {
      o = e.consentRequired;
    },
    LOGOUT: function () {
      o = null;
    },
  });
}
