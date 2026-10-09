/* Recovered shipped factory. Module 214881.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3840818..3842512
 * Raw property SHA-256: 749c73d9d27dc53fab78ae5036b0dc762651b059c5e1831109ad661a5156eae8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => A }), n(508300));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(607470),
    o = n(686527),
    d = n(373054),
    c = n(253292),
    u = n(351952),
    _ = n(88686),
    E = n(431939);
  function A(e) {
    let { nameplate: t, hovered: n, selected: a, content: l, placement: o } = e,
      c = (0, u._)(l, t, n, a, o),
      A = (0, d.i)(n, a),
      f = r.useRef(null == t);
    return (r.useEffect(() => {
      f.current || null != t || (f.current = !0);
    }, [t]),
    null == t)
      ? null
      : (0, i.jsx)("div", {
          className: s()(E.kL, { [E.qG]: f.current, [E.WB]: o === _.u.ACCOUNT }),
          style: { background: c.background },
          "aria-hidden": !0,
          children: (0, i.jsx)(h, {
            nameplate: t,
            className: s()(E._8, {
              [E.PT]: n,
              [E.wH]: a,
              [E.ct]: o === _.u.ACCOUNT,
              [E.VH]: o === _.u.PREVIEW,
              [E.Hh]: o === _.u.MINI_PREVIEW,
              [E.Ix]: o === _.u.CHANNEL,
            }),
            style: { maskImage: c.maskImage },
            animate: A,
            loop: !0 === A && !0 === n,
          }),
        });
  }
  function h(e) {
    let { nameplate: t, className: n, style: r, animate: a, loop: s } = e,
      { staticImageUrl: l, animatedImageUrl: d, videoUrl: u } = (0, c.K)(t),
      { preload: _ } = o.A.getConfig({ location: "Nameplate_Asset" });
    if (null == l) return null;
    if (null != u)
      return (0, i.jsx)(f, {
        animatedAsset: u,
        staticAsset: l,
        animate: a,
        loop: s,
        preload: _,
        style: r,
        className: n,
      });
    let E = a && null != d ? d : l;
    return (0, i.jsx)(I, { asset: E, className: n, style: r });
  }
  function f(e) {
    let {
        staticAsset: t,
        animatedAsset: n,
        animate: a,
        loop: s,
        preload: o,
        className: d,
        style: c,
      } = e,
      u = r.useRef(null);
    return (
      r.useEffect(() => {
        null != u.current &&
          (a || s
            ? u.current.play()?.catch((e) => {
                if (!(e instanceof DOMException && "AbortError" === e.name)) throw e;
              })
            : u.current.pause());
      }, [a, s]),
      (0, i.jsx)("div", {
        className: E.j,
        style: c,
        children: (0, i.jsx)(l.A, {
          src: n,
          poster: t,
          preload: o,
          ref: u,
          playsInline: !0,
          loop: s,
          controls: !1,
          className: d,
          tabIndex: -1,
        }),
      })
    );
  }
  function I(e) {
    let { asset: t, className: n, style: r } = e;
    return (0, i.jsx)("img", { src: t, className: n, style: r, alt: "" });
  }
}
