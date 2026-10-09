/* Recovered shipped factory. Module 109624.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3604865..3605630
 * Raw property SHA-256: 23e8360042c99ed5a8de3d3b2effe7eadc9f672c994bda8ffd31e32a1140f91e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(439372),
    r = n(952818),
    a = n(616356),
    s = n(280450),
    l = n(458977),
    o = n(572164),
    d = n(696016);
  class c extends i.A {
    callback = null;
    actions = { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) };
    registerCallback(e) {
      this.callback = e;
    }
    unregisterCallback() {
      this.callback = null;
    }
    handleRemoteClipTrigger(e) {
      let { userId: t, applicationId: n, partyId: i, remoteClipId: c } = e;
      !l.A.getConfig({ location: "maybeSendRemoteClipTrigger" }).enableDistributedClips ||
        t === s.default.getId() ||
        (d.nx.info("Received remote clip trigger", { userId: t, applicationId: n, partyId: i }),
        null != r.Ay.getVisibleRunningGames().find((e) => e.id === n) &&
          (0, o.T)() &&
          (null == a.A.getCurrentUserActiveStream() ||
            a.A.getStreamerActiveStreamMetadata()?.id === n) &&
          this.callback?.(t, c));
    }
  }
  let u = new c();
}
