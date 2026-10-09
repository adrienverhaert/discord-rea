/* Recovered shipped factory. Module 894328.
 * Source: recovered/web/assets/ef612e3368f6daed.js
 * UTF-16 property offsets: 94..524
 * Raw property SHA-256: 158721220efb711a2d98339f0dbffbe0c7ee89319a85c9eaefeca19c01c9fb2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, t) {
  t.d(e, { D: () => u });
  var i = t(225142),
    l = t(701785),
    r = t(374084),
    s = t(473529);
  async function u(n, e) {
    if (null == n || !(0, s.K)(n)) return;
    let t = l.h.getSettings(n);
    if ((t === l.A && (await (0, i.ag)(n), (t = l.h.getSettings(n))), t !== l.A && null != t)) {
      if (null != t.newMemberActions && null != t.newMemberActions.find((n) => n.channelId === e))
        return r.K5.TODO;
      if (null != t.resourceChannels && null != t.resourceChannels.find((n) => n.channelId === e))
        return r.K5.RESOURCE;
    }
  }
}
