/* Recovered shipped factory. Module 544743.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2329200..2329894
 * Raw property SHA-256: 27f87aa78202b95714f3db737f91e63207702291bf864db8b74bab05edace5a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && (null == n || null == n.end_time || new Date(n.end_time) >= new Date());
  }
  function r(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
  }
  n.d(t, { Ay: () => a, tG: () => i, wG: () => r });
  class a {
    timers;
    constructor() {
      this.timers = {};
    }
    reset() {
      (Object.values(this.timers).forEach((e) => clearTimeout(e)), (this.timers = {}));
    }
    setTimer(e, t, n) {
      if (null == e || null == t) return !1;
      let i = null == t.end_time ? null : new Date(t.end_time).getTime() - Date.now();
      return null != i && (i <= 0 || ((this.timers[e] = setTimeout(n, Math.max(0, i))), !1));
    }
    clearTimer(e) {
      null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
  }
}
