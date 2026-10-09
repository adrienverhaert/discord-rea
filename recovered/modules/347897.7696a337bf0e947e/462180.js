/* Recovered shipped factory. Module 462180.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1230991..1231756
 * Raw property SHA-256: 9ee9fa6249b067bd980fc25e36bcd1aa8a6b71d52b4e3cf721c8bca7ff0e1fa6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { x: () => i });
  let n = (e, t) => {
    let r = e instanceof Map ? e : new Map(e.entries()),
      n = t instanceof Map ? t : new Map(t.entries());
    if (r.size !== n.size) return !1;
    for (let [e, t] of r) if (!n.has(e) || !Object.is(t, n.get(e))) return !1;
    return !0;
  };
  function i(e, t) {
    if (Object.is(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    )
      return !1;
    if (Symbol.iterator in e && Symbol.iterator in t) {
      if ("entries" in e && "entries" in t) return n(e, t);
      let r = e[Symbol.iterator](),
        i = t[Symbol.iterator](),
        o = r.next(),
        a = i.next();
      for (; !o.done && !a.done;) {
        if (!Object.is(o.value, a.value)) return !1;
        ((o = r.next()), (a = i.next()));
      }
      return !!o.done && !!a.done;
    }
    return n({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
  }
}
