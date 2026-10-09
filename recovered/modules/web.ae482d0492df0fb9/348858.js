/* Recovered shipped factory. Module 348858.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 838153..839198
 * Raw property SHA-256: 9a1772d0f765fa2a070a737eda66a184901600e85601bcde55132a7229ef9752
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = {
    deafen: { name: "deafen", start: 0, duration: 70 },
    undeafen: { name: "undeafen", start: 110, duration: 70 },
    hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
    hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
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
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(n);
      }, [e]),
      c = r.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.stopIfPlaying(n);
      }, [e]),
      u = r.useCallback(
        (e) =>
          (0, i.jsx)(a.P, {
            ...e,
            src: () => n.e("193768").then(n.t.bind(n, 894619, 19)),
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
