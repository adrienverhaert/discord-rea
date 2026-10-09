/* Recovered shipped factory. Module 178540.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6964106..6964940
 * Raw property SHA-256: 88f05852dc6e7c631d22ef2e48051f415655f0a42131c52f93e1e5edf59065cf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, O: () => a });
  var i = n(196765);
  let r = [],
    a = (0, i.v)((e, t) => ({
      errorHintsByQuestId: new Map(),
      setErrorHints: (t, n) => {
        e((e) => {
          if (0 === n.length && !e.errorHintsByQuestId.has(t)) return e;
          let i = new Map(e.errorHintsByQuestId);
          return (0 === n.length ? i.delete(t) : i.set(t, [...n]), { errorHintsByQuestId: i });
        });
      },
      getErrorHints: (e) => t().errorHintsByQuestId.get(e) ?? r,
      clearErrorHints: (t) => {
        e((e) => {
          if (!e.errorHintsByQuestId.has(t)) return e;
          let n = new Map(e.errorHintsByQuestId);
          return (n.delete(t), { errorHintsByQuestId: n });
        });
      },
      clearErrorHintsByType: (t, n) => {
        e((e) => {
          let i = e.errorHintsByQuestId.get(t);
          if (null == i) return e;
          let r = i.filter((e) => e.type !== n);
          if (r.length === i.length) return e;
          let a = new Map(e.errorHintsByQuestId);
          return (0 === r.length ? a.delete(t) : a.set(t, r), { errorHintsByQuestId: a });
        });
      },
      reset: () => {
        e({ errorHintsByQuestId: new Map() });
      },
    })),
    s = a;
}
