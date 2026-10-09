/* Recovered shipped factory. Module 377941.
 * Source: recovered/web/assets/434742.5289724900ea180e.js
 * UTF-16 property offsets: 1225..1369
 * Raw property SHA-256: 465b7158a92824dca68e5b75d1b5fd56fd77bf98f6683ed1ac28eab25e40b5f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  var o = e(762479),
    n = /[\\^$.*+?()[\]{}|]/g,
    c = RegExp(n.source);
  t.exports = function (t) {
    return (t = o(t)) && c.test(t) ? t.replace(n, "\\$&") : t;
  };
}
