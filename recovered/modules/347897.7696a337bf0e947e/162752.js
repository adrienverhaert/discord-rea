/* Recovered shipped factory. Module 162752.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 535383..535748
 * Raw property SHA-256: 248664d7aff76075588338fcd004160632a9e8c94f9d6ac30fce2895c9f09b9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "uk",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = !r[1],
        o = Number(r[0]) == e,
        a = o && r[0].slice(-1),
        s = o && r[0].slice(-2),
        l = n.slice(-1),
        u = n.slice(-2);
      return t
        ? 3 == a && 13 != s
          ? "few"
          : "other"
        : i && 1 == l && 11 != u
          ? "one"
          : i && l >= 2 && l <= 4 && (u < 12 || u > 14)
            ? "few"
            : (i && 0 == l) || (i && l >= 5 && l <= 9) || (i && u >= 11 && u <= 14)
              ? "many"
              : "other";
    },
  });
}
