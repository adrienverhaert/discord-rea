/* Recovered shipped factory. Module 377802.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 836747..837424
 * Raw property SHA-256: a13dafde78cf49ed2d7b2a22597a6af1af739e93d132fb40f99a47811e68325b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = { all: { name: "all", start: 0, duration: 90 } };
  function l() {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("all");
      }, []),
      l = r.useCallback(() => {
        null != e.current && e.current.play("all");
      }, []),
      o = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all");
      }, []),
      d = r.useCallback(
        (t) =>
          (0, i.jsx)(a.P, {
            ...t,
            src: () => n.e("370552").then(n.t.bind(n, 772203, 19)),
            ref: e,
            markers: s,
          }),
        [],
      );
    return {
      events: { onMouseEnter: l, onMouseLeave: o },
      play: t,
      getDuration: r.useCallback(() => e.current?.getDuration(), []),
      getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
      Component: d,
    };
  }
}
