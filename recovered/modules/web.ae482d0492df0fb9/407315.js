/* Recovered shipped factory. Module 407315.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3457713..3464206
 * Raw property SHA-256: d27ee3305e2ee90b1ff766a8071d7b62cef64e4625b08f7adb1a73a1779c16e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Ay: () => R, Q9: () => k, W: () => x }), n(321073));
  var i = n(626551),
    r = n(635377),
    a = n.n(r),
    s = n(181370),
    l = n.n(s),
    o = n(941426),
    d = n(586172),
    c = n(938855),
    u = n(768947),
    _ = n(927813),
    E = n(38405),
    A = n(186306),
    h = n(323350),
    f = n(35277),
    I = n(820066),
    p = n(551483),
    T = n(891031),
    m = n(389437);
  let g = new o.Vy("withCodeBlocks"),
    S = new Set(["line"]),
    N = /^[a-z0-9_+\-.#]+$/i,
    C = null,
    O = null;
  function R(e) {
    let { onChange: t } = e,
      i = null,
      r = !1,
      a = !1;
    function s(t) {
      (0, c.W9)(t)
        .then((t) => {
          null != t &&
            (a ||
              ((a = !0),
              queueMicrotask(() => {
                a = !1;
                try {
                  (A.o.withoutSaving(e, () => {
                    I.VW.withoutNormalizing(e, () => L(e, s));
                  }),
                    (i = I.VW.richValue(e)));
                } catch (e) {
                  g.warn("error applying arborium highlighting to editor", e);
                }
              })));
        })
        .catch(() => {});
    }
    return (
      (e.onChange = () => {
        (I.VW.richValue(e) !== i &&
          (A.o.withoutSaving(e, () => {
            I.VW.withoutNormalizing(e, () => {
              let t = L(e, s),
                { enabled: a } = d.L.getConfig({ location: "syntaxHighlightCodeBlocks" });
              !t ||
                a ||
                null != C ||
                r ||
                ((r = !0),
                (null == O &&
                  (O = Promise.all([n.e("818449"), n.e("175134")])
                    .then(n.bind(n, 981776))
                    .then((e) => {
                      C = e.default;
                    })
                    .catch((e) => {
                      throw ((O = null), e);
                    })),
                O)
                  .then(() => {
                    ((i = null),
                      A.o.withoutSaving(e, () => {
                        I.VW.withoutNormalizing(e, () => L(e));
                      }),
                      (i = I.VW.richValue(e)));
                  })
                  .catch(() => {})
                  .finally(() => {
                    r = !1;
                  }));
            });
          }),
          (i = I.VW.richValue(e))),
          t());
      }),
      e
    );
  }
  function L(e, t) {
    let n = (function (e, t) {
      let n = [],
        r = null;
      for (let t of I.VW.blocks(e))
        ((r = (function (e, t, n, i, r) {
          let a = (function (e) {
              let t,
                [n, i] = e;
              if (!S.has(n.type)) return [];
              let r = [],
                a = /\\|```/g;
              for (let e = 0; e < n.children.length; e++) {
                let s = n.children[e];
                if (I.l5.isText(s))
                  for (a.lastIndex = 0; null != (t = a.exec(s.text));) {
                    if ("\\" === t[0]) {
                      a.lastIndex += 1;
                      continue;
                    }
                    r.push({ path: I.PW.child(i, e), offset: t.index });
                  }
              }
              return r;
            })(t),
            s = a[0],
            l = a[a.length - 1],
            o = null;
          if (null != l) {
            let [t] = I.VW.node(e, l.path);
            o = t.text.substring(l.offset + 3);
          }
          let d = n && null != s,
            c = n && 0 === a.length,
            u = i && 0 === a.length,
            _ = (d ? a.slice(1) : a).length % 2 == 1,
            E = _ && (null == o || "" === o || null != o.match(N)),
            A = E && null != o && "" !== o ? o.toLowerCase() : null;
          return {
            blockEntry: t,
            wasInCodeBlock: n,
            isInCodeBlock: c,
            isStyledCodeBlockLine: u,
            lang: _ || d ? A : r,
            hljsTypes: null,
            closesCodeBlock: d,
            opensCodeBlock: _,
            opensCodeBlockOnOwnLine: E,
          };
        })(
          e,
          t,
          null != r && (r.isInCodeBlock || r.opensCodeBlock),
          null != r && (r.isStyledCodeBlockLine || r.opensCodeBlockOnOwnLine),
          null != r && (r.opensCodeBlock || !r.closesCodeBlock) ? r.lang : null,
        )),
          n.push(r));
      return (
        (function (e, t) {
          let { enabled: n } = d.L.getConfig({ location: "syntaxHighlightCodeBlocks" }),
            r = [],
            a = !1;
          for (let s of e) {
            let o = s === e[e.length - 1];
            if (
              (s.closesCodeBlock || o) &&
              (a && o && !s.closesCodeBlock && r.push(s), (a = !1), r.length > 0)
            ) {
              let e = r.map((e) => (0, h.IQ)(e.blockEntry[0])).join("\n"),
                a = r[0].lang;
              if (null != a && "ansi" === (0, u.py)(a)) {
                let t = (function (e, t) {
                  let n = l()(e),
                    r = G.get(n);
                  if (null != r && r.length === t) return r;
                  let a = [[]],
                    s = 0;
                  function o(e, t, n) {
                    let i = e.split("\n");
                    for (let e = 0; e < i.length; e++) {
                      e > 0 && (a.push([]), (s = 0));
                      let r = i[e].length;
                      if (r > 0 && t.length > 0) {
                        let e = { types: t, start: s, end: s + r };
                        (null != n && (e.style = n), a[a.length - 1].push(e));
                      }
                      s += r;
                    }
                  }
                  let d = 0;
                  for (let t of (0, i.$M)(e)) {
                    o(e.substring(d, t.position), [T.ansiControlSequence]);
                    let n = (0, u.OT)(t);
                    (o(t.value, null != n ? [m.ansi] : [], n), (d = t.position + t.value.length));
                  }
                  return (o(e.substring(d), [T.ansiControlSequence]), a.length !== t)
                    ? null
                    : (G.set(n, a), a);
                })(e, r.length);
                for (let e = 0; e < r.length; e++) r[e].hljsTypes = t?.[e] ?? [];
              } else if (null != a && n)
                !(function (e, t, n, i) {
                  let r = (function (e, t, n, i) {
                    let r,
                      a = (0, u.py)(t);
                    if (null == a) return null;
                    let s = (0, c.F)(a);
                    if (null == s) return (i?.(a), null);
                    let o = l()(`${a}\0${e}`),
                      d = P.get(o);
                    if (null != d && d.length === n) return d;
                    if (U.has(o)) return null;
                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                    try {
                      let t = s.highlightToHtml(e);
                      if (((r = t.html), null != i)) for (let e of t.missingInjections) i(e);
                    } catch (e) {
                      return (
                        U.set(o, !0),
                        E.A.captureException(e instanceof Error ? e : Error(String(e)), {
                          tags: { app_context: "syntax_highlighting" },
                          extra: { lang: a, surface: "editor" },
                        }),
                        null
                      );
                    }
                    let _ = r.split("\n"),
                      A = e.match(/\n*$/)?.[0].length ?? 0;
                    for (let e = 0; e < A; e++) _.push("");
                    if (_.length !== n) return null;
                    let h = [];
                    for (let e = 0; e < n; e++)
                      h.push(
                        (function (e) {
                          let t,
                            n = [],
                            i = [],
                            r = 0,
                            a = 0;
                          for (D.lastIndex = 0; null != (t = D.exec(e));) {
                            let s = t.index + t[0].length,
                              l = w(e.substring(a, t.index)).length,
                              o = i.filter((e) => null != e);
                            if (
                              (l > 0 && o.length > 0 && n.push({ types: o, start: r, end: r + l }),
                              l > 0 && (r += l),
                              null != t[1])
                            ) {
                              let e = v.get(t[1]);
                              i.push(e ?? null);
                            } else i.pop();
                            a = s;
                          }
                          let s = w(e.substring(a)).length,
                            l = i.filter((e) => null != e);
                          return (
                            s > 0 && l.length > 0 && n.push({ types: l, start: r, end: r + s }),
                            n
                          );
                        })(_[e]),
                      );
                    return (P.set(o, h), h);
                  })(e, t, n.length, i);
                  if (null != r) for (let e = 0; e < n.length; e++) n[e].hljsTypes = r[e];
                  else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                })(e, a, r, t);
              else if (null == a || null == C || C.hasLanguage(a)) {
                if (null != a && null != C && C.hasLanguage(a)) {
                  let t = (function (e, t) {
                    if (null == C) return null;
                    let n = `${e}-${t}`,
                      i = M.get(n);
                    if (null != i) return i;
                    let r = C.highlight(t, e, !1);
                    if (null == r || r.illegal) return null;
                    let a = r.value.split("\n");
                    return (M.set(n, a), a);
                  })(e, a);
                  if (null != t && t.length === r.length) {
                    let e = [];
                    for (let n = 0; n < r.length; n++) {
                      let i,
                        a = t[n]
                          .replace(/&amp;/g, "&")
                          .replace(/&lt;/g, "<")
                          .replace(/&gt;/g, ">")
                          .replace(/&quot;/g, '"')
                          .replace(/&#x27;/g, "'"),
                        s = [],
                        l = 0,
                        o = 0;
                      for (; null != (i = y.exec(a));) {
                        let t = i.index + i[0].length,
                          n = i.index - o;
                        (i.index > o &&
                          (e.length > 0 && s.push({ types: [...e], start: l, end: l + n }),
                          (l += n)),
                          "</span>" === i[0] ? e.pop() : e.push(i[1]),
                          (o = t));
                      }
                      if (e.length > 0) {
                        let t = a.length - o;
                        s.push({ types: [...e], start: l, end: l + t });
                      }
                      r[n].hljsTypes = s;
                    }
                  } else for (let e = 0; e < r.length; e++) r[e].hljsTypes = null;
                }
              } else for (let e = 0; e < r.length; e++) r[e].hljsTypes = [];
              r = [];
            }
            (a && r.push(s), s.opensCodeBlock && (a = !0));
          }
        })(n, t),
        n
      );
    })(e, t);
    return (
      (function (e, t) {
        for (let i of t) {
          var n;
          let [t, r] = i.blockEntry,
            a =
              (n = i).isStyledCodeBlockLine || n.wasInCodeBlock
                ? {
                    lang: n.lang,
                    wasInCodeBlock: n.wasInCodeBlock,
                    isInCodeBlock: n.isInCodeBlock,
                    isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                    hljsTypes: n.hljsTypes,
                  }
                : null;
          t?.codeBlockState != a && f.b.setNodes(e, { codeBlockState: a }, { at: r });
        }
      })(e, n),
      n.some((e) => null != e.lang)
    );
  }
  let y = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    D = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    v = new Map();
  for (let [e, t] of Object.entries(m)) e.startsWith("a-") && null != t && v.set(e, t);
  let b = { max: 1 / 0, maxAge: +_.A.Millis.MINUTE, updateAgeOnGet: !0 },
    M = new (a())(b),
    P = new (a())(b),
    U = new (a())(b);
  function w(e) {
    return e
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'");
  }
  (0, c.Q4)(() => {
    P.reset();
  });
  let G = new (a())(b);
  function x(e, t) {
    let n = 0;
    for (let i of I.VW.nodes(e, {
      at: { anchor: { path: p.fP, offset: 0 }, focus: t },
      mode: "lowest",
      match: (e) => I.l5.isText(e),
    })) {
      let e = i[0].text;
      I.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
      let r = e.match(/```/g);
      n += r?.length ?? 0;
    }
    return n % 2 != 0;
  }
  function k(e) {
    if (null == e.selection) return !1;
    let t = I.ZF.start(e.selection);
    return x(e, t);
  }
}
