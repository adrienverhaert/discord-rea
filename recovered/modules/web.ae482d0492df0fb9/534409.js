/* Recovered shipped factory. Module 534409.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4154083..4154845
 * Raw property SHA-256: d39339aec062ccae489cb7a984f791890e61eb68f9d18e7a69cf47ea13e6e727
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k5: () => a, lV: () => s, qK: () => r });
  let i = (0, n(945810).mj)({
    kind: "user",
    name: "2025-04-desktop-refresh-fast-follows",
    defaultConfig: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !1 },
    variations: {
      1: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !1 },
      2: { largerGuildIcons: !1, darkerGuildListBackground: !0, distinctBorders: !1 },
      3: { largerGuildIcons: !0, darkerGuildListBackground: !0, distinctBorders: !1 },
      4: { largerGuildIcons: !1, darkerGuildListBackground: !1, distinctBorders: !0 },
      5: { largerGuildIcons: !0, darkerGuildListBackground: !1, distinctBorders: !0 },
    },
  });
  function r(e) {
    return !1;
  }
  function a(e) {
    return i.useConfig({ location: e }).darkerGuildListBackground;
  }
  function s(e) {
    return i.useConfig({ location: e }).distinctBorders;
  }
}
