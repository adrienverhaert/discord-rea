/* Recovered shipped factory. Module 361715.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 515688..515948
 * Raw property SHA-256: dac9f0a1ef86de7c1ac341cb18240459d44b72bf5a5c2faa36f3fd509ca4e7f2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "da",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = Number(r[0]) == e;
      return t || (1 != e && (i || (0 != n && 1 != n))) ? "other" : "one";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "da-GL", parentLocale: "da" }));
}
