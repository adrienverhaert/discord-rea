/* Recovered shipped factory. Module 714763.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7304620..7305352
 * Raw property SHA-256: acd41ebc427dab921e4edebc175851d5a783d691c9cfc0c2289dd95baf9fe768
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => d }), n(321073));
  var i = n(17928),
    r = n(73153);
  let a = [],
    s = !1,
    l = a;
  class o extends i.Ay.PersistedStore {
    static displayName = "SecureFramesPersistedStore";
    static persistKey = "SecureFramesPersistedStore";
    initialize(e) {
      ((s = e?.persistentCodesEnabled ?? !1), (l = e?.uploadedKeyVersions ?? a));
    }
    getState() {
      return { persistentCodesEnabled: s, uploadedKeyVersions: l };
    }
    getPersistentCodesEnabled() {
      return s;
    }
    getUploadedKeyVersionsCached() {
      return l;
    }
  }
  let d = new o(r.h, {
    SECURE_FRAMES_SETTINGS_UPDATE: function (e) {
      s = e.persistentCodesEnabled;
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function (e) {
      let t = [];
      for (let n of l) {
        if (n === e.keyVersion) return;
        t.push(n);
      }
      (t.push(e.keyVersion), (l = t));
    },
    SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function () {
      l = a;
    },
  });
}
