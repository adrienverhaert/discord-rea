/* Recovered shipped factory. Module 106799.
 * Source: recovered/web/assets/f65adf2609e3076d.js
 * UTF-16 property offsets: 198..565
 * Raw property SHA-256: e13f213e4238ceed598d8fdbb72e95cb5f11c0d8f3544555c2e337fdf404e7f1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, e, t) {
  t.d(e, { A: () => n, B: () => l });
  var a = t(477900),
    c = t(503698),
    i = t.n(c),
    p = t(462887),
    r = t(736653),
    d = t(495845);
  let h = t(243884),
    o = t(79825);
  function l(s) {
    let { customSize: e, shouldUseThemeColor: t = !1, loading: c, className: l } = s,
      n = (0, r.Ay)(),
      u = t && (0, p.q)(n) ? o : h;
    return (0, a.jsx)("img", {
      className: i()(d.H8, l, { [d.Lq]: c }),
      src: u,
      alt: "",
      style: void 0 !== e ? { height: e } : void 0,
    });
  }
  let n = l;
}
