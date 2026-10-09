/* Recovered shipped factory. Module 75811.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7326515..7327113
 * Raw property SHA-256: 68099afb3de7a864f277a9af5e82216457c673ff02fd650c501624159b88b981
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { j: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(289873),
    o = n(834730),
    d = n(873353);
  function c(e) {
    let { chunks: t, columns: n, className: a } = e,
      c = r.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
    return null == t
      ? (0, i.jsx)("div", { className: d.Lq, children: (0, i.jsx)(l.y, {}) })
      : (0, i.jsx)("div", {
          style: c,
          className: s()(d.aY, a),
          children: t.map((e, t) =>
            (0, i.jsxs)(
              r.Fragment,
              {
                children: [
                  t > 0 && t % n == 0 && (0, i.jsx)("hr", { className: d.yF }),
                  (0, i.jsx)("div", {
                    className: d.iv,
                    children: (0, i.jsx)(o.E, {
                      className: d.ph,
                      variant: "code",
                      color: "text-default",
                      children: e,
                    }),
                  }),
                ],
              },
              `${e}-${t}`,
            ),
          ),
        });
  }
}
