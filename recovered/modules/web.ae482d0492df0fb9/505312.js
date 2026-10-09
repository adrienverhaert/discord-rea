/* Recovered shipped factory. Module 505312.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 841240..841916
 * Raw property SHA-256: d3013d793e774fae8b453fc0154c65e82d344a00d6f76407122cb38b5c7ee0db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => l });
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
            src: () => n.e("271694").then(n.t.bind(n, 29597, 19)),
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
