/* Recovered shipped factory. Module 626031.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8435414..8437477
 * Raw property SHA-256: 16d140a600b80f0c65162d4b9b00b3917f966fbee171c98aa6b31b9cedd0286e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => S, t: () => m });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(834730),
    d = n(717421),
    c = n(475743),
    u = n(626584),
    _ = n(572009),
    E = n(14115),
    A = n(652215),
    h = n(115093),
    f = n(398293);
  let I = new u.A("BalanceCounter"),
    p = (0, _._$)(void 0) === h.B.PRODUCTION;
  function T(e) {
    return null == e ? 0 : `${e.toFixed(0)}`.length;
  }
  function m(e) {
    let {
        value: t,
        textVariant: n = "text-md/semibold",
        horizontalAlignment: a = "right",
        textColor: l,
        ariaHidden: d,
        className: u,
        ..._
      } = e,
      E = null === t,
      [A, h] = (0, r.useState)(null),
      I = (0, r.useMemo)(() => T(t), [t]),
      p = (0, c.Ay)(I) ?? 0,
      m = (0, r.useMemo)(() => (null === A ? Math.max(p, I) : Math.max(I, A)), [p, I, A]),
      S = `${E ? 0 : m}ch`,
      { marginClassName: N, textAlignClassName: C } = (0, r.useMemo)(
        () =>
          "left" === a
            ? { marginClassName: f.v6, textAlignClassName: f.Sc }
            : { marginClassName: f.sl, textAlignClassName: f.$j },
        [a],
      );
    return (0, i.jsx)(o.E, {
      "aria-hidden": d,
      variant: n,
      color: l,
      className: s()(f.SP, E ? void 0 : N, C, u),
      style: { width: S, opacity: E ? "0" : 1 },
      children: E
        ? null
        : (0, i.jsx)(g, {
            onSetDigitCount: (e) => {
              e !== A && h(e);
            },
            value: t,
            ..._,
          }),
    });
  }
  let g = (e) => {
      let {
          value: t,
          onSetDigitCount: n,
          onValueChange: a = A.tEg,
          onValueReached: s = A.tEg,
          targetTotalCounterTime: o = 3e3,
          isRenderedWithoutLottieAnimation: c,
          counterInnerClassName: u,
        } = e,
        [_, h] = (0, r.useState)(0),
        f = (0, r.useRef)(null),
        m = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        if (null === t) return;
        if (null === f.current) {
          f.current = t;
          return;
        }
        let e = null !== f.current ? t - f.current : t;
        (0 !== e && null !== f.current && a(e),
          (m.current = { lastChangedAt: Date.now(), totalDelta: Math.abs(e) }));
      }, [t, a]);
      let g = t ?? 0,
        S = f.current ?? g,
        { duration: N, delay: C } = (0, E.v)(g - S, {
          targetTime: o,
          isRenderedWithoutLottieAnimation: c,
        }),
        { number: O } = (0, d.z)({
          from: { number: f.current ?? g },
          number: g,
          config: { mass: 1, tension: 20, friction: 10, duration: N },
          delay: C,
          onStart: () => {
            n(T(S));
          },
          onRest: () => {
            if ((h(_ + 1), s(), !p && null !== m.current && null !== f.current)) {
              let e = Date.now();
              I.log("Balance Counter finished updating: ", {
                time: e - m.current.lastChangedAt,
                delta: g - f.current,
              });
            }
            (n(T(g)), (f.current = g));
          },
        }),
        R = T(Math.max(t ?? 0, O.get()));
      return (0, i.jsx)(l.animated.div, {
        style: { width: `calc(${R}ch)` },
        className: u,
        children: O.to((e) => `${e.toFixed(0)}`),
      });
    },
    S = m;
}
