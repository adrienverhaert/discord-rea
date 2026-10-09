/* Recovered shipped factory. Module 88218.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4516251..4520366
 * Raw property SHA-256: 9edf7737caf6257b57ea29cdb858f942d42f06ce1815a28e9f1200be7697c291
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T, J: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(962125),
    d = n(151271),
    c = n(887129),
    u = n(602034),
    _ = n(17928),
    E = n(775602);
  function A(e) {
    let t = document.activeElement?.getAttribute(u.eM);
    return null == t ? null : e((0, u.HP)(t));
  }
  function h(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 8,
      r = arguments.length > 4 ? arguments[4] : void 0,
      a = r ?? ++n.current;
    if (a !== n.current) return;
    let s = document.querySelector((0, u.Mz)((0, u.t$)(e, t)));
    null != s ? s.focus() : i > 0 && requestAnimationFrame(() => h(e, t, n, i - 1, a));
  }
  function f(e) {
    return {
      itemIdForIndex: (t) => `${e}${t}`,
      parseIndex: (t) => {
        if (null == t || !t.startsWith(e)) return null;
        let n = t.slice(e.length);
        if ("" === n) return null;
        let i = Number(n);
        return Number.isInteger(i) ? i : null;
      },
    };
  }
  var I = n(652215),
    p = n(14753);
  let T = function (e) {
    let {
        categoryListRef: t,
        expressionsListRef: n,
        categories: a,
        store: u,
        children: T,
        emojiPacksHeader: m,
        className: g,
        listPadding: S,
        rowCount: N,
        getScrollOffsetForIndex: C,
        categoryHeight: O,
        onScroll: R,
        renderCategoryListItem: L,
        rowCountBySection: y,
        renderSection: D,
        navId: v,
        itemIdPrefix: b,
      } = e,
      M = u.useStore((e) => e.activeCategoryIndex),
      P = null != v && null != b,
      { itemIdForIndex: U, parseIndex: w } = r.useMemo(() => f(b ?? "expression-category-"), [b]),
      G = (function (e) {
        let {
            navId: t,
            categoryListRef: n,
            itemIdForIndex: i,
            parseIndex: a,
            rowCount: s,
            activeIndex: l,
            getScrollOffsetForIndex: o,
            enabled: d = !0,
          } = e,
          u = (0, _.bG)([E.Ay], () => E.Ay.keyboardModeEnabled),
          f = r.useRef(null),
          I = r.useRef(0),
          p = d && u;
        r.useEffect(
          () => () => {
            I.current += 1;
          },
          [],
        );
        let T = r.useCallback(
            (e, t) => {
              let i = o?.(e, t) ?? 0;
              n.current?.scrollRowIntoView(e, { animate: !1, offset: i });
            },
            [n, o],
          ),
          m = r.useCallback(
            (e, n) => {
              let r = a(n);
              if (null != r) {
                let e = A(a) ?? f.current;
                (T(r, null == e || r >= e), (f.current = r));
              }
              let s = document.querySelector(e);
              if (null != s) {
                ((I.current += 1), s.focus());
                return;
              }
              null != r && h(t, i(r), I);
            },
            [i, t, a, T],
          ),
          g = r.useCallback(
            (e, n) => {
              (T(e, n), (f.current = e), h(t, i(e), I));
            },
            [i, t, T],
          ),
          S = r.useCallback(
            () =>
              new Promise((e) => {
                (n.current?.scrollTo(0),
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => e());
                  }));
              }),
            [n],
          ),
          N = r.useCallback(
            () =>
              new Promise((e) => {
                let t = n.current?.getListDimensions().totalHeight ?? Number.MAX_SAFE_INTEGER;
                (n.current?.scrollTo(t),
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => e());
                  }));
              }),
            [n],
          ),
          C = r.useCallback(() => {
            let e = A(a) ?? f.current;
            null == e || e >= s - 1 || g(e + 1, !0);
          }, [g, a, s]),
          O = r.useCallback(() => {
            let e = A(a) ?? f.current;
            null == e || e <= 0 || g(e - 1, !1);
          }, [g, a]),
          R = (0, c.Ay)({
            id: t,
            isEnabled: p,
            setFocus: m,
            scrollToStart: S,
            scrollToEnd: N,
            onNavigateNextAtEnd: C,
            onNavigatePreviousAtStart: O,
          }),
          L = R.setFocus;
        return (
          r.useEffect(() => {
            if (!d || l < 0 || l >= s) return;
            let e = n.current?.getScrollerNode();
            if (null != e && e.contains(document.activeElement)) return;
            let t = 0,
              r = requestAnimationFrame(() => {
                t = requestAnimationFrame(() => {
                  ((f.current = l), L(i(l)));
                });
              });
            return () => {
              (cancelAnimationFrame(r), cancelAnimationFrame(t));
            };
          }, [l, n, d, i, L, s]),
          R
        );
      })({
        navId: v ?? "expression-picker-categories-disabled",
        categoryListRef: t,
        itemIdForIndex: U,
        parseIndex: w,
        rowCount: N,
        activeIndex: M,
        getScrollOffsetForIndex: C,
        enabled: P,
      });
    !(function (e) {
      let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
        a = r.useRef(I.An1),
        s = r.useRef(t);
      r.useEffect(() => {
        null != t &&
          t !== s.current &&
          (a.current !== I.An1 && window.cancelAnimationFrame(a.current),
          (a.current = window.requestAnimationFrame(() => {
            if (null == n.current) return;
            let e = t > (s.current ?? -1),
              r = null != i ? i(t, e) : 0;
            (n.current.scrollRowIntoView(t, { animate: !0, offset: r }),
              (a.current = I.An1),
              (s.current = t));
          })));
      }, [t, n, i]);
    })({ activeIndex: M, categoryListRef: t, getScrollOffsetForIndex: C });
    let x = r.useCallback(
        (e) => {
          let { searchQuery: t } = d.RQ.getState();
          (u.setActiveCategoryIndex(e),
            "" !== t ? (0, d.Ri)("") : n.current?.scrollToSectionTop(e));
        },
        [n, u],
      ),
      k = r.useCallback((e) => L(a[e], e, () => x(e), M === e), [M, a, x, L]),
      F = r.useMemo(() => ("function" == typeof O ? (e) => O(a[e], e) : O), [a, O]),
      B = (0, i.jsx)(o.A, {
        listPadding: S,
        onScroll: R,
        ref: t,
        renderRow: k,
        rowCount: N,
        rowHeight: F,
        hideScrollbar: !0,
        rowCountBySection: y,
        renderSection: D,
        role: P ? "none presentation" : void 0,
      }),
      V = (0, i.jsxs)("div", {
        className: s()(p.iE, { [p.bx]: null != m }, g),
        children: [
          m,
          P
            ? (0, i.jsx)(l.PR, {
                children: (e) => {
                  let { ref: t, ...n } = e;
                  return (0, i.jsx)("div", { className: p.en, ...n, ref: t, children: B });
                },
              })
            : B,
          T?.(x),
        ],
      });
    return P ? (0, i.jsx)(l.hD, { navigator: G, children: V }) : V;
  };
}
