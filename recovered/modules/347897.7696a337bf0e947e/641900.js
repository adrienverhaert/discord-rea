/* Recovered shipped factory. Module 641900.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 459782..460370
 * Raw property SHA-256: d5429278de1845947c0ddc23d119e8132f0ec4a5b441c68e3abc078fddd2be22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e, t, n, i, o, a) {
    var s,
      l,
      u,
      c,
      f = [],
      p = n.type;
    if (
      ("keypress" !== p ||
        (n.code && "Arrow" === n.code.slice(0, 5)) ||
        (this.callbacks["any-character"] || []).forEach(function (e) {
          f.push(e);
        }),
      !this.callbacks[e])
    )
      return f;
    for (
      u = r(921194), "keyup" === p && u(e) && (t = [e]), s = 0;
      s < this.callbacks[e].length;
      ++s
    )
      if (
        ((l = this.callbacks[e][s]), i || !l.seq || this.sequenceLevels[l.seq] === l.level) &&
        p === l.action &&
        ((c = r(135926)), ("keypress" === p && !n.metaKey && !n.ctrlKey) || c(t, l.modifiers))
      ) {
        var d = !i && l.combo === o,
          h = i && l.seq === i && l.level === a;
        ((d || h) && this.callbacks[e].splice(s, 1), f.push(l));
      }
    return f;
  };
}
