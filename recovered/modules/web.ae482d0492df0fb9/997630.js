/* Recovered shipped factory. Module 997630.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5005945..5006306
 * Raw property SHA-256: b894d44b7e265f6dbe271a82799842e34516cf0c146d276291982ff0404598df
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => s, a: () => a });
  var i = n(73153),
    r = n(192820);
  function a(e) {
    (r.Ay.getMediaEngine()?.presentNativeScreenSharePicker?.(e),
      i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_PRESENT", style: e }));
  }
  function s() {
    (r.Ay.getMediaEngine()?.releaseNativeDesktopVideoSourcePickerStream?.(),
      i.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_RELEASE" }));
  }
}
