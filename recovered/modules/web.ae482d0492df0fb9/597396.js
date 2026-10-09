/* Recovered shipped factory. Module 597396.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2672530..2678227
 * Raw property SHA-256: 89f476c2868421f62b21d47e89ec54a0f5f89abe81e8be7b95fa0f2018a61d81
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { o: () => B }), n(323874), n(14289), n(35956));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(727522),
    o = n(134559),
    d = n(132500),
    c = n(440454),
    u = n(484697),
    _ = n(363195),
    E = n(625494),
    A = n(851907),
    h = n(435558),
    f = n(17928),
    I = n(192308),
    p = n(267102),
    T = n(186111),
    m = n(712687),
    g = n(652215),
    S = n(775602);
  let N = (0, h.debounce)((e) => {
      setTimeout(() => {
        e.current?.focus();
      }, 0);
    }, 50),
    C = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
  var O = n(333007),
    R = n(866665),
    L = n(955418),
    y = n(533550);
  function D(e) {
    let { iframeId: t } = e,
      n = r.useSyncExternalStore(L.SV, L.NO);
    if ((r.useEffect(() => () => (0, L.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let a = (0, u.fl)(t);
    return null == a
      ? null
      : O.createPortal((0, i.jsx)(v, { tooltip: n, iframe: a }), a.ownerDocument.body);
  }
  function v(e) {
    let { tooltip: t, iframe: n } = e,
      [, a] = r.useReducer((e) => e + 1, 0);
    r.useLayoutEffect(() => {
      a();
    }, []);
    let s = n.getBoundingClientRect(),
      l = s.left + Math.min(Math.max(t.x, 0), s.width),
      o = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, i.jsx)(R.m, {
      text: t.text,
      keyboardShortcut: t.shortcut,
      position: t.position ?? "top",
      align: t.align ?? "center",
      forceOpen: !0,
      positionKey: `${l},${o}`,
      children: (0, i.jsx)("span", { className: y.Y, style: { left: l, top: o } }),
    });
  }
  var b = n(673953),
    M = n(342296),
    P = n(777977),
    U = n(504115);
  function w(e) {
    let { iframeId: t } = e,
      n = r.useSyncExternalStore(P.$P, P.Eh);
    if ((r.useEffect(() => () => (0, P.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let a = (0, u.fl)(t);
    return null == a
      ? null
      : O.createPortal((0, i.jsx)(G, { popout: n, iframe: a }), a.ownerDocument.body);
  }
  function G(e) {
    let { popout: t, iframe: n } = e,
      a = r.useRef(null),
      [, s] = r.useReducer((e) => e + 1, 0);
    (r.useLayoutEffect(() => {
      s();
    }, []),
      r.useEffect(() => {
        let e = n.ownerDocument.defaultView;
        if (null != e)
          return (e.addEventListener("blur", i), () => e.removeEventListener("blur", i));
        function i() {
          n.ownerDocument.activeElement === n && (0, P.OR)(t.iframeId);
        }
      }, [n, t.iframeId]));
    let l = n.getBoundingClientRect(),
      o = l.left + Math.min(Math.max(t.x, 0), l.width),
      d = l.top + Math.min(Math.max(t.y, 0), l.height);
    return (0, i.jsx)(M.A, {
      userId: t.userId,
      targetElementRef: a,
      shouldShow: !0,
      position: "right",
      align: "top",
      appContext: (0, b.cH)(n),
      positionKey: `${o},${d}`,
      clickTrap: !0,
      onRequestClose: () => (0, P.OR)(t.iframeId),
      children: () => (0, i.jsx)("span", { ref: a, className: U.Y, style: { left: o, top: d } }),
    });
  }
  var x = n(809685),
    k = n(698398);
  function F(e) {
    let {
        url: t,
        className: n,
        style: a,
        shouldRefocus: s,
        queryParams: h,
        allowPopups: O = !1,
        referrerPolicy: R = "origin",
        onLoad: y,
        onIframeMount: v,
        onIframeUnmount: b,
        onGuestReload: M,
        contextSource: U,
      } = e,
      G = (0, A.xi)({}),
      k = (0, l.useMemoOne)(() => (0, d.A)(), [t]),
      F = r.useRef(null),
      B = (function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
          i = (0, f.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
          a = (function () {
            let e = (0, I.useModalsStore)(
                (e) =>
                  !Object.entries(e).every((e) => {
                    let [t, n] = e;
                    return 0 === n.length;
                  }),
              ),
              t = (0, f.bG)([m.A], () => m.A.isOpen()),
              n = (0, f.bG)([T.A], () => T.A.hasLayers()),
              [i, a] = r.useState(!1),
              s = (0, p.aL)();
            return (
              r.useEffect(() => {
                function e() {
                  a(!0);
                }
                function t() {
                  a(!1);
                }
                return (
                  s.subscribe(g.jej.POPOUT_SHOW, e),
                  s.subscribe(g.jej.POPOUT_HIDE, t),
                  () => {
                    (s.unsubscribe(g.jej.POPOUT_SHOW, e), s.unsubscribe(g.jej.POPOUT_HIDE, t));
                  }
                );
              }, [s]),
              e || t || i || n
            );
          })(),
          [s, l] = r.useState(!1),
          o = (0, p.aL)();
        return (
          r.useEffect(() => {
            if (t) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
            function e() {
              a && (o.dispatch(g.jej.POPOUT_CLOSE), E._.dispatch(g.jej.CONTEXT_MENU_CLOSE));
            }
          }, [n, a, t, o]),
          r.useEffect(() => {
            if (i || !s || !t) return;
            let { current: r } = e,
              l = a;
            function o(t) {
              let n = t.relatedTarget;
              setTimeout(() => {
                (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) ||
                  l ||
                  N(e);
              }, 100);
            }
            return (
              r?.addEventListener("focusout", o),
              n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
              () => {
                (r?.removeEventListener("focusout", o), (l = !0));
              }
            );
          }, [t, s, i, e, n, a]),
          l
        );
      })(F, s, null == G ? window : G),
      V = { ...h, frame_id: k, platform: o.v.DESKTOP },
      [H, j] = r.useState(!1),
      W = _.A.theme,
      Y = { ...a };
    null == Y.colorScheme && (Y.colorScheme = W === g.NJ8.LIGHT ? "light" : "dark");
    let K = r.useCallback(
        (e) => {
          ((F.current = e), null == e)
            ? (0, u.$9)(k)
            : ((0, u.M7)(k, e), null != e.contentWindow && (0, u.Yt)(e.contentWindow, k));
        },
        [k],
      ),
      $ = r.useRef(null);
    return (
      r.useEffect(() => () => (0, x.ir)(k), [k]),
      !(function (e, t) {
        let {
            onIframeMount: n,
            onIframeUnmount: i,
            isNewIframe: a = !0,
            isIframeRetiring: s = !0,
            contextSource: l,
          } = t,
          o = r.useRef(n),
          d = r.useRef(i),
          c = r.useRef(a),
          u = r.useRef(s),
          _ = r.useRef(l);
        (r.useEffect(() => {
          ((o.current = n), (d.current = i), (c.current = a), (u.current = s), (_.current = l));
        }),
          r.useEffect(
            () => (
              c.current &&
                (E._.dispatch(g.jej.IFRAME_MOUNT, { id: e, data: { contextSource: _.current } }),
                o.current?.(e)),
              () => {
                u.current && (E._.dispatch(g.jej.IFRAME_UNMOUNT, { id: e }), d.current?.(e));
              }
            ),
            [e],
          ));
      })(k, {
        onIframeMount: v,
        onIframeUnmount: b,
        contextSource: (0, l.useMemoOne)(() => U, [t]),
      }),
      r.useEffect(() => {
        function e(e) {
          let { resizing: t } = e;
          j(t);
        }
        return (
          E._.subscribe(g.jej.MANUAL_IFRAME_RESIZING, e),
          () => {
            E._.unsubscribe(g.jej.MANUAL_IFRAME_RESIZING, e);
          }
        );
      }, []),
      H && (Y.pointerEvents = "none"),
      null != t
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("iframe", {
                ref: K,
                style: Y,
                allow: "autoplay; encrypted-media",
                referrerPolicy: R,
                onLoad: function (e) {
                  let n = e.target;
                  ($.current === k && ((0, L.ny)(k), (0, x.ir)(k), (0, P.OR)(k), M?.(k)),
                    ($.current = k),
                    null != n.contentWindow && n.contentWindow.postMessage([c.A.HELLO, V], t ?? ""),
                    B(!0),
                    y?.(n));
                },
                sandbox: (function (e) {
                  let { allowPopups: t } = e,
                    n = C;
                  return (
                    t && (n = [...C, "allow-popups", "allow-popups-to-escape-sandbox"]),
                    n.join(" ")
                  );
                })({ allowPopups: O }),
                className: n,
                src: `${t}?${new URLSearchParams(V)}`,
              }),
              (0, i.jsx)(D, { iframeId: k }),
              (0, i.jsx)(w, { iframeId: k }),
            ],
          })
        : null
    );
  }
  function B(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
      { onLoad: a } = n,
      [l, o] = r.useState(!1),
      d = r.useCallback(
        (e) => {
          (o(!0), a?.(e));
        },
        [a],
      );
    return (0, i.jsxs)("div", {
      className: k.Qf,
      children: [
        !l && (0, i.jsx)("div", { className: s()(k.Qf, !0 !== t ? k.SL : void 0) }),
        (0, i.jsx)("div", {
          className: s()(k.Qf, l ? void 0 : k.Ar),
          children: (0, i.jsx)(F, { ...n, onLoad: d }),
        }),
      ],
    });
  }
}
