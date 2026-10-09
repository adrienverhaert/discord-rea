/* Recovered shipped factory. Module 451395.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8004035..8005959
 * Raw property SHA-256: 0bd20d9f18e0f94b6909a1a7a2613ee06e6d12a8502399c91175dcf3670cf25e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { gY: () => h, jV: () => p, mG: () => I, w9: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(657335),
    o = n(708793),
    d = n(352944),
    c = n(425763),
    u = n(683063),
    _ = n(939249),
    E = n(772838),
    A = n(660183);
  function h(e) {
    let {
        dragRef: t,
        dropRef: n,
        index: i,
        listType: a,
        itemId: s,
        itemType: c,
        itemPreviewProps: u,
        onReorder: _,
        onHover: E,
        onDrop: A,
        onEnd: h,
        disableDefaultPreview: f = !0,
        canDrag: I = !0,
      } = e,
      p = `${c}_${a}`,
      T = r.useCallback(
        (e, t) => {
          _?.(e, t);
        },
        [_],
      ),
      [{ isDragging: m }, g, S] = (0, l.i)({
        type: p,
        item: { id: s, index: i, itemType: c, itemPreviewProps: u },
        canDrag: I,
        collect: (e) => ({ isDragging: e.isDragging() }),
        end: h,
      });
    r.useEffect(() => {
      f && S((0, d.n)(), { captureDraggingState: !0 });
    }, [S, f]);
    let [{ dragSourcePosition: N }, C] = (0, o.H)({
      accept: p,
      hover: E,
      drop: (e, t) => {
        if (A?.(e, t) === !0) return;
        let n = e.index;
        n !== i && (T(n, i), (e.index = i));
      },
      collect: (e) => {
        let t = e.getItem(),
          n = null;
        return (
          null != t && e.isOver({ shallow: !0 }) && e.canDrop() && (n = t.index),
          { dragSourcePosition: n }
        );
      },
    });
    return (
      r.useLayoutEffect(
        () => (
          g(t),
          C(n),
          () => {
            (C(null), g(null));
          }
        ),
        [g, t, C, n],
      ),
      { isDragging: m, dragSourcePosition: N }
    );
  }
  function f(e) {
    let { listType: t, itemType: n, onFallbackDrop: i } = e,
      [, r] = (0, o.H)({
        accept: `${n}_${t}`,
        canDrop: () => !(0, c.ny)(),
        drop: (e, t) => {
          t.didDrop() || i?.(e, t);
        },
      });
    return r;
  }
  let I = r.memo(function (e) {
    let {
        index: t,
        className: n,
        draggingClassName: a,
        dropBeforeClassName: l,
        dropAfterClassName: o,
        "aria-label": d,
        children: c,
        ...u
      } = e,
      _ = r.useRef(null),
      { isDragging: E, dragSourcePosition: A } = h({ dragRef: _, dropRef: _, index: t, ...u }),
      f = null != A,
      I = f && t < A,
      p = f && t > A;
    return (0, i.jsx)("div", {
      ref: _,
      className: s()(n, E && a, I && l, p && o),
      "aria-label": d,
      children: c,
    });
  });
  function p(e) {
    let { buttonRef: t, "aria-label": n, iconSize: r = "sm", ...a } = e;
    return (0, i.jsx)(u.u, {
      body: A.intl.format(A.t["zvln/l"], {
        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
      }),
      ariaHidden: !0,
      children: (0, i.jsx)(_.D, {
        innerRef: t,
        "aria-label": n ?? A.intl.string(A.t.n9T3Hi),
        "aria-keyshortcuts": "Control+D, Meta+D",
        ...a,
        children: (0, i.jsx)(E.W, { size: r, color: "currentColor" }),
      }),
    });
  }
}
