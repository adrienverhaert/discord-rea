/* Recovered shipped factory. Module 396478.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 827413..828587
 * Raw property SHA-256: 18320ad6dc1f329a4251f9af5f850c69d3330d8def9b9c1f20617d7e45c6fa89
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G8: () => f, SG: () => I, pp: () => p });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(297264),
    o = n(834730),
    d = n(462887),
    c = n(235986),
    u = n(652215),
    _ = n(906114),
    E = n(221851);
  let { Provider: A, Consumer: h } = r.createContext(u.NJ8.DARK);
  class f extends r.PureComponent {
    render() {
      let {
        lightSrc: e,
        darkSrc: t,
        width: n,
        height: r,
        offsetX: a,
        offsetY: l,
        style: o,
      } = this.props;
      return (0, i.jsx)(h, {
        children: (u) =>
          (0, i.jsx)(c.A.Child, {
            grow: 0,
            className: s()(_.Sl, E.C2),
            style: {
              ...o,
              width: n,
              height: r,
              marginLeft: a,
              marginTop: l,
              backgroundImage: `url(${(0, d.M)(u) ? t : e})`,
            },
          }),
      });
    }
  }
  let I = (e) => {
    let { children: t, className: n, noteClassName: r, note: a, style: d } = e;
    return (0, i.jsxs)(c.A.Child, {
      grow: 0,
      direction: c.A.Direction.VERTICAL,
      style: d,
      children: [
        null != t &&
          (0, i.jsx)(l.D, {
            color: "none",
            variant: "heading-lg/semibold",
            className: s()(n, _.DD),
            children: t,
          }),
        null != a
          ? (0, i.jsx)(o.E, {
              color: "text-muted",
              variant: "text-md/normal",
              className: s()(r, _.Qq, E.Ot),
              children: a,
            })
          : null,
      ],
    });
  };
  function p(e) {
    let { children: t, theme: n, className: r, style: a } = e;
    return (0, i.jsx)(A, {
      value: n,
      children: (0, i.jsx)(c.A, {
        direction: c.A.Direction.VERTICAL,
        align: c.A.Align.CENTER,
        justify: c.A.Justify.CENTER,
        className: s()(_.iE, r),
        style: a,
        children: t,
      }),
    });
  }
}
