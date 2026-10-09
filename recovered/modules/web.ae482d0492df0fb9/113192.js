/* Recovered shipped factory. Module 113192.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4631925..4633067
 * Raw property SHA-256: 0f8384effcc2d0b5dba4325c9dd9a702b2f8a28a98e2e8b48f2306cd25610dc4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { v: () => g });
  var i = n(477900);
  n(582128);
  var r = n(646865),
    a = n(795816),
    s = n(47294),
    l = n(688810),
    o = n(429913),
    d = n(384059),
    c = n(235986),
    u = n(267102),
    _ = n(447404),
    E = n(271195),
    A = n(128286),
    h = n(625180),
    f = n(262579),
    I = n(165610),
    p = n(652215),
    T = n(977747),
    m = n(967481);
  function g(e) {
    let { frame: t, idle: n, onMouseDown: g, onMouseMove: S, onMouseLeave: N } = e,
      C = (0, o.h)(t.applicationId),
      O = (0, u.Us)() === p.BRT.POPOUT,
      { parentAnalyticsLocation: R } = (0, l.Ay)();
    return (0, i.jsxs)("div", {
      className: m._v,
      onMouseMove: S,
      onMouseDown: g,
      onMouseLeave: N,
      children: [
        (0, i.jsx)("div", {
          className: m.K1,
          children: (0, i.jsx)(E.X, {
            idle: n,
            title: C?.name ?? "",
            onJumpToChannel: function () {
              h.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: I.y0.FOCUSED });
            },
            preventIdleComponent: _.A,
          }),
        }),
        (0, i.jsx)("div", {
          className: m.q6,
          children: (0, i.jsxs)(c.A, {
            grow: 1,
            shrink: 1,
            justify: c.A.Justify.END,
            align: c.A.Align.CENTER,
            children: [
              O || (0, r.f)()
                ? null
                : (0, i.jsx)(A.A, {
                    className: T.BD,
                    popoutOpen: !1,
                    onOpenPopout: function () {
                      ((0, d.X)(R, d.O.POPOUT, !0),
                        (0, s.A)({
                          onConfirm: async () => {
                            (await h.A.refreshProxyTicket(t.id), (0, a.jp)());
                          },
                        }));
                    },
                    onClosePopout: p.FXj,
                  }),
              (0, i.jsx)(f.A, { frameId: t.id, className: T.BD }),
            ],
          }),
        }),
      ],
    });
  }
}
