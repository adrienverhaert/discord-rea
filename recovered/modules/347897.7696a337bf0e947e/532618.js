/* Recovered shipped factory. Module 532618.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 802821..802960
 * Raw property SHA-256: 314d1b3f3050b539687eb7587d537ead8bbc2e31fbf984e685947493dbc74045
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(864886);
  e.exports = (e, t, r = !1) => {
    if (e instanceof n) return e;
    try {
      return new n(e, t);
    } catch (e) {
      if (!r) return null;
      throw e;
    }
  };
}
