/* Recovered shipped factory. Module 956050.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3702363..3703081
 * Raw property SHA-256: 457f32153931ccdb8188d20c89217be785e5138ea86e13041b0d1a6461f27a9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { m: () => a });
  var i = n(367974),
    r = n(696016);
  async function a(e, t) {
    let n,
      a = document.createElement("video");
    ((a.volume = 0), (a.crossOrigin = "anonymous"), (a.src = e), (a.currentTime = t));
    try {
      (await Promise.race([
        a.play(),
        new Promise((e, t) => {
          n = setTimeout(() => t(Error("createThumbnailFromVideo: playback start timed out")), 5e3);
        }),
      ]),
        a.pause());
      let e = r.vZ / a.videoWidth,
        t = r.s3 / a.videoHeight,
        i = Math.min(e, t),
        s = a.videoWidth * i,
        l = a.videoHeight * i,
        o = document.createElement("canvas");
      ((o.width = s), (o.height = l));
      let d = o.getContext("2d");
      if (null == d) throw Error("Could not create canvas context");
      return (
        d.drawImage(a, 0, 0, a.videoWidth, a.videoHeight, 0, 0, s, l),
        o.toDataURL("image/jpeg", 0.9)
      );
    } finally {
      (null != n && clearTimeout(n), (0, i.A)(a));
    }
  }
}
