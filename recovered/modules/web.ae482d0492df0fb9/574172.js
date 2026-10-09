/* Recovered shipped factory. Module 574172.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6668537..6669323
 * Raw property SHA-256: e805668af8d149f9cc4a3859c4f327585ba483a9a3abddf8444d6b11ec64b7df
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, {
      addStylesheet: () => c,
      close: () => o,
      open: () => a,
      openCallTilePopout: () => l,
      openChannelCallPopout: () => s,
      setAlwaysOnTop: () => d,
    }));
  var i = n(73153);
  let r = { menubar: !1, toolbar: !1, location: !1, directories: !1 };
  function a(e, t, n) {
    return i.h.dispatch({
      type: "POPOUT_WINDOW_OPEN",
      key: e,
      features: { ...r, ...n },
      render: t,
    });
  }
  function s(e) {
    return i.h.dispatch({ type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN", channel: e });
  }
  function l(e, t) {
    return i.h.dispatch({ type: "CALL_TILE_POPOUT_WINDOW_OPEN", channelId: e, participantId: t });
  }
  function o(e) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_CLOSE", key: e });
  }
  function d(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", alwaysOnTop: t, key: e });
  }
  function c(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_ADD_STYLESHEET", url: e, integrity: t });
  }
}
