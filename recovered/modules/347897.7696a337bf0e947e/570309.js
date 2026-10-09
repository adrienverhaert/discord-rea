/* Recovered shipped factory. Module 570309.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 534680..535077
 * Raw property SHA-256: 3dafc855ba07778645c3fbf3bd43b160a212def75408bc897100938e9b2c5971
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "sv",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = !r[1],
        i = Number(r[0]) == e,
        o = i && r[0].slice(-1),
        a = i && r[0].slice(-2);
      return t
        ? (1 == o || 2 == o) && 11 != a && 12 != a
          ? "one"
          : "other"
        : 1 == e && n
          ? "one"
          : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "sv-AX", parentLocale: "sv" }),
    IntlMessageFormat.__addLocaleData({ locale: "sv-FI", parentLocale: "sv" }));
}
