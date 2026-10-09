/* Recovered shipped factory. Module 900730.
 * Source: recovered/web/assets/3ef6861df6635ca9.js
 * UTF-16 property offsets: 315..842
 * Raw property SHA-256: c8ff61499f648ebcaeb8d858756ad3b2a1f1b642b40b9e355a6e476cedd67555
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { c: () => d });
  var l = n(477900);
  n(582128);
  var a = n(683071),
    r = n(423764),
    s = n(46054),
    i = n(649975),
    o = n(660183),
    c = n(135734);
  function d(e) {
    let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: d = !1 } = e,
      u = (0, r.j7)(t),
      m = d ? i.default["DE+C4G"] : i.default.vcs3zU,
      x = o.intl.formatToMarkdownString(m, {
        country: u,
        currency: n?.toUpperCase() ?? "",
        willForfeitGiftCardBalance: d ? "true" : "false",
      });
    return (0, l.jsx)(a.w, {
      type: "warning",
      children: (0, l.jsx)("div", {
        className: c.Q,
        children: s.A.parse(x, !1, { allowList: !0 }),
      }),
    });
  }
}
