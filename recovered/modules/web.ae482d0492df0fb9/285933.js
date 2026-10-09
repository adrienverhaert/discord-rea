/* Recovered shipped factory. Module 285933.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7624390..7624715
 * Raw property SHA-256: db9b6321bdf52319b90595f092b8b741189f3207e9c47d33e46e6b639fcd48a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(174459),
    r = n(981616),
    a = n(272984),
    s = n(652215);
  let l = [a.Qp.USER_ACTIVITY_SYNC, a.Qp.EMBED_SYNC];
  function o(e, t, n, a) {
    i.default.track(s.HAw.SPOTIFY_BUTTON_CLICKED, {
      type: e,
      source: a,
      is_premium: (0, r.mD)(),
      party_id: l.includes(e) && n?.party != null ? n.party.id : null,
      other_user_id: t.id,
    });
  }
}
