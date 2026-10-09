/* Recovered shipped factory. Module 144645.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 516462..516660
 * Raw property SHA-256: f614d3ac022ad8eaef9147128eeb312e66a96fbaad9ac52e65151fae8d233539
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "el",
    pluralRuleFunction: function (e, t) {
      return t ? "other" : 1 == e ? "one" : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "el-CY", parentLocale: "el" }));
}
