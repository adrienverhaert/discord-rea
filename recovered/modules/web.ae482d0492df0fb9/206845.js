/* Recovered shipped factory. Module 206845.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4564726..4566217
 * Raw property SHA-256: cf0382f9b1cd2c062e4933bd0e837abc11f32b2db9cf99aa8327db61451013b7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(451988),
    l = n(900002),
    o = n(568602),
    d = n(174459),
    c = n(957565),
    u = n(927813),
    _ = n(652215),
    E = n(660183);
  let A = u.A.Millis.SECOND,
    h = 2 * A,
    f = u.A.Millis.HALF_SECOND,
    I = [
      () => E.intl.string(E.t.MSaeTe),
      () => E.intl.string(E.t.UmrCw7),
      () => E.intl.string(E.t.gKE0Jq),
      () => E.intl.string(E.t["4DSKbi"]),
      () => E.intl.string(E.t["+8ENdT"]),
      () => E.intl.string(E.t.GlWHv8),
      () => E.intl.string(E.t.hIzxU9),
      () => E.intl.string(E.t["26uMPL"]),
      () => E.intl.string(E.t.uFs7R2),
      () => E.intl.string(E.t.bLXdcY),
      () => E.intl.string(E.t.gPg9fS),
    ];
  function p(e) {
    let {
        text: t,
        copyValue: n,
        children: u,
        onCopy: E,
        "aria-label": p,
        delay: T = f,
        dataMeticulousIgnore: m,
      } = e,
      [g, S] = r.useState(0),
      [N, C] = r.useState(!1),
      [O, R] = r.useState(!1),
      [L] = r.useState(() => new s.Ep()),
      [y] = r.useState(() => new s.Ep());
    if (
      (r.useEffect(
        () => () => {
          (L.stop(), y.stop());
        },
        [L, y],
      ),
      !c.p5)
    )
      return (0, i.jsx)(i.Fragment, { children: u({}) });
    let D = g >= I.length - 1,
      v = N ? l.oM.GREEN : l.oM.PRIMARY;
    return (0, i.jsx)(l.ST, {
      text: (function () {
        if (!N) return t;
        let e = (0, a.clamp)(g - 1, 0, I.length - 1),
          n = I[e] ?? I[0];
        return (0, i.jsx)(o.b, { isShaking: D, children: n() });
      })(),
      delay: T,
      "aria-label": p,
      dataMeticulousIgnore: m,
      color: v,
      forceOpen: O,
      onAnimationRest: function (e, t) {
        !O && N && t.phase === _.lLE.LEAVE && C(!1);
      },
      children: (e) => {
        let { onClick: t, onMouseEnter: i, ...r } = e;
        return u({
          ...r,
          onClick: () => {
            (t?.(),
              E?.(),
              (0, c.C)(n),
              d.default.track(_.HAw.TEXT_COPIED),
              O || S(g + 1),
              R(!0),
              C(!0),
              L.start(A, () => R(!1)),
              y.start(h, () => S(0)));
          },
          onMouseEnter: () => {
            N ? (L.stop(), R(!1)) : i?.();
          },
        });
      },
    });
  }
}
