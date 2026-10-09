/* Recovered shipped factory. Module 754692.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6632167..6634338
 * Raw property SHA-256: c13625762aed0e5d8eeb3ecf10a5564b79c9bb0c54b5dded593797a4d0ea360c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => m, U: () => g });
  var i = n(477900),
    r = n(582128),
    a = n(739187),
    s = n(857250),
    l = n(97483),
    o = n(73153),
    d = n(927018),
    c = n(503698),
    u = n.n(c),
    _ = n(939249),
    E = n(834730),
    A = n(64585),
    h = n(906688),
    f = n(857015);
  function I(e) {
    let { color: t } = e;
    return (0, i.jsxs)("svg", {
      width: "48",
      height: "28",
      viewBox: "0 0 55 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        (0, i.jsx)("rect", {
          x: "10.1968",
          y: "7",
          width: "14.4203",
          height: "14.4203",
          transform: "rotate(45 10.1968 7)",
          className: f.__invalid_toastBG,
        }),
        (0, i.jsx)("rect", {
          x: "27.3936",
          y: "0.59021",
          width: "23.4851",
          height: "23.4851",
          transform: "rotate(45 27.3936 0.59021)",
          className: f.__invalid_toastBG,
        }),
        (0, i.jsx)("rect", {
          x: "44.5903",
          y: "7",
          width: "14.4203",
          height: "14.4203",
          transform: "rotate(45 44.5903 7)",
          className: f.__invalid_toastBG,
        }),
        (0, i.jsx)("rect", {
          x: "10.1968",
          y: "13",
          width: "6",
          height: "6",
          transform: "rotate(45 10.1968 13)",
          fill: t,
        }),
        (0, i.jsx)("path", {
          d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
          fill: t,
        }),
        (0, i.jsx)("rect", {
          x: "44.5903",
          y: "13",
          width: "6",
          height: "6",
          transform: "rotate(45 44.5903 13)",
          fill: t,
        }),
      ],
    });
  }
  function p(e) {
    let { achievement: t, unlocked: n } = e,
      { name: a, description: s, rarity: l, hideDescriptionUntilUnlock: o, onAction: c } = t,
      { color: p } = (0, d.ag)(l);
    r.useEffect(() => {
      let e = setTimeout(() => {
        A.A.playAchievementUnlockSound();
      }, 50);
      return () => {
        clearTimeout(e);
      };
    }, []);
    let T = null != c && n,
      m = T ? _.D : "div";
    return (0, i.jsxs)(m, {
      className: u()(f.kL, T && f.b),
      onClick: function () {
        T && c();
      },
      children: [
        (0, i.jsx)("div", {
          className: f.zc,
          children: (0, i.jsx)(h.A, { achievementId: t.id, size: h.A.Sizes.SIZE_40, unlocked: n }),
        }),
        (0, i.jsxs)("div", {
          className: f.__invalid_nameContainer,
          children: [
            (0, i.jsx)(E.E, { variant: "text-md/semibold", color: "text-strong", children: a() }),
            (0, i.jsx)(E.E, {
              variant: "text-xs/medium",
              color: "text-default",
              children: o && !n ? "?????" : s(),
            }),
          ],
        }),
        (0, i.jsx)("div", { className: f.Db, children: (0, i.jsx)(I, { color: p }) }),
      ],
    });
  }
  var T = n(660183);
  function m(e) {
    o.h.dispatch({ type: "POGGERMODE_ACHIEVEMENT_UNLOCK", achievementId: e });
  }
  function g(e, t) {
    let n = (0, d.vM)(e);
    null != n &&
      (0, a.P)(
        (0, s.o)(T.intl.string(T.t.MPpEUA), l.Ck.CUSTOM, {
          position: l.xJ.BOTTOM,
          component: (0, i.jsx)(p, { achievement: n, unlocked: t }),
          duration: 6e3,
        }),
      );
  }
}
