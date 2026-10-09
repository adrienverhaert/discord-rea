/* Recovered shipped factory. Module 857253.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4660204..4660469
 * Raw property SHA-256: ea2e890d3acf3437ea17ccf50d0aded57ccf5c55ca53627b5980fec5ce1ca0e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(280450),
    a = n(977997),
    s = n(643501);
  function l() {
    return (0, i.bG)(
      [r.default, a.A, s.default],
      () => {
        let e = r.default.getId(),
          t = s.default.getRemoteSessionId();
        return a.A.getVoiceStateForSession(e, t) ?? void 0;
      },
      [],
    );
  }
}
