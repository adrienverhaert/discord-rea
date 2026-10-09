/* Recovered shipped factory. Module 331446.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3626796..3627728
 * Raw property SHA-256: 908be08ec99697629ea54ef9a2735306334332507049df6d6952d180f3d47b89
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(922016),
    s = n(866665),
    l = n(939249),
    o = n(834730),
    d = n(7834);
  let c = r.lazy(() =>
    Promise.all([
      n.e("126301"),
      n.e("201074"),
      n.e("353604"),
      n.e("124006"),
      n.e("177104"),
      n.e("446054"),
    ])
      .then(n.bind(n, 680901))
      .then((e) => ({ default: e.ClipParticipantsList })),
  );
  function u(e) {
    let {
        participants: t,
        maxVisibleParticipants: n,
        overflowLabel: u,
        guildId: _,
        layerContext: E,
      } = e,
      A = r.useRef(null),
      h = t.length - n,
      f = (0, r.useCallback)(
        () =>
          (0, i.jsx)(r.Suspense, {
            fallback: null,
            children: (0, i.jsx)(c, { users: t, guildId: _ }),
          }),
        [t, _],
      );
    return (0, i.jsx)(a.Y, {
      renderPopout: f,
      layerContext: E,
      targetElementRef: A,
      position: "right",
      children: (e) =>
        (0, i.jsx)(s.m, {
          text: u,
          ariaHidden: !0,
          children: (0, i.jsx)(l.D, {
            ...e,
            innerRef: A,
            className: d.x,
            "aria-label": u,
            onClick: (t) => {
              (t.stopPropagation(), e.onClick?.(t));
            },
            children: (0, i.jsxs)(o.E, {
              className: d.s,
              variant: "text-xs/medium",
              color: "interactive-text-default",
              children: ["+", h],
            }),
          }),
        }),
    });
  }
}
