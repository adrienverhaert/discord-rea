/* Recovered shipped factory. Module 812993.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9888956..9890623
 * Raw property SHA-256: 8a662fc0f0cc95e02ba8501a6e6957f6a7f3efad55c49b1d83b1efe5e1a6fdac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    EG: () => c,
    Gu: () => _,
    JI: () => h,
    Lp: () => A,
    SC: () => I,
    fk: () => f,
    hV: () => E,
    o6: () => u,
  });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(85463),
    o = n(834730),
    d = n(306091);
  let c = { ROUND: d.rS, ROUND_LEFT: d.Q2, ROUND_RIGHT: d.Hg, SQUARE: "" };
  function u(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
  }
  function _(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
  }
  function E(e) {
    let {
        count: t,
        color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        disableColor: r = !1,
        shape: E = c.ROUND,
        className: A,
        style: h,
        renderBadgeCount: f = _,
        ...I
      } = e,
      p = (0, l.N)();
    return (0, i.jsx)(o.E, {
      variant: p,
      color: "none",
      className: a()(A, d.Do, E),
      style: { backgroundColor: r ? void 0 : n, width: u(t), ...h },
      ...I,
      children: f(t),
    });
  }
  function A(e) {
    let {
        text: t,
        className: n,
        color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        shape: u = c.ROUND,
        disableColor: _ = !1,
        style: E,
        ...A
      } = e,
      h = (0, l.N)();
    return (0, i.jsx)(o.E, {
      variant: h,
      color: "none",
      className: a()(n, d.U1, u),
      style: { backgroundColor: _ ? void 0 : r, ...E },
      ...A,
      children: t,
    });
  }
  function h(e) {
    let { text: t, className: n, ...r } = e;
    return (0, i.jsx)(A, { className: a()(d.BE, n), text: t, ...r });
  }
  function f(e) {
    let {
        icon: t,
        className: n,
        color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        shape: u = c.ROUND,
        disableColor: _ = !1,
        style: E,
        "aria-label": A,
      } = e,
      h = (0, l.N)();
    return (0, i.jsx)(o.E, {
      variant: h,
      color: "none",
      className: a()(n, d.u3, u),
      style: { backgroundColor: _ ? void 0 : r, ...E },
      role: null != A ? "img" : void 0,
      "aria-label": A,
      children: (0, i.jsx)(t, { className: d.Kk, color: "currentColor" }),
    });
  }
  function I(e) {
    let {
      className: t,
      color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
      shape: r = c.ROUND,
      disableColor: l = !1,
      style: o,
      ...u
    } = e;
    return (0, i.jsx)("div", {
      className: a()(t, d.Ky, r),
      style: { backgroundColor: l ? void 0 : n, ...o },
      ...u,
    });
  }
}
