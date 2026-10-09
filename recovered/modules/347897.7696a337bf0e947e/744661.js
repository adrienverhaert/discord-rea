/* Recovered shipped factory. Module 744661.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 534040..534679
 * Raw property SHA-256: 7729b7b09e5143405137352b8b3e042f3ada670302c2c78f35f61558f6fed68d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "ru",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-1),
        a = n.slice(-2);
      return t
        ? "other"
        : i && 1 == o && 11 != a
          ? "one"
          : i && o >= 2 && o <= 4 && (a < 12 || a > 14)
            ? "few"
            : (i && 0 == o) || (i && o >= 5 && o <= 9) || (i && a >= 11 && a <= 14)
              ? "many"
              : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-BY", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KG", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-KZ", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-MD", parentLocale: "ru" }),
    IntlMessageFormat.__addLocaleData({ locale: "ru-UA", parentLocale: "ru" }));
}
