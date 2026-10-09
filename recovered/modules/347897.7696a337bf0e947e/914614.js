/* Recovered shipped factory. Module 914614.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 535184..535382
 * Raw property SHA-256: 4bf93e0376f45e2247e31d6765941acb3fae76e3045929e327fd2a98351113a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "tr",
    pluralRuleFunction: function (e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "tr-CY", parentLocale: "tr" }));
}
