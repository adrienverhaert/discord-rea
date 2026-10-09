/* Recovered shipped factory. Module 51501.
 * Source: recovered/web/assets/02bbb22e601944f9.js
 * UTF-16 property offsets: 95..637
 * Raw property SHA-256: 4e370c0ea0746504a680b7969f62f5945574a6aea7b9bbf9ec4a21a06968a681
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (N, R, A) {
  A.d(R, { $u: () => T, NE: () => n });
  var I = A(202541),
    E = A(652215);
  let _ = new Map([
    [E.ThZ.FRIEND_ANNIVERSARIES_CHAT, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, I.np.FRIEND_ANNIVERSARY],
    [E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK, I.np.FRIEND_ANNIVERSARY],
  ]);
  function T(N) {
    return N === I.np.FRIEND_ANNIVERSARY
      ? {
          chat: E.ThZ.FRIEND_ANNIVERSARIES_CHAT,
          actionButton: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
          actionButtonCoachmark: E.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK,
        }
      : {};
  }
  function n(N) {
    return _.get(N) ?? null;
  }
}
