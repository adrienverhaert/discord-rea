/* Recovered shipped factory. Module 938855.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7730876..7731982
 * Raw property SHA-256: 97d27b913b0ec5e6090de23142dbf621e924639c60d730180cb153a8c762db6f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { F: () => A, Q4: () => h, W9: () => E });
  var r = n(915639);
  let a = new Map(),
    s = new Map(),
    l = new Set(),
    o = Promise.resolve();
  function d(e) {
    let t = a.get(e);
    if (null != t) return t;
    if (!(e in r.pb)) {
      let t = Promise.resolve(null);
      return (a.set(e, t), t);
    }
    return (
      (o = (t = o
        .then(async () => {
          let t = await (null == i &&
            (i = Promise.resolve()
              .then(() => (0, r.A)())
              .catch(() => null)
              .then((e) => (null == e && (i = void 0), e))),
          i);
          return null == t ? null : t.loadGrammar(r.pb[e]);
        })
        .then((t) => {
          if (null == t) return (a.delete(e), s.delete(e), null);
          for (let n of (s.set(e, t), l)) n(e);
          return t;
        })
        .catch(() => (a.delete(e), s.delete(e), null))).then(
        () => {},
        () => {},
      )),
      a.set(e, t),
      t
    );
  }
  function c(e) {
    return {
      highlightToHtml(t) {
        let n = e.createSession();
        try {
          n.setText(t);
          let { html: e, missingInjections: i } = n.highlightToHtml();
          return { html: e, missingInjections: i.sort() };
        } finally {
          n.free();
        }
      },
    };
  }
  let u = new Map();
  async function _(e) {
    try {
      let t = await d(e);
      return null == t ? null : c(t);
    } catch {
      return null;
    }
  }
  function E(e) {
    let t = u.get(e);
    return (null == t && ((t = _(e)), u.set(e, t)), t);
  }
  function A(e) {
    let t = s.has(e) ? (s.get(e) ?? null) : (d(e), null);
    return null != t ? c(t) : null;
  }
  function h(e) {
    return (l.add(e), () => l.delete(e));
  }
}
