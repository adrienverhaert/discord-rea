/* Recovered shipped factory. Module 791132.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 323351..323657
 * Raw property SHA-256: d5e7a52bde5cc4be64c029f2501ff7f6c4f0b1a7ba1f556429bd7b17d51d130f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  function r(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
      r = t[8] || "";
    return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
  }
  function i(e) {
    return e.split(/[?#]/, 1)[0];
  }
  n.d(t, { Dl: () => r, f: () => i });
}
