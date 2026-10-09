/* Recovered shipped factory. Module 43203.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7289277..7290513
 * Raw property SHA-256: 43c68d8ead1b90b14a9b66320950ab2ff27b117305a35fbf4413dac2f1e00d11
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => A, A: () => h });
  var i = n(73153),
    r = n(376728),
    a = n(21599),
    s = n(976860),
    l = n(280450),
    o = n(174459),
    d = n(723702),
    c = n(19575),
    u = n(636401),
    _ = n(613057),
    E = n(652215);
  async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      _ = (0, a.LO)(n?.targetChannelId),
      A = (0, a.LO)(n?.targetMessageId),
      h = (0, a.LO)(n?.guildScheduledEventId),
      f = (0, a.WU)({
        baseCode: e,
        targetChannelId: _,
        targetMessageId: A,
        guildScheduledEventId: h,
      }),
      { invite: I } = await r.Ay.resolveInvite(f, t);
    if (null == I) throw new u.A({ errorCode: E.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
      n?.installationId != null &&
        o.default.track(E.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
          received_installation_id: n.installationId,
          location: "openInviteFromRPC",
        }),
      l.default.isAuthenticated()
        ? i.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: I,
            code: f,
            context: E.BRT.APP,
            received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
          })
        : (n?.installationId != null &&
            r.Ay.setReceivedInstallationIdForInviteCode(I.code, String(n.installationId)),
          (0, s.bG)(E.BVt.INVITE(f))),
      d.isPlatformEmbedded && c.Ay.focus(),
      { invite: I, code: e }
    );
  }
  let h = {
    [E.e$_.OPEN_INVITE]: {
      scope: _.hj,
      async handler(e) {
        let { args: t } = e,
          { code: n, ...i } = t;
        await A(n, "RPC OPEN_INVITE Handler", i);
      },
    },
  };
}
