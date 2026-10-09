/* Recovered shipped factory. Module 665095.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8295488..8299661
 * Raw property SHA-256: 85fb9f870a5974eb50c3cb4687009fd62602fd0765259be173a2f0fc185dfc17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => G });
  var i = n(477900),
    r = n(582128),
    a = n(562708),
    s = n(17928),
    l = n(636537),
    o = n(192308),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    _ = n(475743),
    E = n(775121),
    A = n(139286),
    h = n(80556),
    f = n(557722),
    I = n(363195),
    p = n(870570),
    T = n(446868),
    m = n(503698),
    g = n.n(m),
    S = n(607399),
    N = n(821609),
    C = n(331322),
    O = n(297264),
    R = n(834730),
    L = n(700525),
    y = n(975571),
    D = n(652215),
    v = n(660183),
    b = n(690807);
  let M = y.A.getArticleURL(D.MVz.VERIFICATION_FAQ);
  class P extends r.PureComponent {
    static defaultProps = { types: [D.Fz7.CAPTCHA], onCaptchaVerify: D.tEg, onLogout: D.tEg };
    renderFields() {
      let { types: e, captchaKey: t, theme: n, onCaptchaVerify: r } = this.props;
      return (0, i.jsx)(i.Fragment, {
        children: e.map((e) =>
          e === D.Fz7.CAPTCHA
            ? (0, i.jsx)(L.A, { onVerify: r, theme: n }, t)
            : (0, i.jsx)(
                N.$,
                { onClick: () => this.handleClick(e), text: T.A.getButtonTitle(e) },
                e,
              ),
        ),
      });
    }
    render() {
      return (0, i.jsxs)(C.B, {
        gap: 16,
        className: b.Ot,
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [
          (0, i.jsxs)(C.B, {
            gap: 16,
            fullWidth: !1,
            className: g()(b.kL, { [b.Fr]: S.Fr }),
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
              (0, i.jsxs)(C.B, {
                align: "center",
                direction: "vertical",
                justify: "center",
                gap: 16,
                children: [
                  (0, i.jsx)("div", { className: b.Sl }),
                  (0, i.jsxs)(C.B, {
                    className: b.FS,
                    gap: 4,
                    align: "center",
                    direction: "vertical",
                    justify: "center",
                    children: [
                      (0, i.jsx)(O.D, {
                        variant: "heading-xl/normal",
                        children: v.intl.string(v.t.Iz0kDg),
                      }),
                      (0, i.jsx)(R.E, {
                        variant: "text-md/normal",
                        children: v.intl.format(v.t["0rqMV5"], { helpCenterURL: M }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(C.B, {
                gap: 16,
                direction: "vertical",
                justify: "center",
                align: "center",
                children: this.renderFields(),
              }),
            ],
          }),
          (0, i.jsxs)(C.B, {
            gap: 8,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [
              (0, i.jsx)(R.E, {
                variant: "text-sm/normal",
                className: b.qr,
                children: v.intl.string(v.t.qqYun3),
              }),
              (0, i.jsxs)(C.B, {
                gap: 8,
                align: "center",
                direction: "horizontal",
                justify: "center",
                children: [
                  (0, i.jsx)(R.E, {
                    variant: "text-sm/semibold",
                    className: b.qr,
                    children: v.intl.format(v.t.WL51ZR, { supportURL: y.A.getSubmitRequestURL() }),
                  }),
                  (0, i.jsx)("div", { className: g()(b.qr, b.mf), children: "\u2022" }),
                  (0, i.jsx)(R.E, {
                    variant: "text-sm/semibold",
                    className: b.qr,
                    children: v.intl.format(v.t.Hv7ztc, { logoutOnClick: this.props.onLogout }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    handleClick = (e) => {
      let { onClick: t } = this.props;
      t?.(e);
    };
  }
  var U = n(87404),
    w = n(53516);
  function G() {
    let { action: e, theme: t } = (0, s.cf)([p.A, I.A], () => ({
        action: p.A.getAction(),
        theme: I.A.theme,
      })),
      m = T.A.getVerificationTypes(e),
      [g, S] = r.useState(0),
      N = (0, _.Ay)(m);
    function C() {
      ((0, u.Cw)(),
        (0, o.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              n.e("647999"),
              n.e("689913"),
              n.e("25467"),
            ]).then(n.bind(n, 415478));
            return (t) => (0, i.jsx)(e, { ...t });
          },
          { modalKey: U.H1, Layer: h.Ay },
        ));
    }
    return (
      (0, A.A)(
        {
          type: a.ImpressionTypes.MODAL,
          name: a.ImpressionNames.USER_ACTION_REQUIRED,
          properties: { verification_type: m[0], verification_types: m },
        },
        {},
        [m.toString()],
      ),
      r.useEffect(
        () => (
          E.A.disable(),
          () => {
            E.A.enable();
          }
        ),
        [],
      ),
      r.useEffect(() => {
        N?.[0] === D.Fz7.PHONE &&
          m?.[0] === D.Fz7.EMAIL &&
          (0, o.openModalLazy)(
            async () => {
              let { Alert: e } = await Promise.all([n.e("844331"), n.e("21553")]).then(
                n.bind(n, 381512),
              );
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  title: v.intl.string(v.t.KLnLIP),
                  body: v.intl.string(v.t.XGbCq3),
                  confirmText: v.intl.string(v.t["3oK4qw"]),
                });
            },
            { modalKey: U.Pr, Layer: h.Ay, onCloseCallback: C },
          );
      }, [m, N]),
      (0, i.jsx)(P, {
        types: m,
        captchaKey: g,
        onCaptchaVerify: function (e) {
          l.Bo.post({
            url: D.Rsh.CAPTCHA,
            body: { captcha_key: e },
            oldFormErrors: !0,
            rejectWithError: !0,
          }).then(c.jH, () => {
            S((e) => e + 1);
          });
        },
        theme: t,
        onClick: (e) => {
          e === D.Fz7.EMAIL_OR_PHONE || e === D.Fz7.EMAIL || e === D.Fz7.REVERIFY_EMAIL
            ? C()
            : (0, o.openModalLazy)(
                async () => {
                  let { default: e } = await Promise.all([
                    n.e("590275"),
                    n.e("766806"),
                    n.e("14775"),
                    n.e("989545"),
                    n.e("991531"),
                    n.e("311493"),
                    n.e("84704"),
                  ]).then(n.bind(n, 615715));
                  return (t) =>
                    (0, i.jsx)(e, { layerContext: h.OH, reason: f.d.USER_ACTION_REQUIRED, ...t });
                },
                { modalKey: w.V, Layer: h.Ay },
              );
        },
        onLogout: function () {
          (0, o.openModalLazy)(
            async () => {
              let { ConfirmModal: e } = await Promise.all([
                n.e("304823"),
                n.e("223976"),
                n.e("977260"),
              ]).then(n.bind(n, 397927));
              return (t) =>
                (0, i.jsx)(e, {
                  title: v.intl.string(v.t["2jxGer"]),
                  subtitle: v.intl.string(v.t.SUnWBB),
                  confirmText: v.intl.string(v.t["2jxGer"]),
                  cancelText: v.intl.string(v.t["ETE/oC"]),
                  onConfirm: () => d.A.logout("verification"),
                  ...t,
                });
            },
            { Layer: h.Ay },
          );
        },
      })
    );
  }
}
