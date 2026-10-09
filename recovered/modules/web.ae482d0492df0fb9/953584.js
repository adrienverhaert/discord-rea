/* Recovered shipped factory. Module 953584.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5803241..5804122
 * Raw property SHA-256: ba0e504bde7e9b2aa90a46d3cf70b29b985e6d53e4da37f259521ef9f52abd96
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => l, FM: () => o, Vh: () => d, ke: () => c });
  var i = n(17928),
    r = n(73153);
  class a extends i.il {
    videoStatsEnabled = new Map();
    isVideoStatsEnabled(e) {
      return this.videoStatsEnabled.get(e) ?? !1;
    }
    toggleVideoStats(e) {
      let t = this.isVideoStatsEnabled(e);
      this.setVideoStats(e, !t);
    }
    setVideoStats(e, t) {
      if (!t) {
        this.videoStatsEnabled.delete(e) && this.emitChange();
        return;
      }
      if (
        (this.videoStatsEnabled.has(e) && this.videoStatsEnabled.delete(e),
        this.videoStatsEnabled.set(e, t),
        this.videoStatsEnabled.size > 10)
      ) {
        let e = this.videoStatsEnabled.size - 10,
          t = this.videoStatsEnabled.keys();
        for (let n = 0; n < e; n++) {
          let e = t.next().value;
          null != e && this.videoStatsEnabled.delete(e);
        }
      }
      this.emitChange();
    }
    clearVideoStats(e) {
      this.videoStatsEnabled.delete(e) && this.emitChange();
    }
  }
  let s = new a(r.h, {}),
    l = s;
  function o(e) {
    s.toggleVideoStats(e);
  }
  function d(e, t) {
    s.setVideoStats(e, t);
  }
  function c(e) {
    s.clearVideoStats(e);
  }
}
