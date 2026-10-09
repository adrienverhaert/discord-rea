/* Recovered shipped factory. Module 855522.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11658442..11658729
 * Raw property SHA-256: 98f592d3485fbfc00841326c2287ed5b878cae03647f5fc54dea006176e77644
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(664294),
    r = n(413323);
  n(426586);
  let a = new r.Ay({
    initialLocale: i.parse(document.cookie).locale,
    getMessages: (e) => n(121312)(`./${e}.json`),
    getLanguages: () => n(296437),
  });
  a.addListener("locale", (e) => {
    document.cookie = `locale=${e};path=/`;
  });
  let s = a;
}
