/* Recovered shipped factory. Module 186306.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3380826..3382416
 * Raw property SHA-256: 3fc7186fefd19fcb97f63c778bc6b5fb5c77e77856dd287ff1107e1363e31127
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { o: () => s }), n(321073));
  var i = n(820066);
  let r = new WeakMap(),
    a = new WeakMap(),
    s = {
      isMerging: (e) => a.get(e) ?? !0,
      isSaving: (e) => r.get(e) ?? !0,
      withoutMerging(e, t) {
        let n = this.isMerging(e);
        a.set(e, !1);
        try {
          t();
        } finally {
          a.set(e, n);
        }
      },
      withoutSaving(e, t) {
        let n = this.isSaving(e);
        r.set(e, !1);
        try {
          t();
        } finally {
          r.set(e, n);
        }
      },
      withSingleEntry: (e, t) => l(e, "other", !1, t),
      withMergedEntry: (e, t) => l(e, "other", !0, t),
      currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
      insertOrMergeEntry(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = s.currentEntry(e);
        s.isMerging(e) && i?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
      },
      insertEntry(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        ((a = a ?? e.selection), (r = r ?? i.VW.richValue(e)));
        let { history: l } = e,
          o = s.currentEntry(e);
        for (
          null != o && (o.mergeable = !1), l.stack.length > 0 && (l.stack.length = l.index + 1);
          l.stack.length >= 250;
        )
          l.stack.shift();
        (l.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: r, selection: a }),
          (l.index = l.stack.length - 1));
      },
      mergeEntry(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { selection: n } = e,
          r = i.VW.richValue(e),
          a = s.currentEntry(e);
        null != a && ((a.value = r), (a.selection = n), t || (a.mergeable = !1));
      },
    };
  function l(e, t, n, a) {
    let l = e.children,
      o = e.selection,
      d = s.isSaving(e);
    r.set(e, !1);
    try {
      let r = a();
      return (
        d &&
          (n
            ? s.mergeEntry(e)
            : e.children !== l
              ? s.insertEntry(e, t, !1)
              : s.isMerging(e) &&
                null != e.selection &&
                (null == o || !i.ZF.equals(e.selection, o)) &&
                s.mergeEntry(e)),
        r
      );
    } finally {
      r.set(e, d);
    }
  }
}
