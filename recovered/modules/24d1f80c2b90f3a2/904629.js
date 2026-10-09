/* Recovered shipped factory. Module 904629.
 * Source: recovered/web/assets/24d1f80c2b90f3a2.js
 * UTF-16 property offsets: 12078..12198
 * Raw property SHA-256: ba49dc1eb75a3c1254f3e24f353d6b171667d8a1d9e44e63c91360fbe10c34e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { k: () => l });
  function l(e) {
    return e.filter((e) => null != e.ends_at).sort((e, t) => (e.ends_at < t.ends_at ? -1 : 1));
  }
}
