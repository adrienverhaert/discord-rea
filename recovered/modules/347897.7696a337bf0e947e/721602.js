/* Recovered shipped factory. Module 721602.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 505603..506571
 * Raw property SHA-256: 99526982911e70611e09dfbd912ab7987f9ab77f7cd8198b8f6b2c84bc7faa3f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(353841),
    i = r(788409)(),
    o = r(741623),
    a = {
      assert: function (e, t) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new o("`O` is not an object");
        if ("string" != typeof t) throw new o("`slot` must be a string");
        if ((i.assert(e), !a.has(e, t))) throw new o("`" + t + "` is not present on `O`");
      },
      get: function (e, t) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new o("`O` is not an object");
        if ("string" != typeof t) throw new o("`slot` must be a string");
        var r = i.get(e);
        return r && r["$" + t];
      },
      has: function (e, t) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new o("`O` is not an object");
        if ("string" != typeof t) throw new o("`slot` must be a string");
        var r = i.get(e);
        return !!r && n(r, "$" + t);
      },
      set: function (e, t, r) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new o("`O` is not an object");
        if ("string" != typeof t) throw new o("`slot` must be a string");
        var n = i.get(e);
        (n || ((n = {}), i.set(e, n)), (n["$" + t] = r));
      },
    };
  (Object.freeze && Object.freeze(a), (e.exports = a));
}
