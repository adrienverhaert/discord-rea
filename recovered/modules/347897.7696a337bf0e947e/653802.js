/* Recovered shipped factory. Module 653802.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 515485..515687
 * Raw property SHA-256: 0fe59ed7e7e26891dfc047df19da1b0d85b40488ca0c4b61c0f94c6af7b657ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "cs",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = !r[1];
      return t
        ? "other"
        : 1 == e && i
          ? "one"
          : n >= 2 && n <= 4 && i
            ? "few"
            : i
              ? "other"
              : "many";
    },
  });
}
