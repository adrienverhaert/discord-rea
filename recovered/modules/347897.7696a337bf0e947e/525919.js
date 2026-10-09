/* Recovered shipped factory. Module 525919.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 530219..530404
 * Raw property SHA-256: a69ac52629fa03ac69e05da40e1bec1bed353f922275a33ea441280de323c8a3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "hi",
    pluralRuleFunction: function (e, t) {
      return t
        ? 1 == e
          ? "one"
          : 2 == e || 3 == e
            ? "two"
            : 4 == e
              ? "few"
              : 6 == e
                ? "many"
                : "other"
        : e >= 0 && e <= 1
          ? "one"
          : "other";
    },
  });
}
