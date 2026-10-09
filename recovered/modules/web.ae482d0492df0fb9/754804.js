/* Recovered shipped factory. Module 754804.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6888691..6890475
 * Raw property SHA-256: 41bb6c6c5084da5752c60cefda788dd8fcb237982494a0dc69d548c69ced97ee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(877624),
    s = n(554146),
    l = n(28863),
    o = n(501419),
    d = n(174459),
    c = n(549996),
    u = n(498470),
    _ = n(92551),
    E = n(637706),
    A = n(788883),
    h = n(635995),
    f = n(652215),
    I = n(49999),
    p = n(660183);
  function T() {
    let e = (0, c.c)(a.C.NAGBAR),
      t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
      n = e?.id,
      T = e?.promotionId,
      m = r.useCallback(
        (e) => {
          null != T &&
            (0, o.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, T, {
              dismissAction: e,
              forceTrack: !0,
            });
        },
        [T],
      ),
      g = r.useCallback(() => {
        (d.default.track(f.HAw.APP_NOTICE_CLOSED, { notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR }),
          m(I.i.USER_DISMISS));
      }, [m]),
      S = r.useRef(null);
    if (
      (r.useEffect(() => {
        null == t ||
          null == T ||
          (S.current !== T &&
            ((S.current = T),
            (0, o.Wx)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: T })));
      }, [t, T]),
      null == e || null == t || null == n || null == T)
    )
      return null;
    let N = (0, u.h)({
        buttonAction: t.ctaAction,
        deeplinkSection: t.deeplinkSection,
        applicationId: t.navigableStorefrontApplicationId?.value,
        onClose: () => {
          m(I.i.TAKE_ACTION);
        },
      }),
      C = (0, E.C)(t.helpArticle, ""),
      { icon: O, iconPosition: R } = (0, u.x)({ buttonAction: t.ctaAction }),
      L = e.getFormatVariableValues(p.intl.currentLocale),
      y = (0, _.d)(t.body, L);
    if (!y.ok) return null;
    let D = (0, _.n)(t.ctaLabel, L);
    return D.ok
      ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(A.A, {
              componentType: a.C.NAGBAR,
              componentId: n,
              promotionId: T,
              dismissibleContent: s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, i.jsxs)(h.T0, {
              onClick: g,
              children: [
                (0, i.jsxs)(h.In, {
                  children: [
                    y.content,
                    null != C &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          "\xa0",
                          (0, i.jsx)(l.Anchor, { href: C.url, children: C.linkText }),
                        ],
                      }),
                  ],
                }),
                "" !== D.content &&
                  (0, i.jsx)(h.fY, {
                    text: D.content,
                    onClick: function () {
                      (d.default.track(f.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                        notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR,
                      }),
                        N());
                    },
                    icon: O,
                    iconPosition: R,
                  }),
              ],
            }),
          ],
        })
      : null;
  }
}
