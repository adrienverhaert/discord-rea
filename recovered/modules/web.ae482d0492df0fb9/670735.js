/* Recovered shipped factory. Module 670735.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4397077..4399262
 * Raw property SHA-256: 56e6799009a1847c17df67aa02d97b11ba64f7eded0424831e868a224cf72323
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => v });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n.n(a),
    l = n(258873),
    o = n(622242),
    d = n(731738),
    c = n(70298),
    u = n(17928),
    _ = n(397613),
    E = n(821609),
    A = n(825484),
    h = n(148810),
    f = n(521502),
    I = n(380610),
    p = n(807393),
    T = n(976860),
    m = n(174459),
    g = n(38405),
    S = n(19575),
    N = n(721668),
    C = n(652215),
    O = n(660183),
    R = n(684637);
  function L() {
    let [e, t] = r.useState(!1);
    if (
      null ==
      (0, u.bG)([f.A], () =>
        (0, I.kK)() ? f.A.getCurrentBuildOverride().overrides?.discord_web : null,
      )
    )
      return null;
    async function n() {
      try {
        (t(!0), await (0, h.iD)(), window.location.reload(!0));
      } catch (e) {
        t(!1);
      }
    }
    return (0, i.jsx)(E.$, {
      variant: "primary",
      size: "md",
      text: O.intl.string(O.t["/Nz9rY"]),
      onClick: n,
      loading: e,
    });
  }
  let y = s().throttle(
    (e) => {
      p.A.increment(
        {
          name: d.K.APP_CRASHED,
          tags: [`reason:${l.J.UNHANDLED_JS_ERROR}`, `level:${o.k.FATAL}`, `modded_client:${e}`],
        },
        !0,
      );
    },
    100,
    { trailing: !1 },
  );
  class D extends r.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
      this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
      let n = (0, T.JK)().location;
      this.setState({ error: e, info: t });
      let i = (0, c.b)(),
        r = g.A.captureCrash(e, { extra: t });
      (m.default.track(C.HAw.APP_CRASHED, {
        path: n.pathname,
        extra: t,
        error_message: e.message,
        error_stack: e.stack,
        sentry_issue_id: r,
        uses_client_mods: i,
        error_level: "fatal",
      }),
        y(i),
        S.Ay.cleanupDisplaySleep());
    }
    _handleSubmitReport() {
      location.reload(!0);
    }
    componentDidMount() {
      null == window.DiscordErrors &&
        ((window.DiscordErrors = {
          softCrash: (e) => {
            this.triggerSoftCrash(e);
          },
        }),
        (this.discordErrorsSet = !0));
    }
    componentWillUnmount() {
      this.discordErrorsSet && ((window.DiscordErrors = null), (this.discordErrorsSet = !1));
    }
    render() {
      let { children: e, renderCustomMessage: t } = this.props;
      if (null !== this.state.error) {
        let e = (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("p", { children: O.intl.string(O.t.tx8CkI) }),
              (0, i.jsx)("p", { children: O.intl.string(O.t.CvQlAH) }),
            ],
          }),
          n = (0, i.jsxs)(A.e, {
            children: [
              (0, i.jsx)(E.$, {
                variant: "primary",
                size: "md",
                text: O.intl.string(O.t["+hivLW"]),
                onClick: this._handleSubmitReport,
              }),
              (0, i.jsx)(L, {}),
            ],
          });
        return (0, i.jsx)(N.A, {
          title: O.intl.string(O.t["3h+n+8"]),
          note: null != t ? t() : e,
          action: n,
          className: R.W,
          illustration: (0, i.jsx)("div", {
            className: R.b,
            children: (0, i.jsx)(_.e, { alt: "", ariaHidden: !0 }),
          }),
          hideBackground: !0,
        });
      }
      return e;
    }
  }
  let v = D;
}
