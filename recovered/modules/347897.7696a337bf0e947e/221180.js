/* Recovered shipped factory. Module 221180.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 611469..611621
 * Raw property SHA-256: 8feceb43f991a5f06e487ecba5fe717a9b8d1bc1ff46b3b697f8ceca8cb7b5ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = (e, t) => (
    (t = t || (() => {})),
    e.then(
      (e) =>
        new Promise((e) => {
          e(t());
        }).then(() => e),
      (e) =>
        new Promise((e) => {
          e(t());
        }).then(() => {
          throw e;
        }),
    )
  );
}
