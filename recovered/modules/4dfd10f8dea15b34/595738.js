/* Recovered shipped factory. Module 595738.
 * Source: recovered/web/assets/4dfd10f8dea15b34.js
 * UTF-16 property offsets: 95..1237
 * Raw property SHA-256: 4ec840c1c5aaccea375ffef661ec8870a23b1b86d284e3c37a4e66e06e22779c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, l, n) {
  n.d(l, { A: () => x });
  var r = n(477900);
  n(582128);
  var e = n(503698),
    a = n.n(e),
    i = n(297264),
    c = n(933832),
    t = n(834730),
    d = n(789645),
    o = n(376092),
    h = n(750382);
  function x(s) {
    let {
      grantedPermissions: l,
      disabledPermissions: n,
      grantedPermissionsHeader: e,
      disabledPermissionsHeader: x,
      className: m,
    } = s;
    return (0, r.jsxs)("div", {
      className: a()(h.p_, m),
      children: [
        null != l && l.length > 0
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                null != e
                  ? (0, r.jsx)(i.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: e,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: h.kL,
                  children: l.map((s) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className: h.EK,
                        children: [
                          (0, r.jsx)(c.CheckmarkLargeIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: h.z6,
                          }),
                          (0, r.jsx)(t.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
                        ],
                      },
                      s.toString(),
                    ),
                  ),
                }),
              ],
            })
          : null,
        null != n && n.length > 0
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                null != x
                  ? (0, r.jsx)(i.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: x,
                    })
                  : null,
                (0, r.jsx)("div", {
                  className: h.kL,
                  children: n.map((s) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className: h.EK,
                        children: [
                          (0, r.jsx)(d.P, { size: "xs", color: "currentColor", className: h.$A }),
                          (0, r.jsx)(t.E, { variant: "text-sm/normal", children: (0, o.hx)(s) }),
                        ],
                      },
                      s.toString(),
                    ),
                  ),
                }),
              ],
            })
          : null,
      ],
    });
  }
}
