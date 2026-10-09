/* Recovered shipped factory. Module 270574.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8005960..8006648
 * Raw property SHA-256: c9ab222a711c771f856613158546ff954facb57d148b07cb8fea837a014e0602
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, v: () => l.nu });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(709066),
    l = n(705751),
    o = n(646810);
  let d = function (e) {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: r,
      nameColor: l,
      className: d,
      botType: c,
      usernameClass: u,
      discriminatorClass: _,
      botClass: E,
      botVerified: A = !1,
      style: h,
      useRemSizes: f = !1,
      usernameIcon: I,
      guildTag: p,
    } = e;
    return (0, i.jsxs)("div", {
      className: a()(d, o.oM),
      style: h,
      children: [
        (0, i.jsxs)("span", {
          className: a()(o.Xh, u),
          style: null != l ? { color: l } : void 0,
          children: [I, t],
        }),
        p,
        null != n ? (0, i.jsxs)("span", { className: _ ?? void 0, children: ["#", n] }) : null,
        null != c
          ? (0, i.jsx)(s.A, {
              type: c,
              invertColor: r,
              className: a()(E, o.Od),
              verified: A,
              useRemSizes: f,
            })
          : null,
      ],
    });
  };
}
