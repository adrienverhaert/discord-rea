/* Recovered shipped factory. Module 442228.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8144463..8145857
 * Raw property SHA-256: c416d94451e7ec092fb63e2cc17521d11c66e99e3db4ba839d63a303253d52ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(123292),
    o = n(688810),
    d = n(183555),
    c = n(402860),
    u = n(308244),
    _ = n(900179),
    E = n(660183),
    A = n(975316);
  let h = r.memo(function (e) {
    let {
        userId: t,
        userBio: n,
        onClose: a,
        animateOnHoverOrFocusOnly: h = !1,
        isHoveringOrFocusing: f = !1,
        hidePersonalInformation: I = !1,
        hideRestrictedProfile: p = !1,
        viewFullBioDisabled: T = !1,
      } = e,
      { context: m } = (0, d.NJ)(),
      { analyticsLocations: g } = (0, o.Ay)(),
      [S, N] = r.useState(!1),
      [C, O] = r.useState(!1),
      R = r.useRef(null);
    return I || null == n || "" === n
      ? null
      : (0, i.jsxs)(_.A, {
          heading: E.intl.string(E.t.ZzAR2Y),
          hideHeading: !0,
          children: [
            (0, i.jsx)("div", {
              ref: (e) => {
                ((R.current = e),
                  null == e ||
                    (N(!C && e.scrollHeight - e.clientHeight > 1),
                    e.getBoundingClientRect().height > 57.75 && O(!0)));
              },
              className: s()(A.mA, C && A.Em),
              onBlur: function (e) {
                null == R.current ||
                  R.current.contains(e.relatedTarget) ||
                  (null == R.current.querySelector('[aria-expanded="true"][aria-controls]') &&
                    (R.current.scrollTop = 0));
              },
              children: (0, i.jsx)(u.A, {
                userId: t,
                guildId: m?.guildId,
                userBio: n,
                setLineClamp: !1,
                textColor: "text-strong",
                animateOnHoverOrFocusOnly: h,
                isHoveringOrFocusing: f,
              }),
            }),
            (S || C) &&
              (0, i.jsx)("div", {
                className: A.HV,
                children: (0, i.jsx)(l.Q, {
                  textVariant: "text-xs/normal",
                  size: "sm",
                  variant: "secondary",
                  text: E.intl.string(E.t.YDiPq8),
                  onClick: function () {
                    (a?.(),
                      (0, c.openUserProfileModal)({
                        ...m,
                        userId: t,
                        hideRestrictedProfile: p,
                        sourceAnalyticsLocations: g,
                      }));
                  },
                  disabled: T,
                }),
              }),
          ],
        });
  });
}
