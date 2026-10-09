/* Recovered shipped factory. Module 930317.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3698860..3701570
 * Raw property SHA-256: 36bab03179cff758a403cc011a8042330455ec7f2c5e746244377aeb6767c63a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(66455),
    s = n(607470),
    l = n(609174),
    o = n(367974),
    d = n(77729),
    c = n(292490);
  function u(e) {
    let { isStatic: t = !1, children: n, ref: r, ...a } = e;
    return t
      ? (0, i.jsx)(_, { ref: r, children: n })
      : (0, i.jsx)(E, { ref: r, ...a, children: n });
  }
  function _(e) {
    let { children: t, ref: n } = e,
      a = (0, l.Y_)();
    return (
      r.useImperativeHandle(n, () => ({ releaseSource() {}, seek() {} }), []),
      (0, i.jsxs)("div", {
        className: c.Q,
        children: [
          (0, i.jsx)("img", { alt: "", src: a.thumbnail, className: c.f, loading: "lazy" }),
          t,
        ],
      })
    );
  }
  function E(e) {
    let {
        isPlaying: t = !1,
        scrubOnHover: n = !1,
        preload: u = "metadata",
        onProgressChange: _,
        children: E,
        ref: A,
      } = e,
      h = (0, l.Y_)(),
      f = r.useRef(null),
      I = (0, a.A)(h.editMetadata?.start ?? 0),
      p = (0, r.useMemo)(
        () =>
          null == h || null == d.A.clips.getClipProtocolURLFromPath
            ? null
            : d.A.clips.getClipProtocolURLFromPath(h.filepath),
        [h],
      ),
      T = 0 === h.length,
      m = r.useCallback(
        (e) => {
          let t = f.current;
          if (null == t) return;
          let n = h.editMetadata?.start ?? 0,
            i = h.editMetadata?.end ?? t.duration;
          t.currentTime = Math.max(0, I.current + ((i - n) * e) / 100);
        },
        [f, I, h],
      );
    r.useImperativeHandle(
      A,
      () => ({
        releaseSource() {
          (0, o.A)(f.current);
        },
        seek(e) {
          m(e);
        },
      }),
      [m],
    );
    let g = r.useCallback(
        (e) => {
          if (!n || null == f.current) return;
          let t = f.current.getBoundingClientRect();
          m(((e.clientX - t.left) / t.width) * 100);
        },
        [f, n, m],
      ),
      S = r.useRef(null),
      N = r.useRef(t);
    return (
      r.useEffect(() => {
        if (((N.current = t), T)) return;
        let e = f.current;
        if (null != e)
          if (t) {
            if (!e.paused) return;
            e.currentTime = I.current;
            let t = e.play();
            ((S.current = t), t.catch(() => {}));
          } else {
            let t = S.current;
            ((S.current = null),
              null != t ? t.then(() => N.current || e.pause()).catch(() => {}) : e.pause());
          }
      }, [t, f, T, I]),
      r.useEffect(() => {
        if (T || null == p) return;
        let e = f.current;
        if (null != e)
          return () => {
            (0, o.A)(e);
          };
      }, [p, f, T]),
      r.useEffect(() => {
        let e = f?.current;
        if (null == e || T || null == _) return;
        let t = null;
        function n() {
          if (null == e || null == _) return;
          if (e.paused || e.ended) {
            ((t = null), _(0));
            return;
          }
          let i = h.editMetadata?.start ?? 0,
            r = h.editMetadata?.end ?? e.duration,
            a = ((e.currentTime - i) / (r - i)) * 100;
          (_(isNaN(a) ? 0 : Math.max(0, Math.min(100, a))), (t = requestAnimationFrame(n)));
        }
        function i() {
          null == t && (t = requestAnimationFrame(n));
        }
        function r() {
          null != _ && null != t && (cancelAnimationFrame(t), (t = null), _(0));
        }
        return (
          e.addEventListener("play", i),
          e.addEventListener("pause", r),
          e.addEventListener("ended", r),
          e.paused || i(),
          () => {
            (null != t && (cancelAnimationFrame(t), _(0)),
              e.removeEventListener("play", i),
              e.removeEventListener("pause", r),
              e.removeEventListener("ended", r));
          }
        );
      }, [f, T, h.editMetadata, _]),
      (0, i.jsxs)("div", {
        className: c.Q,
        onMouseMove: g,
        children: [
          T
            ? (0, i.jsx)("img", { alt: "", src: h.thumbnail, className: c.f, loading: "lazy" })
            : null != p
              ? (0, i.jsx)(s.A, {
                  preload: u,
                  poster: h.thumbnail,
                  muted: !0,
                  src: p,
                  loop: !0,
                  className: c.f,
                  ref: f,
                })
              : null,
          E,
        ],
      })
    );
  }
  ((u.displayName = "ClipThumbnail"),
    (_.displayName = "ClipStaticThumbnail"),
    (E.displayName = "ClipDynamicThumbnail"));
}
