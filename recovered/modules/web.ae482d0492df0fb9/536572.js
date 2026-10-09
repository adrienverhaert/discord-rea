/* Recovered shipped factory. Module 536572.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3876609..3877730
 * Raw property SHA-256: 5257b07706e77d1a6da25030ec579d42a7f7a0ba14b106a78e3a446c2f26a18b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Sw: () => o, VG: () => l, fw: () => s, s7: () => d });
  var i = n(575593),
    r = n(623373),
    a = n(660183);
  function s(e) {
    let t = l(e);
    return null != e && e.type === i.R.BUNDLE && e.items.length > 0
      ? a.intl.format(a.t.UTc0ny, { count: e.items.length, productName: t })
      : t;
  }
  function l(e) {
    if (null == e) return "";
    let t = a.intl.string(a.t.z7y5vF);
    return "baseVariantName" in e && null != e.baseVariantName && e.variantLabel !== t
      ? a.intl.formatToPlainString(a.t.BZN5k2, {
          baseVariantName: e.baseVariantName,
          variantLabel: e.variantLabel,
        })
      : e.name;
  }
  function o(e) {
    if (null == e) return "";
    let t = a.intl.string(a.t.z7y5vF);
    return null != e.baseVariantName && e.variantLabel !== t
      ? a.intl.formatToPlainString(a.t.BZN5k2, {
          baseVariantName: e.baseVariantName,
          variantLabel: e.variantLabel,
        })
      : e.name;
  }
  function d(e) {
    let t = l(e);
    switch ((0, r.YW)(e)) {
      case i.R.AVATAR_DECORATION:
        return a.intl.formatToPlainString(a.t.lvBzLi, { product: t });
      case i.R.PROFILE_EFFECT:
        return a.intl.formatToPlainString(a.t.eR7moP, { product: t });
      case i.R.NAMEPLATE:
        return a.intl.formatToPlainString(a.t.YFOwHj, { product: t });
      case i.R.PROFILE_FRAME:
        return a.intl.formatToPlainString(a.t.vov8LX, { product: t });
      default:
        return t;
    }
  }
}
