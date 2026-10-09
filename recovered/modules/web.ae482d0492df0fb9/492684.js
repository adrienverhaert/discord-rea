/* Recovered shipped factory. Module 492684.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 783776..785180
 * Raw property SHA-256: 0f05c849dc8a9c2d9d23a1d3954bc64aab68ff2a866426decc5aaa0b1acd45ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(451988),
    s = n(660183);
  function l(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
  }
  function o(e) {
    return class extends r.PureComponent {
      _interval;
      constructor(e) {
        (super(e), (this._interval = new a.IX()), (this.state = { ...this.getUpdatedTime() }));
      }
      componentDidMount() {
        this._interval.start(1e3, () => this.setState(this.getUpdatedTime()));
      }
      componentWillUnmount() {
        this._interval.stop();
      }
      componentDidUpdate(e) {
        (e.timestamps.end !== this.props.timestamps.end ||
          e.timestamps.start !== this.props.timestamps.start) &&
          this.setState(this.getUpdatedTime());
      }
      getUpdatedTime() {
        let { timestamps: e } = this.props,
          t = Date.now() / 1e3;
        return null != e.end
          ? this.getDiff(t, l(e.end) / 1e3)
          : null != e.start
            ? this.getDiff(l(e.start) / 1e3, t)
            : { hours: 0, minutes: 0, seconds: 0 };
      }
      renderTime(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t && e <= 0 ? -1 : e < 10 ? `0${e}` : e;
      }
      getDiff(e, t) {
        let n = Math.max(t - e, 0),
          i = Math.floor(n) % 60,
          r = Math.floor(n / 60) % 60;
        return { hours: Math.floor(n / 3600) % 24, minutes: r, seconds: i };
      }
      render() {
        let { timestamps: t, ...n } = this.props,
          r = this.renderTime(this.state.hours, !0),
          a = this.renderTime(this.state.minutes),
          l = this.renderTime(this.state.seconds),
          o = -1 === r ? `${a}:${l}` : `${r}:${a}:${l}`;
        return null != t.end
          ? (0, i.jsx)(e, {
              ...n,
              message: s.intl.formatToPlainString(s.t["I/J7vI"], { duration: o }),
            })
          : null != t.start
            ? (0, i.jsx)(e, {
                ...n,
                message: s.intl.formatToPlainString(s.t.M9Fexd, { duration: o }),
              })
            : null;
      }
    };
  }
}
