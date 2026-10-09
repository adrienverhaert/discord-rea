/* Recovered shipped factory. Module 404044.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6084158..6084561
 * Raw property SHA-256: 9d7e371bc81aa5197dbbfbfdd9c3ba6c871a3f4b714b8e7e4fcc925360c309f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(439372),
    r = n(723702),
    a = n(536194),
    s = n(674966),
    l = n(765682),
    o = n(652215);
  class d extends i.A {
    actions = this.isEnabled() ? { AUDIO_SET_MODE: this.handleAudioSetMode } : {};
    isEnabled() {
      return (0, r.isDesktop)() && (0, r.isMac)() && !a.P.isDiscordTestSet();
    }
    handleAudioSetMode(e) {
      let { mode: t } = e;
      t === o.TBI.PUSH_TO_TALK && s.A.requestPermission(l.iL.INPUT_MONITORING);
    }
  }
  let c = new d();
}
