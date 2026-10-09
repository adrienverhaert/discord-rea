/* Recovered shipped factory. Module 114212.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6044373..6046207
 * Raw property SHA-256: 8da7f8755a2d15d83bfeecc6345306af09a65e4275edfc6347e8d39df4c2a5af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Ay: () => T,
    B5: () => A,
    BP: () => f,
    FQ: () => _,
    Uj: () => I,
    VF: () => p,
    _G: () => h,
  });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(435558),
    l = n.n(s),
    o = n(707554),
    d = n(960036);
  function c(e) {
    return `${e / 16}rem`;
  }
  function u() {
    return (0, i.jsx)("div", { className: d.my, style: { opacity: 0.08 } });
  }
  function _(e) {
    let { width: t, height: n, opacity: r, className: s } = e,
      o = { width: c(t), opacity: null != r ? r : l().random(0.02, 0.08) };
    return (
      null != n && (o.height = c(n)),
      (0, i.jsx)("div", { className: a()(s, { [d.av]: !0 }), style: o })
    );
  }
  function E(e) {
    let t,
      {
        groupStart: n = !1,
        compact: r = !1,
        attachmentSpecs: s,
        usernameWidth: c,
        usernameOpacity: E,
        className: A,
        style: h,
      } = e,
      f = r ? 50 : l().random(40, 50);
    !r && n
      ? (t = (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(u, {}),
            (0, i.jsx)(o.H, {
              className: d.wx,
              children: (0, i.jsx)(_, { width: c, opacity: E, className: d.__invalid_username }),
            }),
          ],
        }))
      : r &&
        (t = (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(_, { width: f, className: a()({ [d.ce]: !0, [d.R]: !n }) }),
            (0, i.jsx)(o.H, { className: d.wx, children: (0, i.jsx)(_, { width: c, opacity: E }) }),
          ],
        }));
    let I = (0, i.jsxs)(i.Fragment, {
      children: [
        t,
        (0, i.jsx)("div", {
          className: d.Qs,
          children: (0, i.jsx)(_, { width: l().random(120, 320), opacity: 0.06 }),
        }),
      ],
    });
    return (0, i.jsxs)("div", {
      "aria-hidden": !0,
      className: a()(A, { [d.iE]: !0, [d.oE]: r, [d.E]: !r }),
      style: h,
      children: [
        r ? (0, i.jsx)("div", { className: d.PG, children: I }) : I,
        null != s &&
          (0, i.jsx)("div", {
            className: d.Dq,
            children: (0, i.jsx)("div", { className: d.oh, style: { opacity: 0.03, ...s } }),
          }),
      ],
    });
  }
  let A = 44,
    h = 22,
    f = 26,
    I = 26,
    p = 6;
  function T(e) {
    let { messages: t, groupSpacing: n = 0, compact: r = !1, attachmentSpecs: a, className: s } = e,
      o = null != a ? (a.last ? t - 1 : l().random(0, t - 1)) : -1,
      d = l().random(80, 120),
      u = l().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
      children: Array(t)
        .fill(null)
        .map((e, t) =>
          (0, i.jsx)(
            E,
            {
              compact: r,
              className: s,
              usernameWidth: d,
              usernameOpacity: u,
              groupStart: 0 === t,
              attachmentSpecs: t === o ? a : void 0,
              style: 0 === t ? { marginTop: c(n) } : void 0,
            },
            t,
          ),
        ),
    });
  }
}
