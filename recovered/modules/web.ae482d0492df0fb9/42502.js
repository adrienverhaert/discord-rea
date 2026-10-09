/* Recovered shipped factory. Module 42502.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3597797..3597989
 * Raw property SHA-256: 613d5a50bd3489b4450dd0bbb30b8c87221d4b3dcd149f81405fab14505b0154
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    if (null != e.duration_secs && null != e.clip_sync_timestamp)
      return { duration: e.duration_secs, syncTimestamp: Date.parse(e.clip_sync_timestamp) };
  }
  n.d(t, { A: () => i });
}
