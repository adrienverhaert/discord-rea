/* Recovered shipped factory. Module 64585.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6643850..6645591
 * Raw property SHA-256: 2059563e2c72db791d81c5b05c0ba908255fd43d397b7a4056b05c4bbfc57344
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => C }), n(321073));
  var i = n(73153),
    r = n(272355),
    a = n(400492),
    s = n(312671),
    l = n(280450),
    o = n(763827),
    d = n(309010),
    c = n(741961),
    u = n(3137),
    _ = n(559908),
    E = n(652215);
  let A = (0, a.aN)("poggermode_applause", s.A.getSoundpack()),
    h = !1,
    f = !1,
    I = [],
    p = null;
  function T() {
    (A.stop(), (h = !1));
  }
  function m() {
    let e = u.A.isEnabled(),
      t = u.A.comboSoundsEnabled;
    return !!e && !!t && null != d.Ay.getChannelId();
  }
  function g() {
    if (0 === I.length || !m() || f) return;
    f = !0;
    let [e, t] = I[I.length - 1];
    ((0, a.Ak)(e, t), (p = setTimeout(S, 1e3)));
  }
  function S() {
    (I.pop(), (f = !1), g());
  }
  class N extends r.A {
    _initialize() {
      (_.Ay.addChangeListener(this.startAudio),
        i.h.subscribe("RTC_CONNECTION_STATE", this.setVolume),
        i.h.subscribe("TYPING_STOP", this.stopAudio),
        i.h.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
        i.h.subscribe("CHANNEL_SELECT", this.stopAudio),
        i.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio));
    }
    _terminate() {
      (_.Ay.removeChangeListener(this.startAudio),
        i.h.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
        i.h.unsubscribe("TYPING_STOP", this.stopAudio),
        i.h.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
        i.h.unsubscribe("CHANNEL_SELECT", this.stopAudio),
        i.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
        clearTimeout(p));
    }
    setVolume(e) {
      let { state: t } = e;
      t === E.S7L.RTC_CONNECTED ? (A.volume = 0.1) : (A.volume = 1);
    }
    handleTypingStop(e) {
      let { userId: t } = e;
      l.default.getId() === t && T();
    }
    stopAudio() {
      T();
    }
    startAudio() {
      if (!m()) return;
      let e = d.Ay.getChannelId();
      if (null == e) return;
      let t = l.default.getId(),
        n = c.A.isTyping(e, t),
        i = _.Ay.getUserCombo(t, e),
        r = i?.multiplier ?? 1;
      n && r >= 7 ? h || (A.loop(), (h = !0)) : T();
    }
    playAchievementUnlockSound() {
      m() &&
        (function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.A.isConnected();
          (I.push([e, t * (n ? 0.1 : 1)]), g());
        })("poggermode_achievement_unlock");
    }
  }
  let C = new N();
}
