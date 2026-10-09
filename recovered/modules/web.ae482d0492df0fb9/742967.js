/* Recovered shipped factory. Module 742967.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8437478..8438325
 * Raw property SHA-256: a7646438115441d467ea889a61c74c021fad270d35a1f4e86429e5b24a2e671c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { x: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(607470);
  function o(e) {
    let {
        className: t,
        animationState: n = "on",
        staticAsset: o,
        webmAsset: d,
        assetAltText: c,
      } = e,
      u = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion),
      [_, E] = (0, r.useState)(!1),
      A = (0, r.useRef)(null),
      h = !u && ("on" === n || ("on_hover" === n && _));
    (0, r.useEffect)(() => {
      null !== A.current &&
        (h ? A.current.play() : ((A.current.currentTime = 0), A.current.pause()));
    }, [h]);
    let f = (0, r.useMemo)(
        () =>
          (0, i.jsxs)(l.A, {
            className: t,
            autoPlay: !0,
            loop: !0,
            ref: A,
            children: [
              (0, i.jsx)("source", { src: d, type: "video/webm" }),
              (0, i.jsx)("img", { src: o, className: t, alt: c }),
            ],
          }),
        [t, o, d, c],
      ),
      I = (0, r.useMemo)(
        () => (u && null != o ? (0, i.jsx)("img", { src: o, className: t, alt: c }) : f),
        [t, o, c, u, f],
      );
    return (0, i.jsx)("div", {
      onMouseEnter: "on_hover" === n ? () => E(!0) : void 0,
      onMouseLeave: "on_hover" === n ? () => E(!1) : void 0,
      children: I,
    });
  }
}
