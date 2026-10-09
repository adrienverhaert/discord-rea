/* Recovered shipped factory. Module 273590.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 175123..175269
 * Raw property SHA-256: fe8149c3ea8c249b56fd60400839a8983802e473ad2e3c9543f53107dd055346
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = Function.prototype.toString;
  e.exports = function (e) {
    if (null != e) {
      try {
        return t.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  };
}
