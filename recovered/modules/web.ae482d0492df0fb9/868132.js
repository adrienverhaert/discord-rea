/* Recovered shipped factory. Module 868132.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5583839..5589291
 * Raw property SHA-256: 7a21e32ec0f7994971031eb79ae1a91f1c1e821a7a75742f97e37b2abdc34760
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => k, X: () => G });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(7584),
    o = n(267102),
    d = n(232835),
    c = n(771527),
    u = n(552122);
  let _ = (0, n(196765).v)(() => ({ hasFiredFromMessage: new Set() }));
  var E = n(498924),
    A = n(776310),
    h = n(21161);
  function f(e) {
    let t = [];
    return (
      e.forEach((e) => {
        let n = l.Ay.getByName(e);
        if (null != n && (t.push({ src: n.url, colorize: !1 }), n.hasDiversity))
          for (let e in n.diversityChildren) {
            let i = n.diversityChildren[e];
            t.push({ src: i.url, colorize: !1 });
          }
      }),
      t
    );
  }
  n(321073);
  var I = n(652215);
  let p = 1e3 / 60,
    T = {
      velocity: { type: "static-random", minValue: { x: 8, y: 0 }, maxValue: { x: 50, y: 0 } },
      rotation: {
        type: "linear-random",
        minValue: { x: 0, y: 0, z: 0 },
        maxValue: { x: 0, y: 0, z: 360 },
        minAddValue: { x: 0, y: 0, z: -5 },
        maxAddValue: { x: 0, y: 0, z: 5 },
      },
      size: { type: "static-random", minValue: 2, maxValue: 24, uniformVectorValues: !0 },
      dragCoefficient: { type: "static", value: 0.8 },
      opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
    },
    m = ["#FFFFFF"],
    g = [n(426560), ...f(["snowflake"])];
  function S(e) {
    let { children: t } = e,
      [n, a] = r.useState(!1),
      s = (0, o.Us)(),
      [l, d] = r.useState(null),
      { confettiCanvas: c } = r.useContext(h.x),
      u = (0, A.f9)(c, l),
      _ = r.useMemo(() => ({ triggerAnimation: () => a(!0), untriggerAnimation: () => a(!1) }), []),
      f = r.useCallback(() => {
        let e = c?.getCanvas();
        if (null == e) return;
        let t = e.getBoundingClientRect();
        u.createConfetti({
          ...T,
          position: {
            type: "static-random",
            minValue: { x: -t.width / 2, y: -24 },
            maxValue: { x: t.width, y: -24 },
          },
        });
      }, [u, c]);
    return (r.useEffect(() => {
      let e = n ? setInterval(f, p) : null;
      return () => clearInterval(e);
    }, [n, f]),
    s === I.BRT.OVERLAY)
      ? t
      : (0, i.jsxs)(E.w.Provider, {
          value: _,
          children: [
            t,
            (0, i.jsx)(A.K_, { ref: d, colors: m, sprites: g, spriteWidth: 24, spriteHeight: 24 }),
          ],
        });
  }
  var N = n(544048),
    C = n(513609),
    O = n(536283),
    R = n(757959);
  let L = [],
    y = new Set(["jack_o_lantern", "nose"]),
    D = {
      jack_o_lantern: { sprites: f(["chocolate_bar", "lollipop", "candy"]) },
      nose: { sprites: f(["foot"]) },
    },
    v = {
      enter: { BEG: 0, END: 22 },
      confetti: { BEG: 23, END: 119 },
      exit: { BEG: 164, END: 200 },
    };
  function b() {
    return n
      .e("698150")
      .then(n.t.bind(n, 633343, 19))
      .then((e) => {
        let { default: t } = e;
        return t;
      });
  }
  let M = function (e) {
    let { sprites: t, ref: n } = e,
      [a, s] = r.useState(null),
      { confettiCanvas: l } = r.useContext(h.x),
      o = (0, A.f9)(l, a);
    return (
      r.useImperativeHandle(
        n,
        () => ({
          fireConfetti: (e, t) => {
            o.createMultipleConfetti(
              {
                ...O.Mw,
                position: { type: "static", value: { x: e, y: t } },
                velocity: {
                  type: "static-random",
                  minValue: { x: -5, y: -40 },
                  maxValue: { x: -40, y: -100 },
                },
                size: { type: "static-random", minValue: 12, maxValue: 48 },
                dragCoefficient: { type: "static", value: 0.01 },
              },
              20,
            );
          },
        }),
        [o],
      ),
      (0, i.jsx)(A.K_, { ref: s, colors: L, sprites: t, spriteWidth: 48, spriteHeight: 48 })
    );
  };
  function P(e) {
    let { children: t } = e,
      n = r.useRef({}),
      [a, s] = r.useState(null),
      l = (function (e) {
        if (null == e) return "enter";
        switch (e) {
          case "enter":
            return "confetti";
          case "confetti":
            return "exit";
          case "exit":
            return "enter";
        }
      })(a),
      d = r.useRef(null),
      [c, u] = r.useState(!1),
      _ = r.useRef("jack_o_lantern"),
      A = (0, o.Us)(),
      h = r.useCallback(
        (e) => {
          if (!c) {
            let t = (function (e) {
              if (null == e) return null;
              for (let t of y) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
              return null;
            })(e);
            null != t && ((_.current = t), u(!0), s(null));
          }
        },
        [c],
      ),
      f = r.useMemo(() => ({ triggerAnimation: h, untriggerAnimation: () => {} }), [h]),
      p = r.useCallback((e) => {
        s(e);
      }, []),
      T = r.useCallback((e) => {
        "exit" === e && u(!1);
      }, []),
      m = r.useCallback((e) => {
        d.current = e;
      }, []);
    return (r.useEffect(() => {
      if ("confetti" === a) {
        if (null == d.current) return;
        let e = d.current.getBoundingClientRect(),
          t = e.left - 11,
          i = e.top + 125,
          r = n.current[_.current];
        r?.fireConfetti(t, i);
      }
    }, [a]),
    A !== I.BRT.APP)
      ? t
      : (0, i.jsxs)(E.w.Provider, {
          value: f,
          children: [
            t,
            Object.keys(D).map((e) => {
              let t = D[e];
              return (0, i.jsx)(
                M,
                {
                  ref: (t) => {
                    null != t ? (n.current[e] = t) : delete n.current[e];
                  },
                  sprites: t.sprites,
                },
                e,
              );
            }),
            c
              ? (0, i.jsx)(C.Ay, {
                  children: (0, i.jsx)("div", {
                    className: R.k,
                    children: (0, i.jsx)(N.t, {
                      animationRef: m,
                      className: R.I,
                      nextScene: l,
                      sceneSegments: v,
                      onScenePlay: p,
                      onSceneComplete: T,
                      importData: b,
                      pauseWhileUnfocused: !1,
                    }),
                  }),
                })
              : null,
          ],
        });
  }
  function U(e) {
    if (null == e || null == c.A.emojiAnimationTriggers) return !1;
    for (let t of c.A.emojiAnimationTriggers) {
      let n = l.Ay.getByName(t);
      if (null != n) {
        if (`:${n.uniqueName}:` === e) return !0;
        for (let t in n.diversityChildren) {
          let i = n.diversityChildren[t];
          if (`:${i.uniqueName}:` === e) return !0;
        }
      }
    }
    return !1;
  }
  function w(e) {
    let { children: t } = e,
      { triggerAnimation: n, untriggerAnimation: a } = r.useContext(E.w),
      s = (0, o.Us)(),
      l = r.useMemo(
        () => ({
          triggerAnimation: (e) => {
            s !== I.BRT.OVERLAY && U(e) && n(e);
          },
          untriggerAnimation: (e) => {
            s !== I.BRT.OVERLAY && U(e) && a(e);
          },
        }),
        [s, n, a],
      );
    return (0, i.jsx)(E.w.Provider, { value: l, children: t });
  }
  function G(e) {
    let { children: t } = e,
      n = u.A.useIsEligible(),
      a = r.useCallback((e, t) => {
        switch (t) {
          case c.n.THROW_EMOJI:
            return (0, i.jsx)(P, { children: e });
          case c.n.SNOW:
            return (0, i.jsx)(S, { children: e });
        }
      }, []);
    return n && null != c.A.emojiAnimationType
      ? a((0, i.jsx)(w, { children: t }), c.A.emojiAnimationType)
      : t;
  }
  function x(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: s } = e,
      l = (0, a.bG)([d.A], () => d.A.getMessage(n, i)),
      { triggerAnimation: o } = r.useContext(E.w);
    return (
      r.useEffect(() => {
        if (
          !c.A.triggerEmojiAnimationFromSentMessage ||
          l?.state !== I.cmJ.SENT ||
          (function (e) {
            let { hasFiredFromMessage: t } = _.getState();
            return t.has(e);
          })(i)
        )
          return;
        let { top: e, bottom: n } = t.getBoundingClientRect();
        e >= 0 &&
          n <= window.innerHeight &&
          (o(s),
          (function (e) {
            let { hasFiredFromMessage: t } = _.getState();
            (t.add(e), _.setState({ hasFiredFromMessage: t }));
          })(i));
      }, [s, t, l?.state, i, o]),
      null
    );
  }
  function k(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: l, emojiRef: d } = e,
      c = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion),
      _ = u.A.useIsEligible(),
      E = (0, o.Us)();
    return l || E === I.BRT.OVERLAY || !_ || null == n || null == t || c || null == d || !U(r)
      ? null
      : (0, i.jsx)(x, { emojiRef: d, channelId: t, messageId: n, emojiName: r });
  }
}
