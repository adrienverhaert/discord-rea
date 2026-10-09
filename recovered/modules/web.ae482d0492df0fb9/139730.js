/* Recovered shipped factory. Module 139730.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8141654..8142876
 * Raw property SHA-256: f0bee2ae40a5787133f3545292c136cc13d349d1c413be73354562da6f5e89e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(589812),
    o = n(598748),
    d = n(331322),
    c = n(834730),
    u = n(890856),
    _ = n(619517),
    E = n(183555),
    A = n(946356),
    h = n(981006);
  function f(e) {
    let { applicationName: t, applicationIcon: n } = e;
    return (0, i.jsxs)(d.B, {
      direction: "horizontal",
      gap: 4,
      children: [
        null != n
          ? (0, i.jsx)(_.Ay, { width: 16, height: 16, src: n, className: h.In })
          : (0, i.jsx)("div", { className: h.Fi }),
        (0, i.jsx)(c.E, { variant: "text-xs/medium", children: t }),
      ],
    });
  }
  function I(e) {
    let { application: t, rendererProps: n, className: a, onClick: d, renderText: c } = e,
      { trackUserProfileAction: _ } = (0, E.NJ)(),
      I = n.surfaceConfigs[o.m.MINI_PROFILE],
      p = t.id;
    return (!(function (e) {
      let { trackUserProfileAction: t } = (0, E.NJ)(),
        n = r.useRef(!1);
      r.useEffect(() => {
        n.current ||
          (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (n.current = !0));
      }, [t, e]);
    })(p),
    null == I)
      ? null
      : (0, i.jsx)(u.s, {
          onClick: (e) => {
            e.target?.closest("a") == null &&
              (_({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: p }), d?.());
          },
          "aria-label": t.name,
          children: (0, i.jsx)(A.A.Overlay, {
            className: s()(h.kL, a),
            children: (0, i.jsx)(l.kH, {
              ...n,
              renderText: c,
              surface: o.m.MINI_PROFILE,
              surfaceConfig: I,
              header: (0, i.jsx)(f, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
            }),
          }),
        });
  }
}
