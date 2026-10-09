/* Recovered shipped factory. Module 819010.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 174232..174497
 * Raw property SHA-256: ac3162f22d20495157eb8f59e431fd1efb3b05444c8da5cf86b188cd7c7b45de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(145126),
    o = n(629638),
    a = n(472822);
  e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof r) {
      var i = n.__data__;
      if (!o || i.length < 199) return (i.push([e, t]), (this.size = ++n.size), this);
      n = this.__data__ = new a(i);
    }
    return (n.set(e, t), (this.size = n.size), this);
  };
}
