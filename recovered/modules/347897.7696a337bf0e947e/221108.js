/* Recovered shipped factory. Module 221108.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 22914..23801
 * Raw property SHA-256: 8915942f87f5ded5706512d3d5985b3a9fe294a5a90dd01c877812c7aae79c94
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  function r(e) {
    return "IntlMessagesProxy" === e[Symbol.toStringTag];
  }
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.chainMessagesObjects = function (e, t) {
      let n = r(e),
        i = r(t),
        o = e;
      return (
        n && i
          ? (e.$$loader.fallbackWith(t.$$loader), (o = e))
          : n || i
            ? n && !i
              ? (o = Object.assign(e.$$baseObject, t))
              : i && !n && (o = Object.assign(t.$$baseObject, e))
            : (o = Object.assign(Object.assign({}, t), e)),
        o
      );
    }),
    (t.makeMessagesProxy = function (e) {
      function t(t) {
        return (r) => e.get(t, r);
      }
      let r = {},
        n = new Proxy(r, {
          ownKeys: (e) => Reflect.ownKeys(e),
          getOwnPropertyDescriptor: (e, r) => (
            e[r] || (e[r] = t(r)),
            Reflect.getOwnPropertyDescriptor(e, r)
          ),
          get: (e, r) =>
            "$$typeof" === r
              ? "object"
              : r === Symbol.toStringTag
                ? "IntlMessagesProxy"
                : (e[r] || (e[r] = t(r)), e[r]),
        });
      return (
        Object.defineProperty(n, "$$baseObject", {
          value: r,
          enumerable: !1,
          configurable: !1,
          writable: !1,
        }),
        Object.defineProperty(n, "$$loader", {
          value: e,
          enumerable: !1,
          configurable: !1,
          writable: !1,
        }),
        n
      );
    }));
}
