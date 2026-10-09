/* Recovered shipped factory. Module 106191.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4801222..4801627
 * Raw property SHA-256: 99e541517f26d926ff2fa76ac110d074c338bf64662e764013fd5d3dbd185f6a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(109112),
    a = n(744700),
    s = n(569926);
  function l(e) {
    let { game: t, iconClassName: n, allowFetch: l = !0 } = e,
      { id: o, icon: d } = t,
      c = (0, a.A)(o, d, { size: 32 }),
      { data: u } = (0, s.I)(l && null == c ? o : void 0),
      _ = c ?? u?.getIconURL(32);
    return null != _
      ? (0, i.jsx)("img", { alt: "", className: n, height: 32, loading: "lazy", src: _, width: 32 })
      : (0, i.jsx)(r._, { className: n, size: "md" });
  }
}
