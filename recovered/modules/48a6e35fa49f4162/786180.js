/* Recovered shipped factory. Module 786180.
 * Source: recovered/web/assets/48a6e35fa49f4162.js
 * UTF-16 property offsets: 95..271
 * Raw property SHA-256: 0f5752a271d5b0f33e83edf0963308222dce7ee6946c51e3502070ca34e9fef4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, l) {
  l.d(t, { H: () => C });
  var n = l(17928),
    i = l(844944);
  function C(e) {
    let { guildId: t } = e;
    return (0, n.bG)([i.A], () => (null != t ? i.A.getSubmittedGuildJoinRequestTotal(t) : void 0), [
      t,
    ]);
  }
}
