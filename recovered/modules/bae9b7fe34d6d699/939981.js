/* Recovered shipped factory. Module 939981.
 * Source: recovered/web/assets/bae9b7fe34d6d699.js
 * UTF-16 property offsets: 94..327
 * Raw property SHA-256: 3e05b69afa698111aea38b8a4b893c559daf34c68fed05b479c1f7a0a866537c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => i });
  var a = n(773669);
  function i(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { month: "numeric", day: "numeric" };
    return new Date(e).toLocaleDateString(a.default.locale, { ...t, timeZone: "UTC" });
  }
}
