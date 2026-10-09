/* Recovered shipped factory. Module 121780.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5731448..5731771
 * Raw property SHA-256: 86cc27397f4c47ba3e1b58db55041b5c33e049a6d3e01553c7814441268e537d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(423764);
  let s = null;
  function l(e) {
    let { countryCode: t } = e;
    null != t && (s = (0, a.XF)(t) ?? (0, a.rE)());
  }
  class o extends i.Ay.Store {
    static displayName = "LocationMetadataStore";
    getCountryCode() {
      return s;
    }
  }
  let d = new o(r.h, { CONNECTION_OPEN: l, SET_LOCATION_METADATA: l });
}
