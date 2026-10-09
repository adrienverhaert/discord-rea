/* Recovered shipped factory. Module 926972.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6846948..6847481
 * Raw property SHA-256: 268e57245167f84225fbc3843ffd2817f04400aacdaaae814e3cd97343abf0f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AA: () => r, Ym: () => s, tj: () => a });
  let i = (0, n(945810).mj)({
    name: "2026-03-soundmoji-sending",
    kind: "user",
    defaultConfig: { enabled: !1, showSoundmojiInEmojiPicker: !1 },
    variations: {
      1: { enabled: !0, showSoundmojiInEmojiPicker: !1 },
      2: { enabled: !0, showSoundmojiInEmojiPicker: !0 },
    },
  });
  function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t }).enabled;
  }
  function a(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
  }
  function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).showSoundmojiInEmojiPicker;
  }
}
