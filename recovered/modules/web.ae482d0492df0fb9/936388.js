/* Recovered shipped factory. Module 936388.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7303256..7304128
 * Raw property SHA-256: 97369c5a2dc0f180a1a8d2008c82daadf9ce9aab7d0eda678a264cac29ed39d7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    clearUploadedKeyVersions: function () {
      i.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    addUploadedKeyVersion: function (e) {
      i.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion: e });
    },
    createSecureFramesVerifiedKey: function (e, t) {
      i.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
      i.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: e, serializedKey: t });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
      i.h.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: e });
    },
    createSecureFramesTransientKey: function (e, t) {
      i.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesTransientKey: function (e) {
      i.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId: e });
    },
  };
}
