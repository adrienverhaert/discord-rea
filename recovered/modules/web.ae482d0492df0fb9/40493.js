/* Recovered shipped factory. Module 40493.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6767580..6768642
 * Raw property SHA-256: c808a639cc627a961d6a2be45cf6f987e3e1e9cb485322ec24316dbc0512a99a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(206248),
    l = n(597770),
    o = n(406810),
    d = n(475743),
    c = n(421108),
    u = n(807098),
    _ = n(412260),
    E = n(860300),
    A = n(49999),
    h = n(660183);
  function f(e) {
    let {
        onComplete: t,
        onCheckItOutClick: n,
        markAsDismissed: f,
        coachmarkConfig: I,
        children: p,
      } = e,
      T = (0, u.T)(I?.asset),
      { enabled: m } = E.J.useConfig({ location: "GiftPromotionPopout" }),
      g = (0, a.bG)([_.A], () => _.A.getGiftPromotion()),
      S = (0, c.dA)(g?.endDate),
      N = null != S,
      C = (0, d.Ay)(N),
      O = r.useRef(null);
    r.useEffect(() => {
      !0 !== C || N || (t(), f(A.i.AUTO_DISMISS));
    }, [C, N, t, f]);
    let R = {
      text: h.intl.string(h.t.Ve9Ge6),
      icon: l.GiftIcon,
      onClick: () => {
        (n(), t(), f(A.i.TAKE_ACTION));
      },
    };
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("div", { ref: O, children: p }),
        (0, i.jsx)(s.H, {
          targetElementRef: O,
          shouldShow: !0,
          disableMediaViewer: !0,
          position: "top",
          align: "center",
          title: I?.header ?? "",
          body: I?.body ?? "",
          assetUrl: T ?? "",
          badge:
            m && null != S
              ? { type: { text: S.toUpperCase() }, variant: "brand", icon: o.ClockIcon }
              : void 0,
          action: R,
          caretConfig: { align: "center" },
          onRequestClose: function () {
            (t(), f(A.i.USER_DISMISS));
          },
        }),
      ],
    });
  }
}
