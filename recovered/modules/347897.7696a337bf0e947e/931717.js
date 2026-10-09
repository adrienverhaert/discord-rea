/* Recovered shipped factory. Module 931717.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 803999..804191
 * Raw property SHA-256: 0a8b1dd1fdcad79824582827ffcae9557fae51dc2abf0ee4b34ad4653eaf0b16
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  let t = /^[0-9]+$/,
    r = (e, r) => {
      let n = t.test(e),
        i = t.test(r);
      return (
        n && i && ((e *= 1), (r *= 1)),
        e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1
      );
    };
  e.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
}
