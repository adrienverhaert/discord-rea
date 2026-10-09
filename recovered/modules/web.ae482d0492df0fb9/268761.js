/* Recovered shipped factory. Module 268761.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7790478..7791061
 * Raw property SHA-256: 5c3d176d68ecd3586abb2e0478c93f274d7cab513f8685ffd3750fb3ad477245
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Gk: () => o, Gl: () => d });
  var i = n(360143),
    r = n.n(i);
  n(536637);
  var a = n(927813),
    s = n(37411),
    l = n(660183);
  function o() {
    return [
      { id: "1hour", label: l.intl.string(l.t.cs8A1c), value: a.A.Minutes.HOUR },
      { id: "24hours", label: l.intl.string(l.t.zFKbrF), value: a.A.Minutes.DAY },
      { id: "3days", label: l.intl.string(l.t.TmPIZX), value: 3 * a.A.Minutes.DAY },
      { id: "1week", label: l.intl.string(l.t["/7i2el"]), value: a.A.Minutes.WEEK },
    ];
  }
  function d(e, t) {
    return t ?? e?.defaultAutoArchiveDuration ?? s.cM;
  }
  (a.A.Minutes.HOUR,
    a.A.Minutes.DAY,
    a.A.Minutes.DAY,
    a.A.Minutes.WEEK,
    r()(() => o().map((e) => e.value)));
}
