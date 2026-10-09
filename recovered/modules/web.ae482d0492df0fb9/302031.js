/* Recovered shipped factory. Module 302031.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7335612..7341823
 * Raw property SHA-256: b29bf2b51dfc1adb5bec855442de4b7a6b58f98624c70a4bba5684f48ea57989
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => b, Bs: () => y });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(661531),
    d = n(87221),
    c = n(834730),
    u = n(939249),
    _ = n(952270),
    E = n(39623),
    A = n(683063),
    h = n(379257),
    f = n(306537),
    I = n(36149),
    p = n(390248),
    T = n(338717),
    m = n(403362),
    g = n(660183),
    S = n(881013),
    N = (((i = N || {}).TEXT = "text"), (i.ATTACHMENT = "attachment"), (i.EMBED = "embed"), i);
  function C(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: l()(S.pR, t), children: g.intl.string(g.t["F+x38C"]) });
  }
  function O(e) {
    let { className: t, isSingleMosaicItem: n, obscureOnly: i } = e;
    return (0, r.jsx)("div", {
      className: l()(S.W5, t),
      children: i
        ? null
        : (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(d.D, { size: "lg", color: o.A.colors.WHITE }),
              n &&
                (0, r.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-overlay-light",
                  className: S.Vs,
                  children: g.intl.string(g.t.SpxcUR),
                }),
            ],
          }),
    });
  }
  function R(e) {
    let { reason: t = T.Oc.SPOILER, className: n, isSingleMosaicItem: i = !1 } = e;
    switch (t) {
      case T.Oc.SPOILER:
        return (0, r.jsx)(C, { className: n });
      case T.Oc.EXPLICIT_CONTENT:
      case T.Oc.GORE_CONTENT:
      case T.Oc.SELF_HARM_CONTENT:
        return (0, r.jsx)(O, { isSingleMosaicItem: i, className: n });
      case T.Oc.POTENTIAL_EXPLICIT_CONTENT:
        return (0, r.jsx)(O, { isSingleMosaicItem: i, className: n, obscureOnly: !0 });
      default:
        return (0, m.xb)(t);
    }
  }
  function L(e) {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: a,
    } = e;
    return t !== T.Oc.EXPLICIT_CONTENT && t !== T.Oc.GORE_CONTENT && t !== T.Oc.SELF_HARM_CONTENT
      ? null
      : (0, r.jsx)("div", {
          className: l()(S.fA, a),
          children: (0, r.jsx)(u.D, {
            className: S.kw,
            onClick: i,
            "aria-label": g.intl.string(g.t.ex5G9m),
            children: n
              ? (0, r.jsx)(E.EyeIcon, { size: "md", color: "currentColor" })
              : (0, r.jsx)(_.EyeSlashIcon, { size: "md", color: "currentColor" }),
          }),
        });
  }
  let y = a.createContext(!1);
  class D extends a.PureComponent {
    state = { visible: !1 };
    removeObscurity = (e) => {
      let { visible: t } = this.state;
      if (t) return;
      (e.preventDefault(), e.stopPropagation(), this.setState({ visible: !0 }));
      let { onReveal: n } = this.props;
      null != n && n();
    };
    handleToggleObscurity = (e) => {
      if (
        (e.stopPropagation(),
        e.nativeEvent.stopPropagation(),
        (0, p.Wi)({ obscure: this.state.visible }),
        this.props.shouldAgeVerify)
      )
        return void h.A.showAgeVerificationGetStartedModal({ entryPoint: f.q1.OBSCURED_MEDIA });
      let { onToggleObscurity: t } = this.props;
      (null != t && t(e), this.setState((e) => ({ visible: !e.visible })));
    };
    obscure = () => {
      let { visible: e } = this.state;
      e && this.setState({ visible: !1 });
    };
    renderWithTooltip(e) {
      return this.state.visible
        ? e
        : (0, r.jsx)(A.u, { position: "left", body: this.tooltipText, children: e });
    }
    renderObscuredAttachment() {
      let {
          children: e,
          inline: t,
          className: n,
          containerStyles: i,
          obscured: a = !0,
          reason: s = T.Oc.SPOILER,
          isSingleMosaicItem: o = !1,
          obscurityControlClassName: d,
          isVerifiedTeen: c,
        } = this.props,
        { visible: _ } = this.state,
        E = (0, r.jsx)(y.Consumer, {
          children: (E) => {
            let A = E || _ || !a;
            return T._K.has(s) && !t
              ? (0, r.jsxs)("div", {
                  "aria-label": A ? void 0 : this.ariaLabel,
                  "aria-expanded": A,
                  style: i,
                  className: l()(n, S.ur, S.q2, S.Dq, S.OZ, { [S.R]: !A, [S.h5]: o }),
                  role: A ? "presentation" : "button",
                  tabIndex: A ? -1 : 0,
                  children: [
                    A ? null : (0, r.jsx)(R, { reason: s, isSingleMosaicItem: o }),
                    (0, r.jsx)("div", { "aria-hidden": !A, className: S.Qu, children: e(!A) }),
                    c
                      ? null
                      : (0, r.jsx)(L, {
                          obscureReason: s,
                          isVisible: _,
                          handleToggleObscurity: this.handleToggleObscurity,
                          obscurityControlClassName: d,
                        }),
                  ],
                })
              : (0, r.jsxs)(u.D, {
                  onClick: A ? void 0 : this.removeObscurity,
                  "aria-label": A ? void 0 : this.ariaLabel,
                  "aria-expanded": A,
                  style: i,
                  className: l()(n, S.ur, S.q2, S.Dq, { [S.R]: !A, [S.rP]: !A }),
                  role: A ? "presentation" : "button",
                  tabIndex: A ? -1 : 0,
                  children: [
                    A || t ? null : (0, r.jsx)(R, { reason: s, isSingleMosaicItem: o }),
                    (0, r.jsx)("div", { "aria-hidden": !A, className: S.Qu, children: e(!A) }),
                  ],
                });
          },
        });
      return t ? this.renderWithTooltip(E) : E;
    }
    renderObscuredEmbed() {
      let {
          children: e,
          className: t,
          containerStyles: n,
          isSingleMosaicItem: i,
          obscurityControlClassName: a,
          reason: s = T.Oc.SPOILER,
          isVerifiedTeen: o,
        } = this.props,
        { visible: d } = this.state;
      return (0, r.jsx)(y.Consumer, {
        children: (c) => {
          let _ = c || d;
          return T._K.has(s)
            ? (0, r.jsxs)("div", {
                "aria-label": d ? void 0 : this.ariaLabel,
                "aria-expanded": _,
                style: n,
                className: l()(t, S.ur, S.q2, S.x, S.OZ, { [S.R]: !_ }),
                role: _ ? "presentation" : "button",
                tabIndex: _ ? -1 : 0,
                children: [
                  _ ? null : (0, r.jsx)(R, { reason: s, isSingleMosaicItem: i }),
                  (0, r.jsx)("div", { "aria-hidden": !_, className: S.Qu, children: e(!_) }),
                  o
                    ? null
                    : (0, r.jsx)(L, {
                        obscureReason: s,
                        isVisible: d,
                        handleToggleObscurity: this.handleToggleObscurity,
                        obscurityControlClassName: a,
                      }),
                ],
              })
            : (0, r.jsxs)(u.D, {
                "aria-label": this.ariaLabel,
                "aria-expanded": _,
                className: l()(t, S.ur, S.q2, S.x, { [S.R]: !_ }),
                onClick: _ ? void 0 : this.removeObscurity,
                style: n,
                role: _ ? "presentation" : "button",
                tabIndex: _ ? -1 : 0,
                children: [
                  _ ? null : (0, r.jsx)(R, { reason: s, className: S.E6 }),
                  (0, r.jsx)("div", { "aria-hidden": !_, children: e(!_) }),
                ],
              });
        },
      });
    }
    renderObscuredText() {
      let { children: e, renderTextElement: t, className: n } = this.props,
        { visible: i } = this.state,
        s = (0, r.jsx)(y.Consumer, {
          children: (s) => {
            let o = s || i,
              d = a.Children.toArray(e(o)),
              c = a.Children.map(d, (e) => (a.isValidElement(e) && null != t ? t(e, o) : e));
            return (0, r.jsx)(u.D, {
              tag: "span",
              onClick: o ? void 0 : this.removeObscurity,
              "aria-label": o ? void 0 : this.ariaLabel,
              "aria-expanded": o,
              tabIndex: o ? -1 : 0,
              role: o ? "presentation" : "button",
              className: l()("obscured", n, S.ur, S.F0, { [S.R]: !o }),
              children: (0, r.jsx)("span", {
                className: S.kx,
                children: (0, r.jsx)("span", { "aria-hidden": !o, className: S.AV, children: c }),
              }),
            });
          },
        });
      return this.renderWithTooltip(s);
    }
    render() {
      let { type: e = "text" } = this.props;
      switch (e) {
        case "text":
          return this.renderObscuredText();
        case "attachment":
          return this.renderObscuredAttachment();
        case "embed":
          return this.renderObscuredEmbed();
        default:
          return (0, m.xb)(e);
      }
    }
    get ariaLabel() {
      let { reason: e = T.Oc.SPOILER } = this.props;
      switch (e) {
        case T.Oc.SPOILER:
          return g.intl.string(g.t["F+x38C"]);
        case T.Oc.EXPLICIT_CONTENT:
        case T.Oc.GORE_CONTENT:
        case T.Oc.SELF_HARM_CONTENT:
          return g.intl.string(g.t.mlJ8Vf);
        case T.Oc.POTENTIAL_EXPLICIT_CONTENT:
          return g.intl.string(g.t.MRdR7z);
        default:
          return (0, m.xb)(e);
      }
    }
    get tooltipText() {
      let { reason: e = T.Oc.SPOILER } = this.props;
      switch (e) {
        case T.Oc.SPOILER:
          return g.intl.string(g.t["F+x38C"]);
        case T.Oc.EXPLICIT_CONTENT:
        case T.Oc.GORE_CONTENT:
        case T.Oc.SELF_HARM_CONTENT:
          return g.intl.string(g.t.mlJ8Vf);
        case T.Oc.POTENTIAL_EXPLICIT_CONTENT:
          return g.intl.string(g.t.MRdR7z);
        default:
          return (0, m.xb)(e);
      }
    }
  }
  function v(e) {
    let t = (0, p._R)() && null != e.reason && T.tY.has(e.reason),
      n = (0, I.yM)();
    return (0, r.jsx)(D, { ...e, shouldAgeVerify: t, isVerifiedTeen: n });
  }
  ((v.Types = N), (v.Reasons = T.Oc));
  let b = v;
}
