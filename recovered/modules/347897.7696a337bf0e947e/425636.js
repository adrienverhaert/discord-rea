/* Recovered shipped factory. Module 425636.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 532854..533723
 * Raw property SHA-256: 6b50f4cfdf4a5e68d9e903c1b37ef68341fd060ab44ca9328d8010b0d05e7741
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  (IntlMessageFormat.__addLocaleData({
    locale: "pt",
    pluralRuleFunction: function (e, t) {
      var r = Number(String(e).split(".")[0]) == e;
      return t ? "other" : r && e >= 0 && e <= 2 && 2 != e ? "one" : "other";
    },
  }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-AO", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({
      locale: "pt-PT",
      parentLocale: "pt",
      pluralRuleFunction: function (e, t) {
        var r = !String(e).split(".")[1];
        return t ? "other" : 1 == e && r ? "one" : "other";
      },
    }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-CV", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-GW", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-MO", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-MZ", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-ST", parentLocale: "pt-PT" }),
    IntlMessageFormat.__addLocaleData({ locale: "pt-TL", parentLocale: "pt-PT" }));
}
