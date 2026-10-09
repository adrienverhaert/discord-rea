/* Recovered shipped factory. Module 721668.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4399263..4399931
 * Raw property SHA-256: 3e213e47a496518a67085c2b67007904494e61b96b9bddbe1ce52d73ce91fde0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(707554),
    o = n(235986),
    d = n(634236);
  class c extends r.PureComponent {
    render() {
      let {
        note: e,
        title: t,
        action: n,
        className: r,
        illustration: a,
        hideBackground: c = !1,
      } = this.props;
      return (0, i.jsx)("div", {
        className: s()(d.iE, r, { [d._$]: c }),
        children: (0, i.jsxs)(o.A, {
          className: d.Bo,
          direction: o.A.Direction.VERTICAL,
          align: o.A.Align.CENTER,
          justify: o.A.Justify.CENTER,
          children: [
            a ?? (0, i.jsx)(o.A.Child, { grow: 0, className: d.Sl }),
            (0, i.jsxs)(o.A.Child, {
              grow: 0,
              className: d.Qq,
              children: [
                (0, i.jsx)(l.H, { className: d.DD, children: t }),
                null != e ? (0, i.jsx)("div", { className: d.N4, children: e }) : null,
              ],
            }),
            n,
          ],
        }),
      });
    }
  }
  let u = c;
}
