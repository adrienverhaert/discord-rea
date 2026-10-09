/* Recovered shipped factory. Module 197111.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3779198..3779788
 * Raw property SHA-256: 4e713f692f63d2a1b369b9228efb7aa16f42559476647d5a9e4b981524b7ff0f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  n(436317);
  let r = {
    openNativeAppModal(e, t) {
      let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      (i.h.dispatch({ type: "NATIVE_APP_MODAL_OPENING", code: e }),
        Promise.resolve()
          .then(n.bind(n, 129014))
          .then((n) => {
            let { default: i } = n;
            i.request(t, { code: e, ...r })
              .then((t) => {
                this.nativeModalOpened(t?.code ?? e);
              })
              .catch(() => this.nativeModalOpenFailed(e))
              .then(() => i.disconnect());
          }));
    },
    nativeModalOpened(e) {
      i.h.dispatch({ type: "NATIVE_APP_MODAL_OPENED", code: e });
    },
    nativeModalOpenFailed(e) {
      i.h.dispatch({ type: "NATIVE_APP_MODAL_OPEN_FAILED", code: e });
    },
  };
}
