/* Recovered shipped factory. Module 930861.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 808502..809594
 * Raw property SHA-256: 98753d8477e208d2b1fa38726d838fcfaf148b9327c696ad38065b5ff08ea56e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { kF: () => f, wL: () => I });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(615300),
    d = n(862482),
    c = n(235986),
    u = n(713517),
    _ = n(8295),
    E = (((i = {}).DEFAULT = "default"), (i.SMALL = "small"), i);
  let A = { default: _.hk, small: _.p$ },
    h = { default: _.VE, small: _.TY };
  class f extends a.PureComponent {
    static defaultProps = { shineSize: "default" };
    render() {
      let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
      return (0, r.jsx)(o.A.div, {
        ...i,
        className: l()(_.dj, e, { [_.EM]: n }),
        children: (0, r.jsx)(c.A, {
          align: c.A.Align.CENTER,
          justify: c.A.Justify.CENTER,
          className: A[t],
          children: (0, r.jsx)("div", { className: h[t] }),
        }),
      });
    }
  }
  function I(e) {
    let {
        children: t,
        className: n,
        disabled: i,
        submitting: s,
        pauseAnimation: o,
        shineSize: c = "default",
        shinePaused: E,
        buttonShineClassName: A,
        onlyShineOnHover: h,
        ...I
      } = e,
      p = a.useRef(null),
      T = (0, u.M)(p),
      m = !i && !s && !0 !== o && (!h || T);
    return (0, r.jsxs)(d.$n, {
      "data-migration-pending": !0,
      buttonRef: p,
      ...I,
      className: l()(_.WE, n),
      disabled: i,
      submitting: s,
      children: [
        t,
        m
          ? (0, r.jsx)(f, {
              "data-migration-pending": !0,
              shinePaused: E,
              className: l()(_.Qr, h ? _.PK : void 0, A),
              shineSize: c,
            })
          : null,
      ],
    });
  }
  I.ShineSizes = E;
}
