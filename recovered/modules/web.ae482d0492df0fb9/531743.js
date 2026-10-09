/* Recovered shipped factory. Module 531743.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2849195..2849917
 * Raw property SHA-256: 20186e2e0e4dc88e4a7e56cbfd27d2f9222b2ede7f6b08b171c074b8f0d0c00b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(626584),
    r = n(723176);
  let a = new i.A("ChannelReader");
  class s {
    static getSync(e, t) {
      let n = performance.now(),
        i = r.A.channels(e).getManySyncUnsafe(t),
        s = performance.now() - n;
      return (a.log(`synchronously loaded in ${s}ms (guild: ${t}, channels: ${i.length})`), [i, s]);
    }
    static async getAsync(e, t) {
      let n = performance.now(),
        i = await r.A.channels(e).getMany(t),
        s = performance.now() - n;
      return (a.verbose(`loaded in ${s}ms (guild: ${t}, channels: ${i.length})`), i);
    }
    static async getGuildIds() {
      try {
        let e = r.A.channels();
        if (null == e) return new Set();
        let t = ((await e.getGuildIds()) ?? []).filter((e) => null !== e && "string" == typeof e);
        return new Set(t);
      } catch (e) {
        return (a.warn("couldn't get guild ids", e), new Set());
      }
    }
  }
}
