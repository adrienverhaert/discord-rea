/* Recovered shipped factory. Module 921955.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8811183..8813580
 * Raw property SHA-256: 400707b9dbdfb016c91058c66c4de03e8c1814a2150b12b41df8c9eccb969f57
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  (n.d(t, { A: () => L }), n(321073));
  var r = n(17928),
    a = n(73153),
    s = n(308368),
    l = n(115718),
    o = n(47167),
    d = n(734057),
    c = n(71393),
    u = n(480595),
    _ = n(290863),
    E = n(994500),
    A = n(287809),
    h = n(645959),
    f = n(652215);
  let I = [l.rD.TEXT_CHANNEL, l.rD.GROUP_DM, l.rD.USER],
    p = null,
    T = null,
    m = [],
    g = [];
  function S(e) {
    ((m = [...m, e]),
      (g = g.map((e) => ({ ...e, sent: m.includes(e.data.record.id) }))),
      R.emitChange());
  }
  function N() {
    ((p = null), null != i && (i.destroy(), (i = null)), null != T && T());
  }
  function C() {
    let e =
      null != p && null != p.application_id ? u.A.getApplicationActivity(p.application_id) : null;
    if (null != p && (null == e || null == e.party || null == e.party.id)) return N();
  }
  class O extends r.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
      this.waitFor(d.A, c.A, u.A, _.A, h.A, A.default);
    }
    getActivity() {
      return p;
    }
    getQuery() {
      return i?.query ?? "";
    }
    getResults() {
      return g;
    }
  }
  let R = new O(a.h, {
      ACTIVITY_INVITE_MODAL_OPEN: function (e) {
        ((p = e.activity),
          (T = e.resolve),
          (m = []),
          null == i &&
            (i = new l.Ay(
              (e, t) => {
                let n;
                ((g = (
                  "" === t.trim()
                    ? ((n = []),
                      h.A.getPrivateChannelIds().forEach((e) => {
                        let t = d.A.getChannel(e);
                        if (null != t)
                          if (t.type === f.rbe.DM) {
                            let e = t.getRecipientId(),
                              i = null != e ? A.default.getUser(e) : null;
                            null != i && n.push({ type: l.rD.USER, record: i, score: 0 });
                          } else
                            t.isMultiUserDM() &&
                              n.push({ type: l.rD.GROUP_DM, record: t, score: 0 });
                      }),
                      n)
                    : e
                )
                  .map((e) => {
                    switch (e.type) {
                      case l.rD.USER: {
                        let { record: t } = e;
                        return {
                          type: l.rD.USER,
                          sent: m.includes(t.id),
                          status: _.A.getStatus(t.id),
                          data: e,
                        };
                      }
                      case l.rD.TEXT_CHANNEL: {
                        let { record: t } = e,
                          n = d.A.getChannel(t.parent_id),
                          i = c.A.getGuild(t.guild_id);
                        return {
                          type: l.rD.TEXT_CHANNEL,
                          sent: m.includes(t.id),
                          categoryName: null != n ? (0, o.m1)(n, A.default, E.A) : "",
                          guildName: i?.name ?? "",
                          data: e,
                        };
                      }
                      case l.rD.GROUP_DM: {
                        let { record: t } = e;
                        return { type: l.rD.GROUP_DM, sent: m.includes(t.id), data: e };
                      }
                      default:
                        return null;
                    }
                  })
                  .filter((e) => null != e)),
                  R.emitChange());
              },
              I,
              100,
            )),
          i.search(""));
      },
      ACTIVITY_INVITE_MODAL_QUERY: function (e) {
        let { query: t } = e;
        null != i && i.search(t);
      },
      ACTIVITY_INVITE_MODAL_SEND: function (e) {
        if (null == p) return;
        let t = e.channelId,
          n = e.userId;
        null != t
          ? s.A.sendActivityInvite({
              channelId: t,
              type: f.xL.JOIN,
              activity: p,
              location: "Channel Text Area - Invite to Join Modal",
            }).then(() => S(t))
          : null != n &&
            s.A.sendActivityInviteUser({
              userId: n,
              type: f.xL.JOIN,
              activity: p,
              location: "Channel Text Area - Invite to Join Modal",
            }).then(() => S(n));
      },
      ACTIVITY_INVITE_MODAL_CLOSE: N,
      OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        return !!t && null != p && (N(), !0);
      },
      LOCAL_ACTIVITY_UPDATE: C,
      RPC_APP_DISCONNECTED: C,
    }),
    L = R;
}
