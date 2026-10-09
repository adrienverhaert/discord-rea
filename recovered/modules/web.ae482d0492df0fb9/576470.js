/* Recovered shipped factory. Module 576470.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4046891..4048107
 * Raw property SHA-256: aa188b49ad21845d4f127054d8f2e2c46efa964fd33a465f0a96316c97fe80b4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(58703),
    o = n(660183);
  class d extends r.PureComponent {
    static defaultProps = { showDays: !0, showUnits: !1, stopAtOneSec: !1, intervalDuration: 1e3 };
    _interval;
    componentDidMount() {
      let { intervalDuration: e, onInterval: t } = this.props;
      this._interval = setInterval(() => {
        (this.forceUpdate(), t?.());
      }, e);
    }
    componentWillUnmount() {
      null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
      let { showDays: t, showUnits: n, className: r } = this.props,
        a = [e.days, e.hours, e.minutes, e.seconds],
        l = [
          o.intl.string(o.t["6m/6nM"]),
          o.intl.string(o.t.n7dksO),
          o.intl.string(o.t["1LyF1h"]),
          o.intl.string(o.t.QJyuxY),
        ];
      if (0 === e.days) a.shift();
      else if (!t) {
        let e = a.shift();
        a[0] += 24 * e;
      }
      let d = s()(a)
        .map((e) => (e < 10 ? `0${e}` : e))
        .map((e, t) => [
          t > 0 && !n ? ":" : " ",
          (0, i.jsxs)("span", { children: [e, n ? l[a.length - t - 1] : null] }, t),
        ])
        .flatten()
        .value();
      return (0, i.jsx)("span", { className: r, children: d });
    }
    render() {
      let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
      if (e === 1 / 0)
        return (0, i.jsx)("span", {
          className: n,
          "aria-label": o.intl.string(o.t.PqEzn8),
          children: "\u221E",
        });
      let a = (0, l.Tf)(Date.now(), e, r);
      return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
  }
  let c = d;
}
