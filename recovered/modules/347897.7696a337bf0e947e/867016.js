/* Recovered shipped factory. Module 867016.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 542001..542270
 * Raw property SHA-256: c7cafc2259993b7ca6bcf8215b0f529b67acb035f7d3b60a937c7abdfd2b4807
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  t.default = {
    locale: "en",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = !r[1],
        i = Number(r[0]) == e,
        o = i && r[0].slice(-1),
        a = i && r[0].slice(-2);
      return t
        ? 1 == o && 11 != a
          ? "one"
          : 2 == o && 12 != a
            ? "two"
            : 3 == o && 13 != a
              ? "few"
              : "other"
        : 1 == e && n
          ? "one"
          : "other";
    },
  };
}
