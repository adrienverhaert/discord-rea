/* Recovered shipped factory. Module 28528.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6350009..6354921
 * Raw property SHA-256: 2e66b800164c5cdc390385825b428a0bc2c5fcc8535fb491549e8a07c26a6ea2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => L, A: () => b });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(17928),
    d = n(834730),
    c = n(821609),
    u = n(97808),
    _ = n(778712),
    E = n(939249),
    A = n(717421),
    h = n(684013),
    f = n(789645),
    I = n(616566);
  let p = (e) => {
    let { className: t, onDismiss: n, "aria-label": r } = e;
    return (0, i.jsx)(E.D, {
      role: "button",
      onClick: n,
      className: s()(I.r, t),
      "aria-label": r,
      children: (0, i.jsx)(f.P, { size: "xs", color: "currentColor", colorClass: I.M }),
    });
  };
  p.displayName = "DismissButton";
  var T = n(302614),
    m = n(233741),
    g = n(222506),
    S = n(57019),
    N = n(652215),
    C = n(660183),
    O = n(709946);
  function R(e) {
    e.currentTarget.scrollTo(0, 0);
  }
  let L = r.memo(function (e) {
    let t,
      n,
      {
        maxBodyLines: a,
        expand: A = !1,
        onNotificationShow: h,
        onDismissClick: f,
        onConfirmClick: I,
        onCancelClick: T,
        onNotificationClick: S,
        hint: L,
        cancelText: y,
        confirmText: D,
        icon: v,
        body: b,
        title: M,
        renderFooter: P,
        contentOpacity: U,
        status: w,
        containerRef: G,
        className: x,
        wrapperClassName: k,
        unreadAccessory: F,
      } = e,
      [B, V] = r.useState(!1),
      H = A || B || w === N.yFH.FOCUSED,
      j = (0, o.bG)([g.A, m.A], () => g.A.isInputLocked(m.A.getTargetPID()));
    r.useEffect(() => {
      h?.();
    }, [h]);
    let W = r.useCallback(
        (e) => {
          (e.stopPropagation(), f?.(e));
        },
        [f],
      ),
      Y = r.useCallback(
        (e) => {
          (e.stopPropagation(), I?.(e));
        },
        [I],
      ),
      K = r.useCallback(
        (e) => {
          (e.stopPropagation(), T?.(e));
        },
        [T],
      ),
      $ = r.useCallback(() => {
        V(!0);
      }, []),
      z = r.useCallback(() => {
        V(!1);
      }, []);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("div", {
          className: s()(O.af, k),
          onScroll: R,
          children: [
            (0, i.jsx)(E.D, {
              innerRef: G,
              ignoreKeyPress: !0,
              onMouseOver: $,
              onMouseLeave: z,
              onClick: S,
              className: s()(O.kL, { [O.vk]: null != S }, x),
              children:
                ((t = P?.(H, j)),
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(l.animated.div, {
                      className: O.VM,
                      style: { opacity: U },
                      children: [
                        null == v
                          ? null
                          : "string" == typeof v
                            ? (0, i.jsx)(u.eu, {
                                src: v,
                                size: _._3.SIZE_40,
                                className: O.my,
                                "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", { className: O.my, children: v }),
                        (0, i.jsxs)("div", {
                          className: O.zH,
                          children: [
                            null != M
                              ? (0, i.jsx)(d.E, {
                                  color: "interactive-text-default",
                                  variant: "text-sm/semibold",
                                  lineClamp: 2,
                                  children: M,
                                })
                              : null,
                            null != b
                              ? (0, i.jsx)(d.E, {
                                  color: "interactive-text-default",
                                  variant: "text-sm/normal",
                                  lineClamp: null != a ? a * (H ? 2 : 1) : void 0,
                                  children: b,
                                })
                              : null,
                            ((n = "function" == typeof L ? L(H, j) : L),
                            null != L
                              ? (0, i.jsx)(d.E, {
                                  className: O.aK,
                                  color: "text-muted",
                                  variant: "text-xxs/medium",
                                  children: n,
                                })
                              : null),
                            null == I && null == T
                              ? null
                              : (0, i.jsxs)("div", {
                                  className: O.UD,
                                  children: [
                                    null != I
                                      ? (0, i.jsx)("div", {
                                          className: O.x6,
                                          children: (0, i.jsx)(c.$, {
                                            size: "sm",
                                            variant: "active",
                                            onClick: Y,
                                            text: D ?? C.intl.string(C.t.BddRzS),
                                          }),
                                        })
                                      : null,
                                    null != T
                                      ? (0, i.jsx)("div", {
                                          className: O.x6,
                                          children: (0, i.jsx)(c.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            onClick: K,
                                            text: y ?? C.intl.string(C.t["ETE/oC"]),
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                          ],
                        }),
                      ],
                    }),
                    null != t &&
                      (0, i.jsx)(E.D, {
                        className: O.qr,
                        ignoreKeyPress: !0,
                        onClick: (e) => e.stopPropagation(),
                        children: t,
                      }),
                  ],
                })),
            }),
            null == F ? null : (0, i.jsx)("div", { className: O.B3, children: F(B) }),
          ],
        }),
        (0, i.jsx)(p, { className: O.r, onDismiss: W, "aria-label": C.intl.string(C.t.LnEgqX) }),
      ],
    });
  });
  function y(e) {
    let {
      springs: { opacity: t, scale: n, transform: r, height: a },
      scaleOverride: o,
      index: d,
      children: c,
      locked: u,
      animationWrapperClassName: _,
    } = e;
    return (0, i.jsx)(l.animated.div, {
      className: s()(O.k$, u && 0 !== d && O.fF, _),
      style: {
        pointerEvents: u && 0 !== d ? "none" : "auto",
        zIndex: Math.max(5 - d, 0),
        opacity: t,
        transform: r.to((e) => `translate3d(0, ${e}px, 0)`),
        scale: o ?? n.to([0, 1], [0.7, 1]),
        height: a,
        maxWidth: 0 === d ? void 0 : "100%",
      },
      children: c,
    });
  }
  function D(e) {
    let { observe: t, className: n, children: r } = e;
    return t ? (0, i.jsx)(T.A, { className: s()(O.VC, n), children: r }) : r;
  }
  let v = { mass: 1, friction: 8, tension: 300 };
  function b(e) {
    let { notification: t, index: n, locked: a, pinned: s, transitionState: l, cleanUp: o } = e,
      {
        id: d,
        props: {
          onNotificationShow: c,
          onDismissClick: u,
          onNotificationClick: _,
          onConfirmClick: E,
          onCancelClick: f,
          renderFooter: I,
          animationWrapperClassName: p,
        },
      } = t,
      T = r.useCallback(() => {
        c(d);
      }, [c, d]),
      m = r.useCallback(
        (e) => {
          (h.A.updateNotificationStatus(d), u?.(e, d));
        },
        [d, u],
      ),
      { clickSpring: g, handleMouseClick: N } = (function () {
        let [e, t] = r.useState(!1),
          [n, i] = r.useState(!1),
          a = (0, A.z)({
            scale: e ? 0.975 : 1,
            config: v,
            onRest: () => {
              (t(!1),
                setTimeout(() => {
                  i(!1);
                }, 300));
            },
          });
        return {
          clickSpring: n ? a : void 0,
          handleMouseClick: r.useCallback(() => {
            (i(!0), t(!0));
          }, []),
        };
      })(),
      C = r.useCallback(
        (e) => {
          (_?.(e, d), N());
        },
        [_, d, N],
      ),
      O = r.useCallback(
        (e) => {
          E?.(e, d);
        },
        [E, d],
      ),
      R = r.useCallback(
        (e) => {
          f?.(e, d);
        },
        [f, d],
      ),
      b = r.useCallback((e, t) => I?.(e, d, t), [I, d]),
      {
        props: {
          onNotificationShow: M,
          onDismissClick: P,
          renderFooter: U,
          onNotificationClick: w,
          onConfirmClick: G,
          onCancelClick: x,
          disableClickableRegions: k = !1,
          clickZoneClassName: F,
          ...B
        },
        status: V,
      } = t,
      H = !s && a,
      j = 0 === n && !k && !H,
      { ref: W, springs: Y } = (0, S.Ru)(t.id, l, o);
    return (0, i.jsx)(y, {
      transitionState: l,
      springs: Y,
      scaleOverride: g?.scale,
      index: n,
      locked: a,
      animationWrapperClassName: p,
      children: (0, i.jsx)(D, {
        observe: j,
        className: F,
        children: (0, i.jsx)(L, {
          ...B,
          title: "function" == typeof B.title ? B.title(m) : B.title,
          containerRef: W,
          notificationId: t.id,
          onNotificationShow: 0 === n ? T : void 0,
          onDismissClick: m,
          onNotificationClick: C,
          onConfirmClick: null != E ? O : void 0,
          onCancelClick: null != f ? R : void 0,
          renderFooter: b,
          expand: !1,
          index: n,
          locked: a,
          status: V,
          contentOpacity: Y.contentOpacity,
        }),
      }),
    });
  }
}
