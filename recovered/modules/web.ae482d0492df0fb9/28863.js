/* Recovered shipped factory. Module 28863.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9887302..9888124
 * Raw property SHA-256: fcc67f58cbf2752a20857edb3ea2b5d5da4c3550861ff10639439d39bf4d663c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { Anchor: () => E }));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(470562),
    o = n(59652),
    d = n(531142),
    c = n(939249),
    u = n(559106),
    _ = n(975533);
  function E(e) {
    let {
      href: t,
      onClick: n,
      className: a,
      children: E,
      rel: A,
      target: h,
      useDefaultUnderlineStyles: f = !0,
      title: I,
      style: p,
      focusProps: T,
      ref: m,
      role: g,
      ...S
    } = e;
    null != t && null == n && (n = o.V.getDefaultLinkInterceptor(t));
    let N = r.useContext(d.g),
      C = {
        className: s()(_.Y, { [_.D]: f }, a),
        href: t,
        onClick: n,
        rel: null != A ? A : void 0,
        target: null != h ? h : void 0,
        title: null != I ? I : void 0,
        style: null != p ? p : void 0,
      };
    return (null == t || (0, l.e)(t) || ((C.rel = "noreferrer noopener"), (C.target = "_blank")),
    N && delete C.href,
    null != n)
      ? (0, i.jsx)(c.D, {
          tag: "a",
          ...S,
          ...C,
          onClick: n,
          focusProps: T,
          innerRef: m,
          role: "link",
          children: E,
        })
      : (0, i.jsx)(u.vN, { ...T, children: (0, i.jsx)("a", { ...S, ...C, ref: m, children: E }) });
  }
}
