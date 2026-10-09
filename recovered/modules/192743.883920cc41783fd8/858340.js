/* Recovered shipped factory. Module 858340.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 169071..169783
 * Raw property SHA-256: 918be578985ebab36274ca78666bd3f2904a2d1036be6dee6bd3f8763b5e85db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(686094),
    o = n(292108),
    a = n(639360),
    i = n(789617),
    u = n(733076);
  e.exports = function (e, t, n) {
    var l = e.constructor;
    switch (t) {
      case "[object ArrayBuffer]":
        return r(e);
      case "[object Boolean]":
      case "[object Date]":
        return new l(+e);
      case "[object DataView]":
        return o(e, n);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return u(e, n);
      case "[object Map]":
      case "[object Set]":
        return new l();
      case "[object Number]":
      case "[object String]":
        return new l(e);
      case "[object RegExp]":
        return a(e);
      case "[object Symbol]":
        return i(e);
    }
  };
}
