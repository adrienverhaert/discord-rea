/* Recovered shipped factory. Module 624951.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8089966..8091000
 * Raw property SHA-256: 881ace6fcfb07b34705bed58b6b5aa238cf8dd8f9c1277f413c6359f6cc9cf9a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => m });
  var i = n(477900),
    r = n(554146),
    a = n(661531),
    s = n(812993),
    l = n(834730),
    o = n(359549),
    d = n(793574),
    c = n(688810),
    u = n(627363),
    _ = n(131607),
    E = n(308335),
    A = n(21241),
    h = n(939496),
    f = n(985629),
    I = n(996988),
    p = n(660183),
    T = n(41821);
  function m(e) {
    let { applicationId: t, onAction: n, onClose: m, activity: g } = e,
      { analyticsLocations: S } = (0, c.Ay)(d.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION),
      { data: N } = (0, u.YY)(t),
      C = (0, o.JC)(N),
      { themeType: O } = (0, h.E)(),
      R = O === I.d.MODAL || O === I.d.MODAL_V2,
      L = (0, E.o)(g?.application_id ?? t),
      y = C && R && null != N && !L,
      D = y ? [r.M.CLOUD_PLAY_NEW_BADGE] : [],
      [v] = (0, _.kn)(D);
    return y
      ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(A.A, { className: T.Xl }),
            (0, i.jsxs)("div", {
              className: T.DK,
              children: [
                (0, i.jsxs)("div", {
                  className: T.tJ,
                  children: [
                    v === r.M.CLOUD_PLAY_NEW_BADGE &&
                      (0, i.jsx)(s.Lp, {
                        text: p.intl.string(p.t.y2b7CA),
                        color: a.A.colors.BACKGROUND_BRAND.css,
                      }),
                    (0, i.jsx)(l.E, {
                      variant: "text-xs/medium",
                      children: p.intl.string(p.t.IQjdmV),
                    }),
                  ],
                }),
                (0, i.jsx)(f.A, { application: N, onAction: n, onClose: m, analyticsLocations: S }),
              ],
            }),
          ],
        })
      : null;
  }
}
