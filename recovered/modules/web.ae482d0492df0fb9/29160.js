/* Recovered shipped factory. Module 29160.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2778989..2779436
 * Raw property SHA-256: 34206baa81606c41c98a9b779f10e4c42744d8f9957cf8e2e103c24b3acfb297
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(433664);
  class o extends r.PureComponent {
    static defaultProps = { tag: "div", forceHover: !1 };
    render() {
      let { tag: e, children: t, hoverText: n, className: r, forceHover: a, ...o } = this.props;
      return (0, i.jsxs)("div", {
        ...o,
        className: s()(r, l.oM, { [l.r9]: null == n, [l.EE]: a }),
        children: [
          (0, i.jsx)(e, { className: l.yo, children: n }),
          (0, i.jsx)(e, { className: l.Ay, children: t }),
        ],
      });
    }
  }
  let d = o;
}
