/* Recovered shipped factory. Module 523875.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 839199..840208
 * Raw property SHA-256: dc03dce86ef32665f381896fce3a2ce97c60a1ebb142d2a51570381c9ca49b48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = {
    mute: { name: "mute", start: 0, duration: 70 },
    unmute: { name: "unmute", start: 100, duration: 70 },
    hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
    hover_muted: { name: "hover_muted", start: 240, duration: 40 },
  };
  function l(e) {
    let t = r.useRef(null),
      l = r.useRef(e);
    l.current = e;
    let o = r.useMemo(
        () => () => {
          null != t.current && t.current.play(e);
        },
        [e],
      ),
      d = r.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.play(n);
      }, [e]),
      c = r.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.stopIfPlaying(n);
      }, [e]),
      u = r.useCallback(
        (e) =>
          (0, i.jsx)(a.P, {
            ...e,
            src: () => n.e("218133").then(n.t.bind(n, 705844, 19)),
            ref: t,
            initialAnimation: l.current,
            markers: s,
          }),
        [],
      );
    return {
      events: { onClick: o, onMouseEnter: d, onMouseLeave: c },
      play: o,
      getDuration: r.useCallback(() => t.current?.getDuration(), []),
      getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
      Component: u,
    };
  }
}
