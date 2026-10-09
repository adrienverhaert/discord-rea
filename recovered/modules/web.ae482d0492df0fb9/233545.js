/* Recovered shipped factory. Module 233545.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 686361..687095
 * Raw property SHA-256: 726e2ed40fbef36aedde232589c7ae83a2a59d91ae5d7a2406a48010f7c8222c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { VN: () => s, YW: () => l, _w: () => c, c4: () => o, ho: () => a, z0: () => d });
  var i = n(73153),
    r = n(77729);
  function a(e) {
    (i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }),
      i.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" }));
  }
  function s() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
  }
  function l() {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
  }
  function o(e) {
    i.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
  }
  function d(e, t, n) {
    i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
  }
  function c() {
    r.A.fileManager
      .showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] })
      .then((e) => {
        let t = 0 === e.length ? "" : e[0];
        i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
      });
  }
}
