/* Recovered shipped factory. Module 920228.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8414919..8415626
 * Raw property SHA-256: 5e28c023cb43b5a4cce7ceb1e53f30503b6bcdd419e73cd647014eb742aea703
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(582128);
  function r(e) {
    let { videoRef: t, enabled: n, onPipPause: r, onHiddenPause: a } = e,
      s = i.useRef(r),
      l = i.useRef(a),
      o = i.useRef(!1);
    (i.useEffect(() => {
      ((s.current = r), (l.current = a));
    }, [r, a]),
      i.useEffect(() => {
        if (!n) return;
        let e = t.current;
        if (null != e)
          return (
            e.addEventListener("enterpictureinpicture", i),
            e.addEventListener("play", r),
            e.addEventListener("pause", a),
            () => {
              (e.removeEventListener("enterpictureinpicture", i),
                e.removeEventListener("play", r),
                e.removeEventListener("pause", a));
            }
          );
        function i() {
          o.current || s.current();
        }
        function r() {
          document.pictureInPictureElement === e
            ? s.current()
            : "hidden" === document.visibilityState
              ? l.current()
              : (o.current = !1);
        }
        function a() {
          o.current = !0;
        }
      }, [t, n]));
  }
}
