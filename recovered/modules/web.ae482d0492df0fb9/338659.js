/* Recovered shipped factory. Module 338659.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5862035..5865527
 * Raw property SHA-256: f3b8bd6db3718842a60c0573e598ed0f52aef153f24aa56dc07079b1ec672365
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { s: () => r }), n(321073));
  var i = n(265486);
  class r {
    videoElement;
    updateInterval = null;
    updateCallback = null;
    recentFrameRates = [];
    lastCurrentTime = 0;
    baselineFrames = 0;
    baselineTime = 0;
    lockedFrameRate = null;
    lastKnownFrameRate = null;
    cachedCodecInfo = null;
    codecInfoPromise = null;
    codecInfoFetchId = 0;
    fileSizeBytes = null;
    constructor(e, t) {
      ((this.videoElement = e), (this.fileSizeBytes = t ?? null), this.fetchCodecInfo());
    }
    async fetchCodecInfo() {
      let e = "" !== this.videoElement.src ? this.videoElement.src : this.videoElement.currentSrc;
      if (null == e || "" === e || null != this.codecInfoPromise) return;
      let t = this.codecInfoFetchId;
      this.codecInfoPromise = (0, i.K)(e);
      let n = await this.codecInfoPromise;
      this.codecInfoFetchId === t && (this.cachedCodecInfo = n);
    }
    resetCodecInfo(e) {
      (this.codecInfoFetchId++,
        (this.cachedCodecInfo = null),
        (this.codecInfoPromise = null),
        (this.fileSizeBytes = e ?? null),
        (this.recentFrameRates = []),
        (this.lastCurrentTime = 0),
        (this.baselineFrames = 0),
        (this.baselineTime = 0),
        (this.lockedFrameRate = null),
        (this.lastKnownFrameRate = null),
        this.fetchCodecInfo());
    }
    getStats() {
      let e,
        t,
        n,
        i = this.videoElement;
      this.cachedCodecInfo?.videoWidth != null && this.cachedCodecInfo?.videoHeight != null
        ? ((e = this.cachedCodecInfo.videoWidth),
          (t = this.cachedCodecInfo.videoHeight),
          (n = `${e}x${t}`))
        : ((e = 0 !== i.videoWidth ? i.videoWidth : 0),
          (t = 0 !== i.videoHeight ? i.videoHeight : 0),
          (n = e > 0 && t > 0 ? `${e}x${t}` : "Unknown"));
      let r = Math.round(i.clientWidth),
        a = Math.round(i.clientHeight),
        s = [],
        l = 0,
        o = i.currentTime;
      for (let e = 0; e < i.buffered.length; e++) {
        let t = i.buffered.start(e),
          n = i.buffered.end(e);
        (s.push({ start: t, end: n }), n > o && (t <= o ? (l += n - o) : (l += n - t)));
      }
      let d = 0,
        c = 0,
        u = 0,
        _ = null;
      if ("function" == typeof i.getVideoPlaybackQuality) {
        let e = i.getVideoPlaybackQuality();
        ((d = e.droppedVideoFrames), (u = (c = e.totalVideoFrames) > 0 ? (d / c) * 100 : 0));
      }
      if (this.cachedCodecInfo?.frameRate != null) _ = this.cachedCodecInfo.frameRate;
      else if ("function" == typeof i.getVideoPlaybackQuality) {
        if (null !== this.lockedFrameRate) _ = this.lockedFrameRate;
        else if (Math.abs(i.currentTime - this.lastCurrentTime) > 1.5 && this.lastCurrentTime > 0)
          if (this.recentFrameRates.length >= 3) {
            let e = this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length;
            ((this.lockedFrameRate = Math.round(e)),
              (_ = this.lockedFrameRate),
              (this.lastKnownFrameRate = this.lockedFrameRate));
          } else
            ((this.baselineFrames = c),
              (this.baselineTime = i.currentTime),
              (this.recentFrameRates = []),
              (_ = this.lastKnownFrameRate));
        else {
          let e = c - this.baselineFrames,
            t = i.currentTime - this.baselineTime;
          t >= 1 && e > 0
            ? (this.recentFrameRates.push(e / t),
              this.recentFrameRates.length > 5 && this.recentFrameRates.shift(),
              (_ = Math.round(
                this.recentFrameRates.reduce((e, t) => e + t, 0) / this.recentFrameRates.length,
              )),
              (this.lastKnownFrameRate = _))
            : null !== this.lastKnownFrameRate && (_ = this.lastKnownFrameRate);
        }
        this.lastCurrentTime = i.currentTime;
      }
      let E = i.error?.code ?? null,
        A = i.error?.message ?? null;
      return (
        null == this.codecInfoPromise && this.fetchCodecInfo(),
        {
          resolution: n,
          videoWidth: e,
          videoHeight: t,
          viewportWidth: r,
          viewportHeight: a,
          currentTime: i.currentTime,
          duration: i.duration,
          bufferedRanges: s,
          bufferedSeconds: l,
          droppedFrames: d,
          totalFrames: c,
          droppedFramesPercent: u,
          frameRate: _,
          src: i.src,
          fileSizeBytes: this.fileSizeBytes,
          codecInfo: this.cachedCodecInfo,
          errorCode: E,
          errorMessage: A,
        }
      );
    }
    startTracking(e, t) {
      (this.stopTracking(),
        (this.updateCallback = e),
        t?.emitInitial === !0 && e(this.getStats()),
        (this.updateInterval = window.setInterval(() => {
          null != this.updateCallback && this.updateCallback(this.getStats());
        }, 1e3)));
    }
    stopTracking() {
      (null !== this.updateInterval &&
        (window.clearInterval(this.updateInterval), (this.updateInterval = null)),
        (this.updateCallback = null));
    }
    destroy() {
      this.stopTracking();
    }
  }
}
