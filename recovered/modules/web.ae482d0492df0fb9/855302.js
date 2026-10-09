/* Recovered shipped factory. Module 855302.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8292498..8292727
 * Raw property SHA-256: 8b4bd409d6937ed9f131ded407d1c94e6059f80aaf739ea7ce8f3c4950c1d366
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(174459),
    r = n(652215);
  function a(e, t, n, a) {
    return i.default.track(r.HAw.VOICE_AND_VIDEO_SETTINGS_UPDATED, {
      previous_setting_value: null != n ? String(n) : void 0,
      [e]: t,
      location_stack: a,
    });
  }
}
