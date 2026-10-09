/* Recovered shipped factory. Module 649223.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3742265..3742671
 * Raw property SHA-256: e9ee0e730754405e719d0bb1bc298bf622ce26bcc5804152b1e93e2cb6c90e04
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => r });
  var i = n(367974);
  async function r(e) {
    let t,
      n = document.createElement("video");
    ((n.volume = 0), (n.crossOrigin = "anonymous"), (n.src = e));
    try {
      return (
        await Promise.race([
          n.play(),
          new Promise((e, n) => {
            t = setTimeout(() => n(Error("getVideoDimensions: playback start timed out")), 5e3);
          }),
        ]),
        n.pause(),
        { width: n.videoWidth, height: n.videoHeight }
      );
    } finally {
      (null != t && clearTimeout(t), (0, i.A)(n));
    }
  }
}
