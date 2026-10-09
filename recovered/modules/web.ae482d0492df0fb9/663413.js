/* Recovered shipped factory. Module 663413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4042138..4043043
 * Raw property SHA-256: 7e3a094389f9da522a5514e74f5d4f0dd89104cee90d8eea8e6093135e4dc4cb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(667498),
    o = n(806163),
    d = n(17928),
    c = n(590703),
    u = n(265059),
    _ = n(567249),
    E = n(597619),
    A = n(892019),
    h = n(726249),
    f = n(203480),
    I = n(652215);
  let p = new Set([I.BVt.LOGIN, I.BVt.REGISTER]),
    T = r.memo(function (e) {
      let { children: t, skipsSettingDefaultPageTitle: n } = e;
      (0, h.cu)({ skipsSettingDefaultPageTitle: n });
      let { clientThemesClassName: a, clientThemesCSS: T } = (0, c.Ay)(),
        m = r.createElement("style", { [c.Vg]: !0 }, T);
      return (0, i.jsxs)(l.mg, {
        children: [
          (function (e) {
            let { lang: t, style: n, className: a } = (0, E.xb)(),
              l = (0, o.zy)(),
              c = r.useMemo(() => p.has(l.pathname), [l.pathname]);
            ((0, f.A)(window, c), (0, A.A)(document.documentElement));
            let h = (0, d.bG)([u.A, _.A], () =>
              _.A.getWindowOpen(I.MLl.DEVTOOLS_POPOUT) ? 0 : u.A.sidebarWidth,
            );
            return (0, i.jsx)("html", {
              lang: t,
              style: `${n} --devtools-sidebar-width: ${h}px;`,
              className: s()(a, e, { overlay: __OVERLAY__ }),
            });
          })(a),
          m,
          t,
        ],
      });
    });
}
