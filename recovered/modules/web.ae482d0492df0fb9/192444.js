/* Recovered shipped factory. Module 192444.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7006917..7010461
 * Raw property SHA-256: c3b1e01343848aea468b37fe0f82dfd24d8106d9268a174042293de0b9d6bda4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    NN: () => T,
    n6: () => I,
    OO: () => u,
    Ig: () => A,
    aD: () => p,
    Se: () => _,
    uK: () => c,
    lk: () => f,
    LV: () => S,
    Mk: () => g,
    sy: () => E,
    d: () => m,
  });
  var i,
    r,
    a,
    s =
      (((i = {})[(i.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
        "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
      i),
    l = n(945810),
    o = n(646917),
    d = n(576761);
  let c = (0, l.mj)({
      name: "2025-11-video-end-card-v2",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    u = (0, l.mj)({
      name: "2026-05-app-store-overlay-feature-gate",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
  (0, l.mj)({
    name: "2026-07-custom-app-store-overlay",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  let _ = (0, l.mj)({
    name: "2026-07-ios-attribution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  var E =
    (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
    (r[(r.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (r[(r.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    r);
  let A = (0, l.mj)({
      name: "2026-03-muted-video-quest-new-defaults",
      kind: "user",
      defaultConfig: { enabled: !1, variant: 0 },
      variations: {
        0: { enabled: !1, variant: 0 },
        1: { enabled: !0, variant: 1 },
        2: { enabled: !0, variant: 2 },
      },
    }),
    h = (0, l.mj)({
      name: "2026-04-quests-premium-orb-multiplier-marketing",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
  function f(e) {
    let { enabled: t } = h.useConfig({ location: e }),
      n = (0, o.z)();
    return {
      shouldShowBonusOrbsUX: n !== d.MA.INELIGIBLE && n !== d.MA.XBOX_GAME_PASS && t,
      multiplier: s.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
  }
  let I = (0, l.mj)({
    name: "2026-04-composed-quest-player",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  (0, l.mj)({
    name: "2026-03-mobile-quest-home-red-dot-notification",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  let p = (0, l.mj)({
    name: "2026-05-quest-home-tile-redesign",
    kind: "user",
    defaultConfig: {
      useNewLayoutWithSearch: !1,
      useNewTile: !1,
      useNewFeaturedTiles: !1,
      ctaOnHover: !1,
    },
    variations: {
      0: { useNewLayoutWithSearch: !1, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
      1: { useNewLayoutWithSearch: !0, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
      2: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !0 },
      3: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !1, ctaOnHover: !0 },
      4: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !1 },
    },
  });
  (0, l.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  let T = (0, l.mj)({
    name: "2026-09-mobile-quest-home-sort-priority",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var m =
    (((a = {})[(a.CONTROL = 0)] = "CONTROL"),
    (a[(a.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
    (a[(a.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
    (a[(a.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
    (a[(a.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
    a);
  let g = (0, l.mj)({
    name: "2026-06-quest-home-layout-visual-tweaks",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: {
      0: { enabled: !1, variant: 0 },
      1: { enabled: !0, variant: 1 },
      2: { enabled: !0, variant: 2 },
      3: { enabled: !0, variant: 3 },
      4: { enabled: !0, variant: 4 },
    },
  });
  (0, l.mj)({
    name: "2026-09-quest-mobile-bar-secondary-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  let S = (0, l.mj)({
    name: "2026-09-new-orb-reward-visuals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  (0, l.mj)({
    name: "2026-09-mobile-quest-reward-button-to-secondary-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
}
