/* Recovered shipped factory. Module 90804.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2662828..2663551
 * Raw property SHA-256: b4bd5c0a2874ebbc4a9432ef130edcbc003763b3e0392937454057fc1f0c0c2e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(717125),
    r = n(262763),
    a = n(499211),
    s = n(734057),
    l = n(576705),
    o = n(309010),
    d = n(977997);
  class c extends Error {}
  async function u(e) {
    let { channelId: t, timeoutMs: n = 1e4, bypassChangeModal: u = !1 } = e,
      _ = s.A.getChannel(t);
    if (
      null == _ ||
      !(await r.A.handleVoiceConnect({
        bypassGuildIdCheck: !0,
        bypassChangeModal: u,
        channel: _,
        connected: d.A.isInChannel(t),
        needSubscriptionToAccess: (0, a.p)(t, s.A, i.A, l.A).needSubscriptionToAccess,
      }))
    )
      return !1;
    let E = new Promise((e, i) => {
      let r = setTimeout(() => {
        i(new c("Joining voice channel has timed out."));
      }, n);
      o.Ay.addConditionalChangeListener(
        () => o.Ay.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1),
      );
    });
    try {
      await E;
    } catch (e) {
      if (e instanceof c) return !1;
      throw e;
    }
    return !0;
  }
}
