/* Recovered shipped factory. Module 475889.
 * Source: recovered/web/assets/d6aacf453f130cea.js
 * UTF-16 property offsets: 95..611
 * Raw property SHA-256: a8ea97ef211a6b2b689f65123fae866ccb73237952f3599ac08b0fc90d90d795
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, t) {
  t.d(i, { H: () => n });
  var s = t(582128),
    a = t(17928),
    d = t(595528),
    u = t(919638),
    r = t(52074),
    l = t(725613),
    c = t(652215);
  function n(e) {
    let {
        hasRequestedStartTimes: i,
        startTime: t,
        isGuildUnavailable: n,
      } = (0, a.cf)([l.A, u.A], () => ({
        hasRequestedStartTimes: l.A.hasRequestedStartTimes(e.guild_id),
        startTime: l.A.getStartTime(e),
        isGuildUnavailable: u.A.isUnavailable(e.guild_id),
      })),
      p = (0, a.bG)([d.A], () => d.A.isConnected()),
      h = e.type === c.rbe.GUILD_VOICE;
    return (
      s.useEffect(() => {
        !i && h && !n && p && (0, r.U)(e.guild_id);
      }, [h, e.guild_id, i, n, p]),
      t
    );
  }
}
