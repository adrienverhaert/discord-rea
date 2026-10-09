/* Recovered shipped factory. Module 534465.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8117634..8119224
 * Raw property SHA-256: 2f5e1cb3259578cce8ba8d6f62be20aa2019af93f91ecf9cc7a3109174445d59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => A, UE: () => _, gA: () => E });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(477782),
    s = n(672979),
    l = n(20805),
    o = n(409626),
    d = n(692969),
    c = n(652215),
    u = n(660183);
  function _(e) {
    let { user: t, activity: n, entry: i } = e;
    return null != i
      ? { applicationId: (0, l.zD)(i) ? i.extra.application_id : void 0, sourceUserId: i.author_id }
      : null != n
        ? {
            applicationId:
              n.type === c.$pd.PLAYING && null != n.application_id ? n.application_id : void 0,
            sourceUserId: t.id,
          }
        : { applicationId: void 0, sourceUserId: void 0 };
  }
  function E(e) {
    let { activity: t, entry: o } = e,
      d = null != t && (0, s.A)(t),
      c = null != o && (0, l.zD)(o);
    return d || c
      ? (0, i.jsx)(a.Dr, {
          id: "game-detection-report-issue",
          label: u.intl.string(u.t.qP2cXd),
          action: function () {
            return (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("142753"),
                n.e("568035"),
                n.e("268582"),
                n.e("733771"),
                n.e("946039"),
                n.e("627495"),
              ]).then(n.bind(n, 651930));
              return null != t
                ? (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      detected: { name: t.name, applicationId: t.application_id },
                    })
                : null != o && (0, l.zD)(o)
                  ? (t) =>
                      (0, i.jsx)(e, {
                        ...t,
                        detected: {
                          name: o.extra.game_name,
                          applicationId: o.extra.application_id,
                        },
                      })
                  : (t) => (0, i.jsx)(e, { ...t });
            });
          },
        })
      : null;
  }
  function A(e) {
    let { user: t, activity: n, entry: r, onAction: s, isMenuOpen: l, appContext: c } = e,
      { applicationId: E, sourceUserId: A } = _({ activity: n, entry: r, user: t }),
      h = (0, d.A)({
        location: "UserProfileActivityContextMenu",
        source: o.GameProfileSources.UserProfileCardContextMenu,
        trackEntryPointImpression: l,
        applicationId: E,
        sourceUserId: A,
        appContext: c,
      });
    return null == h
      ? null
      : (0, i.jsx)(a.Dr, {
          id: "game-profile",
          label: u.intl.string(u.t.ajHoOr),
          action: (e) => {
            (s?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), h(e));
          },
        });
  }
}
