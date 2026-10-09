/* Recovered shipped factory. Module 469052.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 309073..309390
 * Raw property SHA-256: 2a813df8c00ab214d6e9a90991e416b0c5043bfb83179a475fb2cc7eef2a4f34
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { L: () => a });
  var r = n(978862),
    i = n(873326);
  let o = null;
  function a(e) {
    let t = "error";
    ((0, i.s5)(t, e), (0, i.AS)(t, s));
  }
  function s() {
    ((o = r.O.onerror),
      (r.O.onerror = function (e, t, n, r, a) {
        return (
          (0, i.aj)("error", { column: r, error: a, line: n, msg: e, url: t }),
          !!o && o.apply(this, arguments)
        );
      }),
      (r.O.onerror.__SENTRY_INSTRUMENTED__ = !0));
  }
}
