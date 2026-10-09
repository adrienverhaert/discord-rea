/* Recovered shipped factory. Module 384018.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 964096..967811
 * Raw property SHA-256: 1e541a5e20a086474a3b7aebd714a9b1c13d7f2ea308366cdd3da44cb792c6d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => v });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(252392),
    d = n(888633),
    c = n(765178),
    u = n(844222),
    _ = n(435462);
  let E = (0, d.v)(() => ({ containerIdsBySurface: new Map() })),
    A = 0;
  var h = n(435871);
  function f(e) {
    return "number" == typeof e ? `${e}px` : e;
  }
  function I(e) {
    let { surface: t = "app", offset: n } = e,
      { entry: a, position: d } = (function (e) {
        let t = r.useId(),
          n =
            (r.useEffect(
              () => (
                E.setState((n) => {
                  let i = new Map(n.containerIdsBySurface);
                  return (i.set(e, [...(i.get(e) ?? []), t]), { containerIdsBySurface: i });
                }),
                () => {
                  E.setState((n) => {
                    let i = new Map(n.containerIdsBySurface),
                      r = (i.get(e) ?? []).filter((e) => e !== t);
                    return (
                      0 === r.length ? i.delete(e) : i.set(e, r),
                      { containerIdsBySurface: i }
                    );
                  });
                }
              ),
              [e, t],
            ),
            E((n) => {
              let i = n.containerIdsBySurface.get(e);
              return null != i && i[i.length - 1] === t;
            })),
          i = (0, _.WE)((t) => t.currentToastMap.get(e)),
          a = (n ? i : void 0) ?? null,
          [s, l] = r.useState("top"),
          o = null != a ? (a.toast.position ?? "top") : s;
        o !== s && l(o);
        let { minToastDurationMs: d } = r.useContext(u.C),
          h = Math.max(a?.toast.duration ?? 3e3, d);
        return (
          r.useEffect(() => {
            if (null == a) return;
            let t = setTimeout(() => (0, _.VD)(e), h);
            return () => clearTimeout(t);
          }, [a, h, e]),
          r.useEffect(() => {
            let e = a?.toast.text;
            null != a &&
              a.key !== A &&
              null != e &&
              "" !== e &&
              ((A = a.key),
              c.O.announce(e, "critical" === a.toast.variant ? "assertive" : "polite"));
          }, [a]),
          { entry: a, position: s }
        );
      })(t),
      [I, p] = r.useState({ entry: a, leaving: null, isDelayed: !1 });
    a !== I.entry && p({ entry: a, leaving: I.entry ?? I.leaving, isDelayed: null != I.entry });
    let T = r.useCallback(() => p((e) => ({ ...e, leaving: null })), []);
    return (0, i.jsxs)("div", {
      "aria-hidden": !0,
      className: s()(h.container, h[d]),
      style: {
        "--custom-toast-animation-duration": `${l.A.modules.toast.ANIMATION_DURATION_MS.resolve()}ms`,
        "--custom-toast-queue-enter-delay": `${l.A.modules.toast.QUEUE_ENTER_DELAY_MS.resolve()}ms`,
        "--toast-container-offset-top": f(n?.top),
        "--toast-container-offset-bottom": f(n?.bottom),
      },
      children: [
        null != I.leaving &&
          (0, i.jsx)(
            "div",
            {
              className: s()(h.toast, h.leave),
              onAnimationEnd: T,
              children: (0, i.jsx)(o.y, { ...I.leaving.toast }),
            },
            I.leaving.key,
          ),
        null != I.entry &&
          (0, i.jsx)(
            "div",
            {
              className: s()(h.toast, h.enter, { [h.delayed]: I.isDelayed }),
              children: (0, i.jsx)(o.y, { ...I.entry.toast }),
            },
            I.entry.key,
          ),
      ],
    });
  }
  var p = n(202091),
    T = n(866323),
    m = n(857250),
    g = n(691540),
    S = n(97483),
    N = n(773019);
  let C = { duration: 300, friction: 24, tension: 280 },
    O = {
      [S.xJ.TOP]: {
        styles: N.N,
        transition: {
          trail: 400,
          from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: C },
          enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: C },
          leave: {
            transform: "translate3d(0, -100%, 0)",
            opacity: 0,
            config: { ...C, friction: 40, clamp: !0 },
          },
        },
      },
      [S.xJ.BOTTOM]: {
        styles: N.H,
        transition: {
          trail: 400,
          from: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: C },
          enter: { transform: "translate3d(0, 0px, 0)", opacity: 1, config: C },
          leave: {
            transform: "translate3d(0, 100%, 0)",
            opacity: 0,
            config: { ...C, friction: 40, clamp: !0 },
          },
        },
      },
    };
  function R(e) {
    let { appContext: t } = e,
      n = (0, g.WE)((e) => e.currentToastMap.get(t)),
      a = r.useRef(n?.options?.position ?? S.jg.position),
      s = r.useRef(n?.options?.duration ?? S.jg.duration);
    r.useEffect(() => {
      null != n &&
        ((a.current = n.options?.position ?? S.jg.position),
        (s.current = n.options?.duration ?? S.jg.duration));
    }, [n]);
    let l = r.useMemo(() => O[n?.options?.position ?? a.current], [n]),
      o = (0, T.p)(n, { keys: (e) => e?.id ?? "", ...l.transition });
    return (
      r.useEffect(() => {
        null != n &&
          setTimeout(() => {
            (0, g.VD)(t);
          }, s.current);
      }, [n, t]),
      (0, i.jsx)("div", {
        className: l.styles,
        children: o((e, t) =>
          null == t
            ? null
            : (0, i.jsx)(p.animated.div, { style: e, children: (0, i.jsx)(m.y, { ...t }) }, t.id),
        ),
      })
    );
  }
  var L = n(335144),
    y = n(8062),
    D = n(652215);
  function v(e) {
    let { appContext: t } = e,
      n = y.a[t],
      a = (0, L.A)(n),
      s = r.useMemo(
        () =>
          t === D.BRT.APP
            ? { top: a ?? "var(--custom-app-top-bar-height)", bottom: 132 }
            : null != a
              ? { top: a }
              : void 0,
        [t, a],
      );
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(R, { appContext: t }), (0, i.jsx)(I, { surface: n, offset: s })],
    });
  }
}
