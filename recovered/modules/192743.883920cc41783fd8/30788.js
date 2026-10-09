/* Recovered shipped factory. Module 30788.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 154167..154385
 * Raw property SHA-256: aed581fab9b72ee2b6c11116ca6929d50b66df7b921a1cc46b4b0aaaac00b771
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(980320),
    o = n(424478),
    a = n(188046),
    i = Object.prototype.hasOwnProperty;
  e.exports = function (e) {
    if (!r(e)) return a(e);
    var t = o(e),
      n = [];
    for (var u in e) ("constructor" == u && (t || !i.call(e, u))) || n.push(u);
    return n;
  };
}
