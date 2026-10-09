/* Recovered shipped factory. Module 554861.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 159297..159582
 * Raw property SHA-256: 1aed133b571b9b949ae50959b1bbc5ffda1e874e356bf8517b5a09e6288b415d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(574151);
  e.exports = function (e, t) {
    if (e !== t) {
      var n = void 0 !== e,
        o = null === e,
        a = e == e,
        i = r(e),
        u = void 0 !== t,
        l = null === t,
        s = t == t,
        c = r(t);
      if (
        (!l && !c && !i && e > t) ||
        (i && u && s && !l && !c) ||
        (o && u && s) ||
        (!n && s) ||
        !a
      )
        return 1;
      if (
        (!o && !i && !c && e < t) ||
        (c && n && a && !o && !i) ||
        (l && n && a) ||
        (!u && a) ||
        !s
      )
        return -1;
    }
    return 0;
  };
}
