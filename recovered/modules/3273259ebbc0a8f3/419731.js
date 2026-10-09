/* Recovered shipped factory. Module 419731.
 * Source: recovered/web/assets/3273259ebbc0a8f3.js
 * UTF-16 property offsets: 790..1066
 * Raw property SHA-256: eb969ff2de8a13037ac99a7e23ffa1ab0330ea97920a922a6fe7b8835c121aec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  function i(t) {
    if (null == t) return null;
    let e = Date.parse(t);
    return Number.isNaN(e) ? null : e;
  }
  function l(t, e) {
    let n = i(t);
    return null != n && null != e && n > e;
  }
  function s(t, e) {
    if (null == e) return !1;
    let n = i(t?.updated_at);
    return null != n && n > e.lastViewedAt;
  }
  n.d(e, { ds: () => s, f3: () => l });
}
