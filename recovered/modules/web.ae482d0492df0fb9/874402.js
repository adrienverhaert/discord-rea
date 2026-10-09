/* Recovered shipped factory. Module 874402.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8139108..8140323
 * Raw property SHA-256: b9fa8a8f7f6b098cff373f64e2eec3951382551a49a40c38e8198f6f6930e3d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => f, m: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(17928),
    d = n(866323),
    c = n(765178),
    u = n(834730),
    _ = n(821609),
    E = n(775602),
    A = n(485038);
  let h = "data-prevents-popout-dismiss";
  function f(e) {
    let {
        preventsPopoutDismiss: t,
        isVisible: n,
        labelId: a,
        noticeText: f,
        primaryAction: I,
        secondaryAction: p,
        isEmphasized: T = !1,
        a11yAnnounceOnShow: m,
        a11yAnnounceOnHide: g,
      } = e,
      S = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
      N = r.useRef(null);
    return (
      r.useEffect(
        () => () => {
          null != N.current && clearTimeout(N.current);
        },
        [],
      ),
      (0, d.p)(n, {
        from: { opacity: 0, y: 80 * !S },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: 80 * !S },
        onRest: (e, t) => {
          if (!e.finished) return;
          let n = t.item ? m : g;
          (null != N.current && clearTimeout(N.current),
            null != n
              ? (N.current = setTimeout(() => {
                  ((N.current = null), c.O.announce(n));
                }, 300))
              : (N.current = null));
        },
      })((e, n) =>
        n
          ? (0, i.jsx)(l.animated.div, {
              style: e,
              children: (0, i.jsxs)("footer", {
                ...(!0 === t ? { [h]: "" } : null),
                className: s()(A.Qs, { [A.hO]: T }),
                "aria-labelledby": a,
                children: [
                  (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    id: a,
                    className: A.ut,
                    children: f,
                  }),
                  (0, i.jsxs)("div", {
                    className: A.o1,
                    children: [
                      (0, i.jsx)(_.$, { variant: "secondary", size: "sm", ...p }),
                      (0, i.jsx)(_.$, { variant: "primary", size: "sm", ...I }),
                    ],
                  }),
                ],
              }),
            })
          : null,
      )
    );
  }
}
