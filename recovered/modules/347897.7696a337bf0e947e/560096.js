/* Recovered shipped factory. Module 560096.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 460585..461117
 * Raw property SHA-256: 723edcc9de620cc5ea96cdb319067ec27b76a6d4683f0653737f9a8e3568d73c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e, t, n) {
    var i,
      o,
      a,
      s,
      l = {},
      u = 0,
      c = !1;
    for (o = 0, i = this.getMatches(e, t, n); o < i.length; ++o)
      i[o].seq && (u = Math.max(u, i[o].level));
    for (o = 0; o < i.length; ++o) {
      if (i[o].seq) {
        if (i[o].level !== u) continue;
        ((c = !0), (l[i[o].seq] = 1), this.fireCallback(i[o].callback, n, i[o].combo, i[o].seq));
        continue;
      }
      c || this.fireCallback(i[o].callback, n, i[o].combo);
    }
    ((s = "keypress" === n.type && this.ignoreNextKeypress),
      (a = r(921194)),
      n.type !== this.nextExpectedAction || a(e) || s || this.resetSequences(l),
      (this.ignoreNextKeypress = c && "keydown" === n.type));
  };
}
