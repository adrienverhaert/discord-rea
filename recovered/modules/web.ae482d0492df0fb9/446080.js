/* Recovered shipped factory. Module 446080.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 842605..843635
 * Raw property SHA-256: 6638eb1fcaafaa8b52f7ecfc62e069893929f1d9bd8d1def9741dc2c72bbd096
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(744682);
  let s = {
    disable: { name: "disable", start: 0, duration: 70 },
    enable: { name: "enable", start: 100, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 180, duration: 70 },
    hover_disabled: { name: "hover_disabled", start: 280, duration: 70 },
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
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n);
      }, [e]),
      c = r.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(n);
      }, [e]),
      u = r.useCallback(
        (e) =>
          (0, i.jsx)(a.P, {
            ...e,
            src: () => n.e("160810").then(n.t.bind(n, 55089, 19)),
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
