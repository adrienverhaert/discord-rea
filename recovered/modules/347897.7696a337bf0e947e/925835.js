/* Recovered shipped factory. Module 925835.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 533724..534039
 * Raw property SHA-256: 1d2a199be8dad76cf20467a62e41f7707a1b466a16816103c220d30cb489581c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "ro",
    pluralRuleFunction: function (e, t) {
      var r = String(e).split("."),
        n = !r[1],
        i = Number(r[0]) == e && r[0].slice(-2);
      return t
        ? 1 == e
          ? "one"
          : "other"
        : 1 == e && n
          ? "one"
          : !n || 0 == e || (1 != e && i >= 1 && i <= 19)
            ? "few"
            : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "ro-MD", parentLocale: "ro" }));
}
