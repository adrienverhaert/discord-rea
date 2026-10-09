/* Recovered shipped factory. Module 714719.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8022635..8023389
 * Raw property SHA-256: da33e2c45f1f25f4d6a310fcf1b8cbd88486824f4092fe827e00c3de0109d904
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(693875),
    l = n(478717);
  function o(e) {
    let {
        bannerSrc: t,
        backgroundColor: n,
        showGifTag: r = !1,
        height: o,
        width: d,
        cutout: c,
        onInteractionStart: u,
        onInteractionEnd: _,
        className: E,
        fillClassName: A,
        overlay: h,
      } = e,
      f = {
        "--custom-cutout-radius": `${c.radius}px`,
        "--custom-cutout-x": "center" === c.align ? "50%" : `${c.insetStart + c.radius}px`,
        "--custom-cutout-y": `calc(100% - ${c.insetBottom}px)`,
      };
    return (0, i.jsx)("div", {
      className: a()(l.vK, E),
      style: { height: o, width: d ?? "100%" },
      children: (0, i.jsxs)("div", {
        className: a()(l.GS, A),
        style: {
          ...f,
          backgroundImage: null != t && "" !== t ? `url(${t})` : void 0,
          backgroundColor: n,
        },
        onMouseMove: u,
        onMouseLeave: _,
        children: [r && (0, i.jsx)(s.A, { className: l.pH }), h],
      }),
    });
  }
}
