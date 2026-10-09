/* Recovered shipped factory. Module 115171.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3605631..3606169
 * Raw property SHA-256: 36c98967d1e040397d4b89f078fc962b37015d1bc0e9d0bb20619c23594fca12
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => r });
  var i = n(144705);
  function r(e) {
    switch (e.eventName) {
      case i.I.Kill:
        return { ...e, score: 0.15, importance: 1 };
      case i.I.MultiKill:
        return { ...e, score: 0.05, importance: 1 };
      case i.I.Assist:
        return { ...e, score: 0.06, importance: 1 };
      case i.I.Death:
        return { ...e, score: 0, importance: 1 };
      case i.I.RoshanKill:
        return { ...e, score: 0.15, importance: 1 };
      case i.I.GameEnd:
        return { ...e, score: 0.05 * !!e.additionalData.win, importance: +!!e.additionalData.win };
      case i.I.InMatchChange:
      case i.I.PlayStateChange:
        return { ...e, score: 0, importance: 0 };
    }
  }
}
