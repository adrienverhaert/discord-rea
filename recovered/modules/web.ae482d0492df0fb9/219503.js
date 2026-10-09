/* Recovered shipped factory. Module 219503.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7346391..7362371
 * Raw property SHA-256: c7e40d97058dd2cbfbef8f434d11c165a3d5d544fcf9915d9ab615537cddceb4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => eU });
  var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(231723),
    o = n(289873),
    d = n(331322),
    c = n(297264),
    u = n(834730),
    _ = n(821609),
    E = n(964486),
    A = n(306537),
    h = n(595746),
    f = n(240248),
    I = n(562708);
  n(181658);
  var p = n(499785),
    T = n(652215);
  async function m() {
    let e = await p.A.get({
      url: T.Rsh.SAFETY_FLOWS_TASK,
      trackedActionData: { event: I.NetworkActionNames.USER_VERIFY },
      rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
  }
  async function g(e) {
    return (
      await p.A.post({
        url: T.Rsh.SAFETY_FLOWS_TASK,
        body: e,
        trackedActionData: { event: I.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
      })
    ).body;
  }
  let S = s.createContext(null);
  function N() {
    let e = s.useContext(S);
    if (null == e)
      throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
  }
  var C = n(728441),
    O = n(660183),
    R =
      (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
      (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
      (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
      (i[(i.PARENTAL_CONSENT_CONNECTION = 10)] = "PARENTAL_CONSENT_CONNECTION"),
      (i[(i.APP_STORE_PARENTAL_REVOCATION = 11)] = "APP_STORE_PARENTAL_REVOCATION"),
      i);
  let L = {
      EMAIL_VERIFICATION: "email_verification",
      PHONE_VERIFICATION: "phone_verification",
      GENERIC_CALL_TO_ACTION: "generic_call_to_action",
      REFRESH_APP: "refresh_app",
      AGE_VERIFICATION: "age_verification",
      PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
      APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
    },
    y = new Set(Object.values(L)),
    D = new Set([10]),
    v = new Set([11]);
  (O.intl.string(C.default["Qm6K/s"]),
    O.intl.string(C.default["dSkE/A"]),
    O.intl.string(C.default.dMMSA0),
    O.intl.string(C.default.Z87TFb));
  var b = (((r = {}).Empty = "empty"), (r.VerificationCode = "verification_code"), r),
    M = n(627575),
    P = n(17928),
    U = n(155718),
    w = n(379257),
    G = n(287809),
    x = n(430993),
    k = n(503698),
    F = n.n(k),
    B = n(825484),
    V = n(745848);
  function H(e) {
    let { actions: t, footerInput: n, actionsFullWidth: i = !1, showDivider: r = !1 } = e;
    return 0 === t.length && null == n
      ? null
      : (0, a.jsxs)("footer", {
          className: F()(V.qr, { [V.$6]: r }),
          children: [
            null != n && (0, a.jsx)("div", { children: n }),
            (0, a.jsx)(B.e, {
              className: F()(V.GC, { [V.Z7]: i }),
              justify: "end",
              fullWidth: i,
              children: t.map((e, t) => (0, a.jsx)(_.$, { ...e }, t)),
            }),
          ],
        });
  }
  let j = { bottom: 40, left: 32, right: 32, top: 32 };
  var W = n(588900);
  function Y(e) {
    let { children: t, actions: n, footerInput: i, title: r, variant: s = "default" } = e,
      l = "app_store_lockdown" === s;
    return (0, a.jsxs)(d.B, {
      direction: "vertical",
      justify: "start",
      padding: j,
      className: W.kL,
      children: [
        (0, a.jsx)(c.D, {
          variant: "heading-lg/semibold",
          className: l ? void 0 : W.R_,
          children: r,
        }),
        (0, a.jsx)(x.c, { children: t }),
        (0, a.jsx)("div", { className: W.Ic }),
        (0, a.jsx)(H, { actions: n, footerInput: i, actionsFullWidth: l, showDivider: l }),
      ],
    });
  }
  var K = n(509434),
    $ = n(739187),
    z = n(857250),
    X = n(97483),
    Z = n(224640),
    q = n(921853),
    Q = n(20742),
    J = n(696208),
    ee = n(695515),
    et = n(794364),
    en = n(10005),
    ei = n(453322),
    er = n(834981),
    ea = n(22071),
    es = n(196359);
  function el() {
    return (0, a.jsx)(u.E, {
      variant: "text-md/normal",
      color: "text-subtle",
      className: es.Q,
      children: O.intl.format(C.default.ifObbX, {
        handleAgeVerifyHook: () =>
          w.A.showAgeVerificationGetStartedModal({ entryPoint: A.q1.PARENTAL_CONSENT_LOCKOUT }),
      }),
    });
  }
  n(321073);
  var eo = n(191627),
    ed = n(778712),
    ec = n(97808),
    eu = n(939249),
    e_ = n(947641),
    eE = n(789645),
    eA = n(486020),
    eh = n(923531);
  let ef = () => ({
    seconds: O.intl.string(C.default.M4NOO3),
    minutes: C.default["9nem85"],
    hours: C.default.sJjWRY,
    yesterday: O.intl.string(C.default["7SxW32"]),
    days: C.default.tVHevX,
    date: C.default.q6jzya,
  });
  var eI = n(273665),
    ep = n(838131);
  function eT(e) {
    var t;
    let {
        request: n,
        hasMaxConnections: i,
        isAcceptLoading: r,
        isDeclineLoading: l,
        actionsDisabled: d,
        onAccept: c,
        onDecline: _,
      } = e,
      E = (0, P.bG)([G.default], () => G.default.getUser(n.parent_id)),
      A = E?.globalName ?? E?.username ?? n.parent_username,
      h = E?.username ?? n.parent_username,
      f = h !== A,
      I = E?.avatar ?? n.parent_avatar,
      { isConnected: p, isResolved: T } = (function (e) {
        let t = (0, P.bG)([ee.A], () => ee.A.getLinkedUsers()[e]?.link_status),
          [n, i] = s.useState(() =>
            t === eo.Ef.ACTIVE ? "connected" : null == t || t === eo.Ef.PENDING ? null : "declined",
          ),
          [r, a] = s.useState(t);
        t !== r &&
          (a(t),
          t === eo.Ef.ACTIVE
            ? i("connected")
            : t === eo.Ef.PENDING
              ? i(null)
              : null != t
                ? i("declined")
                : null != r && r !== eo.Ef.ACTIVE && i("declined"));
        let l = "connected" === n,
          o = "declined" === n;
        return { isConnected: l, isDeclined: o, isResolved: l || o };
      })(n.parent_id),
      m = ((t = n.created_at), (0, eh.mV)(Date.parse(t), ef)),
      g = eA.Ay.getUserAvatarURL({ id: n.parent_id, avatar: I }, !1, (0, ed.FT)(ed._3.SIZE_40));
    return (0, a.jsxs)("div", {
      className: ep.nM,
      children: [
        (0, a.jsx)("div", {
          className: ep.R3,
          children: (0, a.jsx)(ec.eu, { src: g, size: ed._3.SIZE_40, "aria-label": h }),
        }),
        (0, a.jsxs)("div", {
          className: ep.zH,
          children: [
            (0, a.jsx)(u.E, {
              variant: "text-md/normal",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: A,
            }),
            f &&
              (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-default",
                lineClamp: 1,
                children: h,
              }),
            (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: m }),
          ],
        }),
        T
          ? (0, a.jsx)(u.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: O.intl.string(p ? C.default.YQP5dE : C.default["2HvOvh"]),
            })
          : (0, a.jsxs)("div", {
              className: ep.o1,
              children: [
                !i &&
                  (0, a.jsx)(eu.D, {
                    "aria-label": O.intl.formatToPlainString(eI.default.jc1Ip7, {
                      name: n.parent_username,
                    }),
                    className: F()(ep.hP, ep.xG),
                    onClick: () => !d && c(n.parent_id),
                    children: r
                      ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                      : (0, a.jsx)(e_.r, { className: ep.gE, color: "currentColor" }),
                  }),
                (0, a.jsx)(eu.D, {
                  "aria-label": O.intl.formatToPlainString(eI.default["4GtllP"], {
                    name: n.parent_username,
                  }),
                  className: F()(ep.hP, ep.rr),
                  onClick: () => !d && _(n.parent_id),
                  children: l
                    ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsx)(eE.P, { className: ep.gE, color: "currentColor" }),
                }),
              ],
            }),
      ],
    });
  }
  function em(e) {
    let { pendingRequests: t, linkedUsersProcessed: n } = e,
      {
        seenRequests: i,
        hasMaxConnections: r,
        actioningUserId: l,
        isAcceptLoading: o,
        isDeclineLoading: d,
        actionsDisabled: c,
        handleAccept: u,
        handleDecline: _,
      } = (function (e) {
        let { pendingRequests: t, linkedUsersProcessed: n, onActionError: i } = e,
          r = (0, er.xr)(),
          [a, l] = s.useState(null),
          {
            acceptLinkRequest: o,
            declineLinkRequest: d,
            isAcceptLoading: c,
            isDeclineLoading: u,
          } = (0, en.A)({
            onSuccess: () => l(null),
            onError: () => {
              (l(null), i());
            },
          }),
          _ = c || u,
          [E, A] = s.useState(() => new Set()),
          h = s.useCallback((e) => {
            A((t) => {
              if (t.has(e)) return t;
              let n = new Set(t);
              return (n.add(e), n);
            });
          }, []),
          f = s.useCallback(
            (e) => {
              _ || (h(e), l(e), o(e));
            },
            [_, h, o],
          ),
          I = s.useCallback(
            (e) => {
              _ || (h(e), l(e), d(e));
            },
            [_, h, d],
          ),
          [p, T] = s.useState(t),
          [m, g] = s.useState(t),
          [S, N] = s.useState(n);
        return (
          n && !S
            ? (N(!0),
              g(t),
              T((e) => {
                let n = new Map();
                for (let t of e) E.has(t.parent_id) && n.set(t.parent_id, t);
                for (let e of t) n.set(e.parent_id, e);
                return Array.from(n.values());
              }))
            : t !== m &&
              (g(t),
              T((e) => {
                let n = new Map(e.map((e) => [e.parent_id, e]));
                for (let e of t) n.set(e.parent_id, e);
                return Array.from(n.values());
              })),
          {
            seenRequests: p,
            hasMaxConnections: r,
            actioningUserId: a,
            isAcceptLoading: c,
            isDeclineLoading: u,
            actionsDisabled: _,
            handleAccept: f,
            handleDecline: I,
          }
        );
      })({
        pendingRequests: t,
        linkedUsersProcessed: n,
        onActionError: () => {
          (0, $.P)((0, z.o)(O.intl.string(eI.default.Wu8BK2), X.Ck.FAILURE));
        },
      });
    return 0 === i.length
      ? null
      : (0, a.jsx)("div", {
          className: ep.Nr,
          children: i.map((e) =>
            (0, a.jsx)(
              eT,
              {
                request: e,
                hasMaxConnections: r,
                isAcceptLoading: o && l === e.parent_id,
                isDeclineLoading: d && l === e.parent_id,
                actionsDisabled: c,
                onAccept: u,
                onDecline: _,
              },
              e.parent_id,
            ),
          ),
        });
  }
  var eg = n(818348),
    eS = n(703687);
  let eN = "https://support.discord.com/hc/articles/14155060633623";
  var eC = n(846330);
  let eO = {
      refresh_app: (e) => {
        let { onSubmit: t, disabled: n } = e,
          i = s.useCallback(async () => {
            (await t({ type: b.Empty }), window.location.reload());
          }, [t]);
        return (0, a.jsxs)("div", {
          className: eC.kL,
          children: [
            (0, a.jsx)(c.D, {
              variant: "heading-lg/bold",
              className: eC.DD,
              children: O.intl.string(C.default.v52itt),
            }),
            (0, a.jsx)(u.E, {
              variant: "text-md/normal",
              color: "text-muted",
              className: eC.h_,
              children: O.intl.string(C.default["5am8D3"]),
            }),
            (0, a.jsx)(d.B, {
              direction: "horizontal",
              justify: "end",
              children: (0, a.jsx)(_.$, {
                variant: "primary",
                text: O.intl.string(C.default["GDsHl+"]),
                onClick: i,
                disabled: n,
              }),
            }),
          ],
        });
      },
      age_verification: function (e) {
        let { onSubmit: t } = e,
          n = (0, P.bG)([G.default], () => G.default.getCurrentUser());
        return (0, a.jsx)(Y, {
          title: "Lorem ipsum dolor",
          actions: [
            {
              text: "Consectetur adipiscing",
              variant: "primary",
              onClick: function () {
                n?.ageVerificationStatus === U.Tk.UNVERIFIED
                  ? w.A.showAgeVerificationGetStartedModal({
                      entryPoint: A.q1.SAFETY_FLOWS,
                      onClose: () => t({ type: b.Empty }),
                    })
                  : t({ type: b.Empty });
              },
            },
          ],
          children: (0, a.jsxs)(d.B, {
            gap: 8,
            children: [
              (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              }),
              (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              }),
              (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                children: "Ut enim ad minim veniam quis",
              }),
            ],
          }),
        });
      },
      parental_consent_connection: (e) => {
        var t;
        let n,
          i,
          { configData: r, onSubmit: o, disabled: c, transitionState: A = l.ip.ENTERED } = e,
          { getLinkCode: h } = (0, en.A)();
        (0, E.Ay)(() => {
          (0, et._z)();
        });
        let f = s.useMemo(() => {
            let e;
            return {
              link_code: "string" == typeof (e = r ?? {}).link_code ? e.link_code : "",
              link_code_expires_at:
                "string" == typeof e.link_code_expires_at ? e.link_code_expires_at : "",
              pending_requests: Array.isArray(e.pending_requests) ? e.pending_requests : [],
            };
          }, [r]),
          I = (0, er.VT)(),
          p = (0, er.Du)(),
          T = (0, P.bG)([ee.A], () => ee.A.getLinkedUsers()),
          m = (0, P.bG)([ee.A], () => ee.A.getAreLinkedUsersProcessed()),
          g =
            ((t = f.pending_requests),
            (n = (0, P.bG)([ee.A], () => ee.A.getLinkedUsers())),
            (i = (0, P.bG)([G.default], () => G.default.getCurrentUser()?.id)),
            s.useMemo(() => {
              if (!m) return t;
              let e = new Map(t.map((e) => [e.parent_id, e])),
                r = [];
              for (let t of Object.values(n)) {
                if (null == t || t.link_status !== eo.Ef.PENDING || t.requestor_id === i) continue;
                let n = G.default.getUser(t.user_id),
                  a = e.get(t.user_id);
                r.push({
                  parent_id: t.user_id,
                  parent_username: n?.username ?? a?.parent_username ?? t.user_id,
                  parent_avatar: n?.avatar ?? a?.parent_avatar ?? null,
                  created_at: t.created_at,
                });
              }
              return r;
            }, [m, n, i, t])),
          S = m ? Object.values(T).some((e) => null != e) : f.pending_requests.length > 0,
          N = m ? I : f.pending_requests.length,
          R = (0, P.bG)([ee.A], () => ee.A.getLinkCode()),
          L = (0, P.bG)([ee.A], () => ee.A.getLinkCodeExpiresAt()),
          y = R ?? f.link_code,
          D = L ?? Date.parse(f.link_code_expires_at),
          v = s.useCallback(async () => {
            try {
              await o({ type: b.Empty });
            } catch {
              (0, $.P)((0, z.o)(O.intl.string(C.default["+QRSxc"]), X.Ck.FAILURE));
            }
          }, [o]),
          [U, w] = s.useState(S);
        S && !U && w(!0);
        let [k, F] = s.useState(!1),
          B = s.useCallback(() => {
            (F(!1), h());
          }, [h]);
        (0, ei.A)(B);
        let V = !U || k,
          H = V
            ? O.intl.format(C.default["6GaRTu"], { link: eN })
            : O.intl.format(C.default["Ke+kz5"], { pendingCount: N, link: eN });
        return (0, a.jsxs)(Z.d, {
          transitionState: A,
          onClose: eg.tE,
          dismissable: !1,
          size: "md",
          "aria-label": O.intl.string(C.default.dMMSA0),
          children: [
            k &&
              (0, a.jsx)("div", {
                className: eS.g,
                children: (0, a.jsx)(_.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: q.n,
                  text: O.intl.string(C.default.CLAQas),
                  onClick: () => F(!1),
                }),
              }),
            (0, a.jsx)(Q.rQ, {
              alignCenter: !0,
              title: O.intl.string(C.default.dMMSA0),
              subtitle: H,
            }),
            (0, a.jsxs)(x.c, {
              children: [
                V &&
                  (0, a.jsx)(d.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 16,
                    children: (0, a.jsx)(ea.r, { linkCode: y, expiresAt: D, onRefresh: h }),
                  }),
                (0, a.jsx)("div", {
                  hidden: V,
                  children: (0, a.jsx)(em, { pendingRequests: g, linkedUsersProcessed: m }),
                }),
              ],
            }),
            (0, a.jsx)(J.H, {
              actionsFullWidth: !0,
              actions:
                U && !k
                  ? [
                      {
                        text: O.intl.string(C.default["RD76/V"]),
                        variant: "secondary",
                        onClick: function () {
                          F(!0);
                        },
                      },
                      {
                        text: O.intl.string(C.default.OaHZUf),
                        variant: "primary",
                        onClick: v,
                        disabled: !p || c,
                      },
                    ]
                  : void 0,
            }),
            (0, a.jsx)(el, {}),
            (0, a.jsx)(u.E, {
              variant: "text-md/normal",
              color: "text-subtle",
              className: eS.r,
              children: O.intl.format(C.default["0DHxym"], {
                handleLogOut: () => (0, M.k)("safety_flows_parental_consent_connection"),
              }),
            }),
          ],
        });
      },
      app_store_parental_revocation: (e) => {
        let { disabled: t } = e,
          n = s.useCallback(() => {
            window.open(
              "https://support.discord.com/hc/en-us/articles/42855178312087",
              "_blank",
              "noopener,noreferrer",
            );
          }, []);
        return (0, a.jsx)(Y, {
          title: O.intl.string(C.default.Z87TFb),
          variant: "app_store_lockdown",
          actions: [
            {
              text: O.intl.string(C.default["6FXIU6"]),
              variant: "primary",
              icon: K.I,
              iconPosition: "end",
              onClick: n,
              disabled: t,
            },
          ],
          children: (0, a.jsxs)(d.B, {
            gap: 16,
            children: [
              (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: O.intl.string(C.default["1YhkP1"]),
              }),
              (0, a.jsxs)(d.B, {
                children: [
                  (0, a.jsx)(c.D, {
                    variant: "text-md/normal",
                    children: O.intl.string(C.default.z1L5Wt),
                  }),
                  (0, a.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: O.intl.string(C.default.BaI6L4),
                  }),
                ],
              }),
            ],
          }),
        });
      },
    },
    eR = (e) => {
      let { onSubmit: t, disabled: n, transitionState: i } = e,
        { task: r } = N(),
        s = eO[r.ui_component.component.type];
      return null == s
        ? null
        : (0, a.jsx)(s, {
            configData: r.ui_component.component,
            onSubmit: t,
            taskId: r.task_id,
            flowId: r.flow_context?.flow_id,
            assignmentId: r.assignment_id,
            disabled: n,
            transitionState: i,
          });
    };
  var eL = n(754302),
    ey = n(700265);
  let eD = {
      [R.EMAIL_VERIFICATION]: O.intl.string(C.default.HC4IiR),
      [R.REFRESH_APP]: O.intl.string(C.default.SzfxQ3),
      [R.AGE_VERIFICATION]: O.intl.string(C.default["dSkE/A"]),
      [R.PARENTAL_CONSENT_CONNECTION]: O.intl.string(C.default.dMMSA0),
      [R.APP_STORE_PARENTAL_REVOCATION]: O.intl.string(C.default.Z87TFb),
    },
    ev = function () {
      let { task: e } = N(),
        t = e.flow_context.tasks,
        n = t.findIndex((t) => t.task_type === e.task_type),
        i = !v.has(e.task_type);
      return (0, a.jsxs)(d.B, {
        direction: "vertical",
        justify: "space-between",
        padding: j,
        className: ey.k,
        children: [
          (0, a.jsxs)(d.B, {
            direction: "vertical",
            justify: "space-between",
            children: [
              (0, a.jsx)(c.D, {
                variant: "display-md",
                className: ey.D,
                children: O.intl.string(C.default["/OpRAP"]),
              }),
              i &&
                (0, a.jsx)(d.B, {
                  direction: "vertical",
                  justify: "space-between",
                  gap: 0,
                  children: t.map((e, t) =>
                    (0, a.jsx)(
                      eL.B,
                      {
                        title: eD[e.task_type] ?? "",
                        listType: "numbered",
                        index: t,
                        color: t === n ? "text-strong" : t < n ? "feedback-positive" : "text-muted",
                        completed: t < n,
                      },
                      e.task_type,
                    ),
                  ),
                }),
            ],
          }),
          (0, a.jsx)(u.E, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: O.intl.format(C.default["0DHxym"], {
              handleLogOut: () => (0, M.k)("safety_flows_sidebar"),
            }),
          }),
        ],
      });
    };
  var eb = n(450165);
  let eM = n(843020);
  function eP(e) {
    let { task: t, handleSubmit: n, disabled: i, transitionState: r } = e,
      [l, o] = s.useState(t),
      d = s.useMemo(() => ({ task: l, setTask: o }), [l, o]);
    s.useEffect(() => {
      o(t);
    }, [t]);
    let c = D.has(l.task_type);
    return (0, a.jsxs)(S.Provider, {
      value: d,
      children: [
        !c && (0, a.jsx)(ev, {}),
        (0, a.jsx)(eR, { onSubmit: n, disabled: i, transitionState: r }),
      ],
    });
  }
  let eU = function (e) {
    let { transitionState: t, onClose: n } = e,
      [i, r] = s.useState(null),
      [I, p] = s.useState(!0),
      [T, S] = s.useState(null),
      [N, v] = s.useState(!1),
      P = s.useCallback(async () => {
        (p(!0), S(null));
        try {
          let e = await m();
          if (null == e) return void n();
          !(0, f.uJ)(e.ui_component?.component.type) && y.has(e.ui_component.component.type)
            ? r(e)
            : r({
                task_id: e.task_id,
                task_type: R.REFRESH_APP,
                assignment_id: e.assignment_id,
                ui_component: { component: { type: L.REFRESH_APP, data: {} } },
                flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
              });
        } catch {
          S(O.intl.string(C.default["/f++3g"]));
        } finally {
          p(!1);
        }
      }, [n]),
      U = s.useCallback(
        async (e) => {
          if (null !== i) {
            v(!0);
            try {
              let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
              (await g(t), P());
            } catch (e) {
              if (D.has(i.task_type)) throw e;
              S(O.intl.string(C.default["+QRSxc"]));
            } finally {
              v(!1);
            }
          }
        },
        [i, P],
      );
    (0, E.Ay)(() => {
      P();
    });
    let w = s.useMemo(() => i?.task_type === R.AGE_VERIFICATION, [i]),
      G = null != i && null === T && D.has(i.task_type);
    return (0, a.jsxs)("div", {
      className: eb.Tp,
      children: [
        (0, a.jsx)("img", { className: eb.xX, src: eM, alt: "" }),
        w
          ? (0, a.jsx)(h.default, {
              transitionState: t ?? l.ip.ENTERED,
              entryPoint: A.q1.SAFETY_FLOWS,
              onClose: eg.tE,
              onComplete: async () => {
                await U({ type: b.Empty });
              },
              dismissable: !1,
            })
          : G && null != i
            ? (0, a.jsx)(eP, {
                task: i,
                handleSubmit: U,
                disabled: N,
                transitionState: t ?? l.ip.ENTERED,
              })
            : (0, a.jsx)("div", {
                className: eb.nA,
                children: I
                  ? (0, a.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                  : (0, a.jsx)("div", {
                      className: eb.kL,
                      children: (0, a.jsxs)(d.B, {
                        direction: "horizontal",
                        justify: "start",
                        className: eb.rf,
                        children: [
                          null !== T &&
                            (0, a.jsxs)(d.B, {
                              direction: "vertical",
                              justify: "space-between",
                              align: "center",
                              className: eb.Nj,
                              padding: 16,
                              children: [
                                (0, a.jsxs)(d.B, {
                                  direction: "vertical",
                                  gap: 4,
                                  children: [
                                    (0, a.jsx)(c.D, {
                                      variant: "heading-xl/semibold",
                                      children: O.intl.string(O.t.c6kn6F),
                                    }),
                                    (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: O.intl.string(O.t.ZUEGFn),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(d.B, {
                                  direction: "horizontal",
                                  justify: "center",
                                  align: "center",
                                  children: [
                                    (0, a.jsx)(_.$, {
                                      fullWidth: !0,
                                      variant: "secondary",
                                      text: O.intl.string(O.t["2jxGer"]),
                                      onClick: () => {
                                        (0, M.k)("safety_flows_modal");
                                      },
                                    }),
                                    (0, a.jsx)(_.$, {
                                      fullWidth: !0,
                                      text: O.intl.string(O.t["7NqTJn"]),
                                      onClick: () => {
                                        P();
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          null === T &&
                            null != i &&
                            (0, a.jsx)(eP, { task: i, handleSubmit: U, disabled: N }),
                        ],
                      }),
                    }),
              }),
      ],
    });
  };
}
