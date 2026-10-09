/* Recovered shipped factory. Module 769015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4699512..4701911
 * Raw property SHA-256: 420645e9f30cf30049eebc899653ffa608bd5e675a5765f40594b7675f627aa0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g, M: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(172218),
    o = n(109112),
    d = n(832604),
    c = n(997013),
    u = n(744700),
    _ = n(548118),
    E = n(776231),
    A = n(395671),
    h = n(486020),
    f = n(202541),
    I = n(660183),
    p = n(989533);
  let T = {
    XXSMALL: p.W6,
    XSMALL: p.s,
    SMALL: p.EX,
    MEDIUM: p.Y,
    MEDIUM_LARGE: p.rZ,
    LARGE: p.as,
    XLARGE: p.AQ,
  };
  function m(e) {
    switch (e) {
      case T.XXSMALL:
        return 16;
      case T.XSMALL:
        return 24;
      case T.SMALL:
        return 30;
      case T.MEDIUM:
        return 40;
      case T.MEDIUM_LARGE:
        return 48;
      case T.LARGE:
        return 60;
      default:
        return 80;
    }
  }
  function g(e) {
    let t,
      {
        game: a,
        guild: g,
        skuId: S,
        pid: N,
        className: C,
        guildClassName: O,
        size: R = T.MEDIUM,
        allowUnknownGameIcon: L = !0,
        unknownGameIconFallback: y,
        ref: D,
      } = e,
      [v, b] = r.useState(null),
      [M, P] = r.useState(!1),
      U = r.useCallback((e) => {
        P(e);
      }, []),
      w = r.useRef(null);
    r.useEffect(() => {
      null != w.current && M && (cancelIdleCallback(w.current), (w.current = null));
    }, [M]);
    let G = (0, l.K)(U);
    if (
      (null != S &&
        (t = (function (e) {
          if (null == e) return null;
          switch (e) {
            case f.pe.GUILD:
              return n(664419);
            case f.pe.TIER_0:
              return n(31427);
            case f.pe.TIER_1:
              return n(831180);
            case f.pe.TIER_2:
            case f.pe.LEGACY:
              return n(29873);
            default:
              return null;
          }
        })(S)),
      null != a &&
        null == t &&
        (a instanceof A.Ay || a instanceof c.A
          ? (t = a.getIconURL(m(R)))
          : null != a.icon && (t = (0, u.A)(a.id, a.icon, { size: m(R) }))),
      (t = (0, d.A)(N, t)),
      r.useEffect(() => {
        if (null == t || "" === t) return;
        if ((0, h.V0)(t) || (0, E.LE)(t)) return void b(t);
        function e() {
          if (null != t && "" !== t)
            return (0, E.yt)(t, (e, n) => {
              b(t);
            });
        }
        if (M) return e();
        let n = requestIdleCallback(() => {
          ((w.current = null), e());
        });
        return (
          (w.current = n),
          () => {
            null != w.current && (cancelIdleCallback(w.current), (w.current = null));
          }
        );
      }, [t, M]),
      void 0 === t && null != g)
    ) {
      let e = (function (e) {
        switch (e) {
          case T.XSMALL:
            return _.Ay.Sizes.SMALLER;
          case T.SMALL:
            return _.Ay.Sizes.SMALL;
          case T.LARGE:
            return _.Ay.Sizes.LARGE;
          default:
          case T.MEDIUM:
            return _.Ay.Sizes.MEDIUM;
        }
      })(R);
      return (0, i.jsx)(_.Ay, { className: s()(p.Gt, O, C), guild: g, size: e });
    }
    if (null == t || "" === t)
      return L
        ? (y ?? (0, i.jsx)(o._, { size: "md", color: "currentColor", className: s()(p.Gt, R, C) }))
        : null;
    let x = a?.name,
      k =
        null != x && "" !== x
          ? I.intl.formatToPlainString(I.t.tiKyYg, { applicationName: x })
          : I.intl.string(I.t["2B/phM"]),
      F = (0, h.V0)(t),
      B = (0, E.LE)(t),
      V = v === t || F || B;
    return (0, i.jsxs)(i.Fragment, {
      children: [
        V ? null : (0, i.jsx)("div", { className: s()(p.qD, R, C) }),
        (0, i.jsx)("img", {
          ref: D,
          alt: k,
          src: t,
          className: s()(p.Gt, R, C),
          style: V ? void 0 : { display: "none" },
        }),
        (0, i.jsx)("div", {
          className: p.Xc,
          children: (0, i.jsx)("div", { ref: G, className: p.Pr }),
        }),
      ],
    });
  }
}
