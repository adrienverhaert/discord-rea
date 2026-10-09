/* Recovered shipped factory. Module 613999.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4592975..4593920
 * Raw property SHA-256: e4bf206f8a67e60b45cb2787e1a7b8ecc3c830ec1e967ea44b419e403b47ae7f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { $l: () => l, Ay: () => c, O_: () => d, xx: () => o }), n(321073));
  var i = n(543531),
    r = n(407689),
    a = n(853742),
    s = n(935505);
  function l(e) {
    return `${r.mG.FORUM_CHANNEL}_${e}`;
  }
  function o(e, t, n) {
    (0, i.wR)(l(e), t, n);
  }
  function d(e, t, n) {
    (0, i.zK)(l(e), t, n);
  }
  class c extends r.id {
    guildId;
    channelId;
    sessionId;
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: i }) {
      (super({ windowId: n, isPaused: i, id: l(t) }),
        (this.guildId = e),
        (this.channelId = t),
        (this.sessionId = (0, s.cr)(t)));
    }
    createFlushSeenItemsFunction = (e) => {
      let t = this.trackedFeedItems,
        n = this.channelId,
        i = {
          guildId: this.guildId,
          channelId: n,
          sessionId: this.sessionId,
          trackedFeedItems: t,
          isForcedFlush: null != e,
        };
      return () =>
        (function (e) {
          let { guildId: t, channelId: n, sessionId: i, trackedFeedItems: r, isForcedFlush: s } = e,
            l = [],
            o = [];
          for (let e of Object.keys(r)) {
            let t = r[e].computeSeenTimeDestructive(s);
            t > 0 && (l.push(e), o.push(t));
          }
          0 !== l.length &&
            (0, a.Z_)({ guildId: t, channelId: n, sessionId: i, postIds: l, additionalTimes: o });
        })(i);
    };
  }
}
