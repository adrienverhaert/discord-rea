/* Recovered shipped factory. Module 496767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5150503..5150953
 * Raw property SHA-256: ccde73e8db5c9fbcfbdffc7594283160cf12a710915b367c8fadafd897628158
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => d, h: () => o });
  var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(709977),
    l = n(652215);
  function o(e) {
    let t = r.A.getGuild(e);
    return (
      null != t &&
      t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
      a.A.can(l.xBc.KICK_MEMBERS, t)
    );
  }
  function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e));
    return (
      null != t &&
      t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
      a.A.can(l.xBc.KICK_MEMBERS, t) &&
      (0, s.Qd)(t)
    );
  }
}
