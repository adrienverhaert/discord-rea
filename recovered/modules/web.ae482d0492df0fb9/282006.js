/* Recovered shipped factory. Module 282006.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3230612..3231697
 * Raw property SHA-256: 75b03ac3d495ccad4198a9e4741b7d4aa5ce197713fb9e002e56dd3db6d9e123
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Y: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(140735),
    l = n(442433),
    o = n(485947),
    d = n(69282),
    c = n(657048),
    u = n(773669),
    _ = n(652215),
    E = n(660183),
    A = n(4577);
  let h = r.memo(function (e) {
    let { id: t, title: h, count: f, guildId: I, className: p } = e,
      T = (0, d.Xx)({ roleId: t, guildId: I, size: 16 }),
      m = (0, a.bG)(
        [u.default],
        () => (null == f ? null : new Intl.NumberFormat(u.default.locale).format(f)),
        [f],
      ),
      g = r.useCallback(
        (e) => {
          T?.src != null &&
            (0, l.L3)(e, async () => {
              let { default: e } = await Promise.all([n.e("95340"), n.e("733743")]).then(
                n.bind(n, 455538),
              );
              return (t) => (0, i.jsx)(e, { ...t, imageUrl: T.src });
            });
        },
        [T?.src],
      );
    return t === _.clD.UNKNOWN
      ? (0, i.jsx)("div", { className: p, children: (0, i.jsx)("div", { className: A.k1 }) })
      : (0, i.jsxs)(o.A, {
          className: p,
          children: [
            (0, i.jsx)(s.A, {
              children: null == f ? h : E.intl.format(E.t.Uaqbke, { title: h, count: f }),
            }),
            (0, i.jsxs)("div", {
              className: A.CN,
              "aria-hidden": !0,
              children: [
                null != T
                  ? (0, i.jsx)("span", {
                      onContextMenu: g,
                      children: (0, i.jsx)(c.A, { className: A.UT, ...T }),
                    })
                  : null,
                (0, i.jsx)("span", { className: A.iy, children: h }),
                null == m ? null : (0, i.jsxs)("span", { children: ["\xa0\u2014 ", m] }),
              ],
            }),
          ],
        });
  });
}
