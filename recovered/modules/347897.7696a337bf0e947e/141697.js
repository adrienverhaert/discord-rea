/* Recovered shipped factory. Module 141697.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 645498..645918
 * Raw property SHA-256: 48d48733168162fe5d23d594d9cc780d9a96a8304c6148585d1cb36589d90108
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t;
  ((e.exports.timeout = function (e, r) {
    var n,
      i = new t();
    return Promise.race([
      e,
      new Promise(function (e, t) {
        n = setTimeout(function () {
          t(i);
        }, r);
      }),
    ]).then(
      function (e) {
        return (clearTimeout(n), e);
      },
      function (e) {
        throw (clearTimeout(n), e);
      },
    );
  }),
    ((t = e.exports.TimeoutError =
      function () {
        (Error.call(this), (this.stack = Error().stack), (this.message = "Timeout"));
      }).prototype = Object.create(Error.prototype)),
    (t.prototype.name = "TimeoutError"));
}
