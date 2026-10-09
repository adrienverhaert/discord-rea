/* Recovered shipped factory. Module 834730.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10458022..10458821
 * Raw property SHA-256: 6f2936c9f4c32d1df75f47fc8ddd32f415b9874f90851320c6e8e1909cf2095c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(282802),
    l = n.n(s),
    o = n(661531),
    d = n(108306),
    c = n(736541);
  let u = Object.fromEntries(Object.keys(o.A.colors).map((e) => [l()(e), e]));
  function _(e) {
    let t,
      {
        variant: n,
        tag: r = "div",
        selectable: s = !1,
        className: l,
        lineClamp: _,
        color: E,
        tabularNumbers: A = !1,
        scaleFontToUserSetting: h = !1,
        ref: f,
        ...I
      } = e,
      p = "",
      T = {};
    if (
      (null != _ &&
        (1 === _ ? (p = d.DN) : ((p = d.ED), (T = { lineClamp: _, WebkitLineClamp: _ }))),
      void 0 !== E)
    )
      switch (E) {
        case "currentColor":
          t = "currentColor";
          break;
        case "none":
          t = void 0;
          break;
        default:
          t = o.A.colors[u[E]]?.css;
      }
    let m = { color: t, ...T, ...I.style };
    return (0, i.jsx)(r, {
      ref: f,
      className: a()(
        { [d.fT]: void 0 === E, [d.rb]: s, [d.w9]: A, [c.fontScaling]: h },
        p,
        c[n],
        l,
      ),
      ...I,
      style: Object.values(m).filter(Boolean).length > 0 ? m : void 0,
      "data-text-variant": n,
    });
  }
}
