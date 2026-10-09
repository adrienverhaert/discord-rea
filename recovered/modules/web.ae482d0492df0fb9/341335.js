/* Recovered shipped factory. Module 341335.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7626016..7626776
 * Raw property SHA-256: e2fd4d8ccfdf0d38f9f8166a820aa7ffdddd54361a6c1ec721ee01302cbef940
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(427262),
    r = n(272984),
    a = n(660183);
  function s(e, t, n) {
    switch (t) {
      case r.Qp.USER_ACTIVITY_PLAY:
        if (e.isCurrentUser) return a.intl.string(a.t.ZpDeUC);
        if (e.playingSameTrack) return a.intl.string(a.t.TYSymS);
        if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, { name: r.HD });
        return;
      case r.Qp.USER_ACTIVITY_SYNC:
        if (e.isCurrentUser) return a.intl.string(a.t["AOU/CR"]);
        if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.m8CScv);
        if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, { name: r.HD });
        return a.intl.formatToPlainString(a.t.CT9xYI, { name: n ?? i.Ay.getName(e.user) });
      case r.Qp.EMBED_SYNC:
        if (e.notPlayable) return a.intl.formatToPlainString(a.t.SqJBnN, { name: r.HD });
        return;
      default:
        return;
    }
  }
}
