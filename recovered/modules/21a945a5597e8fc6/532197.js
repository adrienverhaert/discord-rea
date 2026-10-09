/* Recovered shipped factory. Module 532197.
 * Source: recovered/web/assets/21a945a5597e8fc6.js
 * UTF-16 property offsets: 95..503
 * Raw property SHA-256: 551f65c1d1d8b2e5e4d0f4360c3ace448924cb1ce50651daf9764a8289887c1c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { A: () => u });
  var r = t(477900),
    p = t(582128),
    c = t(503698),
    i = t.n(c),
    n = t(872351),
    o = t(635247);
  let a = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [a.UP]: "", [a.RIGHT]: o.pG, [a.DOWN]: o.TR, [a.LEFT]: o.kb };
  class l extends p.PureComponent {
    static Directions = a;
    render() {
      let { direction: e, className: s } = this.props;
      return (0, r.jsx)(n.z, {
        size: "md",
        color: "currentColor",
        className: i()(s, { [d[e]]: !0 }),
      });
    }
  }
  let u = l;
}
