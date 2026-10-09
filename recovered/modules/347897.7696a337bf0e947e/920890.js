/* Recovered shipped factory. Module 920890.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 530405..530795
 * Raw property SHA-256: 00e16e61c9c10e8869a4dabcbc14fa3116a7fc144eb578b5dc8b0ba741aced0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "hr",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = r[1] || "",
        o = !r[1],
        a = n.slice(-1),
        s = n.slice(-2),
        l = i.slice(-1),
        u = i.slice(-2);
      return t
        ? "other"
        : (o && 1 == a && 11 != s) || (1 == l && 11 != u)
          ? "one"
          : (o && a >= 2 && a <= 4 && (s < 12 || s > 14)) ||
              (l >= 2 && l <= 4 && (u < 12 || u > 14))
            ? "few"
            : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "hr-BA", parentLocale: "hr" }));
}
