/* Recovered shipped factory. Module 987144.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5103206..5105556
 * Raw property SHA-256: 2072160d498397a08608e2c0e02cdb1f5c8ec95215e60f507e690de3e0afc1b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { g: () => f }), n(321073));
  var i = n(477900);
  n(582128);
  var r = n(231723),
    a = n(192308),
    s = n(820739),
    l = n(73825),
    o = n(277984),
    d = n(287809),
    c = n(178368),
    u = n(97352),
    _ = n(473145),
    E = n(473161),
    A = n(652215);
  let h = "apply-guild-boost-modal";
  async function f(e) {
    let {
        analyticsLocations: t,
        analyticsLocation: f,
        analyticsSourceLocation: I,
        numberOfBoostsToAdd: p,
        onClose: T,
        onLoading: m,
        closeLayer: g,
        onSubscriptionConfirmation: S,
        onSubscribeComplete: N,
        guild: C,
        handleSubscribeModalClose: O,
        disablePremiumUpsell: R,
        inPopout: L,
        applicationId: y,
        intent: D,
      } = e,
      v = L ? r.KX : r.SY,
      b = d.default.getCurrentUser();
    if (null == b) return;
    if (!b.verified)
      return void (0, a.openModalLazy)(
        async () => {
          let { default: e } = await Promise.all([
            n.e("928873"),
            n.e("874913"),
            n.e("112206"),
            n.e("590406"),
          ]).then(n.bind(n, 661925));
          return (t) => {
            let { onClose: n, ...r } = t;
            return (0, i.jsx)(e, { ...r, onClose: n });
          };
        },
        { contextKey: v },
      );
    let M = [];
    (u.A.isLoadedForPremiumSKUs() || M.push((0, l.zS)()),
      c.A.hasFetched || (M.push(o.hP()), M.push((0, s.CD)())),
      M.length > 0 && (m?.(!0), await Promise.allSettled(M), m?.(!1)));
    let P = (0, _.D$)(c.A.boostSlots),
      U = P.length;
    function w(e) {
      (T?.(), O?.(e));
    }
    if (U > 0 && (null == p || U >= p)) {
      let e;
      (1 === U ? (e = P.slice(0, 1)) : null != p && (e = P.slice(0, p)),
        await (0, a.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              n.e("295570"),
              n.e("203112"),
              n.e("647367"),
              n.e("677508"),
              n.e("638781"),
              n.e("1955"),
              n.e("341161"),
              n.e("410526"),
              n.e("263406"),
              n.e("202985"),
              n.e("603619"),
              n.e("552653"),
              n.e("758053"),
              n.e("46083"),
              n.e("857297"),
              n.e("889002"),
              n.e("454048"),
              n.e("952372"),
              n.e("883846"),
              n.e("927875"),
              n.e("188941"),
              n.e("747017"),
              n.e("225990"),
              n.e("858164"),
              n.e("894747"),
              n.e("444376"),
              n.e("102328"),
              n.e("895785"),
              n.e("113458"),
              n.e("423532"),
              n.e("509793"),
              n.e("571470"),
              n.e("610943"),
              n.e("995602"),
              n.e("322455"),
              n.e("534428"),
              n.e("693173"),
              n.e("418710"),
              n.e("238249"),
            ]).then(n.bind(n, 724624));
            return (n) => {
              let { onClose: r, ...a } = n;
              return (0, i.jsx)(t, {
                ...a,
                onClose: (e) => {
                  (r(), w(e));
                },
                selectedGuild: C,
                locationSection: A.liQ.PREMIUM_GUILD_USER_MODAL,
                guildBoostSlots: e,
                intent: D,
              });
            };
          },
          {
            modalKey: h,
            onCloseRequest: () => {
              ((0, a.closeModal)(h), w(!1));
            },
            contextKey: v,
          },
        ));
    } else
      (0, E.A)({
        analyticsLocations: t,
        analyticsLocation: f,
        analyticsSourceLocation: I,
        guildId: C.id,
        closeLayer: function () {
          (T?.(), g?.());
        },
        totalNumberOfSlotsToAssign: p ?? 1,
        onCloseModal: w,
        disablePremiumUpsell: R,
        onSubscriptionConfirmation: S,
        onSubscribeComplete: N,
        inPopout: L,
        applicationId: y,
        intent: D,
      });
  }
}
