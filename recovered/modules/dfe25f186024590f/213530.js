/* Recovered shipped factory. Module 213530.
 * Source: recovered/web/assets/dfe25f186024590f.js
 * UTF-16 property offsets: 95..546
 * Raw property SHA-256: e8072b27dd9e5b90f45a7da719517e58c6c9dc8e3e1ca7d234c02371dd20a252
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { K: () => p });
  var l = t(477900),
    a = t(503698),
    u = t.n(a),
    c = t(17928),
    n = t(462887),
    r = t(607470),
    i = t(363195),
    d = t(770342);
  function p(e) {
    let { className: s, options: t } = e,
      a = (0, c.bG)([i.A], () => (0, n.M)(i.A.theme));
    return null == t
      ? null
      : null != t
        ? t.animated
          ? (0, l.jsx)(r.A, {
              src: t.getSrc(a),
              className: u()(d.O, s),
              style: t.style,
              loop: !1,
              muted: !0,
              autoPlay: !0,
            })
          : (0, l.jsx)("img", {
              src: t.getSrc(a),
              className: u()(d.O, s),
              style: t.style,
              alt: "",
              "aria-hidden": "true",
            })
        : null;
  }
}
