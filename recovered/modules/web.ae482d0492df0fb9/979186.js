/* Recovered shipped factory. Module 979186.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6659421..6668536
 * Raw property SHA-256: 154866f5e8f273f3e1a39da47612c9ac7f0c55cd45120ff6269cb81b9a79c005
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => eO, A: () => eD });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(561028),
    c = n(121894),
    u = n(337836),
    _ = n(17928),
    E = n(462887),
    A = n(38021),
    h = n(192308),
    f = n(231723),
    I = n(559106),
    p = n(43990),
    T = n(638495),
    m = n(557361),
    g = n(965830),
    S = n(318009),
    N = n(92960),
    C = n(14214),
    O = n(775602),
    R = n(697138),
    L = n(933958),
    y = n(793574),
    D = n(688810),
    v = n(590703),
    b = n(681582),
    M = n(573435),
    P = n(71855),
    U = n(203480),
    w = n(670735),
    G = n(549205),
    x = n(750506),
    k = n(267102),
    F = n(435558),
    B = n.n(F),
    V = n(202091),
    H = n(258873),
    j = n(622242),
    W = n(731738),
    Y = n(834730),
    K = n(780907),
    $ = n(684013),
    z = n(964486),
    X = n(807393),
    Z = n(976860),
    q = n(287809),
    Q = n(144400),
    J = n(927813),
    ee = n(777334),
    et = n(41984),
    en = n(870373),
    ei = n(302614),
    er = n(233741),
    ea = n(28528),
    es = n(672396),
    el = n(652215),
    eo = n(660183),
    ed = n(261289);
  let ec = B().throttle(
      () => {
        X.A.increment(
          {
            name: W.K.APP_CRASHED,
            tags: [`reason:${H.J.UNHANDLED_JS_ERROR}`, `level:${j.k.FATAL}`],
          },
          !0,
        );
      },
      100,
      { trailing: !1 },
    ),
    eu = 10 * J.A.Millis.SECOND;
  function e_(e) {
    let { error: t, onLock: n, onReload: a, onDisable: s, onCrashDisabled: l } = e,
      o = r.useMemo(() => new V.SpringValue(1), []),
      d = r.useRef(null),
      [c, u] = r.useState(!1),
      [E, A] = r.useState(!1),
      h = (0, _.bG)([q.default], () => q.default.getCurrentUser());
    (0, z.Ay)(
      () => (
        (d.current = setTimeout(I, eu)),
        (0, en.g)(el.HAw.NOTIFICATION_VIEWED, { notif_type: es.KS.OverlayCrashed }),
        () => {
          null != d.current && clearTimeout(d.current);
        }
      ),
    );
    let f = (h?.isStaff() ?? !1) || (h?.isStaffPersonal() ?? !1),
      I = r.useCallback(() => {
        (o.set(0), null != d.current && clearTimeout(d.current), (d.current = null), n?.(), l?.());
      }, [o, n, l]),
      p = r.useCallback(
        (e) => {
          E ||
            (A(!0),
            n?.(),
            (0, en.g)(
              el.HAw.NOTIFICATION_CLICKED,
              { notif_type: es.KS.OverlayCrashed, action_type: "reload" },
              !0,
            ),
            e.stopPropagation(),
            setTimeout(() => a?.(), 200));
        },
        [n, a, E],
      ),
      T = r.useCallback(
        (e) => {
          (e.stopPropagation(),
            e.shiftKey ? (u(!0), null != d.current && clearTimeout(d.current)) : u(!1));
        },
        [u],
      ),
      m = r.useCallback(
        (e) => {
          (e.stopPropagation(), n?.(), s?.());
        },
        [s, n],
      ),
      g = (0, _.bG)([er.A], () => er.A.getFocusedRunningGame()),
      S = c
        ? (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(Y.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t.mn4eXC),
              }),
              (0, i.jsxs)("div", {
                className: ed.Xh,
                children: [
                  (0, i.jsx)(Y.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: t.message,
                  }),
                  (0, i.jsx)(Y.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    children: (0, i.jsx)("code", {
                      className: ed.aY,
                      children: (0, i.jsx)("pre", { children: t.stack }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null,
      N = c ? null : eo.intl.string(eo.t.oEJEFq);
    return (0, i.jsx)(ea.$, {
      title: eo.intl.string(eo.t.U38qZj),
      body: S,
      hint: f ? N : void 0,
      confirmText: eo.intl.string(eo.t.a3HlgJ),
      cancelText: null != g ? eo.intl.string(eo.t.qIYnPo) : void 0,
      icon: (0, i.jsx)(Q.A, { width: 40, height: 40, className: ed.Lo }),
      onNotificationClick: T,
      onConfirmClick: p,
      onCancelClick: null != g ? m : void 0,
      onDismissClick: n,
      expand: !0,
      locked: !0,
      notificationId: "overlay-crashed",
      index: 0,
      status: el.yFH.ACTIVE,
      containerRef: null,
      contentOpacity: o,
      className: ed.Pl,
      wrapperClassName: ed.fl,
    });
  }
  class eE extends r.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
      let n = (0, Z.JK)().location;
      this.setState({ error: e, info: t });
      let i = er.A.getTargetPID();
      ($.A.setOverlayCrashed(i, e), $.A.setInputLocked(!0, i));
      let r = (0, ee.St)(e, et.Ue.OutOfProcess, { extra: { info: t, location: n } });
      ((0, en.g)(el.HAw.APP_CRASHED, {
        path: n.pathname,
        extra: t,
        error_message: e.message,
        error_stack: e.stack,
        sentry_issue_id: r,
        error_level: "fatal",
      }),
        ec(),
        (this.pid = i));
    }
    render() {
      let { children: e, className: t } = this.props,
        { error: n, showError: r } = this.state;
      return null != n
        ? r
          ? (0, i.jsx)(ei.A, {
              className: ed.wz,
              children: (0, i.jsx)(e_, {
                error: n,
                onLock: () => {
                  let e = this.pid ?? er.A.getTargetPID();
                  ($.A.setInputLocked(!0, e), this.setState({ showError: !1 }));
                },
                onDisable: () => {
                  let e = er.A.getFocusedRunningGame();
                  null != e && K.Ay.toggleOverlay(e, !1, !1);
                },
                onCrashDisabled: () => {
                  let e = this.pid ?? er.A.getTargetPID();
                  ($.A.updateOverlayState(
                    e,
                    et.AR.OVERLAY_CRASHED_DISABLED,
                    "OOPOverlayErrorBoundary",
                  ),
                    this.setState({ showError: !1 }));
                },
                onReload: () => {
                  ($.A.setReloadOverlay(er.A.getTargetPID()), this.setState({ showError: !1 }));
                },
              }),
            })
          : null
        : (0, i.jsx)("div", { className: t, children: e });
    }
  }
  var eA = n(97469),
    eh = n(867045),
    ef = n(597619),
    eI = n(892019),
    ep = n(723702),
    eT = n(677134),
    em = n(19575),
    eg = n(346142),
    eS = n(869146),
    eN = n(392164),
    eC = n(577063);
  function eO(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && ep.isPlatformEmbedded && !n;
  }
  function eR(e) {
    let { windowKey: t, themeOverride: n } = e,
      { theme: i } = (0, A.wR)(),
      a = n ?? i;
    return (
      r.useLayoutEffect(() => {
        em.Ay.setTrafficLightAppearance((0, E.M)(a) ? "dark" : "light", t);
      }, [a, t]),
      null
    );
  }
  class eL extends r.Component {
    rootRef = r.createRef();
    _cleanupWindowActionCreators = void 0;
    _combokeys = null;
    static defaultProps = { withTitleBar: !0 };
    componentDidMount() {
      let { guestWindow: e } = this.props,
        t = e.document;
      (null == t.querySelector("title") &&
        null != t.head &&
        t.head.appendChild(t.createElement("title")),
        this.updateTitle(),
        this.updateClientTheme(),
        (0, eg.M)(e),
        e.addEventListener("blur", this.handleBlur),
        ep.isPlatformEmbedded
          ? t.addEventListener("contextmenu", eT.contextMenuCallbackNative, !1)
          : t.addEventListener("contextmenu", eT.contextMenuCallbackWeb, !1),
        e.addEventListener("beforeunload", this.beforeUnload),
        this.registerPopoutGlobalKeybinds());
    }
    beforeUnload = (e) => {
      let { onBeforeUnload: t } = this.props,
        n = () => {
          (eS.A.unmountWindow(this.props.windowKey),
            ep.isPlatformEmbedded && em.Ay.close(this.props.windowKey));
        };
      null != t ? t({ e, unmountWindow: n }) : n();
    };
    componentDidUpdate(e) {
      let { title: t, clientThemesCSS: n } = this.props;
      (e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme());
    }
    componentWillUnmount() {
      let { guestWindow: e } = this.props,
        t = e.document;
      (this.unregisterPopoutGlobalKeybinds(),
        e.removeEventListener("blur", this.handleBlur),
        ep.isPlatformEmbedded
          ? t.removeEventListener("contextmenu", eT.contextMenuCallbackNative)
          : t.removeEventListener("contextmenu", eT.contextMenuCallbackWeb),
        (0, c.r)(() => h.useModalsStore.setState((e) => ({ ...e, [f.KX]: [] }))),
        e.removeEventListener("beforeunload", this.beforeUnload));
    }
    updateTitle() {
      let { title: e, guestWindow: t } = this.props,
        n = t.document.querySelector("title");
      null != n && (n.innerText = e);
    }
    updateClientTheme() {
      let { clientThemesCSS: e, guestWindow: t } = this.props,
        n = t.document,
        i = n.head;
      o()(null != i, "Window document head was null");
      let r = i.querySelector(`style[${v.Vg}]`);
      if (null != r) {
        r.textContent = e;
        return;
      }
      let a = n.createElement("style");
      (a.setAttribute(v.Vg, "true"), (a.textContent = e), i.appendChild(a));
    }
    handleBlur = () => {
      this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
      let { guestWindow: e, channelId: t } = this.props,
        n = e.document;
      for (let e of ((this._combokeys = (0, G.I)(n.documentElement)),
      [C.VT, C.rR, (0, N.LB)(t), ...(this.props.keybinds ?? [])]))
        if (e.comboKeysBindGlobal)
          for (let t of e.binds)
            this._combokeys.bindGlobal(
              t,
              (t, n) => ("function" == typeof e.action && e.action(t, n), !1),
            );
    }
    unregisterPopoutGlobalKeybinds() {
      null != this._combokeys && this._combokeys.reset();
    }
    render() {
      let {
          forcedColors: e,
          children: t,
          windowKey: n,
          isFullScreen: r,
          withTitleBar: a,
          guestWindow: l,
          clientThemesClassName: o,
          contentClassName: c,
          themeOverride: _,
          titleBarTheme: E,
          hideModals: A = !1,
          appContext: h,
        } = this.props,
        f = eO({ withTitleBar: a, isFullScreen: r }),
        g = n === eN.f,
        N = g ? eE : w.A;
      return (0, i.jsx)(d.Kd, {
        children: (0, i.jsxs)(
          eh.e,
          {
            windowKey: n,
            themeOverride: _,
            children: [
              f && (0, i.jsx)(eR, { windowKey: n, themeOverride: E }),
              (0, i.jsx)(R.A, {
                children: (0, i.jsxs)(I.xp, {
                  containerRef: this.rootRef,
                  children: [
                    (0, i.jsx)(ey, {
                      guestWindow: l,
                      className: s()(o, { overlay: g }),
                      children: (0, i.jsxs)(N, {
                        children: [
                          (0, i.jsx)(M.Al, {}),
                          (0, i.jsx)(k.Wr, {
                            appContext: h ?? el.BRT.POPOUT,
                            renderWindow: l,
                            children: (0, i.jsx)(b.l, {
                              children: (0, i.jsxs)(x.Yf, {
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: eC.SW,
                                    children: [
                                      f &&
                                        (0, i.jsx)(p.N, {
                                          theme: E,
                                          children: (e) =>
                                            (0, i.jsx)(P.cq, {
                                              windowKey: n,
                                              className: s()(e, eC.uv),
                                            }),
                                        }),
                                      (0, i.jsx)("div", { className: s()(eC.Qs, c), children: t }),
                                    ],
                                  }),
                                  !A && (0, i.jsx)(T.b, {}),
                                  (0, i.jsx)(S.A, {}),
                                  (0, i.jsx)(u.P, {}),
                                  (0, i.jsx)(x.C8, {}),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(m.Ut, {}),
                  ],
                }),
              }),
            ],
          },
          e,
        ),
      });
    }
  }
  function ey(e) {
    let { guestWindow: t, className: n, children: a, ref: l } = e,
      { lang: d, style: c, className: u } = (0, ef.xb)();
    (r.useEffect(() => {
      let e = t.document.documentElement;
      (o()(null != e, "Window document element was null"), e.setAttribute("style", c));
    }, [t, c]),
      r.useEffect(() => {
        let e = t.document.documentElement;
        (o()(null != e, "Window document element was null"), e.setAttribute("lang", d));
      }, [t, d]),
      (0, eI.A)(t.document.documentElement));
    let _ = s()(u, n, "in-popout");
    return (
      r.useLayoutEffect(() => {
        let e = t.document.documentElement;
        (o()(null != e, "Window document element was null"), e.setAttribute("class", _));
      }, [t, _]),
      (0, i.jsx)("div", { "data-popout-root": !0, ref: l, children: a })
    );
  }
  let eD = function (e) {
    let { ref: t, ...n } = e,
      { guestWindow: r, isFullScreen: a } = (0, _.cf)([eS.A], () => ({
        guestWindow: eS.A.getWindow(n.windowKey),
        isFullScreen: eS.A.isWindowFullScreen(n.windowKey),
      }));
    o()(null != r, "Missing guestWindow reference");
    let { forcedColors: s, connectedEmbeddedActivity: l } = (0, _.cf)([O.Ay, L.Ay], () => ({
      forcedColors: O.Ay.useForcedColors ? "yes" : "no",
      connectedEmbeddedActivity: L.Ay.getCurrentEmbeddedActivity(),
    }));
    (0, U.A)(r, !1);
    let { analyticsLocations: d } = (0, D.Ay)(y.A.POPOUT_WINDOW),
      { clientThemesClassName: c, clientThemesCSS: u } = (0, v.Ay)(),
      E = (0, eA.NC)(),
      A = n.themeOverride ?? E;
    return null == r
      ? null
      : (0, i.jsx)(g.W, {
          children: (0, i.jsx)(D.f5, {
            value: d,
            children: (0, i.jsx)(eL, {
              ref: t,
              ...n,
              titleBarTheme: A,
              guestWindow: r,
              isFullScreen: a,
              forcedColors: s,
              connectedEmbeddedActivity: l,
              clientThemesClassName: c,
              clientThemesCSS: u,
            }),
          }),
        });
  };
}
