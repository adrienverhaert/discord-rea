/* Recovered shipped factory. Module 23590.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8341793..8342622
 * Raw property SHA-256: beec7e3cf5b3d4324f6f4459c5d3f7dc59970fa1ce74188f8425bfa0eeb23cf0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128);
  let r = new (n(941426).Vy)("useMuxTracking");
  function a(e) {
    let { videoRef: t, hls: a, contentMetadata: s, isHls: l, debug: o } = e,
      d = i.useRef(null),
      [c, u] = i.useState(() => null == s);
    return (
      i.useEffect(() => {
        if (null == t.current || null == s) return void u(!0);
        if (l && null == a) return void u(!1);
        u(!1);
        let e = !1;
        return (
          Promise.all([n.e("392868"), n.e("263408")])
            .then(n.bind(n, 531443))
            .then((n) => {
              let { SimpleMuxWrapper: i } = n;
              e ||
                null == t.current ||
                ((d.current = new i({
                  debug: o ?? !1,
                  videoElement: t.current,
                  hlsInstance: l ? (a ?? void 0) : void 0,
                  feature: s.contentType,
                  contentMetadata: s,
                })),
                d.current.initialize(),
                u(!0));
            })
            .catch((t) => {
              e || (r.warn("Failed to load Mux SDK; continuing without QoE tracking", t), u(!0));
            }),
          () => {
            ((e = !0),
              null != d.current &&
                (d.current.endSession(), d.current.destroy(), (d.current = null)));
          }
        );
      }, [l, a, t, s, o]),
      { isReady: c }
    );
  }
}
