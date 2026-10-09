/* Recovered shipped factory. Module 229231.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7962109..7962877
 * Raw property SHA-256: e450adec21754aa84b530f7e34e72d86cb5c52ee46d66812eab4b88bc92da513
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ok: () => l, Zc: () => s, mS: () => u, y9: () => c });
  var i = n(540185),
    r = n(587895),
    a = n(660183);
  let s = [
      i.x.PERSONAL,
      i.x.CLIPS_GALLERY,
      i.x.APPLICATION,
      i.x.FAVORITE_GAMES,
      i.x.PLAYED_GAMES,
      i.x.CURRENT_GAMES,
      i.x.WANT_TO_PLAY_GAMES,
    ],
    l = {
      [i.x.FAVORITE_GAMES]: () => a.intl.string(a.t.Rpf6Ak),
      [i.x.CURRENT_GAMES]: () => a.intl.string(a.t.zs6NsE),
      [i.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.I509Dl),
      [i.x.PLAYED_GAMES]: () => a.intl.string(a.t.QTq6Pf),
      [i.x.APPLICATION]: (e) => r.A.getApplication(e.applicationId)?.name ?? "",
      [i.x.PERSONAL]: () => a.intl.string(a.t.AVkYMx),
      [i.x.CLIPS_GALLERY]: () => a.intl.string(a.t.zY8Ghg),
    },
    o = [i.x.FAVORITE_GAMES],
    d = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES, i.x.CLIPS_GALLERY];
  function c(e) {
    return o.includes(e);
  }
  function u(e) {
    return d.includes(e);
  }
}
