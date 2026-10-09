/* Recovered shipped factory. Module 713021.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5802349..5803240
 * Raw property SHA-256: 27ededeff4af916caeff11e377404ddb9f6b400c842aa174f805ef27ae4bbb8f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => E, dx: () => d, k0: () => o });
  var i,
    r = n(635377),
    a = n.n(r),
    s = n(17928),
    l = n(73153),
    o = (((i = {}).VOICE_MESSAGE = "voice_message"), i);
  function d(e, t) {
    return `${e}-${t}`;
  }
  let c = { rates: { voice_message: 1 }, positions: new (a())({ max: 25 }) },
    u = { ...c };
  class _ extends s.Ay.DeviceSettingsStore {
    static displayName = "MediaPlaybackStore";
    static persistKey = "MediaPlaybackStore";
    initialize(e) {
      let { positions: t, ...n } = e ?? {};
      ((u = { ...c, ...n }), null != t && u.positions.load(t));
    }
    getUserAgnosticState() {
      return { rates: u.rates, positions: u.positions.dump() };
    }
    getPlaybackRate(e) {
      return u.rates[e] ?? 1;
    }
    getPlaybackPosition(e) {
      return u.positions.get(e) ?? 0;
    }
  }
  let E = new _(l.h, {
    MEDIA_PLAYBACK_RATE_UPDATE: function (e) {
      let { rate: t, playbackType: n } = e;
      u = { ...u, rates: { ...u.rates, [n]: t } };
    },
    MEDIA_PLAYBACK_POSITION_UPDATE: function (e) {
      let { cacheKey: t, position: n, duration: i } = e;
      n > 0.5 && n < 0.95 * i ? u.positions.set(t, n) : u.positions.del(t);
    },
  });
}
