/* Recovered shipped factory. Module 866945.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7342821..7343727
 * Raw property SHA-256: 7d06d03767a3ac79f9413e4d325ca01d0b19ee56061cdce7f8a10666c88c4614
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { e: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(885574),
    o = n(834730),
    d = n(28863),
    c = n(939249),
    u = n(789645),
    _ = n(558001),
    E = n(835002),
    A = n(660183),
    h = n(323747);
  function f(e) {
    let { label: t, labelHook: n, count: a, dismissNotice: f, className: I, noticeType: p } = e,
      T = null != f;
    r.useEffect(() => {
      (0, _.N)(p, E.YX.VIEWED);
    }, [p]);
    let m = r.useCallback(() => {
        null != f && (f(), (0, _.N)(p, E.YX.DISMISS));
      }, [p, f]),
      g = r.useCallback(() => {
        (n(), (0, _.N)(p, E.YX.LEARN_MORE));
      }, [p, n]);
    return (0, i.jsxs)("div", {
      className: s()(h.I, I),
      children: [
        (0, i.jsx)(l.CircleInformationIcon, { size: "md" }),
        (0, i.jsx)(o.E, {
          variant: "text-sm/medium",
          color: "interactive-text-active",
          children:
            null != a
              ? A.intl.format(t, {
                  hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: g, children: e }, t),
                  count: a,
                })
              : A.intl.format(t, {
                  hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: g, children: e }, t),
                }),
        }),
        T && (0, i.jsx)(c.D, { className: h.b, onClick: m, children: (0, i.jsx)(u.P, {}) }),
      ],
    });
  }
}
