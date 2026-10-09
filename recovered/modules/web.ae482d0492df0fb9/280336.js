/* Recovered shipped factory. Module 280336.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10480963..10481404
 * Raw property SHA-256: b86275dceca7411d15a6c449035ae9d17ede6d35028b417cf14c10f63b548de6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { j: () => l });
  var i = n(582128),
    r = n(866323),
    a = n(844222);
  let s = { tension: 2400, friction: 52 };
  function l(e) {
    let { shouldShow: t, onExitComplete: n, onAnimationRest: l } = e,
      { reducedMotion: o } = i.useContext(a.C),
      d = { scale: 0.95, opacity: 0 },
      c = { scale: 1, opacity: 0 };
    return (0, r.p)(
      t,
      {
        keys: (e) => (e ? "tooltip" : "empty"),
        config: s,
        from: o.enabled ? c : d,
        enter: { scale: 1, opacity: 1 },
        leave: o.enabled ? c : d,
        onRest: (e, i) => {
          (t || n?.(), l?.(e, i));
        },
      },
      "animate-always",
    );
  }
}
