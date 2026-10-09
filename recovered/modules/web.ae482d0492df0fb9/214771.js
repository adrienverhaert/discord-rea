/* Recovered shipped factory. Module 214771.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2848157..2849194
 * Raw property SHA-256: afdde921adbdfb0a5620b42354a1801c5738958b19965995e19be2b1c5d9e7b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(435558),
    r = n.n(i),
    a = n(937724),
    s = n(626584),
    l = n(967198),
    o = n(927813),
    d = n(723176);
  let c = new s.A("NonGuildVersions"),
    u = new (class {
      constructor() {
        if (!(0, a.O)()) return;
        l.A.addChangeListener(
          r().throttle(() => {
            d.A.database()?.transaction((e) => {
              let t = l.A.getGuildId();
              null == t || isNaN(Number(t))
                ? d.A.nonGuildVersionsTransaction(e).delete("initial_guild_id")
                : d.A.nonGuildVersionsTransaction(e).put({
                    id: "initial_guild_id",
                    versionString: t,
                  });
            });
          }, 10 * o.A.Millis.SECOND),
        );
      }
      actions = {
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t),
      };
      async getCommittedVersions() {
        try {
          let e = d.A.nonGuildVersions();
          if (null == e) return {};
          let t = (await e.getMany()).map((e) => [
            e.id,
            "version" in e ? e.version : e.versionString,
          ]);
          return Object.fromEntries(t ?? []);
        } catch (e) {
          return (c.warn("couldn't load guild versions", e), {});
        }
      }
      handleConnectionOpen(e, t) {
        null != e.apiCodeVersion &&
          d.A.nonGuildVersionsTransaction(t).put({
            id: "api_code_version",
            version: e.apiCodeVersion,
          });
      }
      resetInMemoryState() {}
    })();
}
