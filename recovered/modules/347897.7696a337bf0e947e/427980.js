/* Recovered shipped factory. Module 427980.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 532557..532853
 * Raw property SHA-256: bea89dfab81d32e2e838a5eec846dd8c31fa2ea98f2a0f4195d970015b31bee6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "pl",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[0],
        i = !r[1],
        o = n.slice(-1),
        a = n.slice(-2);
      return t
        ? "other"
        : 1 == e && i
          ? "one"
          : i && o >= 2 && o <= 4 && (a < 12 || a > 14)
            ? "few"
            : (i && 1 != n && (0 == o || 1 == o)) ||
                (i && o >= 5 && o <= 9) ||
                (i && a >= 12 && a <= 14)
              ? "many"
              : "other";
    },
  });
}
