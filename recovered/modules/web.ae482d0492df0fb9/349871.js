/* Recovered shipped factory. Module 349871.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6779323..6780286
 * Raw property SHA-256: 172530e0df5ffc8a841512af0aa0acdf93d2cdb9f52576240230e8ad14d268a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c$: () => l, Nh: () => o, kQ: () => d });
  var i,
    r = n(136722),
    a = n(441574),
    s =
      (((i = {})[(i.INCREASED_FILE_UPLOAD_SIZE = 0)] = "INCREASED_FILE_UPLOAD_SIZE"),
      (i[(i.INCREASED_GUILD_LIMIT = 1)] = "INCREASED_GUILD_LIMIT"),
      i);
  function l(e) {
    if (null == e) return null;
    let t = {};
    for (let [n, i] of Object.entries(e.config_by_perk))
      t[n] = {
        source: i.source,
        kind: (function (e) {
          if (null != e.kind)
            switch (e.kind.type) {
              case s.INCREASED_FILE_UPLOAD_SIZE:
                return { type: s.INCREASED_FILE_UPLOAD_SIZE, maxSize: e.kind.max_size };
              case s.INCREASED_GUILD_LIMIT:
                return { type: s.INCREASED_GUILD_LIMIT, maxGuilds: e.kind.max_guilds };
              default:
                return;
            }
        })(i),
      };
    return {
      activePerksBitmask: e.active_perks_bitmask,
      configByPerk: t,
      rulesVersion: e.rules_version,
    };
  }
  function o(e, t) {
    if (null == e) return !1;
    let n = e.activePerksBitmask,
      i = Math.floor(t / 64);
    return !(i >= n.length) && r.zy(r.iu(n[i]), r.jB(t % 64));
  }
  function d(e, t) {
    if (null == e) return;
    let n = e.configByPerk[String(t)];
    return n?.source != null ? n.source : o(e, t) ? [a.g$.SOURCE_NITRO] : void 0;
  }
}
