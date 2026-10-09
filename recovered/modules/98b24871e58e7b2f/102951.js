/* Recovered shipped factory. Module 102951.
 * Source: recovered/web/assets/98b24871e58e7b2f.js
 * UTF-16 property offsets: 16280..16536
 * Raw property SHA-256: dbacc8826ed72636375a545de7d9d5470d76d69f1ae2acd96791fbdad0c63c2f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { J: () => r });
  var l = n(922590),
    i = n(652215);
  function r(e) {
    let { userId: t } = e,
      n = (0, l.f1)(t);
    return {
      gameFriends: n,
      hasOutgoingPendingGameFriends: (0, l.KL)(t, i.eA$.PENDING_OUTGOING),
      hasIncomingPendingGameFriends: (0, l.KL)(t, i.eA$.PENDING_INCOMING),
    };
  }
}
