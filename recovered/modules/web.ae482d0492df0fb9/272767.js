/* Recovered shipped factory. Module 272767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7824136..7824625
 * Raw property SHA-256: aee634cf479509e6a7dfb3bd59e8d9dc8e65737aa1068eef81ab950d9f9e7aad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => o, i: () => l });
  var i = n(521169),
    r = n(666113),
    a = n(737117),
    s = n(660183);
  function l() {
    return {
      adult: s.intl.string(s.t.fp3xf5),
      teen: s.intl.string(s.t.dqC1w2),
      unverified: s.intl.string(s.t.qiLic6),
    };
  }
  function o(e, t) {
    let n = e ? r.Nf : r.nS;
    return (0, i.n)(n)
      ? e
        ? l()
        : {
            adult: s.intl.formatToPlainString(a.default.iK0n30, { guildName: t }),
            teen: s.intl.formatToPlainString(a.default.ezJA0R, { guildName: t }),
            unverified: s.intl.formatToPlainString(a.default.h4HbnI, { guildName: t }),
          }
      : null;
  }
}
