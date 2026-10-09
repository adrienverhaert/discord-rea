/* Recovered shipped factory. Module 965957.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7595434..7595706
 * Raw property SHA-256: 5ecad78a40becbfee86f30d52d956ec073400c4a634b56cc8c9b12ab34f5a577
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => l });
  var i = n(73153),
    r = n(174459),
    a = n(312671),
    s = n(652215);
  function l(e, t) {
    (r.default.track(s.HAw.SOUNDPACK_UPDATED, {
      soundpack: e,
      previous_soundpack: a.A.getSoundpack(),
    }),
      i.h.dispatch({ type: "SET_SOUNDPACK", soundpack: e, forExperimentId: t }));
  }
}
