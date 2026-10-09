/* Recovered shipped factory. Module 590251.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10377638..10378700
 * Raw property SHA-256: 7bbfe10b225eb993f3018dea506265443116b0e2b22f6d3b58eb9db7403f64cb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(906769);
  let o = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
  class d extends r.Component {
    static StrokeSizes = o;
    static defaultProps = { strokeSize: o.MEDIUM };
    renderCircle() {
      let {
          strokeSize: e,
          percent: t,
          colorOverride: n,
          background: r,
          ringColorOverrideClassName: a,
        } = this.props,
        o = Math.min(Math.max(t, 0), 100),
        d = (20 - e) / 2,
        c = d * Math.PI * 2;
      return (0, i.jsxs)("svg", {
        viewBox: "0 0 20 20",
        className: l.n1,
        children: [
          (0, i.jsx)("circle", { className: void 0 !== a ? a : l.cj, cx: 10, cy: 10, r: 10 }),
          (0, i.jsx)("circle", { className: s()(l.rh, r), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
          (0, i.jsx)("circle", {
            className: l.iv,
            cx: 10,
            cy: 10,
            r: d,
            strokeWidth: `${e}px`,
            strokeLinecap: "round",
            transform: "rotate(-90 10 10)",
            stroke: null != n ? n : "currentColor",
            style: { strokeDasharray: c, strokeDashoffset: (1 - o / 100) * c },
          }),
        ],
      });
    }
    render() {
      let { className: e, children: t } = this.props;
      return (0, i.jsxs)("div", {
        className: s()(l.G3, e),
        children: [
          this.renderCircle(),
          null != t
            ? (0, i.jsx)("div", { className: s()(l.Bd, this.props.overlayClassName), children: t })
            : null,
        ],
      });
    }
  }
}
