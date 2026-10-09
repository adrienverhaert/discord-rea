/* Recovered shipped factory. Module 90860.
 * Source: recovered/web/assets/287788.9d9b891317b8bb7c.js
 * UTF-16 property offsets: 858..1100
 * Raw property SHA-256: 9306a665cbeef2b1ec9573026ecf6ea3de5bf6df91c2d0ec68e7e396d3d55f5a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  var o = r(781094);
  function n(t) {
    ((this.mode = o.MODE_8BIT_BYTE), (this.data = t));
  }
  ((n.prototype = {
    getLength: function (t) {
      return this.data.length;
    },
    write: function (t) {
      for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
    },
  }),
    (t.exports = n));
}
