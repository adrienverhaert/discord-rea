/* Recovered shipped factory. Module 484847.
 * Source: recovered/web/assets/434742.5289724900ea180e.js
 * UTF-16 property offsets: 236..428
 * Raw property SHA-256: 41fb9ba6e4a987bae48cf3ea1540ce858e09cecfefccf638d8ffcefbaf88af91
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  var o = e(491238),
    n = e(31034),
    c = e(956713),
    p = o ? o.toStringTag : void 0;
  t.exports = function (t) {
    return null == t
      ? void 0 === t
        ? "[object Undefined]"
        : "[object Null]"
      : p && p in Object(t)
        ? n(t)
        : c(t);
  };
}
