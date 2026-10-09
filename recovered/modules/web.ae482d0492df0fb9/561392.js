/* Recovered shipped factory. Module 561392.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10488637..10490027
 * Raw property SHA-256: 5672eb3ad44779d89cf0b4220fd36e46170edefdc272801386bc12229aa3c7c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => o });
  var i = n(582128),
    r = n(499957),
    a = n(458265),
    s = n(38339),
    l = n(737992);
  function o(e) {
    let {
        defaultOpen: t,
        offset: n = 4,
        placement: o,
        matchReferenceWidth: d = !0,
        setHeight: c,
        setWidth: u,
        transform: _,
      } = e,
      [E, A] = i.useState(t ?? !1),
      h = i.useContext(l.W),
      f = i.useRef(c);
    i.useEffect(() => {
      f.current = c;
    }, [c]);
    let I = i.useRef(u);
    i.useEffect(() => {
      I.current = u;
    }, [u]);
    let p = i.useRef(d);
    function T() {
      return { boundary: h?.ref.current ?? "clippingAncestors", padding: h?.padding };
    }
    i.useEffect(() => {
      p.current = d;
    }, [d]);
    let {
        refs: m,
        floatingStyles: g,
        context: S,
        middlewareData: N,
      } = (0, r.we)({
        open: E,
        onOpenChange: A,
        transform: _,
        middleware: [
          null == o ? (0, a.RK)(T) : void 0,
          (0, a.Ej)(() => ({
            ...T(),
            apply(e) {
              let { rects: t, elements: n } = e;
              (p.current &&
                Object.assign(n.floating.style, {
                  minWidth: `${t.reference.width}px`,
                  width: `${t.reference.width}px`,
                }),
                null != I.current &&
                  Object.assign(n.floating.style, { width: `${I.current(t.reference)}px` }),
                null != f.current &&
                  Object.assign(n.floating.style, { maxHeight: `${f.current(t.reference)}px` }));
            },
          })),
          (0, a.UU)(T),
          (0, a.cY)(n),
          (0, a.BN)(T),
          (0, a.jD)({ strategy: "referenceHidden" }),
        ],
        whileElementsMounted: s.ll,
        placement: o,
        strategy: "fixed",
      }),
      C = { ...g, visibility: N.hide?.referenceHidden ? "hidden" : "visible" },
      O = (0, r.s9)(S, { bubbles: { escapeKey: !1 } }),
      { getReferenceProps: R, getFloatingProps: L } = (0, r.bv)([O]);
    return {
      isOpen: E,
      setIsOpen: A,
      refs: m,
      floatingStyles: C,
      context: S,
      getReferenceProps: R,
      getFloatingProps: L,
    };
  }
}
