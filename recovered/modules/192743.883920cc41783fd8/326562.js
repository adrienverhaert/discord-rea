/* Recovered shipped factory. Module 326562.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 168873..169070
 * Raw property SHA-256: 9d3e28305c39d3242860a0d2427082b5fbd5650e40bb871b9b54d3c59c3f3a6f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = Object.prototype.hasOwnProperty;
  e.exports = function (e) {
    var n = e.length,
      r = new e.constructor(n);
    return (
      n &&
        "string" == typeof e[0] &&
        t.call(e, "index") &&
        ((r.index = e.index), (r.input = e.input)),
      r
    );
  };
}
