/* Recovered shipped factory. Module 377815.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 515949..516461
 * Raw property SHA-256: f32b999bac5dc88a662cb9de0d1ed81025b10c9f2d07f07967d927e6dbc22814
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "de",
    pluralRuleFunction: function (e, t) {
      var r = !String(e).split(".")[1];
      return t ? "other" : 1 == e && r ? "one" : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "de-AT", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-BE", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-CH", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-LI", parentLocale: "de" }),
    IntlMessageFormat.__addLocaleData({ locale: "de-LU", parentLocale: "de" }));
}
