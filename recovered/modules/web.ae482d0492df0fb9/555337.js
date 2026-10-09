/* Recovered shipped factory. Module 555337.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5367906..5379007
 * Raw property SHA-256: c20a2d0dcf98a4a9ac1fe8b7af342ad045b46e7629c85f68c9e22ee3ae267a3c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r, a, s, l, o, d, c, u, _;
  (n.d(t, { A: () => eS }), n(321073), n(938796));
  var E = n(435558),
    A = n.n(E),
    h = n(536637),
    f = n.n(h),
    I = n(17928),
    p = n(636537),
    T = n(506774),
    m = n(73153),
    g = n(867051),
    S = n(837011),
    N = n(95701),
    C = n(260509),
    O = n(671759),
    R = n(889227),
    L = n(71393),
    y = n(287809),
    D = n(149790),
    v = n(935208),
    b = n(794967),
    M = n(557193),
    P = n(310527),
    U = n(595818),
    w = n(652215),
    G = n(324580),
    x = n(124759);
  let k = [
      "name",
      "description",
      "icon",
      "splash",
      "banner",
      "homeHeader",
      "afkChannelId",
      "afkTimeout",
      "systemChannelId",
      "verificationLevel",
      "defaultMessageNotifications",
      "explicitContentFilter",
      "features",
      "systemChannelFlags",
      "preferredLocale",
      "rulesChannelId",
      "safetyAlertsChannelId",
      "ownerConfiguredContentLevel",
      "discoverySplash",
      "publicUpdatesChannelId",
      "premiumProgressBarEnabled",
      "officialMessageColor",
      "verificationRoleId",
    ],
    F = [
      "brandColorPrimary",
      "description",
      "icon",
      "name",
      "traits",
      "visibility",
      "gameApplicationIds",
      "customBanner",
      "tag",
      "badge",
      "badgeColorPrimary",
      "badgeColorSecondary",
    ],
    B = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    V = {
      icon: "iconOriginalMd5",
      banner: "bannerOriginalMd5",
      splash: "splashOriginalMd5",
      discoverySplash: "discoverySplashOriginalMd5",
    },
    H = !1,
    j = w.XlH.CLOSED,
    W = {},
    Y = null,
    K = !1,
    $ = !1,
    z = !1,
    X = null,
    Z = null,
    q = null,
    Q = null,
    J = {},
    ee = null,
    et = 0,
    en = w.EkJ.NONE,
    ei = null,
    er = {
      primaryCategoryId: G.ig,
      secondaryCategoryIds: [],
      keywords: [],
      emojiDiscoverabilityEnabled: !0,
      partnerActionedTimestamp: null,
      partnerApplicationTimestamp: null,
      isPublished: !1,
      reasonsToJoin: [],
      socialLinks: [],
      about: "",
    },
    ea = !1,
    es = er,
    el = er,
    eo = null,
    ed = 0,
    ec = null,
    eu = null,
    e_ = null;
  function eE(e) {
    if (null == l || null == s || s.id !== e) return !1;
    let t = L.A.getGuild(e);
    return null != t && (s === l ? (l = s = t) : (s = t), !0);
  }
  function eA(e) {
    let { guildId: t, section: n, subsection: r, location: a } = e,
      u = L.A.getGuild(t);
    if (null == u) return eh();
    let E = S.A.getProfile(t);
    ((s = l = u),
      (o = d = E),
      (z = $),
      (Z = X),
      (q = Q = u.guildSpaceSettings),
      (j = w.XlH.OPEN),
      (W = {}),
      (Y = null),
      (c = v.default.castGuildIdAsEveryoneGuildRoleId(t)),
      (en = l.mfaLevel),
      (el = es),
      (_ = null),
      (J = {}),
      (ei = a),
      ef({ section: n ?? i ?? (0, U.x)(), subsection: r ?? null }));
  }
  function eh() {
    ((H = !1),
      (j = w.XlH.CLOSED),
      (s = l = null),
      (K = !1),
      (z = !1),
      (Z = null),
      (q = null),
      (Q = null),
      (ee = null),
      (et = 0),
      (eo = null),
      (eu = null),
      (e_ = null),
      (i = null),
      (r = null),
      (a = null),
      (en = w.EkJ.NONE),
      (J = {}),
      (u = void 0));
  }
  function ef(e) {
    if (null == l) return !1;
    let t = i;
    if (((i = e.section), (r = e.subsection), i === w.BEX.INSTANT_INVITES || i === w.BEX.INVITES))
      p.Bo.get({
        url: w.Rsh.GUILD_INSTANT_INVITES(l.id),
        oldFormErrors: !0,
        rejectWithError: !0,
      }).then((e) => {
        m.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
      });
    else if (i === w.BEX.INTEGRATIONS || i === w.BEX.ROLES) {
      if (((c = null), t !== e.section)) return ep(e);
    } else
      i === w.BEX.MEMBERS
        ? (c = (0, C.af)(l))
        : i === w.BEX.VANITY_URL
          ? (0, P.Je)(l.id)
          : i === w.BEX.SAFETY &&
            m.h.dispatch({
              type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
              subsection: null == r ? w.nd0.SAFETY_OVERVIEW : r,
            });
  }
  function eI(e) {
    return new O.A({
      code: e.code,
      temporary: e.temporary,
      revoked: e.revoked,
      inviter: null != e.inviter ? new R.A(e.inviter) : null,
      channel: (0, N.OY)(e.channel),
      guild: null != e.guild ? (0, D.DY)(e.guild) : null,
      uses: e.uses,
      maxUses: e.max_uses,
      maxAge: e.max_age,
      createdAt: f()(e.created_at ?? void 0),
      flags: e.flags,
      roles: e.roles,
    });
  }
  function ep(e) {
    if (
      null == l ||
      j !== w.XlH.OPEN ||
      ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== l.id)
    )
      return !1;
    (0, b.c)(l.id);
  }
  function eT(e) {
    let { guildId: t } = e;
    if (null == l || l.id !== t) return !1;
    Y = null;
  }
  function em(e) {
    let { guildId: t, error: n } = e;
    if (null == l || l.id !== t) return !1;
    Y = n;
  }
  class eg extends I.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
      this.waitFor(L.A, S.A, y.default);
    }
    getMetadata() {
      return el;
    }
    widgetHasChanges() {
      return !1 !== K && (z !== $ || Z !== X);
    }
    guildSpaceSettingsHasChanges() {
      return Q?.enabled !== q?.enabled;
    }
    hasChanges() {
      return (
        !A().isEqual(l, s) ||
        !A().isEqual(el, es) ||
        !A().isEqual(d, o) ||
        this.widgetHasChanges() ||
        this.guildSpaceSettingsHasChanges()
      );
    }
    isOpen() {
      return H;
    }
    getSavedRouteState() {
      return u;
    }
    getSection() {
      return i;
    }
    showNotice() {
      return this.hasChanges();
    }
    getGuildId() {
      return null != l ? l.id : null;
    }
    showPublicSuccessModal() {
      return !T.w.get(x.wX);
    }
    getGuild() {
      return l;
    }
    getPendingOriginalMd5s() {
      return J;
    }
    getGuildProfile() {
      return d;
    }
    getWidget() {
      return { enabled: z, channelId: Z };
    }
    getGuildSpaceSettings() {
      return Q;
    }
    isSubmitting() {
      return j === w.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
      return ea;
    }
    getErrors() {
      return W;
    }
    getError(e) {
      return W[e] ?? null;
    }
    getProfileError() {
      return Y;
    }
    getSelectedRoleId() {
      return c;
    }
    getSlug() {
      return _;
    }
    getBans() {
      return [eo, ed];
    }
    getProps() {
      return {
        submitting: this.isSubmitting(),
        integrations: e_,
        section: i,
        subsection: r,
        errors: W,
        guild: l,
        bans: eo,
        bansVersion: ed,
        invites: eu,
        selectedRoleId: c,
        fetchedEmbed: K,
        embedEnabled: z,
        embedChannelId: Z,
        guildSpaceSettings: Q,
        mfaLevel: en,
        searchQuery: a,
        vanityURLCode: ee,
        vanityURLUses: et,
        originalGuild: s,
        hasChanges: this.hasChanges(),
        guildMetadata: el,
        analyticsLocation: ei,
        isGuildMetadataLoaded: ea,
        originalProfile: o,
        profile: d,
      };
    }
  }
  let eS = new eg(
    m.h,
    __OVERLAY__
      ? {}
      : {
          GUILD_SETTINGS_INIT: eA,
          GUILD_SETTINGS_OPEN: function (e) {
            ((H = !0), eA(e));
          },
          GUILD_SETTINGS_CLOSE: eh,
          GUILD_SETTINGS_UPDATE: function (e) {
            let t;
            if (null == l) return !1;
            for (let t of (k.forEach((t) => {
              null != l && e.hasOwnProperty(t) && (l = (0, g.hZ)(l, t, e[t] ?? null));
            }),
            Object.keys(V))) {
              if (!e.hasOwnProperty(t)) continue;
              let n = e[V[t]];
              null != n ? (J[t] = n) : delete J[t];
            }
            null == (t = l) || k.some((e) => t[e] !== s[e]) || (l = s);
          },
          GUILD_SETTINGS_PROFILE_UPDATE: function (e) {
            let { guildId: t } = e;
            if (null == d || null == l || l.id !== t) return !1;
            F.forEach((t) => {
              if (null != d && e.hasOwnProperty(t)) {
                let n = e[t];
                void 0 !== n && (d = { ...d, [t]: n });
              }
            });
          },
          GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
            let { guildId: t } = e;
            ((W = {}), (J = {}));
            let n = L.A.getGuild(t);
            null != n && ((s = l = n), (Q = q));
          },
          GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
            let { state: t } = e;
            return ((u = t), !1);
          },
          GUILD_SETTINGS_SUBMIT: function () {
            ((j = w.XlH.SUBMITTING), (W = {}));
          },
          GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
            ((j = w.XlH.OPEN),
              (J = {}),
              null != e.guild &&
                null != l &&
                l.id === e.guild.id &&
                (s = l = (0, D.Y1)(e.guild, s)));
          },
          GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
            ((j = w.XlH.OPEN), (i = i ?? (0, U.x)()), (r = null), (W = e.errors ?? {}));
          },
          GUILD_SETTINGS_SET_SECTION: ef,
          GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
            a = e.searchQuery;
          },
          GUILD_SETTINGS_LOADED_BANS: function (e) {
            ((eo = e.bans.reduce(
              (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
              new Map(),
            )),
              ed++);
          },
          GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
            let { bans: t, guildId: n } = e;
            ((ec !== n || null == eo) && ((ec = n), (eo = new Map())),
              (eo = t.reduce(
                (e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e),
                eo,
              )),
              ed++);
          },
          GUILD_SETTINGS_LOADED_INVITES: function (e) {
            eu = e.invites.reduce((e, t) => ((e[t.code] = eI(t)), e), {});
          },
          GUILD_SETTINGS_SET_WIDGET: function (e) {
            ((K = !0), ($ = z = e.enabled), (X = Z = e.channelId));
          },
          GUILD_SETTINGS_SET_VANITY_URL: function (e) {
            ((ee = e.code ?? null), (et = e.uses));
          },
          GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
            let { level: t } = e;
            en = t;
          },
          GUILD_SETTINGS_ROLE_SELECT: function (e) {
            let { roleId: t } = e;
            c = t ?? null;
          },
          GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
            e_ = e.integrations;
          },
          GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
            let { guildId: t } = e;
            if (null == l || t !== l.id) return !1;
            l = (0, g.hZ)(
              l,
              "features",
              new Set([...l.features, w.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
            );
          },
          GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
            let { guildId: t } = e;
            if (null == l || t !== l.id) return !1;
            l = (0, g.hZ)(
              l,
              "features",
              new Set([
                ...l.features,
                w.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE,
              ]),
            );
          },
          GUILD_BAN_ADD: function (e) {
            let { user: t, guildId: n } = e;
            if (null == eo || null == l || l.id !== n) return !1;
            (eo.set(t.id, { user: t, reason: null }), ed++);
          },
          GUILD_BAN_REMOVE: function (e) {
            let { user: t, guildId: n } = e;
            if (null == eo || null == l || l.id !== n) return !1;
            (eo.delete(t.id), ed++);
          },
          GUILD_ROLE_CREATE: function (e) {
            let { guildId: t } = e;
            if (!eE(t)) return !1;
          },
          GUILD_ROLE_UPDATE: function (e) {
            let { guildId: t } = e;
            if (!eE(t)) return !1;
          },
          GUILD_ROLE_DELETE: function (e) {
            let { guildId: t, roleId: n } = e;
            if (!eE(t)) return !1;
            c === n && (c = null);
          },
          GUILD_UPDATE: function (e) {
            if (null == l || l.id !== e.guild.id) return !1;
            {
              let e = L.A.getGuild(l.id);
              if (null == e) return !1;
              if (
                ((o = S.A.getProfile(l.id)),
                i === w.BEX.PROFILE || i === w.BEX.TAG || (0, M.HU)(d, o) || (d = o),
                i === w.BEX.PROFILE)
              ) {
                ((s = e), (l = e));
                return;
              }
              let t = (s = e),
                n = { ...l };
              (k.forEach((i) => {
                if (
                  !B.has(i) &&
                  (("rulesChannelId" !== i && "publicUpdatesChannelId" !== i) || n[i] !== x.SP) &&
                  "features" !== i
                ) {
                  if ("ownerConfiguredContentLevel" === i) {
                    t = (0, g.hZ)(t, i, e[i]);
                    return;
                  }
                  t = (0, g.hZ)(t, i, n[i]);
                }
              }),
                (l = t));
            }
          },
          GUILD_DELETE: function (e) {
            if (null == l || l.id !== e.guild.id) return !1;
            eh();
          },
          GUILD_PROFILE_FETCH_SUCCESS: function (e) {
            let { profile: t } = e;
            if (t.id !== l?.id || (0, M.HU)(d, o)) return !1;
            o = d = t;
          },
          GUILD_PROFILE_UPDATE: eT,
          GUILD_PROFILE_UPDATE_SUCCESS: function (e) {
            let { profile: t } = e;
            if (d?.id == null || !eE(d.id)) return !1;
            t.id === l?.id && ((o = d = t), (Y = null));
          },
          GUILD_PROFILE_UPDATE_FAILURE: em,
          GUILD_PROFILE_UPDATE_VISIBILITY: eT,
          GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (e) {
            let { guildId: t } = e;
            if (d?.id == null || !eE(d.id)) return !1;
            t === l?.id && ((o = d = S.A.getProfile(t)), (Y = null));
          },
          GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: em,
          USER_CONNECTIONS_UPDATE: ep,
          GUILD_INTEGRATIONS_UPDATE: ep,
          INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
            ((eu = { ...eu }), delete eu[e.code]);
          },
          INSTANT_INVITE_CREATE_SUCCESS: function (e) {
            eu = { ...eu, [e.invite.code]: eI(e.invite) };
          },
          GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
            let { guildId: t, metadata: n } = e;
            null != l &&
              t === l.id &&
              (!1 === ea && (ea = !0),
              (el = es =
                {
                  primaryCategoryId: n.primaryCategoryId ?? G.ig,
                  secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                  keywords: n.keywords ?? [],
                  emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? !0,
                  partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                  partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                  isPublished: n.isPublished ?? !1,
                  reasonsToJoin: n.reasonsToJoin ?? [],
                  socialLinks: n.socialLinks ?? [],
                  about: n.about ?? "",
                }),
              (W = {}));
          },
          GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
            es = el = er;
          },
          GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
            let { guildId: t, categoryId: n } = e;
            null != l &&
              t === l.id &&
              ((el = { ...el, secondaryCategoryIds: [...el.secondaryCategoryIds, n] }),
              (es = { ...es, secondaryCategoryIds: [...es.secondaryCategoryIds, n] }));
          },
          GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
            let t,
              { guildId: n, categoryId: i } = e;
            if (null == l || n !== l.id) return;
            let r = el.secondaryCategoryIds.indexOf(i);
            (-1 !== r &&
              ((t = [...el.secondaryCategoryIds]).splice(r, 1),
              (el = { ...el, secondaryCategoryIds: t })),
              -1 !== (r = es.secondaryCategoryIds.indexOf(i)) &&
                ((t = [...es.secondaryCategoryIds]).splice(r, 1),
                (es = { ...es, secondaryCategoryIds: t })));
          },
          GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
            let { guildId: t, errors: n } = e;
            null != l && t === l.id && (W = n ?? {});
          },
          GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
            let {
              guildId: t,
              primaryCategoryId: n,
              keywords: i,
              emojiDiscoverabilityEnabled: r,
              isPublished: a,
              reasonsToJoin: s,
              socialLinks: o,
              about: d,
            } = e;
            null != l &&
              t === l.id &&
              (el = {
                ...el,
                primaryCategoryId: null != n ? n : el.primaryCategoryId,
                keywords: null != i ? i : el.keywords,
                emojiDiscoverabilityEnabled: r ?? el.emojiDiscoverabilityEnabled,
                isPublished: a ?? el.isPublished,
                reasonsToJoin: null != s ? s : el.reasonsToJoin,
                socialLinks: null != o ? o : el.socialLinks,
                about: null != d ? d : el.about,
              });
          },
          GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
            let { guildId: t, errors: n } = e;
            null != l && t === l.id && (W = n ?? {});
          },
          GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
            let { slug: t } = e;
            _ = t;
          },
          GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
            let {} = e;
            _ = null;
          },
          GUILD_SETTINGS_WIDGET_UPDATE: function (e) {
            let { guildId: t, enabled: n, channelId: i } = e;
            if (null == l || l.id !== t) return !1;
            ((z = n), (Z = i));
          },
          GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE: function (e) {
            let { guildId: t, settings: n } = e;
            if (null == l || l.id !== t || null == Q) return !1;
            Q = { ...Q, ...n };
          },
          GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS: function (e) {
            let { guildId: t, settings: n } = e;
            if (null == l || l.id !== t) return !1;
            q = Q = n;
          },
        },
  );
}
