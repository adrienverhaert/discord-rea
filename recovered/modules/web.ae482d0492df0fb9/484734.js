/* Recovered shipped factory. Module 484734.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7188938..7199302
 * Raw property SHA-256: 02eb17a2ebf5c314dcb7d41ed38394e19a586274b1825e592a2481c4c517282a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    KJ: () => H,
    N_: () => K,
    vw: () => $,
    lg: () => j,
    nG: () => V,
    c3: () => B,
    OS: () => F,
    Y9: () => Y,
    IH: () => W,
  });
  var i = n(477900),
    r = n(582128),
    a = n(939249),
    s = n(97808),
    l = n(778712),
    o = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    _ = n(34188),
    E = n(577473),
    A = n(403581),
    h = n(323384),
    f = n(625903),
    I = n(659421),
    p = n(329308),
    T = n(571694),
    m = n(47167),
    g = n(713654),
    S = n(503698),
    N = n.n(S),
    C = n(62986);
  let O = function (e) {
    let { value: t = 0, text: n, className: r, lowImportance: a, ...s } = e;
    return null != n
      ? (0, i.jsx)("div", { className: N()(C.i, r, a && C.H), ...s, children: n })
      : t > 0
        ? (0, i.jsx)("div", { className: N()(C.i, r, a && C.H), ...s, children: t })
        : null;
  };
  var R = n(769015),
    L = n(106191),
    y = n(548118),
    D = n(376943),
    v = n(636585),
    b = n(71393),
    M = n(994500),
    P = n(287809),
    U = n(147036),
    w = n(427262),
    G = n(660183),
    x = n(445388);
  class k extends r.PureComponent {
    node;
    componentDidMount() {
      let { focused: e, onFocus: t } = this.props,
        { node: n } = this;
      e && null != n && t(n);
    }
    componentDidUpdate(e) {
      let { focused: t, onFocus: n } = this.props,
        { node: i } = this;
      null != i && t && !e.focused && n(i);
    }
    handleClick = (e) => {
      e.preventDefault();
      let { onClick: t } = this.props,
        { node: n } = this;
      null != n && t(e, n);
    };
    handleMouseEnter = (e) => {
      let { onMouseEnter: t } = this.props,
        { node: n } = this;
      null != n && t(e, n);
    };
    setRef = (e) => {
      this.node = e;
    };
    render() {
      let {
        focused: e,
        children: t,
        score: n,
        onContextMenu: r,
        id: s,
        "aria-label": l,
      } = this.props;
      return (0, i.jsxs)(a.D, {
        role: "option",
        id: s,
        "aria-label": l,
        "aria-selected": e,
        focusProps: { enabled: !1 },
        tabIndex: -1,
        innerRef: this.setRef,
        className: x.Ke,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onContextMenu: r,
        children: [t, null != n ? (0, i.jsx)("div", { className: x.fN, children: 0 | n }) : null],
      });
    }
  }
  class F extends r.Component {
    renderIcon() {
      let { guild: e } = this.props;
      return (0, i.jsx)("div", {
        className: x._C,
        children: (0, i.jsx)(y.Ay, {
          tabIndex: -1,
          guild: e,
          size: y.Ay.Sizes.MINI,
          className: x.$f,
        }),
      });
    }
    renderName() {
      let { guild: e, inlineLabel: t } = this.props;
      return (0, i.jsxs)("div", {
        className: x.UU,
        children: [
          (0, i.jsx)("span", { className: x.YW, children: e.name }),
          null != t ? (0, i.jsx)("span", { className: x.N4, children: t }) : null,
        ],
      });
    }
    renderContent() {
      let { unread: e, children: t } = this.props;
      return (0, i.jsxs)("div", {
        className: e ? x.XB : x.xr,
        children: [
          this.renderIcon(),
          this.renderName(),
          (0, i.jsx)("div", { className: x.Lr, children: t }),
        ],
      });
    }
    getAccessibilityLabel() {
      let { guild: e } = this.props;
      return G.intl.formatToPlainString(G.t.WVq3Lr, { name: e.name });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        "aria-label": this.getAccessibilityLabel(),
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
  class B extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
      let { channel: e } = this.props,
        t = (0, g.gU)(e);
      if (null == t) return null;
      let n = (0, U.Jg)(e) ?? "";
      return (0, i.jsx)("div", {
        className: x.zc,
        role: "img",
        "aria-label": n,
        children: (0, i.jsx)(t, { className: x.Kk, size: "xs", color: "currentColor" }),
      });
    }
    renderName() {
      let e,
        t,
        { mentions: n, category: r, channel: a, isMentionLowImportance: s } = this.props;
      return (
        null != n && n > 0 && (e = (0, i.jsx)(O, { className: x.qS, value: n, lowImportance: s })),
        null != r &&
          (t = (0, i.jsx)("span", { className: x.N4, children: (0, m.m1)(r, P.default, M.A) })),
        (0, i.jsxs)("div", {
          className: x.UU,
          children: [
            (0, i.jsx)("span", { className: x.YW, children: (0, m.m1)(a, P.default, M.A) }),
            e,
            this.renderVoiceStates(),
            t,
          ],
        })
      );
    }
    renderVoiceStates() {
      let { voiceStates: e, channel: t } = this.props;
      return null == e
        ? null
        : (0, i.jsx)(v.A, {
            className: x.x7,
            guildId: t.guild_id,
            users: e.map((e) => {
              let { user: t } = e;
              return { user: t };
            }),
            max: 4,
          });
    }
    renderContent() {
      let { unread: e, mentions: t, children: n } = this.props;
      return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: e || (null != t && t > 0) ? x.XB : x.xr,
        children: [
          this.renderIcon(),
          this.renderName(),
          (0, i.jsx)("div", { className: x.Lr, children: n }),
        ],
      });
    }
    getAccessibilityLabel() {
      let { channel: e } = this.props,
        t = b.A.getGuild(this.props.channel.guild_id)?.name,
        n = (0, m.m1)(e, P.default, M.A),
        i = (0, U.Jg)(e);
      return G.intl.formatToPlainString(G.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        "aria-label": this.getAccessibilityLabel(),
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
  class V extends r.Component {
    renderIcon() {
      let { channel: e, status: t } = this.props;
      return (0, i.jsx)("div", {
        className: x.IU,
        children: (0, i.jsx)(s.eu, {
          src: (0, T.Y)(e),
          size: l._3.SIZE_20,
          "aria-hidden": !0,
          status: t,
        }),
      });
    }
    renderName() {
      let e,
        { mentions: t, channel: n } = this.props;
      return (
        null != t && t > 0 && (e = (0, i.jsx)(O, { className: x.qS, value: t })),
        (0, i.jsxs)("div", {
          className: x.UU,
          children: [
            (0, i.jsx)("span", { className: x.YW, children: (0, m.m1)(n, P.default, M.A) }),
            e,
          ],
        })
      );
    }
    renderContent() {
      let { mentions: e, children: t } = this.props;
      return (0, i.jsxs)("div", {
        className: null != e && e > 0 ? x.XB : x.xr,
        children: [
          this.renderIcon(),
          this.renderName(),
          (0, i.jsx)("div", { className: x.Lr, children: t }),
        ],
      });
    }
    getAccessibilityLabel() {
      let { channel: e, mentions: t } = this.props,
        n = (0, m.m1)(e, P.default, M.A);
      return null != t && t > 0
        ? G.intl.formatToPlainString(G.t.LYdVfN, { name: n, mentions: t })
        : G.intl.formatToPlainString(G.t.lLSbno, { name: n });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        "aria-label": this.getAccessibilityLabel(),
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
  class H extends r.Component {
    renderIcon() {
      let { user: e, status: t, isMobile: n } = this.props;
      return (0, i.jsx)("div", {
        className: x.zc,
        children: (0, i.jsx)(s.eu, {
          src: e.getAvatarURL(void 0, 20),
          "aria-hidden": !0,
          size: l._3.SIZE_20,
          status: t,
          isMobile: n,
        }),
      });
    }
    getDisplayNickname() {
      let e,
        { user: t, comparator: n } = this.props,
        i = M.A.getNickname(t.id);
      return (
        ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username ||
          e === t.id) &&
          (e = i ?? w.Ay.getName(t)),
        e
      );
    }
    renderName() {
      let e,
        { user: t, mentions: n } = this.props,
        r = this.getDisplayNickname();
      return (
        null != n && n > 0 && (e = (0, i.jsx)(O, { className: x.qS, value: n })),
        (0, i.jsxs)("div", {
          className: x.UU,
          children: [
            (0, i.jsx)("span", { className: x.YW, children: r }),
            e,
            (0, i.jsx)("span", { className: x.Xh, children: w.Ay.getUserTag(t) }),
          ],
        })
      );
    }
    renderContent() {
      let { children: e, mentions: t } = this.props;
      return (0, i.jsxs)("div", {
        className: null != t && t > 0 ? x.XB : x.xr,
        children: [
          this.renderIcon(),
          this.renderName(),
          (0, i.jsx)("div", { className: x.Lr, children: e }),
        ],
      });
    }
    getAccessibilityLabel() {
      let { mentions: e, user: t } = this.props,
        n = this.getDisplayNickname(),
        i = w.Ay.getUserTag(t);
      return null != e && e > 0
        ? G.intl.formatToPlainString(G.t["6b9UrR"], { name: n, id: i, mentions: e })
        : G.intl.formatToPlainString(G.t.GWYOAY, { name: n, id: i });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        "aria-label": this.getAccessibilityLabel(),
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
  class j extends r.Component {
    renderContent() {
      let { children: e, application: t } = this.props;
      return (0, i.jsxs)("div", {
        className: x.xr,
        children: [
          (0, i.jsx)("div", {
            className: x.zc,
            children: (0, i.jsx)(R.A, { tabIndex: -1, className: x.Gt, game: t, size: x.D0 }),
          }),
          t.name,
          (0, i.jsx)("div", { className: x.Lr, children: e }),
        ],
      });
    }
    render() {
      let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: a } = this.props;
      return (0, i.jsx)(k, {
        id: a,
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        focused: r,
        children: this.renderContent(),
      });
    }
  }
  function W(e) {
    let {
      game: t,
      onMouseEnter: n,
      onClick: r,
      onFocus: a,
      focused: s,
      id: l,
      inlineLabel: o,
      children: d,
    } = e;
    return (0, i.jsx)(k, {
      id: l,
      onMouseEnter: n,
      onClick: r,
      onFocus: a,
      focused: s,
      children: (0, i.jsxs)("div", {
        className: x.xr,
        children: [
          (0, i.jsx)("div", {
            className: x.zc,
            children: (0, i.jsx)(L.A, { game: t, iconClassName: x.bN }),
          }),
          (0, i.jsxs)("div", {
            className: x.UU,
            children: [
              (0, i.jsx)("span", { className: x.YW, children: t.name }),
              null != o ? (0, i.jsx)("span", { className: x.N4, children: o }) : null,
            ],
          }),
          (0, i.jsx)("div", { className: x.Lr, children: d }),
        ],
      }),
    });
  }
  class Y extends r.Component {
    render() {
      return (0, i.jsx)("div", {
        className: x.__invalid_resultDefault,
        children: (0, i.jsx)("div", {
          className: x.xr,
          children: (0, i.jsx)("div", { className: x.wx, children: this.props.children }),
        }),
      });
    }
  }
  class K extends r.Component {
    renderContent() {
      let e,
        t,
        { link: n, children: r } = this.props;
      if (null != n.inviteCode)
        ((e = G.intl.string(G.t.w6QG3F)),
          (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" })));
      else {
        let r = (0, D.vu)(n.path);
        null == r || void 0 === r.messageId
          ? ((e = G.intl.string(G.t.qbSCqj)),
            (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })))
          : (0, D.r9)(r)
            ? ((e = G.intl.string(G.t["6Fd/j1"])),
              (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
            : ((e = G.intl.string(G.t.jQRwp4)),
              (t = (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor" })));
      }
      return (0, i.jsxs)("div", {
        className: x.xr,
        children: [
          (0, i.jsx)("div", { className: x.zc, children: t }),
          e,
          (0, i.jsx)("div", { className: x.Lr, children: r }),
        ],
      });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
  class $ extends r.Component {
    renderContent() {
      let e,
        t,
        { navigationRecord: n, children: r } = this.props;
      switch (n.type) {
        case p.t1.SHOP:
          ((e = G.intl.string(G.t.pWG4ze)),
            (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.SHOP_ORBS_TAB:
          ((e = G.intl.string(G.t.EBYkzk)),
            (t = (0, i.jsx)(_.U, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.QUEST_ORBS:
          ((e = `${G.intl.string(G.t.ElYQFS)} ${G.intl.string(G.t.JALI2K)}`),
            (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.NITRO_HOME:
          ((e = G.intl.string(G.t.Ipxkog)),
            (t = (0, i.jsx)(A.t, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.QUEST_HOME:
          ((e = G.intl.string(G.t.JALI2K)),
            (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.APPS_HOME:
          ((e = G.intl.string(G.t.PHjkRE)),
            (t = (0, i.jsx)(h.k, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.SETTINGS:
          ((e = n.label ?? G.intl.string(G.t["3D5yo/"])),
            (t = (0, i.jsx)(f.SettingsIcon, { size: "xs", color: "currentColor" })));
          break;
        case p.t1.PLAYGROUND:
          if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
            let e = n.IconComponent;
            t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
          } else t = (0, i.jsx)(I.H, { size: "xs", color: "currentColor" });
          break;
        default:
          ((e = n.id), (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })));
      }
      return (0, i.jsxs)("div", {
        className: x.xr,
        children: [
          (0, i.jsx)("div", { className: x.zc, children: t }),
          (0, i.jsx)("div", { className: x.UU, children: e }),
          (0, i.jsx)("div", { className: x.Lr, children: r }),
        ],
      });
    }
    render() {
      let {
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        id: l,
      } = this.props;
      return (0, i.jsx)(k, {
        id: l,
        onMouseEnter: e,
        onClick: t,
        onFocus: n,
        onContextMenu: r,
        focused: a,
        score: s,
        children: this.renderContent(),
      });
    }
  }
}
