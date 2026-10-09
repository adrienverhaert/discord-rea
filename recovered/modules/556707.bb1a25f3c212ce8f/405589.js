/* Recovered shipped factory. Module 405589.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 283596..283898
 * Raw property SHA-256: 216fe53b01d7b890183fcb981882e728cfc11807a0f3cdf06457919877d4deb8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { L: () => o });
  var r = n(608768),
    i = n(847745);
  function o(e, { metadata: t, tunnel: n, dsn: a }) {
    let s = {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
        ...(!!n && !!a && { dsn: (0, r.SB)(a) }),
      },
      l = [{ type: "user_report" }, e];
    return (0, i.h4)(s, [l]);
  }
}
