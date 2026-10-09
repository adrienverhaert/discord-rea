/* Recovered shipped factory. Module 291686.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 309391..309728
 * Raw property SHA-256: d1afecee37c7193eb94504a3d980fb58e16983eaf782ad8c95f81c3a39a60f80
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { r: () => a });
  var r = n(978862),
    i = n(873326);
  let o = null;
  function a(e) {
    let t = "unhandledrejection";
    ((0, i.s5)(t, e), (0, i.AS)(t, s));
  }
  function s() {
    ((o = r.O.onunhandledrejection),
      (r.O.onunhandledrejection = function (e) {
        return ((0, i.aj)("unhandledrejection", e), !o || o.apply(this, arguments));
      }),
      (r.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
  }
}
