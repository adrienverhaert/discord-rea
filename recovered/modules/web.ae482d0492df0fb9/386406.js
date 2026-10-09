/* Recovered shipped factory. Module 386406.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 683117..683763
 * Raw property SHA-256: 3e7ff5297252164c7bf3eb6b67c5fd9e2838d736835e94fb7d9a6b013cf400bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    clearVADWarning() {
      i.h.dispatch({ type: "PERMISSION_CLEAR_VAD_WARNING" });
    },
    clearSuppressWarning() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      i.h.dispatch({ type: "PERMISSION_CLEAR_SUPPRESS_WARNING", forever: e });
    },
    clearPTTAdminWarning() {
      i.h.dispatch({ type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING" });
    },
    requestElevatedProcess(e) {
      i.h.dispatch({ type: "PERMISSION_REQUEST_ELEVATED_PROCESS", pid: e });
    },
    clearElevatedProcess() {
      i.h.dispatch({ type: "PERMISSION_CLEAR_ELEVATED_PROCESS" });
    },
    continueNonelevatedProcess(e) {
      i.h.dispatch({ type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS", pid: e });
    },
  };
}
