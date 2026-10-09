/* Recovered shipped factory. Module 415441.
 * Source: recovered/web/assets/bc00b2082fe65fed.js
 * UTF-16 property offsets: 2871..3969
 * Raw property SHA-256: 80baf50188074bcd4cce62fec55cc7e603101b875612594c33e3653c914eace7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { N: () => d });
  var l = r(477900),
    n = r(582128),
    s = r(17928),
    u = r(775602),
    a = r(607470),
    i = r(291749),
    o = r(660183),
    c = r(946747);
  function d(e) {
    let {
        showVideo: t,
        showImage: r = !0,
        imageAsset: d,
        videoAsset: m,
        imageSize: v,
        onLoadComplete: f,
        assetRef: g,
        imageRef: E,
      } = e,
      L = (0, s.bG)([u.Ay], () => u.Ay.useReducedMotion),
      h = null == d || d.asset.isAnimated ? null : d.asset.url,
      A = null != m && m.asset.isAnimated ? m.asset.url : null,
      p = v?.width,
      M = v?.height,
      q = n.useMemo(() => {
        let e = null != p && null != M ? (0, i.Yt)(p, M) : null;
        return null != h
          ? (0, i.UX)(h, { format: "webp", width: e?.width, height: e?.height })
          : null != A
            ? (0, i.WV)(A, e ?? void 0)
            : null;
      }, [h, A, p, M]);
    if (null == q) return null;
    let w = !L && null != m && null != A && t;
    return (0, l.jsxs)(l.Fragment, {
      children: [
        (r || !w) &&
          (0, l.jsx)("img", {
            alt: d?.alt ?? o.intl.string(o.t.P84bAD),
            className: d?.className ?? c.S,
            src: q,
            onLoad: f,
            ref: (e) => {
              (null != E && (E.current = e), w || null == g || (g.current = e));
            },
          }),
        w &&
          (0, l.jsx)(a.A, {
            autoPlay: !0,
            loop: !0,
            muted: !0,
            preload: "auto",
            poster: q,
            playsInline: !0,
            className: m.className,
            controls: !1,
            onProgress: f,
            ref: g,
            "aria-label": m.alt,
            children: (0, l.jsx)("source", { src: m.asset.url, type: m.asset.mimetype ?? void 0 }),
          }),
      ],
    });
  }
}
