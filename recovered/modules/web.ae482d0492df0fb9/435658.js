/* Recovered shipped factory. Module 435658.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7705260..7705526
 * Raw property SHA-256: 9198ba28afbcaf716395e09fab61a49254f9284344ebf487fe0a96af67207d48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { j: () => s, x: () => a });
  var i = n(582128),
    r = n(828596);
  function a(e) {
    let { applicationId: t } = e;
    i.useEffect(() => {
      null != t && (0, r.l9)({ applicationId: t });
    }, [t]);
  }
  function s(e) {
    let { skuIds: t } = e;
    i.useEffect(() => {
      0 !== t.length && (0, r.N4)({ skuIds: t });
    }, [t]);
  }
}
