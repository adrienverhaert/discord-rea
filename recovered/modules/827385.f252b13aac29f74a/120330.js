/* Recovered shipped factory. Module 120330.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 15985..17768
 * Raw property SHA-256: 3f9d73e3d2e14015579f01e8108aff4d613a4e21b16fca2a2feab6c7d1261a4c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, {
    BT: () => i,
    Wt: () => l,
    bf: () => s,
    xC: () =>
      function e(n) {
        if ("number" == typeof n) return new a.W(n);
        if ("bigint" == typeof n) return new a.W(n.toString());
        if (((0, u.V1)("symbol" != typeof n, "Symbol is not supported", TypeError), void 0 === n))
          return new a.W(NaN);
        if (null === n || 0 === n) return r;
        if (!0 === n) return new a.W(1);
        if ("string" == typeof n)
          try {
            return new a.W(n);
          } catch {
            return new a.W(NaN);
          }
        (0, u.V1)("object" == typeof n, "object expected", TypeError);
        let t = (function (e, n) {
          if ("object" == typeof e && null != e) {
            let t,
              a = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
            if (void 0 !== a) {
              void 0 === n
                ? (t = "default")
                : "string" === n
                  ? (t = "string")
                  : ((0, u.V1)("number" === n, 'preferredType must be "string" or "number"'),
                    (t = "number"));
              let r = a.call(e, t);
              if ("object" != typeof r) return r;
              throw TypeError("Cannot convert exotic object to primitive.");
            }
            for (let t of (void 0 === n && (n = "number"),
            "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"])) {
              let n = e[t];
              if (d(n)) {
                let t = n.call(e);
                if ("object" != typeof t) return t;
              }
            }
            throw TypeError("Cannot convert object to primitive value");
          }
          return e;
        })(n, "number");
        return ((0, u.V1)("object" != typeof t, "object expected", TypeError), e(t));
      },
  });
  var a = t(162929);
  new a.W(10);
  let r = new a.W(0);
  new a.W(-0);
  var u = t(243399);
  function s(e) {
    if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
    return String(e);
  }
  function i(e) {
    if (null == e) throw TypeError("undefined/null cannot be converted to object");
    return Object(e);
  }
  function d(e) {
    return "function" == typeof e;
  }
  function l(e, n, t) {
    if (!d(e)) return !1;
    if (t?.boundTargetFunction) return n instanceof t?.boundTargetFunction;
    if ("object" != typeof n) return !1;
    let a = e.prototype;
    if ("object" != typeof a)
      throw TypeError(
        "OrdinaryHasInstance called on an object with an invalid prototype property.",
      );
    return Object.prototype.isPrototypeOf.call(a, n);
  }
}
