/* Recovered shipped factory. Module 80330.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8024261..8025070
 * Raw property SHA-256: 5ca7d62133f23d29420f55e47e6eab6d9b90185525e12e796a2d11d2b49df1c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(140735),
    o = n(707554),
    d = n(939249),
    c = n(946356),
    u = n(660183),
    _ = n(71686);
  function E(e) {
    let { renderCards: t, heading: n, onExpand: a } = e,
      E = r.useId(),
      A = r.useMemo(() => t({ className: _.Nr }), [t]),
      [h] = A;
    return 0 === A.length
      ? null
      : (0, i.jsxs)("section", {
          "aria-labelledby": null != n ? E : void 0,
          className: _.kL,
          children: [
            null != n && (0, i.jsx)(l.A, { children: (0, i.jsx)(o.H, { id: E, children: n }) }),
            (0, i.jsx)(o.F, {
              children: (0, i.jsxs)("ul", {
                className: s()(_.ML, A.length > 1 && _.Kr),
                "aria-labelledby": null != n ? E : void 0,
                tabIndex: -1,
                children: [
                  (0, i.jsx)("li", { className: _.Us, children: h }),
                  A.length > 1 &&
                    (0, i.jsx)(d.D, {
                      tag: "li",
                      className: _.Ee,
                      onClick: a,
                      "aria-label": u.intl.string(u.t["OBCR+p"]),
                      children: (0, i.jsx)(c.A.Overlay, { className: _.h9, children: null }),
                    }),
                ],
              }),
            }),
          ],
        });
  }
}
