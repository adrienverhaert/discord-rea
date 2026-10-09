/* Recovered shipped factory. Module 789861.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6729743..6730354
 * Raw property SHA-256: 4f7da85216a7879d000b705c91deb152cca2787243a1d5eae0634b979e287da8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { a1: () => l, mh: () => o, wT: () => d });
  var i = n(660183);
  let r = new Date(Date.UTC(2026, 7, 21)),
    a = new Date(Date.UTC(2026, 7, 25)),
    s = new Date(Date.UTC(2026, 9, 23));
  function l() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    }).formatRange(r, a);
  }
  function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    return new Intl.DateTimeFormat(i.intl.currentLocale, {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(e);
  }
  function d() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(s);
  }
}
