/* Recovered shipped factory. Module 65162.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 7694..8034
 * Raw property SHA-256: 004b8cb86b474f88681e76dacb4c9e96231dc8bf92f761162c980043270eef09
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(710821),
    o = e(739305),
    a = e(464046),
    i = e(120394),
    p = e(900923),
    f = o.aTypedArray,
    u = o.getTypedArrayConstructor;
  (0, o.exportTypedArrayMethod)(
    "with",
    {
      with: function (r, t) {
        var e = f(this),
          o = i(r),
          y = a(e) ? p(t) : +t;
        return n(e, u(e), o, y);
      },
    }.with,
    !(function () {
      try {
        new Int8Array(1).with(2, {
          valueOf: function () {
            throw 8;
          },
        });
      } catch (r) {
        return 8 === r;
      }
    })(),
  );
}
