/* Recovered shipped factory. Module 585946.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 160873..161078
 * Raw property SHA-256: 4d35da324e2cba2801c174f8119f554925022316479921452eed104ddc23f22e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(364255),
    o = n(261277),
    a = n(285049),
    i = n(762479);
  e.exports = function (e) {
    return function (t) {
      var n = o((t = i(t))) ? a(t) : void 0,
        u = n ? n[0] : t.charAt(0),
        l = n ? r(n, 1).join("") : t.slice(1);
      return u[e]() + l;
    };
  };
}
