/* Recovered shipped factory. Module 692714.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 803833..803998
 * Raw property SHA-256: 081761c4240dc2b69deae459c2d4c2428fd219c68686e9f064599b02b33a5f43
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(72290);
  e.exports =
    "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG)
      ? (...e) => console.error("SEMVER", ...e)
      : () => {};
}
