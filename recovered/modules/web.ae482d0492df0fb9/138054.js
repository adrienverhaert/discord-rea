/* Recovered shipped factory. Module 138054.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6505047..6505557
 * Raw property SHA-256: 2de8c1bfc80aa80579a1f2bb589865947fca1dc5a3606dd52951f6b3bec84106
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153);
  let a = null;
  class s extends i.Ay.PersistedStore {
    static displayName = "FamilyCenterPendingConnectionStore";
    static persistKey = "FamilyCenterPendingConnectionStore";
    initialize(e) {
      a = e ?? null;
    }
    getState() {
      return a;
    }
    getPendingConnection() {
      return a;
    }
  }
  let l = new s(r.h, {
    FAMILY_CENTER_PENDING_CONNECTION_SET: function (e) {
      let { teenId: t, linkCode: n } = e;
      a = { teenId: t, linkCode: n };
    },
    FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function (e) {
      a = null;
    },
    LOGOUT: function () {
      a = null;
    },
  });
}
