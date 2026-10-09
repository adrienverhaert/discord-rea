/* Recovered shipped factory. Module 438140.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7824626..7825958
 * Raw property SHA-256: 9fd23f3e4c5534545aa5381c40802a6aa949b3831dfeccb82cb9e0b072419ddb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Wt: () => r.Wt, Lf: () => i.L, LH: () => r.LH, PL: () => T });
  var i = n(264646),
    r = n(464192),
    a = n(477900),
    s = n(582128),
    l = n(43105),
    o = n(379257),
    d = n(306537),
    c = n(36149),
    u = n(780964),
    _ = n(766075),
    E = n(975571),
    A = n(666113),
    h = n(652215),
    f = n(49999),
    I = n(737117),
    p = n(660183);
  function T(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
      i = (0, c.yM)(),
      r = s.useCallback(() => {
        (t(f.i.TAKE_ACTION),
          o.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.TINY_BRONCO_POPOVER }));
      }, [t]),
      T = s.useCallback(() => {
        (t(f.i.TAKE_ACTION), o.A.openUrl(E.A.getArticleURL(h.MVz.TIGGER_PAWTECT_LEARN_MORE)));
      }, [t]),
      m = s.useCallback(() => {
        (t(f.i.TAKE_ACTION), (0, _.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
      }, [t]),
      g = s.useCallback(() => {
        t(f.i.USER_DISMISS);
      }, [t]),
      S = i ? p.intl.string(I.default.f7c7qE) : p.intl.string(I.default.jssaTD),
      N = i
        ? { text: p.intl.string(I.default.ZzcLhc), onClick: r, external: !1 }
        : { text: p.intl.string(I.default["Bp/1dq"]), link: A.m5, external: !0 },
      C = i
        ? { text: p.intl.string(I.default["+7NlgO"]), variant: "primary", onClick: T }
        : { text: p.intl.string(I.default.jjpcno), variant: "primary", onClick: m };
    return (0, a.jsx)(l.A, {
      targetElementRef: n,
      shouldShow: !0,
      onRequestClose: g,
      position: "top",
      caretConfig: { align: "end" },
      size: "md",
      graphic: { type: "image", src: "/assets/ddff1a600b2b202b.svg", aspectRatio: "6/4" },
      title: p.intl.string(I.default.GdTVPF),
      body: S,
      textLink: N,
      actions: [C],
    });
  }
}
