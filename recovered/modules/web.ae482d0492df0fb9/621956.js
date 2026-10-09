/* Recovered shipped factory. Module 621956.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 841917..842604
 * Raw property SHA-256: e4459314cef83f5aa8c7fa862d6c4306fdca832662e90676e25b821bf75bd05a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = { all: { name: "all", start: 0, duration: 66 } };
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
            src: () => n.e("905506").then(n.t.bind(n, 206905, 19)),
            ref: e,
            markers: s,
          }),
        [],
      );
    return {
      events: { onClick: t, onMouseEnter: l, onMouseLeave: o },
      play: t,
      getDuration: r.useCallback(() => e.current?.getDuration(), []),
      getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
      Component: d,
    };
  }
}
