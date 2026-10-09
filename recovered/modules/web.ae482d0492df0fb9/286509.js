/* Recovered shipped factory. Module 286509.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4529565..4530366
 * Raw property SHA-256: 39eebe35d25a0c482b5250189abdc6929b7f0cd9ace0c88c516661f5f9737c02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(834730),
    d = n(847374),
    c = n(650583),
    u = n(146583);
  let _ = r.memo(function (e) {
    let {
      children: t,
      trailing: n,
      className: r,
      icon: a,
      isCollapsed: _,
      onClick: E,
      "aria-label": A,
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(u.iE, r),
      children: [
        (0, i.jsxs)(l.D, {
          onClick: E,
          onKeyDown: (e) => {
            e.key !== c.dh.ESCAPE && e.stopPropagation();
          },
          className: s()(u.wx, { [u.bG]: null != _ }),
          "aria-expanded": null != _ ? !_ : void 0,
          "aria-label": A,
          children: [
            null != a && (0, i.jsx)("div", { "aria-hidden": !0, className: u.nr, children: a }),
            (0, i.jsx)(o.E, {
              tag: "span",
              variant: "text-sm/semibold",
              color: "none",
              lineClamp: 1,
              className: u.Gp,
              children: t,
            }),
            null != _
              ? (0, i.jsx)(d.a, {
                  size: "custom",
                  color: "currentColor",
                  className: s()(u.Cj, { [u.Tu]: _ }),
                  height: 16,
                  width: 16,
                })
              : null,
          ],
        }),
        n,
      ],
    });
  });
}
