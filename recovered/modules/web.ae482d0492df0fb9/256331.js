/* Recovered shipped factory. Module 256331.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4030314..4030772
 * Raw property SHA-256: df63be5042e623bfa370b9dda4a1cfd1ce01ee8417160837cb2dd2a2eb1bc06e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = !0;
  class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ConversationVisibilityStore";
    static persistKey = "ConversationVisibilityStore";
    initialize(e) {
      a = e?.highlightingEnabled ?? !0;
    }
    isHighlightingEnabled() {
      return a;
    }
    getState() {
      return { highlightingEnabled: a };
    }
    getUserAgnosticState() {
      return { highlightingEnabled: a };
    }
  }
  let l = new s(r.h, {
    CONVERSATIONS_TOGGLE_HIGHLIGHTING: function () {
      a = !a;
    },
  });
}
