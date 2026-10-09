/* Recovered shipped factory. Module 413528.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3151902..3152757
 * Raw property SHA-256: a31f3b2df1665eb6a4059ff435f965fea8672c42861f76da7bfe2d5a8e2ed129
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(439372),
    r = n(400492),
    a = n(312671),
    s = n(470710),
    l = n(803224),
    o = n(351906),
    d = n(977997),
    c = n(607567);
  let u = (0, r.aN)("call_calling", a.A.getSoundpack());
  class _ extends i.A {
    _initialize() {
      this.stores = new Map()
        .set(s.A, this.handleRingUpdate)
        .set(l.A, this.handleRingUpdate)
        .set(o.A, this.handleRingUpdate)
        .set(d.A, this.handleRingUpdate)
        .set(a.A, this.handleSoundpackUpdate);
    }
    _handleRing = (e) => {
      let t = d.A.getCurrentClientVoiceChannelId(null),
        n = null != t && c.Ay.countVoiceStatesForChannel(t) >= 2;
      null == t || n || !e || l.A.isSoundDisabled("call_calling") || o.A.disableSounds
        ? u.stop()
        : u.loop();
    };
    handleSoundpackUpdate = () => {
      (u.stop(), (u = (0, r.aN)("call_calling", a.A.getSoundpack())));
    };
    handleRingUpdate = () => {
      let e = s.A.getCalls().some(
        (e) => e.ringing.length > 0 && d.A.getCurrentClientVoiceChannelId(null) === e.channelId,
      );
      this._handleRing(e);
    };
  }
  let E = new _();
}
