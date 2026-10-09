/* Recovered shipped factory. Module 35277.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3413729..3418128
 * Raw property SHA-256: 81c2a7da02f9ae8c7fe0986d1ca722be8cac5993df6768db8020f2383aaecf42
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { b: () => l }), n(134528), n(947204));
  var i = n(719442),
    r = n(317681),
    a = n(820066),
    s = n(551483);
  let l = {
    ...i.gB,
    resetSelectionToEditorStart(e) {
      i.gB.select(e, a.VW.start(e, []));
    },
    resetSelectionToEditorEnd(e) {
      i.gB.select(e, a.VW.end(e, []));
    },
    delete(e, t) {
      let { at: n, distance: r, unit: s, reverse: l = !1, select: o = !1, bounds: d, voids: c } = t;
      if (null == n) {
        if (null == e.selection) return;
        n = e.selection;
      }
      let [u, _] = a.ZF.isRange(n) ? a.ZF.edges(n) : a.VW.edges(e, n);
      if (null != r || null != s)
        if (l) {
          let t = a.VW.before(e, u, { distance: r, unit: s }) ?? a.VW.start(e, []);
          if ("character" === s && (r ?? 1) === 1 && a.PW.equals(u.path, _.path)) {
            let n = a.VW.leaf(e, u.path),
              i = null != n ? n[0].text : "";
            i.length > 0 &&
              null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) &&
              (t = a.VW.before(e, u, { distance: r, unit: "offset" }) ?? a.VW.start(e, []));
          }
          u = t;
        } else _ = a.VW.after(e, _, { distance: r, unit: s }) ?? a.VW.end(e, []);
      if (null != d) {
        let [e, t] = a.ZF.edges(d);
        (a.Kh.isBefore(u, e) && (u = e), a.Kh.isAfter(_, t) && (_ = t));
      }
      !a.Kh.equals(u, _) &&
        (i.gB.delete(e, { at: { anchor: u, focus: _ }, hanging: !0, voids: c }),
        o && a.VW.hasPath(e, u.path) && i.gB.select(e, u));
    },
    textToText(e, t, n) {
      let r = a.VW.getSelectionOverlap(e, n),
        [s, l] = a.ZF.edges(n),
        o = a.VW.before(e, s) ?? a.VW.start(e, []),
        c = a.VW.after(e, l);
      (a.ZF.isExpanded(n) && i.gB.delete(e, { at: n, voids: !0 }),
        i.gB.insertText(e, t, { at: o }),
        (o = o ?? a.VW.start(e, [])),
        (c = c ?? a.VW.end(e, [])),
        d(e, r, o, c, c));
    },
    textToVoid(e, t, n) {
      let r = a.VW.getSelectionOverlap(e, n),
        s = a.ZF.start(n),
        l = a.PW.next(s.path),
        o = { path: a.PW.next(l), offset: 0 };
      (i.gB.delete(e, { at: n, voids: !0 }),
        0 === s.offset && i.gB.insertNodes(e, [{ text: "" }], { at: s.path }),
        i.gB.insertNodes(e, [t], { at: s }),
        (a.VW.hasPath(e, o.path) && a.l5.isText(a.VW.node(e, o.path)[0])) ||
          i.gB.insertNodes(e, [{ text: "" }], { at: o.path }),
        d(e, r, s, o, o));
    },
    textToInline(e, t, n) {
      let r = a.VW.getSelectionOverlap(e, n),
        s = t.children[t.children.length - 1],
        l = a.ZF.start(n),
        o = a.PW.next(l.path),
        c = {
          path: a.PW.child(o, t.children.length - 1),
          offset: a.l5.isText(s) ? s.text.length : 0,
        };
      (i.gB.delete(e, { at: n, voids: !0 }),
        0 === l.offset && i.gB.insertNodes(e, [{ text: "" }], { at: l.path }),
        i.gB.insertNodes(e, [t], { at: l }),
        d(e, r, l, c, c));
    },
    voidToText(e, t, n) {
      let r = a.VW.getSelectionOverlap(e, n),
        s = a.VW.before(e, n) ?? a.VW.start(e, []),
        l = { path: s.path, offset: s.offset + t.length };
      (i.gB.delete(e, { at: n, voids: !0 }), i.gB.insertText(e, t, { at: s }), d(e, r, s, s, l));
    },
    removeInline(e, t) {
      let n = a.VW.getSelectionOverlap(e, t),
        r = a.VW.before(e, t) ?? a.VW.start(e, []);
      (i.gB.delete(e, { at: t, voids: !0 }), d(e, n, r, r, r));
    },
    removeInlineChildren(e, t) {
      let [n, r] = t,
        s = a.VW.getSelectionOverlap(e, r),
        l = { path: a.PW.child(r, 0), offset: 0 };
      (a.VW.withoutNormalizing(e, () => {
        for (let t = n.children.length - 1; t >= 0; t--)
          i.gB.removeNodes(e, { at: a.PW.child(r, t), voids: !0 });
      }),
        d(e, s, null, l, null));
    },
    selectCommandOption(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = r.n$(e);
      if (null != s)
        for (let r = 0; r < s[0].children.length; r++) {
          let l = s[0].children[r];
          if (a.AS.isType(l, "applicationCommandOption") && l.optionName === t)
            return void (n ? i.gB.select(e, [0, r]) : i.gB.select(e, a.VW.end(e, [0, r])));
        }
    },
    selectPreviousCommandOption(e) {
      if (null == r.n$(e)) return;
      let t = null != e.selection ? e.selection.focus.path : a.VW.end(e, s.Xg).path,
        n = r.M3(e),
        l = a.VW.previous(e, {
          at: t,
          match: (e) => e !== n?.[0] && a.AS.isType(e, "applicationCommandOption"),
        });
      null != l ? i.gB.select(e, l[1]) : a.PW.isAfter(t, s.fP) && i.gB.select(e, a.VW.end(e, s.fP));
    },
    selectNextCommandOption(e) {
      if (null == r.n$(e)) return;
      let t = null != e.selection ? e.selection.focus.path : a.VW.start(e, s.Xg).path,
        n = r.M3(e),
        o = a.VW.next(e, {
          at: t,
          match: (e) => e !== n?.[0] && a.AS.isType(e, "applicationCommandOption"),
        });
      null != o ? i.gB.select(e, o[1]) : l.resetSelectionToEditorEnd(e);
    },
    insertCommandOption(e, t) {
      (l.resetSelectionToEditorEnd(e),
        l.insertNodes(e, [
          {
            type: "applicationCommandOption",
            optionName: t.name,
            optionDisplayName: t.displayName,
            optionType: t.type,
            children: [{ text: "" }],
          },
        ]));
    },
    keyboardMove(e, t) {
      let { distance: n = 1, unit: r = "character", reverse: s = !1, edge: l } = t ?? {},
        o = e.selection;
      if (null == o) return;
      let d = o.focus;
      if (a.ZF.isExpanded(o)) {
        if (void 0 === l && "character" === r)
          return void i.gB.collapse(e, { edge: s ? "start" : "end" });
        "focus" !== l && (d = "line" === r || s ? a.ZF.start(o) : a.ZF.end(o));
      }
      let c = (s ? a.VW.before : a.VW.after)(e, d, { unit: r, distance: n });
      null != c && i.gB.setSelection(e, "focus" === l ? { focus: c } : { anchor: c, focus: c });
    },
  };
  function o(e, t, n, i, r) {
    switch (t) {
      case "start":
        return n;
      case "inside":
        return i;
      case "end":
        return r;
    }
    return e;
  }
  function d(e, t, n, i, r) {
    if (null == t.anchor && null == t.focus) return;
    let a = o(e.selection?.anchor, t.anchor, n, i, r),
      s = o(e.selection?.focus, t.focus, n, i, r);
    null == a || null == s || l.select(e, { anchor: a, focus: s });
  }
}
