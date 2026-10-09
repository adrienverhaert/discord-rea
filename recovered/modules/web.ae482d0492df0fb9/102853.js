/* Recovered shipped factory. Module 102853.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7239099..7242835
 * Raw property SHA-256: 9243b6175771e6c92873b66497d9ba2a80d2087e5784b571e8affe6b5c18ad3f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => k });
  var i = n(582128),
    r = n(17928),
    a = n(308368),
    s = n(780907),
    l = n(730852),
    o = n(212245),
    d = n(933958),
    c = n(62583),
    u = n(969151),
    _ = n(95701),
    E = n(734057),
    A = n(977997),
    h = n(776677),
    f = n(550151),
    I = n(55730),
    p = n(765379),
    T = n(946255),
    m = n(688810),
    g = n(429913),
    S = n(878014),
    N = n(25451),
    C = n(498642),
    O = n(71393),
    R = n(480595),
    L = n(576705),
    y = n(994500),
    D = n(309010),
    v = n(461213),
    b = n(287809),
    M = n(689168),
    P = n(723702),
    U = n(928550),
    w = n(652215),
    G = n(818023),
    x = n(660183);
  function k(e) {
    let t,
      {
        activity: n,
        embeddedActivity: k,
        user: F,
        onGameJoin: B,
        onClose: V,
        location: H,
        supportsAskToJoin: j = !0,
      } = e,
      { analyticsLocations: W } = (0, m.Ay)(H ?? []),
      [Y, K] = i.useState(!1),
      $ = k?.applicationId ?? n?.application_id,
      z = null != k || (0, p.A)(n),
      X = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
      Z = F.id === X?.id,
      q = (function (e) {
        let { channelId: t, userId: n, activity: i } = e,
          r = E.A.getChannel(t);
        return (
          (i?.session_id == null || (null != r && (0, _.pQ)(r.type))
            ? t
            : A.A.getVoiceStateForSession(n, i?.session_id)?.channelId) ?? void 0
        );
      })({ channelId: (0, u.H)(k?.location), userId: F.id, activity: n }),
      Q = (0, U.au)($),
      J = z || (0, I.A)(n, w.jUm.SUPPORTS_JOIN_URL) || null != Q,
      ee = (0, r.bG)([d.Ay], () =>
        Array.from(d.Ay.getSelfEmbeddedActivities().values()).some((e) => {
          let { applicationId: t, location: i } = e;
          return (t === n?.application_id || t === k?.applicationId) && (0, u.H)(i) === q;
        }),
      ),
      et = (0, r.bG)(
        [M.A],
        () =>
          null != n &&
          null != n.application_id &&
          M.A.getState(n.application_id, w.xL.JOIN) === w.eAD.LOADING,
      ),
      en = (0, g.h)($),
      ei = (0, N.X)(en),
      er = (0, f.vG)({ userId: F.id, activity: n, channelId: q, application: en }),
      ea = (0, r.bG)([E.A, O.A, C.A, y.A, D.Ay, A.A, L.A, R.A, v.A, d.Ay], () =>
        null != k
          ? er === f.Gy.CAN_JOIN
            ? h.o.CAN_JOIN
            : h.o.CANNOT_JOIN
          : (0, h.A)({
              user: F,
              activity: n,
              application: en,
              channelId: q,
              currentUser: X,
              isEmbedded: z,
              ChannelStore: E.A,
              GuildStore: O.A,
              GuildMemberCountStore: C.A,
              RelationshipStore: y.A,
              SelectedChannelStore: D.Ay,
              VoiceStateStore: A.A,
              PermissionStore: L.A,
              LocalActivityStore: R.A,
              SelfPresenceStore: v.A,
              EmbeddedActivitiesStore: d.Ay,
            }),
      ),
      es = (0, r.bG)(
        [d.Ay],
        () =>
          !!Array.from(d.Ay.getSelfEmbeddedActivities().values()).some(
            (e) => e.applicationId === k?.applicationId && e.location.id === k?.location.id,
          ),
      ),
      el = (0, o.p)();
    if (z && null == k && (null == n || !(0, I.A)(n, w.jUm.CONTEXTLESS))) return null;
    let eo = !P.isPlatformEmbedded;
    if (!((0, I.A)(n, w.jUm.JOIN) || z) || null == $) return null;
    let ed = (!z && ea === h.o.JOINED) || (z && es),
      ec = !Z || z,
      eu = ec && !ed && (eo || J) && !Y && !ee;
    ed
      ? (t = x.intl.string(x.t.TYSymS))
      : ec
        ? eo || J || null == n || (t = x.intl.formatToPlainString(x.t.SqJBnN, { name: n.name }))
        : (t = x.intl.string(x.t["0OiwfH"]));
    let e_ = k?.launchId ?? n?.session_id;
    async function eE(e, t) {
      if (null == e_ || null == $) return;
      let n = (0, I.A)(t, w.jUm.EMBEDDED),
        i = D.Ay.getVoiceChannelId(),
        r = E.A.getChannel(i);
      (await s.Ay.join({
        userId: e.id,
        sessionId: e_,
        applicationId: $,
        channelId: i,
        messageId: null,
        intent: G.W9.PLAY,
        embedded: n,
        locationObject: el.location,
        analyticsLocations: W,
      }),
        n ||
          (0, T.A)({
            type: w.UqL.JOIN,
            userId: e.id,
            guildId: r?.guild_id,
            channelId: i,
            channelType: r?.type,
            applicationId: $,
            partyId: null != t ? t?.party?.id : "",
            locationObject: el.location,
            analyticsLocations: W,
          }));
    }
    async function eA() {
      let e = !1;
      async function t() {
        let e;
        (K(!0),
          null != n &&
            (e = await a.A.sendActivityInviteUser({
              type: w.xL.JOIN_REQUEST,
              userId: F.id,
              activity: n,
              location: w.ThZ.USER_ACTIVITY_ACTIONS,
            })),
          null != e && l.default.selectPrivateChannel(e.id));
      }
      if (z && !ei) {
        if (null == $) return;
        if (ea !== h.o.CAN_JOIN) return t();
        if (
          (e = await (0, c.A)({
            applicationId: $,
            activityChannelId: q,
            locationObject: el.location,
            analyticsLocations: W,
          }))
        )
          return void V?.();
      }
      if (!e) {
        if (ea === h.o.CAN_JOIN) {
          (B?.(), eE(F, n), V?.());
          return;
        }
        await t();
      }
    }
    if (
      (ea === h.o.CANNOT_JOIN && !j) ||
      (ea === h.o.CANNOT_JOIN && (0, S.D)(en)) ||
      (!eu && !Y && null == t)
    )
      return null;
    let eh = ea === h.o.CAN_JOIN ? x.intl.string(x.t.VJlc0S) : x.intl.string(x.t.OKsSCR);
    return (
      ed && (eh = x.intl.string(x.t.DPfdsq)),
      {
        buttonCTA: eh,
        tooltip: t,
        handleJoinRequest: eA,
        isEnabled: eu,
        isJoining: et,
        isEmbedded: z,
      }
    );
  }
}
