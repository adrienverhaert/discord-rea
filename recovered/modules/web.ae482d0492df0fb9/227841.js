/* Recovered shipped factory. Module 227841.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9295007..9295654
 * Raw property SHA-256: d83b601340ee876d6849b3bcfbd9aa2a808591ddaad7fc7f5c74dd288507f0c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => a });
  var i = n(144914),
    r = n(652215);
  function a(e, t, n) {
    let a = t.getState(e.id, e.branchId),
      s = n.getQueuePosition(e.id, e.branchId),
      l = n.paused;
    if (null != a) {
      if (null == s || -1 === s)
        switch (a.type) {
          case r.WTw.INSTALLING:
            return r.Hf6.INSTALL;
          case r.WTw.UPDATING:
          case r.WTw.UPDATE_REQUIRED:
            return r.Hf6.UPDATE;
        }
      switch (a.type) {
        case r.WTw.INSTALLING:
        case r.WTw.UPDATING:
        case r.WTw.UPDATE_REQUIRED:
        case r.WTw.REPAIRING:
          if (s > 0) return r.Hf6.MOVE_UP;
          if (l) return r.Hf6.RESUME;
          return r.Hf6.PAUSE;
        case r.WTw.UP_TO_DATE:
          return r.Hf6.PLAY;
        case r.WTw.UNINSTALLING:
          return null;
      }
    }
    return null != s && s > 0 ? r.Hf6.MOVE_UP : (0, i.S)() ? r.Hf6.INSTALL : null;
  }
}
