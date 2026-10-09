/* Recovered shipped factory. Module 958713.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4396170..4396411
 * Raw property SHA-256: 8b90b80bf93b2d407e9e32aca61c68b75c25dd921c882c434b68f42e059b8fb0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(280450),
    a = n(487329),
    s = n(161518);
  function l(e) {
    return (0, i.bG)([s.A, r.default], () => {
      if (r.default.getId() === e)
        return s.A.getActiveErrorsOfType(a.iy.CAMERA_SEND_LOW_FPS)[0]?.type;
    });
  }
}
