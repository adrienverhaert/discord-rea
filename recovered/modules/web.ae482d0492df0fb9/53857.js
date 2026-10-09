/* Recovered shipped factory. Module 53857.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8456437..8456826
 * Raw property SHA-256: d6c507913e772e508c38c6192fe06c9c23780b34f612aaed4248c95bc21b0a15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i,
    r = n(17928),
    a = n(73153),
    s = n(763827),
    l =
      (((i = {}).UNKNOWN = "unknown"),
      (i.BLUETOOTH = "bluetooth"),
      (i.SPEAKER = "speaker"),
      (i.RECEIVER = "receiver"),
      (i.WIRED = "wired"),
      i);
  class o extends r.Ay.Store {
    static displayName = "AudioRouteStore";
    initialize() {
      this.waitFor(s.A);
    }
    getCurrentRouteType() {
      return l.UNKNOWN;
    }
    getMultipleRoutesAvailable() {
      return !1;
    }
  }
  let d = new o(a.h, {});
}
