/* Recovered shipped factory. Module 222425.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 530942..531278
 * Raw property SHA-256: f3c69969dc322259c11a5c3f067f35170ff48a5fe422be7b95c05723dedfc069
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "it",
    pluralRuleFunction: function (e, t) {
      var r = !String(e).split(".")[1];
      return t
        ? 11 == e || 8 == e || 80 == e || 800 == e
          ? "many"
          : "other"
        : 1 == e && r
          ? "one"
          : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "it-CH", parentLocale: "it" }),
    IntlMessageFormat.__addLocaleData({ locale: "it-SM", parentLocale: "it" }));
}
