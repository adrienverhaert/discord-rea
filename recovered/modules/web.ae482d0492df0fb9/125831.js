/* Recovered shipped factory. Module 125831.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7532171..7532899
 * Raw property SHA-256: 1a59d43493b15969c0a84af868666b45cae7e893076ec560ac4451a43ca3499c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153);
  let a = { topSoundboardSoundsByGuildId: {} },
    s = a,
    l = {};
  class o extends i.Ay.PersistedStore {
    static displayName = "TopSoundboardSoundStore";
    static persistKey = "TopSoundboardSoundStore";
    initialize(e) {
      s = e ?? a;
    }
    getState() {
      return s;
    }
    getTopSoundboardSoundIdsByGuildId(e) {
      return s.topSoundboardSoundsByGuildId[e];
    }
    getIsFetching(e) {
      return l[e];
    }
  }
  let d = new o(r.h, {
    LOGOUT: function () {
      ((s = a), (l = {}));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH: function (e) {
      let { guildId: t } = e;
      l[t] = !0;
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
      let { guildId: t, topSoundsMetadata: n } = e;
      ((s.topSoundboardSoundsByGuildId[t] = n.map((e) => e.soundId)), (l[t] = !1));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE: function (e) {
      let { guildId: t } = e;
      l[t] = !1;
    },
  });
}
