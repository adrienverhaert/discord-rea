/* Recovered shipped factory. Module 496538.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 2820..3207
 * Raw property SHA-256: d70fb2547f98ed0c782c912a24518c169adeaceea0b71753c8210db2ddd232d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(257943),
    o = e(703441),
    a = TypeError,
    i = Object.getOwnPropertyDescriptor;
  r.exports =
    n &&
    !(function () {
      if (void 0 !== this) return !0;
      try {
        Object.defineProperty([], "length", { writable: !1 }).length = 1;
      } catch (r) {
        return r instanceof TypeError;
      }
    })()
      ? function (r, t) {
          if (o(r) && !i(r, "length").writable) throw new a("Cannot set read only .length");
          return (r.length = t);
        }
      : function (r, t) {
          return (r.length = t);
        };
}
