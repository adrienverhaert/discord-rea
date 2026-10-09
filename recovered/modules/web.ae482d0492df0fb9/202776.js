/* Recovered shipped factory. Module 202776.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5221833..5222310
 * Raw property SHA-256: 06d60559b45c0cab6f5fed291314533f895a348e219c498f92567e2955d30074
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, u: () => l });
  var i = n(17928),
    r = n(164956),
    a = n(652215);
  function s(e) {
    return (
      (0, i.bG)([r.A], () => {
        if (e?.id == null) return !1;
        let t = r.A.isFullServerPreview(e.id),
          n = r.A.isOnboardingEnabled(e.id);
        return t && n;
      }) || e?.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    );
  }
  function l(e) {
    if (null == e) return !1;
    let t = r.A.isFullServerPreview(e.id),
      n = r.A.isOnboardingEnabled(e.id);
    return (t && n) || e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
  }
}
