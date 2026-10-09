/* Recovered shipped factory. Module 28647.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2278906..2279183
 * Raw property SHA-256: 3a3945851da0d4ae9cc5bee9f8469e02576804f21e126b515fbfbdf210ef72f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => s });
  var i = n(192308),
    r = n(73153),
    a = n(946974);
  let s = {
    binds: ["mod+/", "mod+shift+/"],
    comboKeysBindGlobal: !0,
    action: () => (
      (0, i.hasModalOpen)(a.P)
        ? r.h.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" })
        : r.h.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" }),
      !1
    ),
  };
}
