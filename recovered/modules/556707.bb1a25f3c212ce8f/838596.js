/* Recovered shipped factory. Module 838596.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 323905..324298
 * Raw property SHA-256: 9619c10872f940837b3c2a76298be1712d0991737b13e3fb352b19ea075186bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { i: () => o });
  var r = n(326447),
    i = n(272469);
  function o(e) {
    if ("boolean" == typeof e) return Number(e);
    let t = "string" == typeof e ? parseFloat(e) : e;
    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
      r.T &&
        i.vF.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
        );
      return;
    }
    return t;
  }
}
