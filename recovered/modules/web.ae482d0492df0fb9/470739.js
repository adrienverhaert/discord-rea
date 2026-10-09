/* Recovered shipped factory. Module 470739.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3097141..3097928
 * Raw property SHA-256: 19818e2412e9e1d7e33fd9b107d335393e0a724c4da974be58fda960a3ce76c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { openBadgeDirectoryModal: () => o });
  var i = n(477900),
    r = n(277057),
    a = n.n(r),
    s = n(192308);
  let l = null;
  function o() {
    let {
      initialBadgeId: e,
      targetUserId: t,
      targetUsername: r,
      viewingCurrentUserBadges: o,
      stackingBehavior: d,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != l && (0, s.closeModalInAllContexts)(l);
    let c = a()("badge-directory-modal");
    return (
      (l = c),
      (0, s.openModalLazy)(
        async () => {
          let { default: a } = await Promise.all([
            n.e("638781"),
            n.e("352456"),
            n.e("188941"),
            n.e("482815"),
            n.e("463095"),
            n.e("90373"),
            n.e("920282"),
            n.e("195468"),
            n.e("374035"),
          ]).then(n.bind(n, 397214));
          return (n) =>
            (0, i.jsx)(a, {
              ...n,
              initialBadgeId: e,
              targetUserId: t,
              targetUsername: r,
              viewingCurrentUserBadges: o,
            });
        },
        {
          modalKey: c,
          stackingBehavior: d ?? "stack",
          onCloseCallback: () => {
            l === c && (l = null);
          },
        },
      )
    );
  }
}
