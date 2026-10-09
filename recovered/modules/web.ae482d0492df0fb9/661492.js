/* Recovered shipped factory. Module 661492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8706868..8707355
 * Raw property SHA-256: 2378dba9a4154397fd9c44b7db1efdd238b7da701c8b5f4c46e90b5463e16a82
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => s, q: () => l });
  var i = n(575593),
    r = n(993408),
    a = n(660183);
  function s(e) {
    var t = e.name;
    switch (e.tenantMetadata?.collectibles?.type) {
      case i.R.AVATAR_DECORATION:
        return a.intl.formatToPlainString(a.t.lvBzLi, { product: t });
      case i.R.PROFILE_EFFECT:
        return a.intl.formatToPlainString(a.t.eR7moP, { product: t });
      case i.R.NAMEPLATE:
        return a.intl.formatToPlainString(a.t.YFOwHj, { product: t });
      default:
        return t;
    }
  }
  function l(e) {
    return !(0, r.G0)(e) && e.type !== i.R.EXTERNAL_SKU;
  }
}
