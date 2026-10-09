/* Recovered shipped factory. Module 540305.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4996382..4996642
 * Raw property SHA-256: a0d8c5039c6915c790d7948f731d98c7c9d507eb32f2853c9460c520564b2dce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(952818);
  function r(e) {
    let t, n;
    if (null == e) return {};
    let r = e.sourcePid;
    if (null != r) {
      let e = i.Ay.getGameForPID(r);
      ((t = e?.name), (n = e?.id));
    }
    return { soundshare_session: e.soundshareSession, share_game_name: t, share_game_id: n };
  }
}
