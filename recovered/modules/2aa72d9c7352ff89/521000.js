/* Recovered shipped factory. Module 521000.
 * Source: recovered/web/assets/2aa72d9c7352ff89.js
 * UTF-16 property offsets: 95..811
 * Raw property SHA-256: 07f2ea7a6e42d22f138018a040e3808ca6aa5b4d4b172323ff17d19398dc6ea4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { $c: () => s, VA: () => a, vf: () => u });
  var c = n(477900),
    o = n(582128),
    r = n(758836);
  function s(t) {
    return (0, r.EZ)(t);
  }
  let u = o.createContext(null);
  function l(t) {
    let { clientX: e, clientY: n, currentTarget: c } = t;
    c.style.pointerEvents = "none";
    let o = document.elementFromPoint(e, n);
    return (
      (c.style.pointerEvents = "auto"),
      { elementBelow: o, button: o?.closest("button") ?? null }
    );
  }
  function a(t) {
    let { isCustomCursorEnabled: e, className: n, riveEventTargetRef: o } = t,
      r = (t) => {
        let { button: n } = l(t),
          c = t.currentTarget;
        e
          ? (c.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)")
          : (c.style.cursor = null != n ? "pointer" : "default");
      };
    return (0, c.jsx)("div", {
      ref: o,
      className: n,
      onMouseMove: r,
      onMouseDown: (t) => {
        let { button: e } = l(t);
        null != e && e.click();
      },
    });
  }
}
