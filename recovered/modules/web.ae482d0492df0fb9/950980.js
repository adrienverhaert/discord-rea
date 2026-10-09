/* Recovered shipped factory. Module 950980.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4402423..4404682
 * Raw property SHA-256: b27c982966cfa93519283a66bc1c20547b7431e3e288f9b6ca4026fe52d6d1a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ExperimentEmbed: () => R });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(739187),
    l = n(97483),
    o = n(939249),
    d = n(173936),
    c = n(834730),
    u = n(331322),
    _ = n(776078),
    E = n(821609),
    A = n(280450),
    h = n(287809),
    f = n(957565),
    I = n(100392),
    p = n(102609),
    T = n(271478),
    m = n(386976),
    g = n(257433),
    S = n(32523),
    N = n(688151),
    C = n(263748);
  function O(e) {
    let { url: t } = e,
      n = r.useCallback(() => {
        (0, f.C)(t, () =>
          (0, s.P)({
            id: "experiment-link-copied",
            message: "Copied experiment link",
            type: l.Ck.SUCCESS,
          }),
        );
      }, [t]);
    return (0, i.jsx)(o.D, {
      className: C.wp,
      onClick: n,
      children: (0, i.jsx)(d.LinkIcon, { size: "sm", color: "currentColor" }),
    });
  }
  function R(e) {
    let { url: t } = e,
      n = (0, I.OL)(t),
      s = (0, I.Kb)(t),
      { experiments: l, overridesInfo: o } = (0, S.hI)(),
      { experiments: d, overridesInfo: f } = (0, m.op)(),
      R = r.useMemo(() => (null == n ? null : null != l[n] ? l[n] : d[n]), [l, d, n]),
      L = r.useMemo(() => {
        if (null == n);
        else if (null != o[n]) return o[n];
        else if (null != f[n]) return f[n];
      }, [o, f, n]),
      y = A.default.getId(),
      D = (0, g.Fm)(R, y),
      v = r.useMemo(() => (0, I.GI)(R, D), [D, R]),
      b = (0, a.bG)([h.default], () => {
        let e = h.default.getCurrentUser();
        return e?.isStaff() || e?.isStaffPersonal();
      });
    if (null == n || null == R) return null;
    let M = (0, I.hp)(R).find((e) => e.value === s),
      P = null != M ? N.Ps.EXPERIMENT_TREATMENT : N.Ps.EXPERIMENT,
      U = null != L && null != M && L.variantId === M.value,
      w = (0, i.jsx)(O, { url: t }),
      G = null;
    return (P === N.Ps.EXPERIMENT_TREATMENT && null != M
      ? (G = (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: M.label }))
      : null != D &&
        (G = (0, i.jsxs)(c.E, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ["Server Config: ", v],
        })),
    b)
      ? (0, i.jsxs)("div", {
          className: C.zr,
          children: [
            (0, i.jsx)("div", {
              children: (0, i.jsx)("div", {
                className: C.wx,
                children: (0, i.jsxs)(u.B, {
                  direction: "horizontal",
                  justify: "space-between",
                  children: [
                    (0, i.jsxs)(u.B, {
                      direction: "horizontal",
                      gap: 8,
                      children: [
                        (0, i.jsx)(_.g, { size: "lg" }),
                        (0, i.jsxs)(u.B, {
                          direction: "vertical",
                          gap: 0,
                          children: [
                            (0, i.jsx)(c.E, { variant: "text-md/semibold", children: R.title }),
                            G,
                          ],
                        }),
                      ],
                    }),
                    w,
                  ],
                }),
              }),
            }),
            null != M
              ? (0, i.jsx)(E.$, {
                  fullWidth: !0,
                  variant: U ? "critical-primary" : "primary",
                  text: U ? `Clear Treatment ${M.value}` : `Apply Treatment ${M.value}`,
                  onClick: function () {
                    null == n ||
                      null == R ||
                      (null != M &&
                        (U ? (0, p.t$)(R.system, n, null) : (0, p.t$)(R.system, n, M.value)));
                  },
                })
              : (0, i.jsx)("div", {
                  className: C.uh,
                  children: (0, i.jsx)(T.g, { experiment: R, experimentId: n, overrideInfo: L }),
                }),
          ],
        })
      : null;
  }
}
