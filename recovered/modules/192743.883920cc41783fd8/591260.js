/* Recovered shipped factory. Module 591260.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 152623..152995
 * Raw property SHA-256: d8bedbcc7446d70335e446f5780ddb3e244cbb3c55374a64e057dbe510b56195
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(47331),
    o = n(607771),
    a = n(980320),
    i = n(273590),
    u = /^\[object .+?Constructor\]$/,
    l = Object.prototype,
    s = Function.prototype.toString,
    c = l.hasOwnProperty,
    f = RegExp(
      "^" +
        s
          .call(c)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  e.exports = function (e) {
    return !(!a(e) || o(e)) && (r(e) ? f : u).test(i(e));
  };
}
