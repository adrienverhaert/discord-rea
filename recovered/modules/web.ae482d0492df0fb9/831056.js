/* Recovered shipped factory. Module 831056.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8372870..8375167
 * Raw property SHA-256: 807ff88a44eb4069a622a02b9799c3abed290f07218639d36602f17f1e877fb8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    KP: () => A,
    Kb: () => f,
    OH: () => g,
    lx: () => p,
    nY: () => E,
    pK: () => I,
    zj: () => h,
  });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(297264),
    d = n(939249),
    c = n(871273),
    u = n(660183),
    _ = n(862649);
  function E(e) {
    let { url: t } = e;
    return null == t ? null : (0, i.jsx)("img", { src: t, alt: "", className: _.bU });
  }
  function A() {
    return (0, i.jsx)("div", {
      className: _.MM,
      "data-testid": "discord-web-video-player-end-screen",
    });
  }
  function h(e) {
    let { orientation: t, children: n } = e;
    return (0, i.jsx)("div", { className: s()(_.Pb, { [_.II]: "portrait" === t }), children: n });
  }
  function f(e) {
    let { url: t, orientation: n, ref: r } = e;
    return null == t
      ? null
      : (0, i.jsx)("img", {
          ref: r,
          src: t,
          alt: u.intl.string(c.default.E527vj),
          className: s()(_.C, { [_.TW]: "portrait" === n }),
        });
  }
  function I(e) {
    let { url: t, ref: n } = e;
    return null == t
      ? null
      : (0, i.jsx)("img", {
          ref: n,
          src: t,
          alt: u.intl.string(c.default.E527vj),
          className: _.xc,
        });
  }
  function p(e) {
    let { title: t, subtitle: n, ctaBtnLabel: r, onCTAClick: a, orientation: l, ctaIcon: o } = e;
    return (0, i.jsxs)("div", {
      className: s()(_.pP, { [_.iC]: "portrait" === l }),
      children: [
        (0, i.jsx)(T, { title: t, subtitle: n }),
        (0, i.jsx)(m, { label: r, icon: o, onClick: a }),
      ],
    });
  }
  function T(e) {
    let { title: t, subtitle: n } = e;
    return (0, i.jsxs)("div", {
      className: _.PH,
      children: [
        (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.m5, children: t }),
        (0, i.jsx)(o.D, { variant: "heading-sm/normal", className: _.s$, children: n }),
      ],
    });
  }
  function m(e) {
    let { label: t, icon: n, onClick: a, className: c } = e,
      [u, E] = r.useState(!1);
    function A() {
      E(!0);
    }
    function h() {
      E(!1);
    }
    return (0, i.jsxs)(d.D, {
      className: s()(_.uU, _.iM, c),
      onMouseEnter: A,
      onMouseLeave: h,
      onFocus: A,
      onBlur: h,
      onClick: a,
      children: [
        (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.ce, children: t }),
        null != n &&
          (0, i.jsx)(n, { size: "md", color: u ? l.A.colors.WHITE : "#B5BAC1", className: _.J5 }),
      ],
    });
  }
  function g(e) {
    let { title: t, subtitle: n, icon: a, onClick: l, className: c, divider: u } = e,
      [E, A] = r.useState(!1);
    function h() {
      A(!0);
    }
    function f() {
      A(!1);
    }
    return (0, i.jsx)(d.D, {
      className: s()(_.Mr, _.iM, c),
      onMouseEnter: h,
      onMouseLeave: f,
      onFocus: h,
      onBlur: f,
      onClick: l,
      children: (0, i.jsxs)("div", {
        className: _.ee,
        children: [
          (0, i.jsxs)("div", {
            className: _.XU,
            children: [
              (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.Zr, children: t }),
              (0, i.jsx)(o.D, { variant: "heading-sm/normal", className: _.Hk, children: n }),
            ],
          }),
          u,
          (0, i.jsx)(a, { size: "md", color: E ? "#FFFFFF" : "#B5BAC1", className: _.J5 }),
        ],
      }),
    });
  }
}
