/* Recovered shipped factory. Module 97260.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 632540..632885
 * Raw property SHA-256: 0a8a78567ab28506116498fe7768c15438123a0df40615c272470cf9cfdcf8a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    addKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e }),
    setKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e }),
    deleteKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e }),
    enableAll: (e) => i.h.dispatch({ type: "KEYBINDS_ENABLE_ALL_KEYBINDS", enable: e }),
  };
}
