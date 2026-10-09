/* Recovered shipped factory. Module 874886.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 172842..173095
 * Raw property SHA-256: 9021943988909d1ddded8fb146c88d2186b55976e67f02af3a103ecf8844cb99
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  e = n.nmd(e);
  var r = n(20683),
    o = t && !t.nodeType && t,
    a = o && e && !e.nodeType && e,
    i = a && a.exports === o && r.process,
    u = (function () {
      try {
        var e = a && a.require && a.require("util").types;
        if (e) return e;
        return i && i.binding && i.binding("util");
      } catch (e) {}
    })();
  e.exports = u;
}
