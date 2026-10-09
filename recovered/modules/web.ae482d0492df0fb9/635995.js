/* Recovered shipped factory. Module 635995.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6890476..6891344
 * Raw property SHA-256: a0b9101d4edf44437eaed8c3ffe9d4d3e525f4c057c07c864c0ff7b9d2e61d8e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { In: () => h, T0: () => I, fY: () => f });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(821609),
    l = n(297264),
    o = n(403581),
    d = n(43990),
    c = n(939249),
    u = n(789645),
    _ = n(818348),
    E = n(660183),
    A = n(698833);
  function h(e) {
    let { children: t } = e;
    return (0, i.jsx)(l.D, {
      variant: "heading-sm/medium",
      color: "text-strong",
      className: A.ut,
      children: t,
    });
  }
  function f(e) {
    let { text: t, onClick: n, icon: r = o.t, iconPosition: a } = e;
    return (0, i.jsx)(s.$, {
      onClick: n,
      text: t,
      size: "sm",
      icon: r,
      iconPosition: a,
      variant: "overlay-primary",
    });
  }
  function I(e) {
    let { className: t, ref: n, children: r, onClick: s } = e;
    return (0, i.jsx)(d.N, {
      theme: _.NJ.DARK,
      children: (e) =>
        (0, i.jsxs)("div", {
          ref: n,
          className: a()(A.lm, e, t),
          children: [
            (0, i.jsx)("div", { className: A.qZ, children: r }),
            (0, i.jsx)(c.D, {
              focusProps: { offset: 6 },
              className: A.b,
              onClick: s,
              "aria-label": E.intl.string(E.t.WAI6xu),
              children: (0, i.jsx)(u.P, { size: "sm" }),
            }),
          ],
        }),
    });
  }
}
