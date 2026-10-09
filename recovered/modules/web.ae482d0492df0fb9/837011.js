/* Recovered shipped factory. Module 837011.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5247405..5250789
 * Raw property SHA-256: b91d5a187759e1fe15b7607b7b0aa3ee91d9d169e782d1e2cdc539bb341d2b22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I, X: () => d });
  var i,
    r = n(158390),
    a = n(17928),
    s = n(73153),
    l = n(9994),
    o = n(652215),
    d =
      (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
      (i.FETCHING = "FETCHING"),
      (i.FETCHED = "FETCHED"),
      i);
  let c = new Map(),
    u = new Map(),
    _ = {
      profile: null,
      lastSyncTimestamp: null,
      fetchStatus: "NOT_FETCHED",
      isUpdating: !1,
      error: null,
      nextFetchAllowedAt: null,
    };
  function E(e) {
    let { guildId: t } = e,
      n = c.get(t);
    null == n ? c.set(t, { ..._, isUpdating: !0 }) : c.set(t, { ...n, isUpdating: !0 });
  }
  function A(e) {
    let { guildId: t, error: n } = e,
      i = c.get(t);
    null == i ? c.set(t, { ..._, error: n }) : c.set(t, { ...i, error: n, isUpdating: !1 });
  }
  function h(e) {
    let { invite: t } = e,
      { profile: n } = t;
    if (null == n) return;
    let i = c.get(n.id),
      r = (0, l.wr)(n);
    null == i
      ? c.set(n.id, { ..._, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
      : c.set(n.id, { ...i, profile: r, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
  }
  class f extends a.Ay.Store {
    static displayName = "GuildProfileStore";
    getProfile(e) {
      return null == e ? null : (c.get(e)?.profile ?? null);
    }
    getFetchStatus(e) {
      return null == e ? "NOT_FETCHED" : (c.get(e)?.fetchStatus ?? "NOT_FETCHED");
    }
    getLastSyncTimestamp(e) {
      return null == e ? null : (c.get(e)?.lastSyncTimestamp ?? null);
    }
    getNextFetchAllowedAt(e) {
      return null == e ? null : (c.get(e)?.nextFetchAllowedAt ?? null);
    }
    getIsUpdating(e) {
      return null != e && (c.get(e)?.isUpdating ?? !1);
    }
    getErrorCode(e) {
      return null == e ? null : (c.get(e)?.error?.code ?? null);
    }
  }
  let I = new f(s.h, {
    GUILD_PROFILE_FETCH: function (e) {
      let { guildId: t } = e,
        n = c.get(t);
      null == n
        ? c.set(t, { ..._, fetchStatus: "FETCHING" })
        : c.set(t, { ...n, fetchStatus: "FETCHING" });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
      let { guildId: t, profile: n } = e;
      (u.get(t)?.succeed(), u.delete(t));
      let i = c.get(t);
      null == i
        ? c.set(t, { ..._, profile: n, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : c.set(t, {
            ...i,
            profile: n,
            lastSyncTimestamp: Date.now(),
            fetchStatus: "FETCHED",
            error: null,
            nextFetchAllowedAt: null,
          });
    },
    GUILD_PROFILE_FETCH_FAILURE: function (e) {
      let t,
        { guildId: n, error: i } = e,
        a = (null == (t = u.get(n)) && ((t = new r.A(5e3, 3e5)), u.set(n, t)), t).fail(),
        s = Date.now() + a,
        l = c.get(n);
      null == l
        ? c.set(n, { ..._, error: i, fetchStatus: "FETCHED", nextFetchAllowedAt: s })
        : c.set(n, { ...l, error: i, fetchStatus: "FETCHED", nextFetchAllowedAt: s });
    },
    GUILD_PROFILE_UPDATE: E,
    GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
      let { guildId: t, profile: n } = e,
        i = c.get(t);
      null == i ? c.set(t, { ..._, profile: n }) : c.set(t, { ...i, profile: n, isUpdating: !1 });
    },
    GUILD_PROFILE_UPDATE_FAILURE: A,
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
      let { form: t, guildId: n } = e,
        i = t?.profile;
      if (null == i) return;
      let r = c.get(n);
      null == r
        ? c.set(n, { ..._, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" })
        : c.set(n, { ...r, profile: i, lastSyncTimestamp: Date.now(), fetchStatus: "FETCHED" });
    },
    INVITE_RESOLVE_SUCCESS: h,
    INSTANT_INVITE_CREATE_SUCCESS: h,
    CHANNEL_CREATE: function (e) {
      let { channel: t } = e;
      t.type === o.rbe.GUILD_ANNOUNCEMENT &&
        null != t.guild_id &&
        (c.delete(t.guild_id), u.delete(t.guild_id));
    },
    GUILD_SETTINGS_SET_WIDGET: function (e) {
      let { guildId: t, enabled: n } = e;
      null != t && n && (c.delete(t), u.delete(t));
    },
    GUILD_UPDATE: function (e) {
      let { guild: t } = e,
        n = c.get(t.id);
      if (null == n || null == n.profile) return !1;
      let i = {
        ...n.profile,
        name: t.name,
        icon: t.icon ?? null,
        description: t.description ?? "",
        customBanner: t.discovery_splash ?? null,
      };
      c.set(t.id, { ...n, profile: i });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY: E,
    GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
      let { guildId: t, visibility: n } = e,
        i = c.get(t),
        r = i?.profile;
      null != i &&
        null != r &&
        c.set(t, { ...i, isUpdating: !1, profile: { ...r, visibility: n } });
    },
    GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: A,
  });
}
