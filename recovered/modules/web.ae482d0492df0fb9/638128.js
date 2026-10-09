/* Recovered shipped factory. Module 638128.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9195174..9196077
 * Raw property SHA-256: a62f9a542de22440e286077138a54a03cafa86b5ae6ca0c97a1b5bf58d5306d8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(377941),
    r = n.n(i),
    a = n(17928),
    s = n(506774),
    l = n(73153),
    o = n(724066),
    d = n(900582);
  let c = "SpellcheckStore",
    u = !0,
    _ = new Set();
  function E() {
    s.w.set(c, { enabled: u, learnedWords: _ });
  }
  class A extends a.Ay.Store {
    static displayName = "SpellcheckStore";
    initialize() {
      let e = s.w.get(c);
      (null != e && ((u = e.enabled), (_ = new Set(e.learnedWords)), (0, d.kv)(u), (0, d.d1)(_)),
        (0, o.I)(d.Av));
    }
    isEnabled() {
      return u;
    }
    hasLearnedWord(e) {
      return _.has(e.toLocaleLowerCase());
    }
    findLearnedWordIn(e) {
      if ("" === e || 0 === _.size) return null;
      let t = e.toLocaleLowerCase();
      for (let e of _)
        if (RegExp(`(?<![\\p{L}\\p{N}_])${r()(e)}(?![\\p{L}\\p{N}_])`, "u").test(t)) return e;
      return null;
    }
  }
  let h = new A(l.h, {
    SPELLCHECK_TOGGLE() {
      ((u = !u), (0, d.kv)(u), E());
    },
    SPELLCHECK_LEARN_WORD(e) {
      let { word: t } = e;
      (_.add(t.toLocaleLowerCase()), (0, d.d1)(_), E());
    },
    SPELLCHECK_UNLEARN_WORD(e) {
      let { word: t } = e;
      (_.delete(t.toLocaleLowerCase()), (0, d.d1)(_), E());
    },
  });
}
