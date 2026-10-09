/* Recovered shipped factory. Module 636585.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8696312..8697686
 * Raw property SHA-256: 7883ecfa86bc802ca4ac14f2f1b3cd5bdf683983a4245d35d554658f6605099e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => h }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(778712),
    o = n(97808),
    d = n(983851),
    c = n(889227),
    u = n(621531),
    _ = n(440155);
  function E(e, t, n) {
    return (0, i.jsx)("div", { className: t, children: e }, n);
  }
  class A extends r.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: E, size: l._3.SIZE_24 };
    defaultRenderUser = (e, t, n, r) => {
      let { onClick: a, size: d, guildId: E } = this.props,
        A = e instanceof c.A ? e : null != e ? e.user : null;
      return null == A
        ? (0, i.jsx)(
            "div",
            { className: s()(u.F2, t), style: { width: (0, l.FT)(d), height: (0, l.FT)(d) } },
            n,
          )
        : (0, i.jsx)(
            o.eu,
            {
              tabIndex: 0,
              src: A.getAvatarURL(E, (0, l.FT)(d)),
              size: d,
              "aria-label": A.username,
              className: s()(t, _.or),
              onClick: (e) => (null != a ? a(e, A, this._ref) : null),
            },
            A.id,
          );
    };
    renderUsers() {
      let {
          users: e,
          max: t,
          renderUser: n = this.defaultRenderUser,
          renderMoreUsers: i,
        } = this.props,
        r = [],
        a = e.length === t ? e.length : t - 1,
        s = 0;
      for (; s < a && s < e.length;) {
        let t = s === e.length - 1;
        (r.push(n(e[s] || null, t ? null : u.hC, `user-${s}`, t)), s++);
      }
      if (s < e.length) {
        let t = Math.min(e.length - s, 99);
        r.push(i(`+${t}`, u.In, "more-users", t));
      }
      return r;
    }
    renderIcon() {
      return this.props.icon
        ? (0, i.jsx)("div", {
            className: u.zc,
            children: (0, i.jsx)(d.H, {
              size: "xs",
              color: "currentColor",
              colorClass: u.CU,
              className: u.Kk,
            }),
          })
        : null;
    }
    render() {
      let { className: e } = this.props;
      return (0, i.jsxs)("div", {
        className: s()(e, u.kL),
        ref: (e) => {
          this._ref = e;
        },
        children: [this.renderIcon(), this.renderUsers()],
      });
    }
  }
  let h = A;
}
