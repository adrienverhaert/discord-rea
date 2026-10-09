/* Recovered shipped factory. Module 117635.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 530796..530941
 * Raw property SHA-256: 86329449e9c99bd89663010160cc1d51b211669247769da2dd22b91d126663cb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "hu",
    pluralRuleFunction: function (e, t) {
      return t ? (1 == e || 5 == e ? "one" : "other") : 1 == e ? "one" : "other";
    },
  });
}
