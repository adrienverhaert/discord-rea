/* Recovered shipped factory. Module 414711.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6562288..6565029
 * Raw property SHA-256: b64af5628b631d1488448821b51f507365367ae82a9f6a2a607030a7e1c5a9b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(837381),
    d = n(559106),
    c = n(939249),
    u = n(442433),
    _ = n(688810),
    E = n(595623),
    A = n(22212);
  n(646363);
  var h = n(761205);
  class f extends r.PureComponent {
    state = {
      height: new l.A.Value(this.props.height ?? 61),
      opacity: new l.A.Value(1),
      hovered: !1,
      isContextMenuActive: !1,
    };
    componentWillLeave(e) {
      l.A.parallel([
        l.A.timing(this.state.opacity, { toValue: 0, duration: 200 }),
        l.A.timing(this.state.height, { toValue: 0, duration: 200 }),
      ]).start(e);
    }
    componentWillEnter(e) {
      (this.state.opacity.setValue(0),
        this.state.height.setValue(0),
        l.A.parallel([
          l.A.timing(this.state.opacity, { toValue: 1, duration: 200 }),
          l.A.timing(this.state.height, { toValue: this.props.height ?? 61, duration: 200 }),
        ]).start(e));
    }
    handleMouseEnter = () => {
      let { isFocused: e, isActive: t, onOtherHover: n } = this.props,
        { isContextMenuActive: i } = this.state;
      (this.setState({ hovered: e }), !e || t || i || n?.());
    };
    handleMouseLeave = () => {
      this.setState({ hovered: !1 });
    };
    handleContextMenu = (e, t) => {
      let { analyticsLocations: r } = this.props;
      (this.setState({ isContextMenuActive: !0 }),
        (0, u.L3)(
          e,
          async () => {
            let { default: e } = await Promise.all([
              n.e("790484"),
              n.e("463317"),
              n.e("926132"),
              n.e("834552"),
              n.e("146652"),
              n.e("708757"),
              n.e("585968"),
              n.e("893190"),
              n.e("776273"),
              n.e("189673"),
              n.e("882073"),
              n.e("797558"),
              n.e("691994"),
              n.e("229787"),
              n.e("576665"),
              n.e("624198"),
              n.e("242204"),
              n.e("532418"),
            ]).then(n.bind(n, 668569));
            function a() {
              (0, A.Jo)({ targetUserId: t.id, tab: E.Ay.getState().section });
            }
            return (n) => {
              let s = (0, i.jsx)(e, { ...n, user: t, onInteraction: a });
              return null == r ? s : (0, i.jsx)(_.f5, { value: r, children: s });
            };
          },
          {
            onClose: () => {
              this.setState({ isContextMenuActive: !1 });
            },
          },
        ));
    };
    render() {
      let { height: e, opacity: t, hovered: n, isContextMenuActive: r } = this.state,
        {
          children: a,
          user: u,
          onClick: _,
          isActive: E,
          className: A,
          activeClassName: f,
          noBorder: I,
          ariaLabel: p,
        } = this.props;
      return (0, i.jsxs)(i.Fragment, {
        children: [
          I ? null : (0, i.jsx)("div", { className: s()(h.yF, { [h._]: E || r || n }) }),
          (0, i.jsx)(o.tG, {
            id: u.id,
            children: (o) => {
              let { role: I, ...T } = o,
                m = s()(A, h.Vg, null != f ? { [f]: E || r } : null, { [h.vu]: E || r });
              return null != p
                ? (0, i.jsxs)(l.A.div, {
                    role: I,
                    className: m,
                    onContextMenu: (e) => this.handleContextMenu(e, u),
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    style: { height: e, opacity: t },
                    children: [
                      (0, i.jsx)(d.vN, {
                        offset: { left: -8, right: -8 },
                        children: (0, i.jsx)(c.D, {
                          tag: "div",
                          "aria-label": p,
                          className: h.J5,
                          onClick: _ ?? void 0,
                          ...T,
                        }),
                      }),
                      (0, i.jsx)("div", { className: h.u4, children: a(n || E || r, T.tabIndex) }),
                    ],
                  })
                : (0, i.jsx)(d.vN, {
                    offset: { left: -8, right: -8 },
                    children: (0, i.jsx)(l.A.div, {
                      className: m,
                      onContextMenu: (e) => this.handleContextMenu(e, u),
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                      onClick: _ ?? void 0,
                      style: { height: e, opacity: t },
                      role: I,
                      ...T,
                      children: a(n || E || r, T.tabIndex),
                    }),
                  });
            },
          }),
        ],
      });
    }
  }
  let I = f;
}
