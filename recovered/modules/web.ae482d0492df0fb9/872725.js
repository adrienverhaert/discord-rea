/* Recovered shipped factory. Module 872725.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6731456..6732347
 * Raw property SHA-256: 21a380b6b15ad9f2f91d9a5aa28e64de76da576d8b883cf94d9121125cf027d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(570950),
    o = n(993077),
    d = n(608375);
  let c = {},
    u = function (e) {
      let {
          children: t,
          id: n,
          tabIndex: a,
          className: u,
          cardClassName: _,
          cardStyle: E = c,
          cardType: A,
          fit: h = "layout",
          glowing: f = !1,
          glowAmount: I = 8,
          blurAmount: p = 30,
          hueRotate: T = 0,
          onMouseEnter: m,
          onFocus: g,
          listItemProps: S,
        } = e,
        N = r.useRef(null),
        C = r.useRef(null),
        O = {
          "--custom-glow-amount": `${I}px`,
          "--custom-blur-amount": `${p}px`,
          "--custom-hue-rotate": `${T}deg`,
          "--custom-glow-opacity": +(0 !== I),
        },
        R = r.useCallback(
          (e) => {
            (S?.onFocus?.(), g?.(e));
          },
          [S, g],
        );
      return (0, i.jsxs)("div", {
        id: n,
        ref: N,
        ...S,
        tabIndex: S?.tabIndex ?? a,
        className: s()(d.k, u),
        style: O,
        onMouseEnter: m,
        onFocus: R,
        children: [
          f &&
            (0, i.jsx)(l.s, {
              artboard: "BaseGlowRemapped",
              eventTargetRef: N,
              className: d.Q,
              ref: C,
              fit: h,
              withReducedMotion: "short-loop",
            }),
          (0, i.jsx)(o.Z, { type: A ?? o.s.CUSTOM, className: _, style: E, children: t }),
        ],
      });
    };
}
