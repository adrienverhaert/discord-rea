/* Recovered shipped factory. Module 936555.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4132501..4132879
 * Raw property SHA-256: 98178c2031c46c4625f23dc9660fa995972d485d4dcc7298fd0c80b6925ba5a1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, w: () => s });
  var i = n(17928),
    r = n(71393),
    a = n(652215);
  function s(e) {
    return (
      !e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
      (e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) ||
        e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
    );
  }
  function l(e) {
    return (0, i.bG)([r.A], () => {
      let t = r.A.getGuild(e);
      return null != t && s(t);
    });
  }
}
