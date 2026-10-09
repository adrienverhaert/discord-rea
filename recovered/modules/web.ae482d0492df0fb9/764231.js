/* Recovered shipped factory. Module 764231.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6865049..6865573
 * Raw property SHA-256: 72b8dda6f8009ac74affefc83e5a22b1628a35bcf85a81dcaa56b55371965027
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { T: () => a }), n(439174), n(19886));
  var i = n(202541),
    r = n(660183);
  function a(e, t) {
    switch (e) {
      case i.Ac.PREMIUM_TENURE_1_MONTH:
      case i.Ac.PREMIUM_TENURE_3_MONTH:
      case i.Ac.PREMIUM_TENURE_6_MONTH:
        return r.intl.formatToPlainString(r.t.erUSmA, { months: t });
      case i.Ac.PREMIUM_TENURE_12_MONTH:
      case i.Ac.PREMIUM_TENURE_24_MONTH:
      case i.Ac.PREMIUM_TENURE_36_MONTH:
      case i.Ac.PREMIUM_TENURE_60_MONTH:
      case i.Ac.PREMIUM_TENURE_72_MONTH:
        return r.intl.formatToPlainString(r.t.qOdyDe, { years: t / 12 });
      default:
        return null;
    }
  }
}
