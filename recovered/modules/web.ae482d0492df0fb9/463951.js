/* Recovered shipped factory. Module 463951.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8310353..8310598
 * Raw property SHA-256: 62f96295dd925e675110ba0908e66122315796a5a3052daeefe2236c76becc6f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(192820),
    r = n(731854);
  function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay;
    return (
      e.supports(r.O5.VIDEO_BACKGROUND_FILTER) && Object.values(e.getVideoDevices()).length > 0
    );
  }
}
