/* Recovered shipped factory. Module 595746.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2756901..2760779
 * Raw property SHA-256: a53f689afb2c7116192523ffa819b069fe6f1ebc83df117879bab6ecaf257241
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { default: () => w });
  var i = n(477900),
    r = n(582128),
    a = n(132500),
    s = n(834730),
    l = n(123292),
    o = n(772707),
    d = n(331322),
    c = n(885574),
    u = n(821609),
    _ = n(632738),
    E = n(627575),
    A = n(393033),
    h = n(975571),
    f = n(379257),
    I = n(306537),
    p = n(295972),
    T = n(36149),
    m = n(731738),
    g = n(17928),
    S = n(807393),
    N = n(787301);
  let C = (0, n(945810).mj)({
    kind: "user",
    name: "2026-03-age-verification-google-wallet",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  var O = n(750481),
    R = n(40449),
    L = n(660183);
  let y = function (e) {
    let { onClose: t, classificationId: n, onGoogleWalletSelect: i } = e,
      { methods: a, loading: s } = (0, g.cf)([N.A], () => ({
        methods: N.A.methods,
        loading: N.A.loading,
      })),
      { initiateAgeVerification: l } = (0, O.n)({
        onComplete: t,
        entryPoint: I.q1.EXPRESSIVE_GET_STARTED,
        shouldShowExpressiveModal: !0,
        classificationId: n,
      }),
      [o, d] = r.useState(!1);
    return (
      r.useEffect(() => {
        let e = !1;
        return (
          Promise.resolve(!1).then((t) => {
            !e &&
              (S.A.increment({
                name: m.K.GOOGLE_WALLET_AVAILABILITY_CHECK,
                tags: [`available:${t}`],
              }),
              d(t && C.getConfig({ location: "age_verification_methods" }).enabled));
          }),
          () => {
            e = !0;
          }
        );
      }, []),
      r.useEffect(() => {
        null == a && (0, p.DJ)();
      }, [a]),
      {
        ageVerificationMethods: r.useMemo(() => {
          let e =
            a
              ?.filter((e) => e !== R.VF.GOOGLE_WALLET)
              .map((e) => {
                let t = R.uv[e];
                if (null == t) return null;
                let { title: n, description: i } = t;
                return {
                  id: e,
                  title: L.intl.string(n),
                  description: L.intl.string(i),
                  onClick: async (t) => {
                    ((0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.METHOD_SELECT, e), await l(e));
                  },
                };
              })
              .filter((e) => null != e) ?? [];
          if (o && null != i) {
            let t = R.uv[R.VF.GOOGLE_WALLET];
            if (null != t)
              return [
                ...e,
                {
                  id: R.VF.GOOGLE_WALLET,
                  title: L.intl.string(t.title),
                  description: L.intl.string(t.description),
                  onClick: (e) => {
                    (S.A.increment({ name: m.K.GOOGLE_WALLET_METHOD_SELECTED }),
                      (0, I.St)(e, I.WU.EXPRESSIVE_PRIMARY, I._7.METHOD_SELECT, R.VF.GOOGLE_WALLET),
                      i());
                  },
                },
              ];
          }
          return e;
        }, [a, o, i, l]),
        loading: s,
      }
    );
  };
  var D = n(652215),
    v = n(239093),
    b = n(799719),
    M = n(897345),
    P = n(700129);
  function U(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, A.W$)()
      ? (0, i.jsx)(s.E, {
          variant: "text-xs/medium",
          children: L.intl.format(b.default.htWh1G, {
            handleOnHelpUrlHook: () => {
              (f.A.openUrl(v.d$.LEARN_MORE_UU_APPEAL_LINK),
                (0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.LEARN_MORE));
            },
          }),
        })
      : n === I.q1.SAFETY_FLOWS
        ? (0, i.jsx)(l.Q, {
            size: "sm",
            textVariant: "text-sm/medium",
            text: L.intl.string(L.t["2jxGer"]),
            onClick: () => {
              ((0, I.St)(t, I.WU.EXPRESSIVE_PRIMARY, I._7.LOG_OUT),
                (0, E.k)("age_verification_get_started_modal"));
            },
          })
        : null;
  }
  let w = function (e) {
    let {
        transitionState: t,
        entryPoint: n,
        onClose: l,
        onComplete: E,
        dismissable: m,
        classificationId: g,
      } = e,
      S = r.useMemo(() => (0, a.A)(), []),
      N = (0, A.W$)(),
      { loading: C, ageVerificationMethods: O } = y({
        onClose: () => {
          (E?.(), l());
        },
        classificationId: g,
      });
    return (
      r.useEffect(() => {
        (0, I.Bs)(S, I.WU.EXPRESSIVE_PRIMARY, n);
      }, [S, n]),
      (0, i.jsx)(o.k, {
        transitionState: t,
        onClose: l,
        gradientColor: "blue",
        dismissable: m,
        graphic: { type: "image", src: P.A },
        title: (0, T.ST)(n),
        subtitle: (0, T.mK)(
          n,
          () => {
            (f.A.openUrl(h.A.getArticleURL(D.MVz.TIGGER_PAWTECT_LEARN_MORE)),
              (0, I.St)(S, I.WU.EXPRESSIVE_PRIMARY, I._7.LEARN_MORE));
          },
          N,
        ),
        actionBarInput: (0, i.jsx)(U, { modalSessionId: S, entryPoint: n }),
        children: (0, i.jsxs)(d.B, {
          direction: "vertical",
          gap: 16,
          children: [
            (0, i.jsxs)(d.B, {
              fullWidth: !1,
              direction: "horizontal",
              gap: 8,
              padding: { top: 8, bottom: 8, left: 12, right: 12 },
              align: "center",
              className: M.W,
              children: [
                (0, i.jsx)(c.CircleInformationIcon, { size: "lg", color: "currentColor" }),
                (0, i.jsx)(s.E, {
                  variant: "text-sm/medium",
                  color: "text-feedback-info",
                  children: L.intl.string(b.default.ar3a3q),
                }),
              ],
            }),
            null == O || 0 === O.length
              ? (0, i.jsxs)(d.B, {
                  direction: "vertical",
                  align: "center",
                  gap: 16,
                  children: [
                    (0, i.jsx)(s.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      children: L.intl.string(b.default.cR6336),
                    }),
                    (0, i.jsx)(u.$, {
                      variant: "primary",
                      size: "sm",
                      text: L.intl.string(b.default.hDvmYP),
                      onClick: () => {
                        (0, p.DJ)();
                      },
                    }),
                  ],
                })
              : (0, i.jsx)(d.B, {
                  direction: "vertical",
                  gap: 8,
                  children: O.map((e) => {
                    let { title: t, description: n, onClick: r } = e;
                    return (0, i.jsx)(
                      _.PQ,
                      {
                        variant: "clickable",
                        title: t,
                        description: n,
                        buttonDisabled: C,
                        onButtonPress: () => r(S),
                      },
                      t,
                    );
                  }),
                }),
          ],
        }),
      })
    );
  };
}
