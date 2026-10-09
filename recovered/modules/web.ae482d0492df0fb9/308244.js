/* Recovered shipped factory. Module 308244.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8049827..8051289
 * Raw property SHA-256: 258b5a7d5db4b342949f9e31bbf9fcf1ff25888646e81e3cb2cf41098d7b5417
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => C, A: () => N });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(834730),
    d = n(28863),
    c = n(174459),
    u = n(559868),
    _ = n(652215),
    E = n(660183);
  function A() {
    c.default.track(_.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "profile_bio", target: u.Do });
  }
  function h() {
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { children: E.intl.string(E.t.OJmNR9) }),
        (0, i.jsx)("br", {}),
        (0, i.jsx)("br", {}),
        (0, i.jsx)("span", {
          children: E.intl.format(E.t.RCYeBL, {
            blogHook: (e, t) =>
              (0, i.jsx)(
                d.Anchor,
                {
                  onClick: A,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  href: u.Do,
                  children: e,
                },
                t,
              ),
          }),
        }),
      ],
    });
  }
  var f = n(311016),
    I = n(692051),
    p = n(713804),
    T = n(967198),
    m = n(900179),
    g = n(165668),
    S = n(165648);
  function N(e) {
    let {
        userBio: t,
        className: n,
        animateOnHoverOrFocusOnly: a = !1,
        isHoveringOrFocusing: d = !1,
        lineClamp: c = 6,
        setLineClamp: u = !0,
        textColor: _,
        userId: E,
        guildId: A,
      } = e,
      m = (0, l.bG)([T.A], () => T.A.getGuildId()),
      N = A ?? m,
      C = r.useMemo(
        () =>
          (0, f.A)(E)
            ? (0, i.jsx)(h, {})
            : null == t || "" === t
              ? null
              : (0, p.parseBioReact)(t, void 0, { guildId: N }),
        [E, t, N],
      );
    return null == C
      ? null
      : (0, i.jsx)("div", {
          className: s()(n, S.PT, g.z),
          children: (0, i.jsx)(o.E, {
            variant: "text-sm/normal",
            lineClamp: u ? c : void 0,
            color: void 0 !== _ ? _ : void 0,
            className: g.w,
            children: (0, i.jsx)(I.Y.Provider, {
              value: { disableAnimations: a && !d, disableInteractions: !1 },
              children: C,
            }),
          }),
        });
  }
  function C(e) {
    let { userBio: t, userId: n } = e;
    return (0, f.A)(n) || (null != t && "" !== t)
      ? (0, i.jsx)(m.A, {
          heading: E.intl.string(E.t.ZzAR2Y),
          hideHeading: !0,
          children: (0, i.jsx)(N, { ...e }),
        })
      : null;
  }
}
