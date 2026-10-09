/* Recovered shipped factory. Module 106044.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7659420..7659888
 * Raw property SHA-256: ce701f8a8ba4cc2ed507480dbb7a7e4cf64f636ef35484fcaaca0d98b1fd0663
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(280450),
    r = n(63995),
    a = n(518769),
    s = n(312006),
    l = n(446600);
  function o(e) {
    if (!e.isGuildStageVoice() || !l.A.isLive(e.id)) return !1;
    let t = i.default.getId();
    return (
      !!s.Ay.isModerator(t, e.id) &&
      !!s.Ay.isSpeaker(t, e.id) &&
      (null ==
        r.A.getMutableParticipants(e.id).find(
          (n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id),
        ) ||
        null ==
          r.A.getMutableParticipants(e.id, a.ip.SPEAKER).find(
            (n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id),
          ))
    );
  }
}
