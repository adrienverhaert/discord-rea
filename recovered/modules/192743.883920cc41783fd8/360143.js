/* Recovered shipped factory. Module 360143.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 251179..251524
 * Raw property SHA-256: 96d6fde0d32b0752140487c5e739073dd4a0331fa4bda083a78172e709043f38
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(472822);
  function o(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t))
      throw TypeError("Expected a function");
    var n = function () {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        a = n.cache;
      if (a.has(o)) return a.get(o);
      var i = e.apply(this, r);
      return ((n.cache = a.set(o, i) || a), i);
    };
    return ((n.cache = new (o.Cache || r)()), n);
  }
  ((o.Cache = r), (e.exports = o));
}
