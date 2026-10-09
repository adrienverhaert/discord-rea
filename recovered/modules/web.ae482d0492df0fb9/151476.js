/* Recovered shipped factory. Module 151476.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8310738..8311103
 * Raw property SHA-256: 6bb576174296521278c3c0ca37adbb528508d119c38ce6ba887295dcee1a7664
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(192820),
    l = n(731854);
  function o() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cf)([s.Ay], () => {
      let e = r()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
      return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(l.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
  }
}
