/* Recovered shipped factory. Module 3203.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 837425..838152
 * Raw property SHA-256: cca7c2f9f93f0ed4044718d2f212b626286153e66f83067e32eb46e473228341
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = {
    click: { name: "click", start: 0, duration: 66 },
    hover: { name: "hover", start: 90, duration: 40 },
  };
  function l() {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("click");
      }, []),
      l = r.useCallback(() => {
        null != e.current && e.current.play("hover");
      }, []),
      o = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("hover");
      }, []),
      d = r.useCallback(
        (t) =>
          (0, i.jsx)(a.P, {
            ...t,
            src: () => n.e("178205").then(n.t.bind(n, 582636, 19)),
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
