/* Recovered shipped factory. Module 52416.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6909533..6911250
 * Raw property SHA-256: 834b6b77a713cb9f3376badf3ddd4aaedc14b5a12f5af049f7d0662dc915cfcb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(877624),
    s = n(554146),
    l = n(206248),
    o = n(43105),
    d = n(59318),
    c = n(549996),
    u = n(498470),
    _ = n(807098),
    E = n(637706),
    A = n(788883),
    h = n(49999);
  function f(e) {
    let { children: t, targetElementRef: n, dismissPopover: f } = e,
      I = (0, c.c)(a.C.PREMIUM_TAB_POPOVER),
      p =
        null != I && "premiumTabPopover" === I.properties.properties.oneofKind
          ? I.properties.properties.premiumTabPopover
          : null,
      T = (0, _.T)(p?.asset),
      m = r.useMemo(() => null != T && (0, d.r1)(T), [T]),
      g = I?.id,
      S = I?.promotionId;
    if (null == p || null == g || null == S) return t;
    let N = (0, i.jsx)(A.A, {
        componentType: a.C.PREMIUM_TAB_POPOVER,
        componentId: g,
        promotionId: S,
        dismissibleContent: s.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
      }),
      { icon: C, iconPosition: O } = (0, u.x)({ buttonAction: p.button?.buttonAction });
    function R() {
      return f(h.i.USER_DISMISS);
    }
    let L =
        p.button?.copy != null
          ? {
              text: p.button.copy,
              variant: "expressive",
              onClick: (0, u.h)({
                buttonAction: p.button.buttonAction,
                deeplinkSection: p.button.deeplinkSection,
                applicationId: p.button.navigableStorefrontApplicationId?.value,
                onClose: R,
              }),
              icon: C,
              iconPosition: O,
            }
          : void 0,
      y = (0, E.C)(p.helpArticle, p.helpArticleId),
      D = null != y ? { text: y.linkText, link: y.url } : void 0,
      v = {
        targetElementRef: n,
        title: p.header,
        body: p.body,
        textLink: D,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        onRequestClose: R,
      };
    if (m) {
      let e = { ...v, assetUrl: T ?? "", action: L, disableMediaViewer: !0 };
      return (0, i.jsxs)(i.Fragment, {
        children: [N, (0, i.jsx)("div", { children: t }), (0, i.jsx)(l.H, { ...e })],
      });
    }
    let b = {
      ...v,
      graphic: null != T ? { type: "image", src: T, aspectRatio: "16/9" } : void 0,
      size: "md",
      actions: null != L ? [L] : void 0,
      gradientColor: "nitro-pink",
    };
    return (0, i.jsxs)(i.Fragment, {
      children: [N, (0, i.jsx)("div", { children: t }), (0, i.jsx)(o.A, { ...b })],
    });
  }
}
