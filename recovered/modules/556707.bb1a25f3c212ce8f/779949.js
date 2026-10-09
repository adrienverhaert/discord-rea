/* Recovered shipped factory. Module 779949.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 295470..295819
 * Raw property SHA-256: 9398ac7596c01a7b374afda053b5e456c60e568445e4df4d4a14bdb13d7734b4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { B: () => s, J: () => a });
  var r = n(630449),
    i = n(326447),
    o = n(272469);
  function a(e, t) {
    (!0 === t.debug &&
      (i.T
        ? o.vF.enable()
        : (0, o.pq)(() => {
            console.warn(
              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
            );
          })),
      (0, r.o5)().update(t.initialScope));
    let n = new e(t);
    return (s(n), n.init(), n);
  }
  function s(e) {
    (0, r.o5)().setClient(e);
  }
}
