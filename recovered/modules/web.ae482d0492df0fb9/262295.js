/* Recovered shipped factory. Module 262295.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3080691..3081343
 * Raw property SHA-256: 422c0b5237f10ab816eb1c6fe8704b67432cecad2e22a3df8dfe5f3eefa15f36
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(174645);
  function l(e) {
    let {
      muted: t = !1,
      highlighted: n = !1,
      avatar: r,
      decorators: l,
      name: o,
      subText: d,
      avatarClassName: c,
      innerClassName: u,
      withDisplayNameStyles: _ = !1,
      ref: E,
    } = e;
    return (0, i.jsxs)("div", {
      ref: E,
      className: a()(s.Zp, u, { [s.SU]: t, [s.mr]: n }),
      children: [
        (0, i.jsx)("div", { className: a()(s.my, c), children: r }),
        (0, i.jsxs)("div", {
          className: a()(s.Qs, { [s.e8]: _ }),
          children: [
            (0, i.jsxs)("div", {
              className: s.BG,
              children: [(0, i.jsx)("div", { className: s.UU, children: o }), l],
            }),
            null != d ? (0, i.jsx)("div", { className: s.Sv, children: d }) : null,
          ],
        }),
      ],
    });
  }
  l.displayName = "AvatarWithText";
  let o = l;
}
