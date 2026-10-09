/* Recovered shipped factory. Module 184989.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8940269..8941098
 * Raw property SHA-256: 0f8fbc7262be143de2b273f06bef98fb3806596a7e04ea063141aac5d2da879b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(73153);
  class a extends i.Ay.Store {
    guildIds = new Set();
    allGuildIds() {
      return this.guildIds;
    }
    isMember(e) {
      return this.guildIds.has(e);
    }
    constructor() {
      super(
        r.h,
        {
          CACHE_LOADED: (e) => this.handleCacheLoaded(e),
          CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
          CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
          GUILD_CREATE: (e) => this.handleGuildCreate(e),
          GUILD_DELETE: (e) => this.handleGuildDelete(e),
        },
        r.A.Early,
      );
    }
    handleConnectionOpen(e) {
      this.guildIds = new Set([...e.guilds.map((e) => e.id), ...e.unavailableGuilds]);
    }
    handleCacheLoaded(e) {
      this.guildIds = new Set(e.guilds.map((e) => e.id));
    }
    handleCacheLoadedLazy(e) {
      for (let t of e.guilds) this.guildIds.add(t.id);
    }
    handleGuildCreate(e) {
      this.guildIds.add(e.guild.id);
    }
    handleGuildDelete(e) {
      !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
    }
  }
  let s = new a();
}
