/* Recovered shipped factory. Module 96175.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6285112..6285751
 * Raw property SHA-256: 445767a94d54b4a5e8671a06fa809107ee479b1e09ca427d0f3d2461dcd7830e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Br: () => a, I2: () => s, Ms: () => l, Oy: () => r });
  var i = n(41984);
  function r(e) {
    return e;
  }
  function a(e) {
    switch (e) {
      case "click":
      case "unknown":
      default:
        return "click";
      case "mouseover":
        return "mouseover";
      case "mouseout":
        return "mouseout";
      case "mousemove":
      case "hover":
        return "mousemove";
    }
  }
  function s() {
    return {
      popoutOpened: !1,
      windowHandleSentToNative: !1,
      hasUseEffectFired: !1,
      trackedPidFocused: !1,
      reactInitializationStarted: !1,
      cssLoaded: !1,
      showInactiveCalled: !1,
      allDone: !1,
      errorMessage: null,
    };
  }
  let l = new Set([
    i.AR.WAITING_FOR_POPOUT_OPEN,
    i.AR.WAITING_FOR_REACT_INITIALIZATION,
    i.AR.WAITING_FOR_PID_FOCUS,
    i.AR.WAITING_FOR_SUCCESSFUL_SHOW,
  ]);
}
