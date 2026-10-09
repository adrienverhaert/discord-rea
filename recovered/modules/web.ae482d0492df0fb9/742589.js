/* Recovered shipped factory. Module 742589.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5542351..5544401
 * Raw property SHA-256: 3104e2a48c940aafd2b3c6b268a74204f93f4bfc20173e4655129cf9d928a1fe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T, I: () => h });
  var i = n(477900);
  n(582128);
  var r = n(607399),
    a = n(793574),
    s = n(688810),
    l = n(268218),
    o = n(335180),
    d = n(723702),
    c = n(19575),
    u = n(58736),
    _ = n(746080),
    E = n(549575);
  let A = (0, l.Fe)({
    createPromise: () =>
      Promise.all([
        n.e("207309"),
        n.e("20409"),
        n.e("784993"),
        n.e("24922"),
        n.e("565617"),
        n.e("744385"),
        n.e("369501"),
        n.e("508371"),
        n.e("220803"),
        n.e("966016"),
        n.e("671367"),
        n.e("781202"),
        n.e("79171"),
        n.e("417664"),
        n.e("421225"),
        n.e("183752"),
      ]).then(n.bind(n, 239793)),
    webpackId: 239793,
    name: "Search",
    renderLoader: o.O7,
  });
  async function h(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
      let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
      "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
  }
  function f(e) {
    let {
      children: t,
      className: n,
      channelId: a,
      guildId: s,
      innerClassname: l,
      transparent: o = !1,
      hidden: d = !1,
      toolbar: c,
      mobileToolbar: f,
      "aria-label": I,
      "aria-labelledby": p,
      scrollable: T,
      role: m,
      hideSearch: g,
      disableDoubleClick: S,
      disableFocusRingScope: N,
      keepToastsBelow: C,
    } = e;
    return (0, i.jsx)(u.Ay, {
      className: n,
      innerClassName: l,
      toolbar: (function () {
        if (null == c) return null;
        let e = null != a && !g;
        return r.Fr
          ? f
          : (0, i.jsxs)(i.Fragment, {
              children: [
                c,
                e && !(0, _.jq)(a)
                  ? (0, i.jsx)(A, { guildId: s, channelId: a, className: E.$P }, s ?? a)
                  : null,
              ],
            });
      })(),
      transparent: o,
      hidden: d,
      onDoubleClick: () => h(S),
      "aria-label": I,
      "aria-labelledby": p,
      role: m,
      scrollable: T,
      disableFocusRingScope: N,
      keepToastsBelow: C,
      children: t,
    });
  }
  function I(e) {
    let {
      children: t,
      className: n,
      "aria-label": r,
      "aria-labelledby": a,
      role: s,
      disableDoubleClick: l,
      disableFocusRingScope: o,
      keepToastsBelow: d,
    } = e;
    return (0, i.jsx)(u.Ay, {
      className: n,
      onDoubleClick: () => h(l),
      "aria-label": r,
      "aria-labelledby": a,
      role: s,
      disableFocusRingScope: o,
      keepToastsBelow: d,
      children: t,
    });
  }
  function p(e) {
    let { isAuthenticated: t = !0, ...n } = e,
      { analyticsLocations: r } = (0, s.Ay)(a.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
      value: r,
      children: t
        ? (0, i.jsx)(f, { ...n, className: n.className })
        : (0, i.jsx)(I, { ...n, className: n.className }),
    });
  }
  ((p.Title = u.Ay.Title),
    (p.Icon = u.Ay.Icon),
    (p.ChannelIcon = u.Ay.ChannelIcon),
    (p.Divider = u.Ay.Divider),
    (p.Caret = u.Ay.Caret));
  let T = p;
}
