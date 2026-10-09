/* Recovered shipped factory. Module 173660.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8312683..8313393
 * Raw property SHA-256: 493bedf6321278ae8b7d2373da18905e37ad020edbd56e96f0ceefffb01d91ac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u, k: () => c });
  var i = n(17928),
    r = n(164956),
    a = n(280450),
    s = n(192820),
    l = n(576705),
    o = n(977997),
    d = n(652215);
  function c(e) {
    let {
        channel: t,
        authenticationStore: n = a.default,
        voiceStateStore: i = o.A,
        mediaEngineStore: c = s.Ay,
        permissionStore: u = l.A,
        impersonateStore: _ = r.A,
      } = e,
      E = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
      A = c.isSelfMute() || c.isSelfMutedTemporarily(),
      h = t?.getGuildId(),
      f = _.isViewingRoles(h) && !u.can(d.xBc.SPEAK, t);
    return { selfMute: A, suppress: E?.suppress || f, mute: E?.mute ?? !1 };
  }
  function u(e) {
    return (0, i.cf)([a.default, o.A, s.Ay, l.A, r.A], () =>
      c({
        channel: e,
        authenticationStore: a.default,
        voiceStateStore: o.A,
        mediaEngineStore: s.Ay,
        permissionStore: l.A,
        impersonateStore: r.A,
      }),
    );
  }
}
