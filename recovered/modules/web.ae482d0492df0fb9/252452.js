/* Recovered shipped factory. Module 252452.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 720901..721106
 * Raw property SHA-256: 33edc43ab3954a780c61ade9fdd3a3bdf9526aba9f38219a552975ca4c1dbf0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    close() {
      i.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
      i.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e });
    },
  };
}
