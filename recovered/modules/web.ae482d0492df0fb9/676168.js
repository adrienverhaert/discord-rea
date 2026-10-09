/* Recovered shipped factory. Module 676168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4540098..4541322
 * Raw property SHA-256: 911617742800dbb254fdbc82f3f65a9c31d9a5e8b3de8880659681a721c7746b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { dt: () => _, k3: () => I, r1: () => f, zO: () => h });
  var i = n(582128),
    r = n(554146),
    a = n(131607),
    s = n(595529),
    l = n(379587),
    o = n(93055),
    d = n(501672),
    c = n(771959),
    u = n(49999);
  let _ = [
      r.M.FAVORITES_SERVER_ONBOARDING_INTRO,
      r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
      r.M.FAVORITES_GUILD_NEW_BADGE,
      r.M.FAVORITES_GUILD_SUGGESTIONS,
    ],
    E = [r.M.FAVORITES_SERVER_ONBOARDING_INTRO, r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM],
    A = [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
  function h(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
      n = (0, o.DZ)(),
      i = (0, d.A)(),
      c =
        (function () {
          let [e] = (0, s.gc)(E);
          return e ?? null;
        })() === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
      [u, _] = (0, a.kn)(t && e && i && !n && c ? [r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : []);
    return {
      shouldShowPopover: u === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
      markPopoverAsDismissed: _,
    };
  }
  function f() {
    let [e] = (0, s.gc)(A),
      t = e === r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
      [n, a] = i.useState(t);
    return (t && !n && a(!0), (t || n) && !(0, c.zW)());
  }
  function I(e) {
    let { isFreemium: t } = (0, l.m)({ location: "FavoritesDismissibleContent" }),
      [n, i] = (0, a.kn)(t && e ? [r.M.FAVORITES_GUILD_NEW_BADGE] : []),
      s = n === r.M.FAVORITES_GUILD_NEW_BADGE;
    return {
      shouldShowBetaTag: s,
      dismissBetaTag: () => {
        s && i(u.i.TAKE_ACTION);
      },
    };
  }
}
