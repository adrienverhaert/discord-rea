/* Recovered shipped factory. Module 339871.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3405870..3408727
 * Raw property SHA-256: f927f8e8ab5c7b687239457d84c6085266e637757d1a08678ecc85948c02eb80
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Px: () => h, Sx: () => c, fO: () => f });
  var i = n(284009),
    r = n.n(i),
    a = n(186306),
    s = n(35277),
    l = n(820066);
  let o = new Set(["*", "_", "~", "`", "|"]),
    d = {
      bold: "**",
      italics: "*",
      underline: "__",
      strikethrough: "~~",
      inlineCode: "`",
      spoiler: "||",
    };
  function c(e, t, n) {
    if (null == e.selection) return { before: {}, after: {} };
    let i = u(e, t),
      r = u(e, n);
    for (let e in i) e in r || delete i[e];
    for (let e in r) e in i || delete r[e];
    return { before: i, after: r };
  }
  function u(e, t) {
    let [n] = l.VW.node(e, t.path);
    if (!l.l5.isText(n)) return {};
    let i = n.text,
      r = t.offset;
    for (let e = r - 1; e >= 0; e--)
      if (o.has(i.charAt(e))) r--;
      else break;
    let a = t.offset;
    for (let e = a; e < i.length; e++)
      if (o.has(i.charAt(e))) a++;
      else break;
    let s = i.substring(r, a),
      d = {};
    return (
      E({ result: d, text: s, startIndex: r, syntax: "***", type1: "italics", type2: "bold" }),
      E({ result: d, text: s, startIndex: r, syntax: "___", type1: "italics", type2: "underline" }),
      _(d, s, r, "**", "bold"),
      _(d, s, r, "*", "italics"),
      _(d, s, r, "_", "italics"),
      _(d, s, r, "__", "underline"),
      _(d, s, r, "`", "inlineCode"),
      _(d, s, r, "~~", "strikethrough"),
      _(d, s, r, "||", "spoiler"),
      d
    );
  }
  function _(e, t, n, i, r) {
    let a = A(t, i);
    a >= 0 && (e[r] = { chars: i, location: n + a });
  }
  function E(e) {
    let { result: t, text: n, startIndex: i, syntax: r, type1: a, type2: s } = e,
      l = A(n, r);
    l >= 0 &&
      ((t[a] = { chars: r.substring(0, 1), location: l + i }),
      (t[s] = { chars: r.substring(1), location: l + i + 1 }));
  }
  function A(e, t) {
    let n = e.indexOf(t);
    if (n >= 0) {
      let i = t.charAt(0);
      if ((n > 0 && e.charAt(n - 1) === i) || (n < e.length - 1 && e.charAt(n + t.length) === i))
        return -1;
    }
    return n;
  }
  function h(e, t) {
    (a.o.withSingleEntry(e, () => {
      l.VW.withoutNormalizing(e, () => {
        r()(null != e.selection, "Editor has no selection");
        let [n, i] = l.ZF.edges(e.selection),
          a = c(e, n, i),
          o = a.before[t],
          u = a.after[t],
          _ = l.VW.node(e, n.path),
          E = l.VW.node(e, i.path);
        if (null == _ || null == E || !l.l5.isText(_[0]) || !l.l5.isText(E[0])) return;
        let A = l.PW.equals(_[1], E[1]);
        if (null != o && null != u) {
          let t = { path: n.path, offset: o.location },
            r = { path: i.path, offset: u.location };
          (s.b.delete(e, { at: r, distance: u.chars.length }),
            s.b.delete(e, { at: t, distance: o.chars.length }));
          let a = n.offset,
            d = i.offset;
          (l.Kh.isBefore(n, t) || (a -= o.chars.length),
            A && !l.Kh.isBefore(i, t) && (d -= o.chars.length),
            l.Kh.isAfter(i, r) && (d -= u.chars.length),
            s.b.select(e, {
              anchor: { path: n.path, offset: Math.max(0, a) },
              focus: { path: i.path, offset: Math.max(0, d) },
            }));
        } else {
          let r = d[t];
          (s.b.insertText(e, r, { at: i }), s.b.insertText(e, r, { at: n }));
          let a = _[0].text.length + r.length,
            l = E[0].text.length + (A ? 2 * r.length : r.length);
          s.b.select(e, {
            anchor: { path: n.path, offset: Math.min(a, n.offset + r.length) },
            focus: { path: i.path, offset: Math.min(l, i.offset + (A ? r.length : 0)) },
          });
        }
      });
    }),
      l.VW.focus(e));
  }
  function f(e, t) {
    let n = e.selection;
    if (null == n) return;
    let i = !0;
    for (let [r, a] of l.VW.blocks(e))
      ("line" === r.type || r.type === t) && l.ZF.includes(n, a) && (i = i && r.type === t);
    (l.VW.withoutNormalizing(e, () => {
      for (let [r, a] of l.VW.blocks(e))
        l.ZF.includes(n, a) &&
          (i || "line" !== r.type
            ? i && r.type === t && s.b.setNodes(e, { type: "line" }, { at: a })
            : s.b.setNodes(e, { type: t }, { at: a }));
    }),
      l.VW.focus(e));
  }
}
