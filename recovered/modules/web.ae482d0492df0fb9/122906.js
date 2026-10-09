/* Recovered shipped factory. Module 122906.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5438234..5439723
 * Raw property SHA-256: 40e2ad1575994b3e059c0752543d2bbefb2c7398a334e0615533279b2e4f2eb8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(17928),
    r = n(73153),
    a = n(177773),
    s = n(401755);
  let l = new Map(),
    o = null;
  function d(e, t) {
    if (null == e) return;
    let n = l.get(e),
      i = null != n ? { ...n } : { code: e, state: s.QB.RESOLVING };
    (t(i), (l = new Map(l)).set(e, i));
  }
  function c(e) {
    u(e.guildTemplate);
  }
  function u(e) {
    return d(e.code, (t) => {
      let n = (0, a.A)(e);
      for (let e in n) t[e] = n[e];
    });
  }
  function _(e) {
    return d(e.code, (e) => {
      e.state = s.QB.EXPIRED;
    });
  }
  class E extends i.Ay.Store {
    static displayName = "GuildTemplateStore";
    getGuildTemplate(e) {
      if (null != e) return l.get(e);
    }
    getGuildTemplates() {
      return l;
    }
    getForGuild(e) {
      for (let t of l.keys()) {
        let n = l.get(t);
        if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== s.QB.EXPIRED)
          return n;
      }
    }
    getDisplayedGuildTemplateCode() {
      return o;
    }
  }
  let A = new E(r.h, {
    GUILD_TEMPLATE_RESOLVE: function (e) {
      let { code: t } = e;
      (l = new Map(l)).set(t, { code: t, state: s.QB.RESOLVING });
    },
    GUILD_TEMPLATE_CREATE_SUCCESS: c,
    GUILD_TEMPLATE_SYNC_SUCCESS: c,
    GUILD_TEMPLATE_RESOLVE_SUCCESS: c,
    GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function (e) {
      let { guildTemplates: t } = e;
      t.forEach((e) => u(e));
    },
    GUILD_TEMPLATE_RESOLVE_FAILURE: _,
    GUILD_TEMPLATE_DELETE_SUCCESS: _,
    GUILD_TEMPLATE_ACCEPT: function (e) {
      return d(e.code, (e) => {
        e.state = s.QB.ACCEPTING;
      });
    },
    GUILD_TEMPLATE_ACCEPT_SUCCESS: function (e) {
      return d(e.code, (e) => {
        ((e.state = s.QB.ACCEPTED), (e.usageCount = (e.usageCount ?? 0) + 1));
      });
    },
    GUILD_TEMPLATE_ACCEPT_FAILURE: function (e) {
      return d(e.code, (e) => {
        e.state = s.QB.RESOLVED;
      });
    },
    GUILD_TEMPLATE_MODAL_SHOW: function (e) {
      o = e.code;
    },
    GUILD_TEMPLATE_MODAL_HIDE: function (e) {
      o = null;
    },
  });
}
