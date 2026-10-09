/* Recovered shipped factory. Module 410212.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6800308..6800571
 * Raw property SHA-256: e2b567e175506b4cb76f7542d5046f20a301b2bdfb3db38348b0a0470da42ba8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let t = e?.tenant_metadata?.guild_monetization,
      n = e?.sku?.tenant_metadata?.guild_monetization;
    return (
      t?.game_server?.boost_price ??
      t?.powerup?.boost_price ??
      n?.game_server?.boost_price ??
      n?.powerup?.boost_price
    );
  }
  n.d(t, { A: () => i });
}
