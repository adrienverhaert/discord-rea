/* Recovered shipped factory. Module 599119.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 1031..1666
 * Raw property SHA-256: 798d905b426aaab2fe38d6027bc08f7aedf16cd6800a1742efc36a67034940d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => a });
  var i = n(582128),
    l = n(657335),
    s = n(708793);
  function a(e) {
    let { type: t, index: n, optionId: a, onDragStart: r, onDragComplete: o, onDragReset: c } = e,
      [d, u] = i.useState(!1),
      [, m] = (0, l.i)({
        type: t,
        item: () => (r(a), { id: a, position: n }),
        canDrag: () => d,
        collect: (e) => ({ isDragging: e.isDragging() }),
        end: (e, t) => {
          let n = t.getDropResult();
          null == n ? c() : o(n.optionId);
        },
      }),
      [{ dragSourcePosition: g }, h] = (0, s.H)({
        accept: t,
        canDrop: () => !0,
        collect: (e) => {
          let t = e.getItem();
          return null != t && e.isOver() && e.canDrop()
            ? { dragSourcePosition: t.position }
            : { dragSourcePosition: null };
        },
        drop: () => ({ optionId: a }),
      });
    return { drag: m, dragSourcePosition: g, drop: h, setIsDraggable: u };
  }
}
