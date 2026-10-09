/* Recovered shipped factory. Module 335144.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 967812..968719
 * Raw property SHA-256: 16d7a03904dec6848e188f87b263ce8a4b9d0d519d54e088bd3f609ad3d4719b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, g: () => l });
  var i = n(582128);
  let r = (0, n(196765).v)(() => ({ topOffsetsBySurface: new Map() }));
  function a(e, t, n) {
    r.setState((i) => {
      let r = new Map(i.topOffsetsBySurface.get(e));
      null == n ? r.delete(t) : r.set(t, n);
      let a = new Map(i.topOffsetsBySurface);
      return (a.set(e, r), { topOffsetsBySurface: a });
    });
  }
  function s(e) {
    return r((t) => {
      let n = t.topOffsetsBySurface.get(e);
      return null == n || 0 === n.size ? null : Math.max(...n.values());
    });
  }
  function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      r = i.useId();
    i.useLayoutEffect(() => {
      let i = t.current;
      if (!n || null == i) return;
      let s = i.ownerDocument.defaultView ?? window;
      function l() {
        null != i && a(e, r, i.getBoundingClientRect().bottom);
      }
      l();
      let o = new ResizeObserver(l);
      return (
        o.observe(i),
        null != i.parentElement && o.observe(i.parentElement),
        s.addEventListener("resize", l),
        () => {
          (o.disconnect(), s.removeEventListener("resize", l), a(e, r, null));
        }
      );
    }, [n, r, t, e]);
  }
}
