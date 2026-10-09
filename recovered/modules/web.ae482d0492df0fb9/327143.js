/* Recovered shipped factory. Module 327143.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4930115..4930645
 * Raw property SHA-256: 1495c8d74033403c4d9695adc566b45258753043757e42c3849bd5a0e81f8c7e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128);
  function r(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
  }
  let a = (0, n(456412).A)(
    class extends i.Component {
      static defaultProps = { desiredItemWidth: 200 };
      static getDerivedStateFromProps(e, t) {
        let { width: n, desiredItemWidth: i, maxColumns: a } = e,
          s = r(n, i, a);
        return s !== t.columns ? { columns: s } : null;
      }
      state = { columns: r(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
      render() {
        let { width: e, height: t, children: n } = this.props,
          { columns: i } = this.state;
        return n(i, e, t);
      }
    },
  );
}
