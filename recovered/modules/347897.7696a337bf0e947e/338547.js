/* Recovered shipped factory. Module 338547.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1014720..1014939
 * Raw property SHA-256: a3267fabb2ea7ed8fb5cd0a633564df982e02a5fa19ac62ce4444fa42d17564c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(227106);
  e.exports = function (e) {
    return null === e
      ? "Null"
      : void 0 === e
        ? "Undefined"
        : n(e)
          ? "Object"
          : "number" == typeof e
            ? "Number"
            : "boolean" == typeof e
              ? "Boolean"
              : "string" == typeof e
                ? "String"
                : void 0;
  };
}
