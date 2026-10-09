/* Recovered shipped factory. Module 96149.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 526762..526923
 * Raw property SHA-256: 13313bf3d9967f4d342caf6b587ca68f1fac0afb892dd2668c474524ec9b87b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  IntlMessageFormat.__addLocaleData({
    locale: "fi",
    pluralRuleFunction: function (e, t) {
      var r = !String(e).split(".")[1];
      return t ? "other" : 1 == e && r ? "one" : "other";
    },
  });
}
