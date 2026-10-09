/* Recovered shipped factory. Module 338771.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5012415..5012848
 * Raw property SHA-256: bba2041e575f01c84af3d5a969579f1061a50d30675957e66c0a2f6ae1ca48b7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(827343),
    r = n(401843),
    a = n(280450),
    s = n(652896);
  function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let { streamType: l, guildId: o, channelId: d, ownerId: c } = e,
      u = (0, s._z)({ streamType: l, guildId: o, channelId: d, ownerId: c });
    (c === a.default.getId() && i.default.setGoLiveSource(null), r.vN(u, t, n));
  }
}
