/* Recovered shipped factory. Module 801272.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 531563..531844
 * Raw property SHA-256: 8374bace78e7bace9f968c6bb1e6a4f78a397840e5912de39db466b97a65daac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "lt",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = r[1] || "",
        i = Number(r[0]) == e,
        o = i && r[0].slice(-1),
        a = i && r[0].slice(-2);
      return t
        ? "other"
        : 1 == o && (a < 11 || a > 19)
          ? "one"
          : o >= 2 && o <= 9 && (a < 11 || a > 19)
            ? "few"
            : 0 != n
              ? "many"
              : "other";
    },
  });
}
