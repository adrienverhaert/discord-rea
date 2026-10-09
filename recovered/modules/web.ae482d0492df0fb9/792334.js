/* Recovered shipped factory. Module 792334.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8714358..8714498
 * Raw property SHA-256: 79cf02ded5e11509fe26dd1f23e4be4797958439a25941be51547e12e4db9e4c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => r });
  var i = n(582128);
  function r(e) {
    return i.useMemo(() => e?.items.filter((e) => !0 !== e.isOwned) ?? [], [e]);
  }
}
