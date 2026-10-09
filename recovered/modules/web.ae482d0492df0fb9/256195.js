/* Recovered shipped factory. Module 256195.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8330839..8331983
 * Raw property SHA-256: b6dc6a66ae52546f9023fd8fa30a84c02050c416cf2a658af122bcb0ff1a2709
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(821609),
    o = n(866665),
    d = n(408278),
    c = n(622631),
    u = n(401843),
    _ = n(616356),
    E = n(280450),
    A = n(200749),
    h = n(660183),
    f = n(604889);
  let I = n(913516);
  function p(e) {
    let { participant: t, width: n, noArt: r = !1, selected: p = !1 } = e,
      T = n < 195,
      m = (0, s.bG)([_.A, E.default], () =>
        _.A.getAllActiveStreams().some((e) => {
          let { ownerId: t } = e;
          return t !== E.default.getId();
        }),
      );
    return (0, i.jsx)("div", {
      className: a()(f.Qs, f.FY),
      children: (0, i.jsx)(A.A, {
        className: f.FP,
        artURL: I,
        noArt: r,
        selected: p,
        size: (0, A.J)(n),
        header: T ? null : h.intl.string(h.t.epU4Ec),
        description: p
          ? null
          : (0, i.jsxs)("div", {
              className: a()(f.t2, { [f.y8]: !T }),
              children: [
                (0, i.jsx)("div", {
                  className: f.lO,
                  children: (0, i.jsx)(l.$, {
                    variant: "secondary",
                    size: T ? "sm" : "md",
                    text: n < 175 ? h.intl.string(h.t.I6JG46) : h.intl.string(h.t["7Xq/nV"]),
                  }),
                }),
                m
                  ? (0, i.jsx)("div", {
                      className: a()(f.lO, f.EU),
                      children: (0, i.jsx)(o.m, {
                        text: h.intl.string(h.t.wCrzut),
                        children: (0, i.jsx)(d.K, {
                          variant: "secondary",
                          size: T ? "sm" : "md",
                          icon: c.v,
                          "aria-label": h.intl.string(h.t.wCrzut),
                          onClick: (e) => {
                            (e.stopPropagation(), (0, u.A9)(t.stream, { forceMultiple: !0 }));
                          },
                        }),
                      }),
                    })
                  : null,
              ],
            }),
      }),
    });
  }
}
