/* Recovered shipped factory. Module 14214.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2278208..2278551
 * Raw property SHA-256: cba3d8054ff9864cf4afe6f056843c82da0a17e96b7644b97f35688cc7964d68
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { VT: () => r, rR: () => a });
  var i = n(827343);
  let r = {
      binds: ["mod+shift+m"],
      comboKeysBindGlobal: !0,
      action: () => (
        i.default.toggleSelfMute({ usedKeybind: !0, location: "Default Keybind" }),
        !1
      ),
    },
    a = {
      binds: ["mod+shift+d"],
      comboKeysBindGlobal: !0,
      action: () => (
        i.default.toggleSelfDeaf({ usedKeybind: !0, location: "Default Keybind" }),
        !1
      ),
    };
}
