/* Recovered shipped factory. Module 961082.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1173893..1175040
 * Raw property SHA-256: 4d01dd0989bdba0b2fd7ef8ec06c81edbc371a4d61ba77bd26de7f2b3d684104
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { $: () => u });
  let n = new Set(["id"]),
    i = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    o = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
    a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
    s = new Set([
      "onClick",
      "onAuxClick",
      "onContextMenu",
      "onDoubleClick",
      "onMouseDown",
      "onMouseEnter",
      "onMouseLeave",
      "onMouseMove",
      "onMouseOut",
      "onMouseOver",
      "onMouseUp",
      "onTouchCancel",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
      "onPointerDown",
      "onPointerMove",
      "onPointerUp",
      "onPointerCancel",
      "onPointerEnter",
      "onPointerLeave",
      "onPointerOver",
      "onPointerOut",
      "onGotPointerCapture",
      "onLostPointerCapture",
      "onScroll",
      "onWheel",
      "onAnimationStart",
      "onAnimationEnd",
      "onAnimationIteration",
      "onTransitionCancel",
      "onTransitionEnd",
      "onTransitionRun",
      "onTransitionStart",
    ]),
    l = /^(data-.*)$/;
  function u(e, t = {}) {
    let { labelable: r, isLink: c, global: f, events: p = f, propNames: d } = t,
      h = {};
    for (let t in e)
      Object.prototype.hasOwnProperty.call(e, t) &&
        (n.has(t) ||
          (r && i.has(t)) ||
          (c && o.has(t)) ||
          (f && a.has(t)) ||
          (p && (s.has(t) || (t.endsWith("Capture") && s.has(t.slice(0, -7))))) ||
          d?.has(t) ||
          l.test(t)) &&
        (h[t] = e[t]);
    return h;
  }
}
