/* Recovered shipped factory. Module 317608.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4626832..4627381
 * Raw property SHA-256: 9f3220ad50da0c722ec4c92def90c2c695d4d86cf34c17d18d6498070cbda4bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(333007),
    s = n(558960);
  function l(e) {
    let { frameId: t, level: n, className: l, overlay: o } = e,
      d = r.useRef(null);
    r.useLayoutEffect(() => {
      let e = d.current;
      if (null != e)
        return (
          s.A.registerFrameTarget(t, e, n, void 0),
          () => {
            s.A.removeFrameTarget(t, e);
          }
        );
    }, [t, n]);
    let c = r.useSyncExternalStore(s.A.subscribe, () => s.A.getFrameEntry(t)?.overlay ?? null);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("div", { ref: d, className: l, style: { pointerEvents: "none" } }),
        null != o && null != c ? (0, a.createPortal)(o, c) : null,
      ],
    });
  }
}
