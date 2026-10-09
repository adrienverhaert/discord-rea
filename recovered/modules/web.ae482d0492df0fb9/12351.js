/* Recovered shipped factory. Module 12351.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4116036..4116618
 * Raw property SHA-256: 3714b88f57b7a850d3fbb4fea37d39d615f7451a6a424c41c1516ccf80230933
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(660183),
    d = n(310421);
  let c = { BLOCK: d.om, INLINE: d.mG };
  class u extends r.PureComponent {
    static Types = c;
    render() {
      let { children: e, className: t, textClassName: n, type: r = c.BLOCK, style: a } = this.props;
      return (0, i.jsxs)("div", {
        className: s()(t, r),
        style: a,
        children: [
          (0, i.jsxs)(l.E, {
            variant: "text-sm/bold",
            tag: "div",
            color: "text-feedback-positive",
            className: d.AD,
            children: [o.intl.string(o.t["8tvIiN"]), ":"],
          }),
          (0, i.jsx)(l.E, { className: s()(d.uN, n), variant: "text-sm/normal", children: e }),
        ],
      });
    }
  }
  let _ = u;
}
