/* Recovered shipped factory. Module 639719.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8171453..8173003
 * Raw property SHA-256: 09f9f81133d93f2f75d2242b4b3ed0cd4a7d8e8145a37f9b349e7def0f1f60e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { default: () => m });
  var i = n(477900),
    r = n(582128),
    a = n(562708),
    s = n(702841),
    l = n(509434),
    o = n(772707),
    d = n(331322),
    c = n(834730),
    u = n(404778),
    _ = n(803306),
    E = n(139286),
    A = n(870570),
    h = n(652215),
    f = n(660183),
    I = n(304133),
    p = n(546);
  function T(e) {
    let { text: t } = e;
    return (0, i.jsxs)("li", {
      className: I.nf,
      children: [t, " ", (0, i.jsx)(l.I, { size: "sm", color: "currentColor" })],
    });
  }
  function m(e) {
    let { transitionState: t } = e,
      n = (0, s.bG)([A.A], () => A.A.getAction()),
      [l, m] = r.useState(!1);
    async function g() {
      return (m(!0), n === h.a3B.AGREEMENTS && m(await (0, _.Q9)()), null);
    }
    return (
      (0, E.A)(
        {
          type: a.ImpressionTypes.VIEW,
          name: a.ImpressionNames.USER_AGREEMENTS,
          properties: { required_action: n },
        },
        {},
        [],
      ),
      (0, i.jsx)(o.k, {
        graphic: { src: p.A, type: "image" },
        gradientColor: "blue",
        dismissable: !1,
        title: f.intl.string(f.t["7glvXu"]),
        subtitle: f.intl.string(f.t["+USXQE"]),
        actions: [
          { variant: "primary", text: f.intl.string(f.t["+TBKL1"]), onClick: g, loading: l },
        ],
        transitionState: t,
        onClose: h.js$,
        children: (0, i.jsxs)(d.B, {
          gap: 20,
          children: [
            n === h.a3B.AGREEMENTS
              ? (0, i.jsx)(c.E, {
                  variant: "text-md/normal",
                  className: I.h_,
                  children: f.intl.format(f.t.CN0Hvb, { url: h.X7G.TERMS_SUMMARY }),
                })
              : null,
            (0, i.jsx)("div", {
              className: I.kL,
              children: (0, i.jsxs)("ul", {
                className: I.yJ,
                children: [
                  (0, i.jsx)(T, { text: f.intl.format(f.t.iw0hFi, { url: h.X7G.TERMS }) }),
                  (0, i.jsx)(u.c, {}),
                  (0, i.jsx)(T, { text: f.intl.format(f.t["36klnD"], { url: h.X7G.PAID_TERMS }) }),
                  (0, i.jsx)(u.c, {}),
                  (0, i.jsx)(T, { text: f.intl.format(f.t.TquFBF, { url: h.X7G.PRIVACY }) }),
                  (0, i.jsx)(u.c, {}),
                  (0, i.jsx)(T, { text: f.intl.format(f.t.ia96Tb, { url: h.X7G.GUIDELINES }) }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  }
}
