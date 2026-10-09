/* Recovered shipped factory. Module 163126.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2253911..2254199
 * Raw property SHA-256: e553087648d946799ee427bf49db296f303289d166e53bd3ade511d3ffe7a193
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => s, A: () => a });
  var i = n(444927),
    r = n(964486);
  function a() {
    let e = (0, i.A)(() => new AbortController());
    return (
      (0, r.l0)(() => {
        e.abort();
      }),
      e.signal
    );
  }
  function s(e) {
    let t = (0, i.A)(() => new AbortController());
    return (
      (0, r.l0)(() => {
        setTimeout(() => {
          t.abort();
        }, e);
      }),
      t.signal
    );
  }
}
