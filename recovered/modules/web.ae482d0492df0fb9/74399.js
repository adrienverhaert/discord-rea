/* Recovered shipped factory. Module 74399.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5272701..5273485
 * Raw property SHA-256: 4cc8f21b5b261d0bc5e21837a22cb9a917ce1306a95f068869404782295b8112
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(95701),
    s = n(734057);
  let l = {},
    o = {};
  class d extends i.Ay.Store {
    initialize() {
      this.waitFor(s.A);
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
      return l[e];
    }
    getTemplateWithCategory(e, t) {
      return l[e]?.find((e) => e.category === t);
    }
    getChannel(e) {
      return o[e];
    }
  }
  let c = new d(r.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
      let { selectedTemplate: t, guildId: n } = e,
        i = Object.values(s.A.getMutableGuildChannelsForGuild(n));
      t.listings.forEach((e) => {
        e.channels.forEach((e) => {
          let t = i.find((t) => t.name === e.name);
          if (void 0 !== t) e.id = t.id;
          else if (!(e.id in o)) {
            let t = (0, a.createChannelRecord)(e);
            o[e.id] = t;
          }
        });
      });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
      let { templates: t, guildId: n } = e;
      l[n] = t;
    },
  });
}
