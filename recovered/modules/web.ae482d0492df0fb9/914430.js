/* Recovered shipped factory. Module 914430.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 557996..558338
 * Raw property SHA-256: 6ebb06ecfadb28406c00a2fc31bd8fab1eb3adc7cd139db9b05485a2767f1dfd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Al: () => l, Gv: () => r, fh: () => a, rZ: () => s });
  var i = n(73153);
  function r(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
  }
  function a(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
  }
  function s(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
  }
  function l(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
  }
}
