/* Recovered shipped factory. Module 660184.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4238255..4242650
 * Raw property SHA-256: a1631d4f486956599faa1f9827f10492f3975a51955afb2293228999b9b928e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => P });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(508425),
    o = n(559949),
    d = n(17928),
    c = n(602853),
    u = n(661531),
    _ = n(84571),
    E = n(36075),
    A = n(834730),
    h = n(775602),
    f = n(310784),
    I = n.n(f),
    p = n(998304),
    T = n(898985),
    m = n(824994),
    g = n(922301),
    S = n(945096),
    N = n(750656);
  let C = "--custom-display-name-styles-main-color";
  n(321073);
  var O = n(308050),
    R = n(912051),
    L = n(229996);
  let y = (0, O.A)();
  function D(e) {
    let { name: t, emojiClassName: n, letterClassName: a, wordClassName: s, colors: l } = e,
      o = r.useMemo(() => {
        let e = 0,
          r = 0,
          o = [],
          d = [];
        function c() {
          if (0 === d.length) return;
          let e = d;
          ((d = []),
            null != s
              ? o.push((0, i.jsx)("span", { className: s, children: e }, `word-${o.length}`))
              : o.push(...e));
        }
        return (
          (0, R.p)(t).forEach((t, s) => {
            y.lastIndex = 0;
            let u = y.test(t);
            if (0 === t.trim().length) {
              (c(), o.push((0, i.jsx)("span", { children: t }, `space-${s}`)));
              return;
            }
            let _ = null != l && l.length > 0 && !u ? l[e % l.length] : void 0,
              E = null != _ ? { color: _ } : void 0;
            (null == a || u || (E = { ...E, "--custom-letter-index": r }),
              d.push((0, i.jsx)("span", { className: u ? n : a, style: E, children: t }, s)),
              !u && (e++, r++));
          }),
          c(),
          o
        );
      }, [t, l, n, a, s]);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: L.Q, children: t }),
        (0, i.jsx)("span", { "aria-hidden": !0, children: o }),
      ],
    });
  }
  var v = n(73392),
    b = n(658385);
  let M = [o.x.CHERRY_BOMB, o.x.CHICLE],
    P = r.memo(function (e) {
      let {
          userName: t,
          displayNameStyles: n,
          effectDisplayType: a = g.G.STATIC,
          inProfile: o = !1,
          textClassName: A,
          loop: f = !1,
          shouldWrap: O = !1,
          boldFontOpacity: R = 1,
          shouldUnderlineOnHover: L = !1,
          appendedInlineContent: y,
          textVariant: P,
        } = e,
        w = (0, v.a)({ displayNameStyles: n }),
        { useReducedMotion: G } = (0, d.cf)([h.Ay], () => ({
          useReducedMotion: h.Ay.useReducedMotion,
        })),
        x = (0, m.W)({ location: "UserNameWithEffects" }),
        k = (0, c.r)(u.A.colors.BACKGROUND_BASE_LOW).hex(),
        F = n?.effectId ?? l.z.SOLID,
        B = (0, _.O)(t),
        V = (0, E.CR)(B, F === l.z.TOON ? b.Zg : void 0),
        H = (function (e) {
          let { displayNameStyles: t, backgroundColor: n } = e,
            i = (0, d.bG)([h.Ay], () => (h.Ay.desaturateUserColors ? h.Ay.saturation : 1)),
            a = t?.effectId ?? l.z.SOLID,
            s = (0, T._)(a);
          return r.useMemo(
            () =>
              null == t
                ? []
                : t.colors.map((e) =>
                    (0, p.lZ)({
                      foreground: I()(e),
                      background: a === l.z.TOON ? I()("#333") : I()(n),
                      ratio: s.minContrastRatio,
                      saturationFactor: i,
                    }).hex(),
                  ),
            [t, a, s.minContrastRatio, i, n],
          );
        })({ displayNameStyles: x ? n : null, backgroundColor: k });
      if (!x || null == n) return (0, i.jsxs)(i.Fragment, { children: [t, " ", y] });
      let j = (function (e, t) {
          var n, i, r;
          let {
              shouldWrap: a = !1,
              fontOpacity: s = 1,
              nameLength: o = 0,
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            d = {};
          switch (e) {
            case l.z.GRADIENT:
            case l.z.GLOW:
              d =
                0 === (n = t).length
                  ? {}
                  : {
                      "--custom-display-name-styles-gradient-stops":
                        1 === n.length
                          ? `${n[0]}, ${n[0]}`
                          : n.map((e, t) => `${e} ${10 + (80 * t) / (n.length - 1)}%`).join(", "),
                      [C]: n[0],
                    };
              break;
            case l.z.PRISM:
              ((i = t),
                (r = o),
                (d =
                  0 === i.length
                    ? {}
                    : {
                        "--custom-display-name-styles-prism-stops": Array.from(
                          { length: i.length + 1 },
                          (e, t) => `${i[t % i.length]} ${((100 * t) / i.length).toFixed(3)}%`,
                        ).join(", "),
                        "--custom-display-name-styles-prism-cycle": `max(${r}ch, ${N.LP}px)`,
                        [C]: i[0],
                      }));
              break;
            case l.z.GUMMY:
            case l.z.NEON:
            case l.z.POP:
            case l.z.TOON:
            case l.z.SOLID:
            default:
              t.length > 0 &&
                (d = (function (e) {
                  let {
                    main: t,
                    light1: n,
                    light2: i,
                    dark1: r,
                    dark2: a,
                    toonStroke: s,
                    neonStroke: l,
                  } = (0, S.$0)(e);
                  return {
                    [C]: t,
                    "--custom-display-name-styles-light-1-color": n,
                    "--custom-display-name-styles-light-2-color": i,
                    "--custom-display-name-styles-dark-1-color": r,
                    "--custom-display-name-styles-dark-2-color": a,
                    "--custom-display-name-styles-toon-stroke-color": s,
                    "--custom-display-name-styles-neon-stroke-color": l,
                  };
                })(t[0]));
          }
          return {
            ...d,
            "--custom-display-name-styles-wrap": a ? "wrap" : "nowrap",
            "--custom-display-name-styles-font-opacity": s,
          };
        })(F, H, {
          shouldWrap: O,
          fontOpacity: M.includes(n.fontId) ? R : 1,
          nameLength: B?.length ?? 0,
        }),
        W = (function (e) {
          switch (e) {
            case l.z.GRADIENT:
            case l.z.GLOW:
              return b.D7;
            case l.z.PRISM:
              return b.Wj;
            case l.z.NEON:
              return b.lw;
            case l.z.TOON:
              return b.lQ;
            case l.z.POP:
              return b.uY;
            case l.z.GUMMY:
              return b.Y0;
            case l.z.SOLID:
            default:
              return b.QJ;
          }
        })(F),
        Y = a !== g.G.PLAIN,
        K = a === g.G.ANIMATED && !G,
        $ = (0, i.jsx)("div", {
          className: s()(b.kL, w, A, {
            [b.rD]: Y,
            [b.CS]: K,
            [b.HW]: f,
            [b.$E]: o,
            [b.Tn]: null != y,
            [b._j]: O,
          }),
          style: j,
          children: (0, i.jsx)(U, {
            textVariant: P,
            "data-username-with-effects": B,
            className: s()(b.WH, W, { [b._W]: L }),
            children:
              F === l.z.GUMMY && Y
                ? (0, i.jsx)(D, {
                    name: B ?? "",
                    emojiClassName: b.Zg,
                    letterClassName: K ? b.M4 : void 0,
                    wordClassName: b.qf,
                    colors: H,
                  })
                : V,
          }),
        });
      return null != y ? (0, i.jsxs)("div", { className: b.g8, children: [$, y] }) : $;
    });
  function U(e) {
    let { textVariant: t, ...n } = e;
    return null != t
      ? (0, i.jsx)(A.E, { color: "none", variant: t, ...n })
      : (0, i.jsx)("span", { ...n });
  }
}
