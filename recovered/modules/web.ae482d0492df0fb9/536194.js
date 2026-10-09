/* Recovered shipped factory. Module 536194.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9668834..9669458
 * Raw property SHA-256: cb187c074022a6b884ffc4bf02789586e3ea2c2c43d84225b1fd696db0ef1de2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => r });
  var i = n(77729);
  class r {
    static cached;
    static get() {
      if (null == r.cached) {
        let e = i.A?.processUtils?.getMainArgvSync?.();
        (null != e && e.length > 1 && e.shift(), (r.cached = e ?? []));
      }
      return r.cached;
    }
    static contains(e) {
      return r.get().includes(e);
    }
    static isEnvVariableTrue(e) {
      if (void 0 === i.A) return !1;
      switch (i.A?.process?.env?.[e]) {
        case "1":
        case "true":
          return !0;
      }
      return !1;
    }
    static isDisallowPopupsSet() {
      return !!(r.contains("--disallow-popups") || r.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS"));
    }
    static isDiscordTestSet() {
      return r.isEnvVariableTrue("DISCORD_TEST");
    }
    static isDiscordGatewayPlaintextSet() {
      return !1;
    }
  }
}
