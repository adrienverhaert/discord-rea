/* Recovered shipped factory. Module 609782.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3091152..3092313
 * Raw property SHA-256: fc9b1a7a459bdfcc1d509321594c5580e908014afac25a6bea4bf62a338fe54b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ie: () => _, w0: () => o, I: () => c });
  var i = n(70283),
    r = n(305003),
    a = n(854232),
    s = n(518477);
  let l = {
    staff: 22,
    staff_hidden: 22,
    staff_personal: 22,
    premium: 1,
    premium_tenure_1_month_v2: 1,
    premium_tenure_3_month_v2: 1,
    premium_tenure_6_month_v2: 1,
    premium_tenure_12_month_v2: 1,
    premium_tenure_24_month_v2: 1,
    premium_tenure_36_month_v2: 1,
    premium_tenure_60_month_v2: 1,
    premium_tenure_72_month_v2: 1,
    partner: 2,
    certified_moderator: 3,
    hypesquad: 4,
    hypesquad_house_1: 5,
    hypesquad_house_2: 6,
    hypesquad_house_3: 7,
    bug_hunter_level_1: 8,
    bug_hunter_level_2: 9,
    verified_developer: 10,
    early_supporter: 11,
    guild_booster_lvl1: 12,
    guild_booster_lvl2: 12,
    guild_booster_lvl3: 12,
    guild_booster_lvl4: 12,
    guild_booster_lvl5: 12,
    guild_booster_lvl6: 12,
    guild_booster_lvl7: 12,
    guild_booster_lvl8: 12,
    guild_booster_lvl9: 12,
    legacy_username: 13,
    quest_completed: 14,
    april_fools_2026: 15,
    orb_profile_badge: 16,
  };
  function o(e) {
    let t = l[e];
    if (null != t) return t;
    let n = i.$[e.toUpperCase()];
    return "number" == typeof n ? n : void 0;
  }
  let d = new Map([
    [i.$.PREMIUM_TENURE, a.K],
    [i.$.ORB_PROFILE, r.A.ORB_PROFILE_BADGE],
  ]);
  function c(e) {
    return d.get(e) ?? (0, s.BM)(e);
  }
  let u = new Set(Object.values(l));
  function _(e) {
    return u.has(e);
  }
}
