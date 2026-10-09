/* Recovered shipped factory. Module 349897.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3721741..3723606
 * Raw property SHA-256: 13585f4e295f0c7e004ddbb983b7c0f7fff1c38ddfa4eaabe53bf45a604c9744
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => N });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(505124),
    d = n(661531),
    c = n(866665),
    u = n(43990),
    _ = n(717421),
    E = n(713608),
    A = n(918715),
    h = n(271520),
    f = n(762555),
    I = n(704796),
    p = n(660183),
    T = n(328115);
  function m(e) {
    let {
      leftPx: t,
      rightPx: n,
      setHoveredIndex: r,
      isAnimated: a,
      index: _,
      activated: E,
      expansionSpring: A,
      icon: h,
      tooltip: f,
    } = e;
    return (0, i.jsx)(c.m, {
      delay: 300,
      text: f,
      children: (0, i.jsx)(u.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
          (0, i.jsx)(l.animated.div, {
            className: s()(T.z, e),
            onMouseEnter: () => r(_),
            onMouseLeave: () => r(null),
            style: {
              left: a ? A.to((e) => t - e) : t,
              right: n,
              width: a ? A.to((e) => `${g + 2 * e}px`) : g,
              height: a ? A.to((e) => `${g + 2 * e}px`) : g,
            },
            children: (0, i.jsx)(h, {
              size: "custom",
              width: "100%",
              height: "100%",
              color: E ? d.A.colors.INTERACTIVE_ICON_ACTIVE : d.A.colors.INTERACTIVE_ICON_DEFAULT,
            }),
          }),
      }),
    });
  }
  let g = 12,
    S = { tension: 500, friction: 30, clamp: !0 };
  function N(e) {
    let [t, n] = r.useState(null),
      a = r.useRef(null),
      [{ expansion: s }, l] = (0, _.z)(() => ({
        expansion: 0,
        config: S,
        onRest: () => {
          null == a.current && n(null);
        },
      })),
      o = r.useCallback(
        (e) => {
          ((a.current = e), null != e ? (n(e), l({ expansion: 4 })) : l({ expansion: 0 }));
        },
        [l],
      ),
      d = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
      c = r.useMemo(() => (d ? e.filter((e) => null != e.game) : []), [e, d]),
      u = r.useMemo(
        () => c.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: g, gapPx: 4 })),
        [c],
      ),
      T = r.useCallback(
        (e, n) => {
          let r,
            a,
            l = t === e.index,
            d = c[e.index];
          if (null == d) return null;
          let u = n > e.leftPx;
          switch (d.game.type) {
            case f.Q_.MULTIKILL:
              ((a = p.intl.string(I.default.PMLPER)), (r = E.q));
              break;
            case f.Q_.KILL:
              ((r = E.q), (a = p.intl.string(I.default.fYdqnM)));
              break;
            case f.Q_.DEATH:
              ((r = A.V), (a = p.intl.string(I.default.MhIx41)));
          }
          return null == r || null == a
            ? null
            : (0, i.jsx)(m, {
                ...e,
                activated: u,
                gapPx: 4,
                tooltip: a,
                expansionSpring: s,
                setHoveredIndex: o,
                isAnimated: l,
                icon: r,
              });
        },
        [t, c, o, s],
      );
    return {
      indicators: u,
      animatingIndex: t,
      expansionSpring: s,
      hoverExpansionPx: 4,
      renderIndicator: T,
    };
  }
}
