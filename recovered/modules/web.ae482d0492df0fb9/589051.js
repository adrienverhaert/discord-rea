/* Recovered shipped factory. Module 589051.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6217132..6218226
 * Raw property SHA-256: ff35dd4c631b1fad1cc739fdf24e23fc7635afce59340935ef813083ae8eacbe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => _, M8: () => o, Mn: () => u, NI: () => l, sq: () => a, zQ: () => c });
  var i = n(945810);
  let r = (0, i.mj)({
    name: "2026-03-overlay-default-keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    variations: {
      1: { keybindOverride: "ctrl+tab" },
      2: { keybindOverride: "alt+x" },
      3: { keybindOverride: "ctrl+l" },
    },
  });
  function a(e) {
    return r.getConfig({ location: e });
  }
  let s = (0, i.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
      1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
      2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
      3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
  });
  function l(e) {
    return s.getConfig({ location: e });
  }
  function o(e) {
    return s.useConfig({ location: e });
  }
  let d = (0, i.mj)({
    name: "2026-04-overlay-streamer-mode",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function c(e) {
    return d.getConfig({ location: e });
  }
  function u(e) {
    return d.useConfig({ location: e }).enabled;
  }
  function _() {
    (l("OVERLAY_INITIALIZED"), c("OVERLAY_INITIALIZED"));
  }
}
