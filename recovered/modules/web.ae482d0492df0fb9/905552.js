/* Recovered shipped factory. Module 905552.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5011997..5012414
 * Raw property SHA-256: 5492a2320f7137ea4ef6235e23eb502b8c3f13e4b2147485d906f57044c50ee8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => a });
  var r = n(9302);
  function a(e, t) {
    if (__OVERLAY__) {
      let e = t.getGame(),
        n = (0, r.getPID)();
      return null == e || null == n
        ? null
        : i?.id === e.id && i?.pid === n
          ? i
          : (i = {
              id: e.id,
              pid: n,
              pidPath: [],
              nativeProcessObserverId: 0,
              hidden: !1,
              elevated: !1,
              name: e.name,
              lastFocused: 0,
              exePath: "",
              exeName: "",
              cmdLine: "",
              processName: "",
              distributor: null,
              windowHandle: null,
              fullscreenType: 0,
            });
    }
    return e.getVisibleGame();
  }
}
