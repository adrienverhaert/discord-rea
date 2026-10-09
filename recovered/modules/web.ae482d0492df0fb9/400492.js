/* Recovered shipped factory. Module 400492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7508775..7509846
 * Raw property SHA-256: df3ca639f47585cebf8ff8f0293fc954d92bfacab392948b3c1e126bf76fefe9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { Ak: () => _, Qh: () => u, aN: () => c });
  var r = n(626584),
    a = n(312671),
    s = n(458640),
    l = n(351906),
    o = n(257645);
  i = n(946261).WebAudioSound;
  let d = new r.A("SoundUtils");
  function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.a.DEFAULT;
    return u((0, s.A)(t)[e] ?? e, e, n, i);
  }
  function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.a.DEFAULT,
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return new i(e, t, n, r, a);
  }
  function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 ? arguments[3] : void 0,
      r = arguments.length > 4 ? arguments[4] : void 0;
    if (l.A.disableSounds) return;
    let c = (0, s.A)(i ?? a.A.getSoundpack());
    null == c && d.log(`Unable to find sound for pack name: ${i}`);
    let _ = u(c[e] ?? e, e, t, r?.outputChannel ?? o.a.DEFAULT, r?.trackNotificationFailure ?? !1);
    return (
      null != n
        ? _.playWithListener().then((e) => {
            e && n();
          })
        : _.play(),
      _
    );
  }
}
