/* Recovered shipped factory. Module 274306.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 531845..532427
 * Raw property SHA-256: 3639eb5488e4c2443857d9a36f586e9ec52f6112ecca5220128a15382ba5873e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "nl",
    pluralRuleFunction: function (e, t) {
      var r = !String(e).split(".")[1];
      return t ? "other" : 1 == e && r ? "one" : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-AW", parentLocale: "nl" }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-BE", parentLocale: "nl" }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-BQ", parentLocale: "nl" }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-CW", parentLocale: "nl" }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-SR", parentLocale: "nl" }),
    IntlMessageFormat.__addLocaleData({ locale: "nl-SX", parentLocale: "nl" }));
}
