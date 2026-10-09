/* Recovered shipped factory. Module 314531.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8162798..8164082
 * Raw property SHA-256: 98a447b6a8a03e98b0dfa59f89ae9c51ee7c658327506b26fc66bc352a94a598
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(192308),
    o = n(607470),
    d = n(590251),
    c = n(219222),
    u = n(660183),
    _ = n(869006);
  function E(e) {
    let { widgetClipId: t, size: n } = e,
      r = Math.round(((0, c.Ib)(t) ?? 0) * 100);
    return (0, i.jsx)("div", {
      className: s()(_.ring, _[n]),
      role: "progressbar",
      "aria-label": u.intl.string(u.t.RFRuwZ),
      "aria-valuenow": r,
      children: (0, i.jsx)(d.a, {
        percent: r,
        strokeSize: d.a.StrokeSizes.MEDIUM,
        colorOverride: "var(--icon-overlay-light)",
      }),
    });
  }
  var A = n(579460);
  function h(e) {
    let {
        item: t,
        ringSize: n,
        isPlaying: a = !1,
        isMuted: d = !0,
        fit: c = "cover",
        onEnded: u,
        className: _,
        modalKey: h,
      } = e,
      f = r.useRef(null),
      I = "uploading" === t.status,
      p = s()(A.Gt, { [A.ob]: I, [A.k6]: "contain" === c });
    r.useEffect(() => {
      let e = f.current;
      null != e && (e.muted = d);
    }, [d]);
    let T = (0, l.useIsModalAtTop)(h ?? ""),
      m = a && (null == h || T);
    return (
      r.useEffect(() => {
        let e = f.current;
        null != e && (m && e.paused ? e.play().catch(() => {}) : m || e.paused || e.pause());
      }, [m, t.key]),
      (0, i.jsxs)("div", {
        className: s()(A.$_, _),
        children: [
          "saved" === t.status
            ? null != t.videoURL
              ? (0, i.jsx)(o.A, {
                  ref: f,
                  src: t.videoURL,
                  poster: t.thumbnailURL,
                  crossOrigin: "anonymous",
                  preload: "none",
                  muted: !0,
                  loop: null == u,
                  onEnded: u,
                  className: p,
                })
              : null
            : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: p, loading: "lazy" }),
          I && (0, i.jsx)(E, { widgetClipId: t.key, size: n }),
        ],
      })
    );
  }
}
