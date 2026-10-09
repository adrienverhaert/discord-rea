/* Recovered shipped factory. Module 135261.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3408728..3413728
 * Raw property SHA-256: b4756705858a3c7881a678fefb015c8a6469ea469c0c54e3564acdf6a9e190d9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => O, P: () => C });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(235599),
    o = n(621466),
    d = n(902001),
    c = n(899536),
    u = n(929788),
    _ = n(74833),
    E = n(216964),
    A = n(387758),
    h = n(39623),
    f = n(559106),
    I = n(750506),
    p = n(267102),
    T = n(186306),
    m = n(339871),
    g = n(820066),
    S = n(660183),
    N = n(9287);
  function C(e) {
    let { slateEditor: t, options: n, iconClassName: r, dividerClassName: a } = e;
    return null == t
      ? null
      : (0, i.jsxs)("div", {
          className: N.Uo,
          children: [
            (0, i.jsx)(R, {
              slateEditor: t,
              markdownSyntax: "bold",
              children: (0, i.jsx)(d.$, {
                size: "md",
                color: "currentColor",
                className: s()(N.Kk, r),
              }),
            }),
            (0, i.jsx)(R, {
              slateEditor: t,
              markdownSyntax: "italics",
              children: (0, i.jsx)(c.y, {
                size: "md",
                color: "currentColor",
                className: s()(N.Kk, r),
              }),
            }),
            (0, i.jsx)(R, {
              slateEditor: t,
              markdownSyntax: "underline",
              children: (0, i.jsx)(u.q, {
                size: "md",
                color: "currentColor",
                className: s()(N.Kk, r),
              }),
            }),
            (0, i.jsx)(R, {
              slateEditor: t,
              markdownSyntax: "strikethrough",
              children: (0, i.jsx)(_.t, {
                size: "md",
                color: "currentColor",
                className: s()(N.Kk, r),
              }),
            }),
            (0, i.jsx)("div", { className: s()(N.yF, a) }),
            !n?.disableBlockQuotes &&
              (0, i.jsx)(L, {
                slateEditor: t,
                blockType: "blockQuote",
                children: (0, i.jsx)(E.c, {
                  size: "md",
                  color: "currentColor",
                  className: s()(N.Kk, r),
                }),
              }),
            !n?.disableInlineCode &&
              (0, i.jsx)(R, {
                slateEditor: t,
                markdownSyntax: "inlineCode",
                children: (0, i.jsx)(A.G, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: "currentColor",
                  className: s()(N.Kk, r),
                }),
              }),
            (0, i.jsx)(R, {
              slateEditor: t,
              markdownSyntax: "spoiler",
              children: (0, i.jsx)(h.EyeIcon, {
                size: "md",
                color: "currentColor",
                className: s()(N.Kk, r),
              }),
            }),
          ],
        });
  }
  function O(e) {
    let { getSlateEditor: t, containerRef: n, options: a, ref: s } = e,
      d = r.useRef(null),
      [c, u] = r.useState(!1),
      _ = r.useRef(null),
      E = r.useContext(p.Ay),
      A = r.useCallback(() => {
        (u(!1), clearTimeout(_.current));
      }, []),
      h = r.useCallback(
        (e) => {
          let t = E.renderWindow;
          (e.target instanceof t.Node && d.current?.contains(e.target)) || A();
        },
        [E, A],
      ),
      f = r.useCallback(
        (e) => {
          let t = E.renderWindow;
          if (e.target instanceof t.Element)
            if (0 !== e.button) A();
            else {
              let i = e.target instanceof t.Node && d.current?.contains(e.target);
              (clearTimeout(_.current),
                (_.current = setTimeout(() => {
                  let t = (0, o.BF)(e)?.activeElement,
                    r = n.current;
                  u(i || (null != t && null != r && r.contains(t)));
                }, 100)));
            }
          else A();
        },
        [E, n, A],
      );
    (r.useImperativeHandle(s, () => ({ hide: A }), [A]),
      r.useEffect(() => {
        let e = E.renderWindow;
        return (
          e.document.addEventListener("keydown", A),
          e.document.addEventListener("mousedown", h),
          e.document.addEventListener("mouseup", f),
          e.addEventListener("focus", A),
          e.addEventListener("blur", A),
          () => {
            (e.document.removeEventListener("keydown", A),
              e.document.removeEventListener("mousedown", h),
              e.document.removeEventListener("mouseup", f),
              e.removeEventListener("focus", A),
              e.removeEventListener("blur", A),
              clearTimeout(_.current));
          }
        );
      }, [E, A, h, f]));
    let { x: T, y: m } = r.useMemo(() => {
        let e = t();
        if (e?.selection == null || g.ZF.isCollapsed(e.selection) || !c)
          return { x: null, y: null };
        let i = l.rL.findDocumentOrShadowRoot(e),
          r = i.getSelection();
        if (null == r || null == r.focusNode || null == r.anchorNode || r.isCollapsed)
          return { x: null, y: null };
        let a = i.createRange();
        (a.setStart(r.focusNode, r.focusOffset), a.setEnd(r.focusNode, r.focusOffset));
        let s = a.getBoundingClientRect(),
          o = i.createRange();
        (o.setStart(r.anchorNode, r.anchorOffset), o.setEnd(r.anchorNode, r.anchorOffset));
        let d = o.getBoundingClientRect(),
          u = i.createRange();
        (u.setStart(r.anchorNode, r.anchorOffset), u.setEnd(r.focusNode, r.focusOffset));
        let _ = u.getBoundingClientRect(),
          E = s.x === d.x,
          A = E ? _.x : Math.min(s.x, d.x);
        return {
          x: A + ((E ? _.x + _.width : Math.max(s.x, d.x)) - A) / 2,
          y: Math.max(n.current?.getBoundingClientRect()?.y ?? 0, Math.min(d.y, s.y)),
        };
      }, [n, c, t]),
      [S, O] = r.useState(0),
      [R, L] = r.useState(0);
    if (
      (r.useLayoutEffect(() => {
        if (null == T || null == m || null == d.current) return;
        let e = d.current.getBoundingClientRect();
        (L(e.width / 2), O(e.height + 12));
      }, [T, m]),
      null == T || null == m)
    )
      return null;
    let y = t();
    return null == y
      ? null
      : (0, i.jsx)(I.Ay, {
          children: (0, i.jsx)("div", {
            id: "slate-toolbar",
            ref: d,
            className: N.KE,
            style: { top: m - S, left: T - R },
            onMouseDown: (e) => {
              (e.preventDefault(), e.stopPropagation());
            },
            onMouseUp: (e) => {
              e.stopPropagation();
            },
            children: (0, i.jsx)(C, { slateEditor: y, options: a }),
          }),
        });
  }
  function R(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
      a = !1;
    if (t?.selection != null) {
      let [e, i] = g.ZF.edges(t.selection);
      a = null != (0, m.Sx)(t, e, i).before[n];
    }
    return (0, i.jsx)(f.vN, {
      children: (0, i.jsx)("button", {
        "aria-label": (function (e) {
          switch (e) {
            case "bold":
              return S.intl.string(S.t.XI2CUr);
            case "italics":
              return S.intl.string(S.t.a96YKu);
            case "underline":
              return S.intl.string(S.t.PdIYwI);
            case "strikethrough":
              return S.intl.string(S.t["63uDvE"]);
            case "inlineCode":
              return S.intl.string(S.t.iBerkZ);
            case "spoiler":
              return S.intl.string(S.t["F+x38C"]);
          }
        })(n),
        "aria-pressed": a,
        className: N.x6,
        onClick: function () {
          null != t && T.o.withSingleEntry(t, () => (0, m.Px)(t, n));
        },
        children: r,
      }),
    });
  }
  function L(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
      a = null != n ? g.VW.getCurrentBlock(n) : null,
      s = null != a && g.AS.isType(a[0], t);
    return (0, i.jsx)(f.vN, {
      children: (0, i.jsx)("button", {
        "aria-label": (function (e) {
          if ("blockQuote" === e) return S.intl.string(S.t.svB7eY);
        })(t),
        "aria-pressed": s,
        className: N.x6,
        onClick: function () {
          null != n && T.o.withSingleEntry(n, () => (0, m.fO)(n, t));
        },
        children: r,
      }),
    });
  }
}
