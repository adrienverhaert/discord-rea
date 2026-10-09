/* Recovered shipped factory. Module 944024.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 7694..7796
 * Raw property SHA-256: 82640337d03ca540bd1224189814bfcc4885368fb674289b86c699693be146a5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r) {
  var t = Math.ceil,
    e = Math.floor;
  r.exports =
    Math.trunc ||
    function (r) {
      var n = +r;
      return (n > 0 ? e : t)(n);
    };
}
