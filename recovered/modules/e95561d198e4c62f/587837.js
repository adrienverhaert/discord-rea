/* Recovered shipped factory. Module 587837.
 * Source: recovered/web/assets/e95561d198e4c62f.js
 * UTF-16 property offsets: 95..562
 * Raw property SHA-256: 306adf053219603774d1305cb2cc65d2c49664c69bbfe48619cb04eec8f14278
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, s) {
  s.d(n, { A: () => a });
  var i = s(477900),
    t = s(582128),
    o = s(761929),
    u = s(50031);
  function a(e) {
    let { resizableNode: n, onResize: s, onResizeEnd: a, minHeight: l, maxHeight: r } = e,
      [c, d] = t.useState(null);
    t.useEffect(() => {
      d(n.current?.offsetHeight ?? null);
    }, [n]);
    let m = (0, o.A)({
      initialElementDimension: c,
      minDimension: l,
      maxDimension: r,
      resizableDomNodeRef: n,
      onElementResize: s,
      onElementResizeEnd: a,
      orientation: o.R.VERTICAL_BOTTOM,
    });
    return (0, i.jsx)("div", { onMouseDown: m, className: u.D });
  }
}
