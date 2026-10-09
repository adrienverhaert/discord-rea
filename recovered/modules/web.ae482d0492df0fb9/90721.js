/* Recovered shipped factory. Module 90721.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8413330..8414918
 * Raw property SHA-256: 0670d108d3e882f90e0d31926e9c027dcc252362ef1aea49250dab9f74a9e246
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128);
  let r = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
  function a(e) {
    let { videoRef: t, canvasRef: n, enabled: a, canvasWidth: s = 10, canvasHeight: l = 6 } = e;
    i.useEffect(() => {
      if (!a) return;
      let e = t.current,
        i = n.current;
      if (null == e || null == i) return;
      ((i.width = s), (i.height = l));
      let o = i.getContext("2d");
      if (null == o) return;
      let d = !1;
      function c() {
        d || e.readyState < 2 || o.drawImage(e, 0, 0, s, l);
      }
      if (r) {
        let t;
        function u() {
          d || (c(), (t = e.requestVideoFrameCallback(u)));
        }
        function _() {
          t = e.requestVideoFrameCallback(u);
        }
        function E() {
          e.cancelVideoFrameCallback(t);
        }
        return (
          e.addEventListener("play", _),
          e.addEventListener("pause", E),
          e.addEventListener("ended", E),
          e.addEventListener("seeked", c),
          e.addEventListener("loadeddata", c),
          e.paused ? e.readyState >= 2 && c() : (t = e.requestVideoFrameCallback(u)),
          () => {
            ((d = !0),
              e.cancelVideoFrameCallback(t),
              e.removeEventListener("play", _),
              e.removeEventListener("pause", E),
              e.removeEventListener("ended", E),
              e.removeEventListener("seeked", c),
              e.removeEventListener("loadeddata", c));
          }
        );
      }
      {
        let t;
        function A() {
          d || (c(), (t = requestAnimationFrame(A)));
        }
        function h() {
          t = requestAnimationFrame(A);
        }
        function f() {
          cancelAnimationFrame(t);
        }
        return (
          e.addEventListener("play", h),
          e.addEventListener("pause", f),
          e.addEventListener("ended", f),
          e.addEventListener("seeked", c),
          e.addEventListener("loadeddata", c),
          e.paused ? e.readyState >= 2 && c() : (t = requestAnimationFrame(A)),
          () => {
            ((d = !0),
              cancelAnimationFrame(t),
              e.removeEventListener("play", h),
              e.removeEventListener("pause", f),
              e.removeEventListener("ended", f),
              e.removeEventListener("seeked", c),
              e.removeEventListener("loadeddata", c));
          }
        );
      }
    }, [t, n, a, s, l]);
  }
}
