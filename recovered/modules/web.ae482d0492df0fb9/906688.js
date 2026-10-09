/* Recovered shipped factory. Module 906688.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6648928..6650219
 * Raw property SHA-256: f4b427ef0bd371910daf351aa07cae5bbc517325dfa8157152df6d3f439728d9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900);
  n(582128);
  var r = n(661531),
    a = n(462887),
    s = n(778712),
    l = n(369606),
    o = n(194261),
    d = n(736653),
    c = n(459793),
    u = n(927018),
    _ = n(700696);
  let E = {
      trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
      locked: r.A.unsafe_rawColors.PRIMARY_400.css,
      unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    },
    A = {
      trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
      locked: r.A.unsafe_rawColors.PRIMARY_400.css,
      unlocked: r.A.unsafe_rawColors.GREEN_330.css,
    };
  function h(e) {
    let { achievementId: t, unlocked: n, size: r = s._3.SIZE_40 } = e,
      h = (0, d.Ay)(),
      f = (0, u.vM)(t);
    if (null == f) return null;
    let I = (0, s.Kj)(r),
      { name: p, rarity: T } = f,
      { color: m } = (0, u.ag)(T),
      g = (0, a.M)(h) ? E : A,
      S = (I.size - I.offset - 2 * I.stroke) * 0.8,
      N = I.size - I.stroke,
      C = { width: 0.4 * S, height: 0.4 * S },
      O = {
        width: C.width + 1,
        height: C.height + 1,
        right: I.stroke + 1,
        bottom: I.stroke + 1,
        padding: 0,
      };
    return (0, i.jsxs)("div", {
      className: _.kL,
      style: { width: N, height: N, padding: I.stroke },
      "aria-label": `${p() ?? ""}`,
      children: [
        (0, i.jsx)("div", {
          className: _.r5,
          children: (0, i.jsx)(l.TrophyIcon, {
            size: "custom",
            color: n ? m : g.trophy,
            width: S,
            height: S,
          }),
        }),
        !n &&
          (0, i.jsx)("div", {
            className: _.dq,
            style: O,
            children: (0, i.jsx)(o.LockIcon, { size: "custom", color: g.locked, ...C }),
          }),
        n &&
          T === u.md.LEGENDARY &&
          (0, i.jsx)("div", {
            className: _.dq,
            style: O,
            children: (0, i.jsx)(c.A, { className: _.ox, ...C }),
          }),
      ],
    });
  }
  h.Sizes = s._3;
}
