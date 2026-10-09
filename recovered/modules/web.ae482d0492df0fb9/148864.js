/* Recovered shipped factory. Module 148864.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6570451..6570993
 * Raw property SHA-256: 782983b071a398362f8bf470046e92518ae29885f922a97479c3e7644c0a66eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => c });
  var r = n(17928),
    a = n(73153),
    s = n(423764);
  let l = (0, s.rE)();
  function o(e) {
    let { countryCode: t } = e;
    null != t && (l = (0, s.XF)(t) ?? (0, s.rE)());
  }
  class d extends r.Ay.DeviceSettingsStore {
    static displayName = "PhoneStore";
    static persistKey = "PhoneStore";
    initialize(e) {
      null != e && (i = e.selectedCountryCode);
    }
    getUserAgnosticState() {
      return { selectedCountryCode: i };
    }
    getCountryCode() {
      return null != i ? i : l;
    }
  }
  let c = new d(a.h, {
    PHONE_SET_COUNTRY_CODE: function (e) {
      let { countryCode: t } = e;
      i = t;
    },
    CONNECTION_OPEN: o,
    SET_LOCATION_METADATA: o,
  });
}
