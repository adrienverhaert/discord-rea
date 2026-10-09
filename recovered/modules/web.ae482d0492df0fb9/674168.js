/* Recovered shipped factory. Module 674168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7538497..7540014
 * Raw property SHA-256: 78a454677464985e155dd6b3094e13cb445b64d8e4fb8ffc98bf2b8c48fe364b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => N });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(862482),
    s = n(939249),
    l = n(789645),
    o = n(403581),
    d = n(297264),
    c = n(834730),
    u = n(821609),
    _ = n(725807),
    E = n(212168),
    A = n(780964),
    h = n(766075),
    f = n(287809),
    I = n(158045),
    p = n(652215),
    T = n(49999),
    m = n(202541),
    g = n(660183),
    S = n(316632);
  function N(e) {
    var t;
    let { onClose: n, markAsDismissed: N } = e,
      C = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
      O =
        (t = C?.premiumType) === m.PremiumTypes.TIER_2
          ? g.intl.string(g.t.jqO5Qn)
          : null == t
            ? g.intl.string(g.t.f2qjw5)
            : g.intl.string(g.t.SblICW),
      R = I.Ay.canUseCustomCallSounds(C);
    return (0, i.jsxs)(E.A, {
      isShown: !0,
      type: E.i.PREMIUM,
      className: S.ne,
      backgroundClassName: S.u4,
      children: [
        null != N
          ? (0, i.jsx)(s.D, {
              className: S.VN,
              onClick: () => N?.(T.i.DISMISS),
              "aria-label": g.intl.string(g.t.cpT0Cq),
              children: (0, i.jsx)(l.P, { size: "xs", color: "currentColor", className: S.ut }),
            })
          : null,
        (0, i.jsxs)("div", {
          className: S.ex,
          children: [
            (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: S.ax }),
            (0, i.jsx)(d.D, { variant: "heading-sm/bold", children: g.intl.string(g.t.dTbAxx) }),
          ],
        }),
        (0, i.jsx)(c.E, { variant: "text-sm/normal", children: O }),
        R
          ? (0, i.jsx)(u.$, {
              onClick: function () {
                ((0, h.openUserSettings)(A.X.SOUNDBOARD_CATEGORY), n?.(), N?.(T.i.PRIMARY));
              },
              text: g.intl.string(g.t.RzWDqY),
              fullWidth: !0,
            })
          : (0, i.jsx)(_.A, {
              textOptions: { textOverride: g.intl.string(g.t.pj0XBN) },
              subscriptionTier: m.pe.TIER_2,
              premiumModalAnalyticsLocation: {
                section: p.JJy.SOUNDBOARD_SOUND_PICKER,
                object: p.ZSU.BUTTON_CTA,
              },
              color: a.$n.Colors.GREEN,
              onSubscribeModalClose: () => N?.(T.i.PRIMARY),
            }),
      ],
    });
  }
}
