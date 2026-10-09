/* Recovered shipped factory. Module 269880.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8259054..8259982
 * Raw property SHA-256: 11c415add4027c6686582185d959c72b0d5b3d1757b9d9c404b91a55bc01c6e5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(477782),
    s = n(817281),
    l = n(775602),
    o = n(688810),
    d = n(823459),
    c = n(487245),
    u = n(363195),
    _ = n(964404),
    E = n(185928),
    A = n(652215),
    h = n(660183);
  function f() {
    let { analyticsLocations: e } = (0, o.Ay)(),
      {
        theme: t,
        useSystemTheme: n,
        useForcedColors: f,
      } = (0, r.cf)([u.A, _.Ay, l.Ay], () => ({
        theme: u.A.theme,
        useSystemTheme: _.Ay.useSystemTheme,
        useForcedColors: l.Ay.useForcedColors,
      }));
    function I(r, l) {
      return (0, i.jsx)(a.iD, {
        id: r,
        group: "input-modes",
        label: l,
        disabled: f,
        checked: n === E.Q_.ON ? "system" === r : r === t,
        action: () => {
          ((0, d.Py)(),
            (0, c.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${r}` }),
            (0, s.u_)({ theme: r }));
        },
      });
    }
    return [
      (0, i.jsxs)(
        a.rX,
        {
          children: [
            I(A.NJ8.LIGHT, h.intl.string(h.t.K2sFfo)),
            I(A.NJ8.ASH, h.intl.string(h.t.SMPT1k)),
            I(A.NJ8.DARK, h.intl.string(h.t.b8Cei3)),
            I(A.NJ8.ONYX, h.intl.string(h.t.Do4ZJx)),
            I("system", h.intl.string(h.t["7rOU6j"])),
          ],
        },
        "theme-items",
      ),
    ];
  }
}
