/* Recovered shipped factory. Module 586172.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7729545..7730875
 * Raw property SHA-256: 2e9ffd024001d04d661bfc08af2eea8b899a6543354cf67aea9457edda53076f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => I, L: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(945810),
    s = n(626551),
    l = n(503698),
    o = n.n(l),
    d = n(768947),
    c = n(389437);
  function u(e) {
    let { code: t, lang: n, highlightedClassName: a, ...s } = e,
      l = r.useMemo(() => (0, d.py)(n), [n]);
    return null == l
      ? (0, i.jsx)(_, { code: t, ...s })
      : (0, i.jsx)(r.Suspense, {
          fallback: (0, i.jsx)(_, { code: t, ...s }),
          children:
            "ansi" === l
              ? (0, i.jsx)(A, { code: t, highlightedClassName: a, ...s })
              : (0, i.jsx)(E, { code: t, lang: l, highlightedClassName: a, ...s }),
        });
  }
  function _(e) {
    let { code: t, ...n } = e;
    return (0, i.jsx)("code", { ...n, children: t });
  }
  function E(e) {
    let { code: t, lang: n, className: r, highlightedClassName: a, ...s } = e,
      l = (0, d.OY)(n, t);
    return null == l
      ? (0, i.jsx)(_, { code: t, className: r, ...s })
      : (0, i.jsx)(h, { html: l, className: o()(r, `language-${n}`, a), ...s });
  }
  function A(e) {
    let { code: t, className: n, highlightedClassName: a, ...l } = e,
      u = r.useMemo(() => (0, s.$M)(t), [t]);
    return (0, i.jsx)("code", {
      className: o()(n, c.ansi, a),
      ...l,
      children: u.map((e, t) => (0, i.jsx)("span", { style: (0, d.OT)(e), children: e.value }, t)),
    });
  }
  function h(e) {
    let { html: t, ...n } = e;
    return (0, i.jsx)("code", { ...n, dangerouslySetInnerHTML: { __html: t } });
  }
  let f = (0, a.mj)({
    name: "2026-03-arborium-highlight",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function I(e) {
    let { children: t, location: n, ...r } = e,
      { enabled: a } = f.useConfig({ location: n });
    return a ? (0, i.jsx)(u, { ...r }) : t;
  }
}
