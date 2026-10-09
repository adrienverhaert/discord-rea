/* Recovered shipped factory. Module 771959.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4551480..4552847
 * Raw property SHA-256: dbb9c53404d629113ede8e729c05a45329b7ee4045cf7482a350f9cd8213a15d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => m, DA: () => T, QQ: () => I, UW: () => p, mj: () => f, zW: () => h });
  var i = n(582128),
    r = n(196765),
    a = n(17928),
    s = n(554146),
    l = n(47899),
    o = n(131607),
    d = n(181079),
    c = n(93055),
    u = n(501672),
    _ = n(652215);
  let E = (0, r.v)(() => ({ shouldShowPopover: !1, markPopoverAsDismissed: _.tEg })),
    A = !1;
  function h() {
    return A;
  }
  function f() {
    A = !1;
  }
  function I() {
    return {
      shouldShowPopover: E((e) => e.shouldShowPopover),
      markPopoverAsDismissed: E((e) => e.markPopoverAsDismissed),
    };
  }
  function p() {
    return (
      (0, l.dD)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO) &&
      (0, l.dD)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM)
    );
  }
  function T() {
    let e = (0, l.mB)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
      t = (0, l.mB)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
    return e && t;
  }
  let m = i.memo(function () {
    let { hasAccess: e, isFreemium: t } = (0, c.TW)("FavoritesGuildIntroPopover"),
      n = (0, a.bG)([d.A], () => !1 === d.A.favoriteGuildVisibleSetting),
      r = (0, u.A)(),
      h = (0, l.Ay)((e) => e.postConnectionOpen),
      [f, I] = (0, o.kn)(e && t && !n && r && h ? [s.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
      [p] = (0, o.kn)(
        f === s.M.FAVORITES_SERVER_ONBOARDING_INTRO
          ? [s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM]
          : [],
        void 0,
        !0,
      ),
      T = p === s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
    return (
      i.useEffect(() => {
        T && (A = !0);
      }, [T]),
      i.useLayoutEffect(() => {
        E.setState({ shouldShowPopover: T, markPopoverAsDismissed: I });
      }, [T, I]),
      i.useLayoutEffect(
        () => () => E.setState({ shouldShowPopover: !1, markPopoverAsDismissed: _.tEg }),
        [],
      ),
      null
    );
  });
}
