/* Recovered shipped factory. Module 693655.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 1557..1908
 * Raw property SHA-256: 410a02c39f8ee019af355f14129e5beed1f0c98416d1882471426b5aca6bfa0d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(339626),
    o = e(4940),
    i = e(313400),
    u = e(88388);
  r.exports = function (r, t, e, a) {
    a || (a = {});
    var c = a.enumerable,
      f = void 0 !== a.name ? a.name : t;
    if ((n(e) && i(e, f, a), a.global)) c ? (r[t] = e) : u(t, e);
    else {
      try {
        a.unsafe ? r[t] && (c = !0) : delete r[t];
      } catch (r) {}
      c
        ? (r[t] = e)
        : o.f(r, t, {
            value: e,
            enumerable: !1,
            configurable: !a.nonConfigurable,
            writable: !a.nonWritable,
          });
    }
    return r;
  };
}
