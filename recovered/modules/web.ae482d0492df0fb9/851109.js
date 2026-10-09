/* Recovered shipped factory. Module 851109.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6121299..6122093
 * Raw property SHA-256: 361ad94ef0f39120a8e8e193944776fc79a7415e2a5686c8ebc1f042e6a8ec15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { GE: () => c, RK: () => l, U5: () => s, X8: () => d });
  var i,
    r,
    a = n(945810),
    s = (((i = {}).POPOUT = "popout"), (i.SIDEBAR = "sidebar"), (i.LEGACY = "legacy"), i),
    l =
      (((r = {}).SERVER_RAIL_TOP = "server-rail-top"),
      (r.SERVER_RAIL_BOTTOM = "server-rail-bottom"),
      (r.TITLE_BAR_LEFT = "title-bar-left"),
      r);
  let o = (0, a.mj)({
    name: "2026-04-desktop-notification-center",
    kind: "user",
    defaultConfig: { notificationCenterVariant: null, entrypoint: null, filterStyle: null },
    variations: {
      1: {
        notificationCenterVariant: "popout",
        entrypoint: "title-bar-left",
        filterStyle: "dropdown",
      },
      2: {
        notificationCenterVariant: "popout",
        entrypoint: "server-rail-top",
        filterStyle: "dropdown",
      },
      3: {
        notificationCenterVariant: "sidebar",
        entrypoint: "server-rail-top",
        filterStyle: "dropdown",
      },
    },
  });
  function d(e) {
    return o.useConfig(e);
  }
  function c(e) {
    return o.getConfig(e);
  }
}
