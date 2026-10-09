/* Recovered shipped factory. Module 4472.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9787750..9788769
 * Raw property SHA-256: 9ab887b6181f2e655b773644f5ee28ffc5dbb266017184c62ea3eb1cf028c0a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => o }), n(321073));
  var i = n(652215);
  let r = [],
    a = !1;
  function s() {
    let e = window.navigator.connection;
    return null == e
      ? { type: i.wY_.UNKNOWN, effectiveSpeed: i.NKC.UNKNOWN }
      : { type: null != e.type ? e.type : i.wY_.UNKNOWN, effectiveSpeed: e.effectiveType };
  }
  function l() {
    let e = s();
    r.forEach((t) => t(e));
  }
  let o = {
    addOnlineCallback(e) {
      window.addEventListener("online", e);
    },
    removeOnlineCallback(e) {
      window.removeEventListener("online", e);
    },
    addOfflineCallback(e) {
      window.addEventListener("offline", e);
    },
    removeOfflineCallback(e) {
      window.removeEventListener("offline", e);
    },
    addChangeCallback(e) {
      (r.push(e),
        (function () {
          if (!0 === a) return;
          let e = window.navigator.connection;
          null != e && ((a = !0), e.addEventListener("change", l));
        })());
    },
    removeChangeCallback(e) {
      let t;
      -1 !== (t = r.indexOf(e)) &&
        (r.splice(t, 1),
        (function () {
          if (!1 === a) return;
          let e = window.navigator.connection;
          null != e &&
            0 === r.length &&
            null != e &&
            (e.removeEventListener("change", l), (a = !1));
        })());
    },
    getNetworkInformation: () => Promise.resolve(s()),
    isOnline() {
      let e = navigator.onLine;
      return void 0 === e || e;
    },
  };
}
