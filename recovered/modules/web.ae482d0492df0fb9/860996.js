/* Recovered shipped factory. Module 860996.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7006326..7006916
 * Raw property SHA-256: f2c9fcc16b7e31045a3ab90af352b94a833eb49abfa6aeca5966f876ccc20649
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => d, x: () => c });
  var i = n(17928),
    r = n(945810),
    a = n(710195),
    s = n(287809);
  let l = { showDefaultBanner: !0, showHeroPlaceholder: !0 },
    o = {
      0: l,
      1: { showDefaultBanner: !1, showHeroPlaceholder: !0 },
      2: { showDefaultBanner: !1, showHeroPlaceholder: !1 },
    },
    d = (0, r.mj)({
      name: "2026-07-quest-home-default-banner-removal",
      kind: "user",
      defaultConfig: l,
      variations: o,
    });
  function c() {
    return (0, i.bG)([s.default, a.A], () => {
      let e = s.default.getCurrentUser()?.id;
      if (null == e) return l;
      let t = a.A.getAssignment("user", e, d.definition.name);
      return t?.variantId == null || t.useAsEligibility ? l : (o[t.variantId] ?? l);
    });
  }
}
