/* Recovered shipped factory. Module 4940.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 7797..8397
 * Raw property SHA-256: 8707e8526e1c1b9ca87632b1490655e6119471ffd765ed66ebe94eddabae27c0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(257943),
    o = e(804272),
    i = e(516549),
    u = e(101968),
    a = e(706598),
    c = TypeError,
    f = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    p = "enumerable",
    l = "configurable",
    v = "writable";
  t.f = n
    ? i
      ? function (r, t, e) {
          if (
            (u(r),
            (t = a(t)),
            u(e),
            "function" == typeof r && "prototype" === t && "value" in e && v in e && !e[v])
          ) {
            var n = s(r, t);
            n &&
              n[v] &&
              ((r[t] = e.value),
              (e = {
                configurable: l in e ? e[l] : n[l],
                enumerable: p in e ? e[p] : n[p],
                writable: !1,
              }));
          }
          return f(r, t, e);
        }
      : f
    : function (r, t, e) {
        if ((u(r), (t = a(t)), u(e), o))
          try {
            return f(r, t, e);
          } catch (r) {}
        if ("get" in e || "set" in e) throw new c("Accessors not supported");
        return ("value" in e && (r[t] = e.value), r);
      };
}
