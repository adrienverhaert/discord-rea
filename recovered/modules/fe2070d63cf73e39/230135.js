/* Recovered shipped factory. Module 230135.
 * Source: recovered/web/assets/fe2070d63cf73e39.js
 * UTF-16 property offsets: 1762..1998
 * Raw property SHA-256: 7025608a58e5b621c5d28e5c7a50dcfcb7c9d1dc21f5a75967611d4e343d4915
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { O: () => a, u: () => s });
  var i = n(73153);
  function s(e, t) {
    i.h.wait(() => {
      i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: e, premiumCount: t });
    });
  }
  function a() {
    i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
  }
}
