/* Recovered shipped factory. Module 861197.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 95..1030
 * Raw property SHA-256: 171d9e7bc134d9182209ddc0796d7141ba6af408408874d569bf9e2a483f7493
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Ay: () => g });
  var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(364522),
    o = n(235986),
    c = n(622695);
  class d extends l.PureComponent {
    static defaultProps = { basis: 232, grow: 0, shrink: 0 };
    render() {
      let { scrollable: e, ...t } = this.props;
      return e
        ? (0, i.jsx)("aside", {
            className: c.EW,
            children: (0, i.jsx)(r.Ip, {
              fade: !0,
              className: c.XG,
              children: (0, i.jsx)(o.A.Child, { ...t, wrap: !0 }),
            }),
          })
        : (0, i.jsx)(o.A.Child, { ...t, wrap: !0 });
    }
  }
  class u extends l.PureComponent {
    render() {
      let { className: e, ...t } = this.props;
      return (0, i.jsx)(o.A.Child, { className: a()(c.Qs, e), wrap: !0, ...t });
    }
  }
  class m extends l.PureComponent {
    static defaultProps = {
      direction: o.A.Direction.HORIZONTAL,
      justify: o.A.Justify.START,
      align: o.A.Align.START,
      wrap: o.A.Wrap.NO_WRAP,
      shrink: 1,
      grow: 1,
      basis: "auto",
    };
    static Direction = o.A.Direction;
    static Justify = o.A.Justify;
    static Align = o.A.Align;
    static Wrap = o.A.Wrap;
    static Sidebar = d;
    static Content = u;
    render() {
      return (0, i.jsx)(o.A, { ...this.props });
    }
  }
  let g = m;
}
