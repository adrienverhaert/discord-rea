/* Recovered shipped factory. Module 704844.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 242036..242227
 * Raw property SHA-256: 8b273d728cbd1492362951f41941b5d9a4568760abd1d20a38d55eb5c14c06f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var l = n(636537),
    i = n(652215);
  let s = {
    updatePrivateChannelRecipientFlags: (e, t) =>
      l.Bo.patch({ url: i.Rsh.CHANNEL_RECIPIENT_ME(e), body: { flags: t }, rejectWithError: !1 }),
  };
}
