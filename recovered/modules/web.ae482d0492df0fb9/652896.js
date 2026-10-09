/* Recovered shipped factory. Module 652896.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4990815..4991439
 * Raw property SHA-256: c0838896e26582ff92be753f923e115a4f19649f73594057f1fc110a465b564a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Iy: () => a, _z: () => s, wL: () => r });
  var i = n(325278);
  function r(e) {
    return null != e && (e.startsWith(i.U4.GUILD) || e.startsWith(i.U4.CALL));
  }
  function a(e) {
    let t = e.split(":"),
      n = t[0];
    switch (n) {
      case i.U4.GUILD: {
        let [e, n, i, r] = t;
        return { streamType: e, guildId: n, channelId: i, ownerId: r };
      }
      case i.U4.CALL: {
        let [e, n, i] = t;
        return { streamType: e, channelId: n, ownerId: i };
      }
      default:
        throw Error(`Unknown stream type ${n}`);
    }
  }
  function s(e) {
    let { streamType: t, guildId: n, channelId: r, ownerId: a } = e;
    switch (t) {
      case i.U4.GUILD:
        return [t, n, r, a].join(":");
      case i.U4.CALL:
        return [t, r, a].join(":");
      default:
        throw Error(`Unknown stream type ${t}`);
    }
  }
}
