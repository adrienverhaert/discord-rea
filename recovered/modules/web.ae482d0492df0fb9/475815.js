/* Recovered shipped factory. Module 475815.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9767396..9769572
 * Raw property SHA-256: f431c79cd61df23481ece57cd2d447baef3c71cdaafa32982ef2fe1234a7b98b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Ub: () => a,
    Wb: () => d,
    _U: () => o,
    a3: () => c,
    qf: () => r,
    sP: () => l,
    tl: () => s,
  });
  var i = n(626584);
  function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.find((e) => null != e && a(e));
  }
  function a(e) {
    return (
      null != e.requestFullscreen ||
      null != e.webkitRequestFullscreen ||
      e.webkitSupportsFullscreen ||
      null != e.mozRequestFullScreen ||
      null != e.msRequestFullscreen
    );
  }
  function s(e) {
    "function" == typeof e.requestFullscreen
      ? e.requestFullscreen()
      : "function" == typeof e.webkitRequestFullscreen
        ? e.webkitRequestFullscreen()
        : "function" == typeof e.webkitEnterFullscreen
          ? e.webkitEnterFullscreen()
          : "function" == typeof e.mozRequestFullScreen
            ? e.mozRequestFullScreen()
            : "function" == typeof e.msRequestFullscreen
              ? e.msRequestFullscreen()
              : new i.A("FullScreenUtils").warn("Fullscreen API is not supported.");
  }
  function l(e, t) {
    let n = null != t ? t : document;
    o(null, n) &&
      ("function" == typeof n.exitFullscreen
        ? n.exitFullscreen()
        : "function" == typeof n.webkitExitFullscreen
          ? n.webkitExitFullscreen()
          : "function" == typeof e.webkitExitFullscreen
            ? e.webkitExitFullscreen()
            : "function" == typeof n.mozCancelFullScreen
              ? n.mozCancelFullScreen()
              : "function" == typeof n.msExitFullscreen
                ? n.msExitFullscreen()
                : new i.A("FullScreenUtils").warn("Fullscreen API is not supported."));
  }
  function o(e, t) {
    let n = null != t ? t : document;
    return !!(
      null != n.fullscreenElement ||
      null != n.mozFullScreenElement ||
      null != n.webkitFullscreenElement ||
      null != n.msFullscreenElement ||
      (null != e && e.webkitDisplayingFullscreen)
    );
  }
  let d = (() => {
    if ("u" > typeof document) {
      let e = document.createElement("video");
      if ("function" == typeof e.requestFullscreen);
      else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
      else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
      else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
      else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange";
    } else console.warn("FullScreenUtils has been imported in a non-web environment");
    return "fullscreenchange";
  })();
  function c(e, t) {
    return (
      e.addEventListener(d, t),
      e.addEventListener("webkitfullscreenchange", t),
      () => {
        (e.removeEventListener(d, t), e.removeEventListener("webkitfullscreenchange", t));
      }
    );
  }
}
