/* Recovered shipped factory. Module 320207.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 532428..532556
 * Raw property SHA-256: 937f86b4a3986eb42e6904db3895bec8a2756e3eada9a42256ef1e5fa7fc8d74
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "no",
    pluralRuleFunction: function (e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
  });
}
