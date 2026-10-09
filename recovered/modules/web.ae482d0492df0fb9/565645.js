/* Recovered shipped factory. Module 565645.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 728491..730907
 * Raw property SHA-256: 1653216c2dcc82a5f17805aeb2810f42766b3ab011c37f9e641c6ad553d8078b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => N });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(724442),
    d = n(692051),
    c = n(868132),
    u = n(498924),
    _ = n(776231),
    E = n(830178),
    A = n(885386),
    h = n(532294),
    f = n(486020),
    I = n(690521),
    p = n(218394),
    T = n(732139);
  let m = __OVERLAY__ ? () => (0, l.bG)([h.default], () => h.default.isInstanceFocused()) : p.j;
  function g(e) {
    let {
        src: t,
        alt: n,
        className: a,
        emojiId: l,
        emojiName: d,
        channelId: E,
        messageId: h,
        animated: p,
        size: g = "default",
        isInteracting: S = !1,
        shouldAnimate: N,
        onMouseEnter: C,
        onMouseLeave: O,
        canSelect: R = !0,
        autoplay: L,
        registerInnerRef: y,
        registerAnimatedElementRef: D,
        surrogate: v,
        ...b
      } = e,
      [M, P] = r.useState(!1),
      [U, w] = r.useState(void 0),
      G = r.useRef(void 0),
      { triggerAnimation: x, untriggerAnimation: k } = r.useContext(u.w),
      F = A.Sf.useSetting(),
      B = m(),
      V = null == L ? F : L,
      H = T.Ec[g],
      j = r.useRef(null),
      W = r.useMemo(() => {
        if (null != t) return t;
        if (null != l) {
          let e = !0 === N && V;
          return f.Ay.getEmojiURL({
            id: l,
            animated: B && !0 === p && (e || M || !0 === S),
            size: H,
          });
        }
        if (null != d) return I.Ay.getURL(d);
        throw Error("Unknown Src for Emoji");
      }, [p, V, l, d, H, B, M, S, N, t]),
      Y = r.useCallback(() => {
        null != W &&
          (G.current = (0, _.yt)(W, (e) => {
            e || w(Date.now());
          }));
      }, [W]),
      K = r.useCallback(
        (e) => {
          (p && P(!0), null == l && x(d), C?.(e));
        },
        [p, d, C, x, l],
      ),
      $ = r.useCallback(
        (e) => {
          (p && P(!1), null == l && k(d), O?.(e));
        },
        [p, l, d, O, k],
      ),
      z = r.useMemo(() => {
        let e = null != l && "" !== l ? { "data-id": l } : { "data-name": d };
        return {
          ...b,
          className: s()("emoji", a, { jumboable: "jumbo" === g }),
          onError: Y,
          onMouseEnter: K,
          onMouseLeave: $,
          "data-type": "emoji",
          ...e,
        };
      }, [a, l, d, K, $, Y, b, g]);
    r.useEffect(() => () => G.current?.(), []);
    let X = r.useCallback(
        (e) => {
          ((j.current = e), y?.(e), D?.(e));
        },
        [y, D],
      ),
      Z = (0, o.A)(j);
    return null == W || "" === W
      ? (0, i.jsx)("span", {
          ...z,
          ref: X,
          className: s()("emoji", "emoji-text"),
          children: v ?? d,
        })
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(c.q, {
              channelId: E,
              messageId: h,
              emojiName: d,
              disable: !1 === V || !1 === F,
              emojiRef: Z,
            }),
            R
              ? (0, i.jsx)("img", { ...z, ref: X, src: W, alt: n ?? d ?? void 0, draggable: !1 }, U)
              : (0, i.jsx)(
                  "div",
                  {
                    ...z,
                    ref: X,
                    role: "img",
                    "aria-label": n ?? d ?? void 0,
                    style: {
                      backgroundImage: `url(${W})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    },
                  },
                  U,
                ),
          ],
        });
  }
  function S(e) {
    let { useThoughtfullyAnimated: t } = r.useContext(E.W),
      { animate: n, registerRef: a } = t(),
      { disableAnimations: s } = r.useContext(d.Y);
    return (0, i.jsx)(g, { ...e, registerAnimatedElementRef: a, shouldAnimate: n && !s });
  }
  function N(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src
      ? null
      : e.animated && void 0 === e.shouldAnimate
        ? (0, i.jsx)(S, { ...e })
        : (0, i.jsx)(g, { ...e });
  }
}
