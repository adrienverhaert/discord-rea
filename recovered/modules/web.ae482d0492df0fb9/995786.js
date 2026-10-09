/* Recovered shipped factory. Module 995786.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5060609..5063489
 * Raw property SHA-256: 96fdabcc9112803408781cd1e3d6d0b4b687f303a19926f23754d8d1ebdc2786
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    s6: () => g,
    W5: () => L,
    Vj: () => N,
    E5: () => R,
    nV: () => C,
    wu: () => y,
    H0: () => O,
    G6: () => S,
  });
  var i = n(636537),
    r = n(73153),
    a = n(666860),
    s = n(317525),
    l = n(71393),
    o = n(576705),
    d = n(403362),
    c = n(935208),
    u = n(615550),
    _ = n(435558);
  function E(e) {
    return null == e
      ? e
      : Object.keys(e).reduce((t, n) => {
          let i = (0, _.camelCase)(n);
          return (
            "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = E(e[n])),
            t
          );
        }, {});
  }
  function A(e) {
    return null == e
      ? e
      : Object.keys(e).reduce((t, n) => {
          let i = (0, _.snakeCase)(n);
          return (
            "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = A(e[n])),
            (t[i] = e[n]),
            t
          );
        }, {});
  }
  var h = n(449585),
    f = n(652215);
  function I(e) {
    return { type: e.type, metadata: A(e.metadata) };
  }
  function p(e) {
    let t = A(e.triggerMetadata);
    return (
      null != t && delete t.keywordLists,
      {
        id: e.id,
        name: e.name,
        guild_id: e.guildId,
        event_type: e.eventType,
        trigger_type: e.triggerType,
        trigger_metadata: t,
        actions: e.actions.filter(d.Vq).map(I),
        enabled: e.enabled,
        creator_id: e.creatorId,
        position: e.position,
        exempt_channels: Array.from(e.exemptChannels ?? []),
        exempt_roles: Array.from(e.exemptRoles ?? []).filter(
          (t) => null != s.A.getRole(e.guildId, t),
        ),
      }
    );
  }
  function T(e) {
    return { type: e.type, metadata: E(e.metadata) };
  }
  function m(e) {
    let t = {
      id: e.id ?? c.default.fromTimestamp(Date.now()),
      name: e.name,
      guildId: e.guild_id,
      eventType: e.event_type,
      triggerType: e.trigger_type,
      triggerMetadata: E(e.trigger_metadata),
      actions: e.actions.filter(d.Vq).map(T),
      enabled: e.enabled,
      creatorId: e.creator_id,
      position: e.position,
      exemptChannels: new Set(e.exempt_channels ?? []),
      exemptRoles: new Set(e.exempt_roles ?? []),
    };
    return (null != t.triggerMetadata && delete t.triggerMetadata.keywordLists, t);
  }
  async function g(e) {
    let t = p(e);
    return E(
      (
        await i.Bo.post({
          url: f.Rsh.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
          body: t,
          rejectWithError: (0, i.fT)(),
        })
      ).body,
    );
  }
  async function S(e) {
    let t = p(e);
    return (
      delete t.id,
      m(
        (
          await i.Bo.post({
            url: f.Rsh.GUILD_AUTOMOD_RULES(e.guildId),
            body: t,
            rejectWithError: (0, i.fT)(),
          })
        ).body,
      )
    );
  }
  async function N(e) {
    let t = p(e);
    return m(
      (
        await i.Bo.patch({
          url: f.Rsh.GUILD_AUTOMOD_RULE(e.guildId, e.id),
          body: t,
          rejectWithError: (0, i.fT)(),
        })
      ).body,
    );
  }
  async function C(e, t) {
    return (
      await i.Bo.del({ url: f.Rsh.GUILD_AUTOMOD_RULE(t, e), rejectWithError: (0, i.fT)() }),
      !0
    );
  }
  async function O(e) {
    let t = await i.Bo.get({ url: f.Rsh.GUILD_AUTOMOD_RULES(e), rejectWithError: (0, i.fT)() });
    return Array.isArray(t.body) ? t.body.map(m) : [];
  }
  async function R(e, t, n) {
    o.A.can(f.xBc.MANAGE_MESSAGES, t) &&
      (await i.Bo.post({
        url: f.Rsh.GUILD_AUTOMOD_ALERT_ACTION(t.guild_id),
        body: { message_id: e, channel_id: t.id, alert_action_type: n },
        rejectWithError: (0, i.fT)(),
      }));
  }
  function L(e, t, n) {
    let r = l.A.getGuild(e);
    null == r ||
      (o.A.can(f.xBc.MANAGE_GUILD, r) &&
        (0, h.rI)(function () {
          ((0, a.zV)(f.HAw.GUILD_AUTOMOD_FEEDBACK, {
            feedback_type: u.Gb.MENTION_RAID_REMOVE_RESTRICTION,
            decision_id: t,
          }),
            i.Bo.post({ url: f.Rsh.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e), rejectWithError: !0 }),
            n());
        }));
  }
  function y(e) {
    r.h.dispatch({ type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS", guildId: e });
  }
}
