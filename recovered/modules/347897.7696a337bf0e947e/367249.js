/* Recovered shipped factory. Module 367249.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 802323..802505
 * Raw property SHA-256: f32d70be1cd56cf9de466ac3e8ba331ba316ae2d43d76285884aa91ea4fe5613
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(864886);
  e.exports = (e, t, r, i, o) => {
    "string" == typeof r && ((o = i), (i = r), (r = void 0));
    try {
      return new n(e instanceof n ? e.version : e, r).inc(t, i, o).version;
    } catch (e) {
      return null;
    }
  };
}
