/* Recovered shipped factory. Module 998736.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 672657..673195
 * Raw property SHA-256: e3ae3b9184cf8c6afd885379a437808e297cf813179932279900018303ceb502
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = function (e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return "";
    }
  };
  e.exports = function (e, r, n, i) {
    return ((r = r || "&"), (n = n || "="), null === e && (e = void 0), "object" == typeof e)
      ? Object.keys(e)
          .map(function (i) {
            var o = encodeURIComponent(t(i)) + n;
            return Array.isArray(e[i])
              ? e[i]
                  .map(function (e) {
                    return o + encodeURIComponent(t(e));
                  })
                  .join(r)
              : o + encodeURIComponent(t(e[i]));
          })
          .filter(Boolean)
          .join(r)
      : i
        ? encodeURIComponent(t(i)) + n + encodeURIComponent(t(e))
        : "";
  };
}
