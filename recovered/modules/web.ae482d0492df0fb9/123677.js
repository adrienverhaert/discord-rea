/* Recovered shipped factory. Module 123677.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6144165..6145242
 * Raw property SHA-256: 5781c455d22ee9e0afaf7e70f4449117b3562f71f2b012f5219dbe77a3a7a4bb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { _: () => E, e: () => _ }), n(321073));
  var i = n(492462),
    r = n(179771),
    a = n(136722),
    s = n(734057),
    l = n(967198),
    o = n(488926),
    d = n(372250),
    c = n(647053),
    u = n(652215);
  function _(e) {
    let t = e.filter((e) => !c.A8.includes(e));
    return (
      t.includes(r.F.BOT) &&
        !t.includes(r.F.APPLICATIONS_COMMANDS) &&
        t.push(r.F.APPLICATIONS_COMMANDS),
      t
    );
  }
  function E(e) {
    let t = (0, i.parse)(e, { arrayFormat: "bracket" }),
      n = o.x3;
    try {
      n = a.iu(null != t.permissions && "" !== t.permissions ? t.permissions : "0");
    } catch (e) {}
    let r = t.channel_id,
      c = (function (e) {
        if (![u.ME, u.YYv, u.c$g].includes(e)) return e ?? void 0;
      })(t.guild_id ?? s.A.getChannel(r)?.guild_id ?? l.A.getGuildId()),
      _ = ((0, d.p)(t.scope) ?? "")
        .replace(/\+/g, " ")
        .split(" ")
        .filter((e) => e.length > 0);
    return {
      clientId: t.client_id ?? "",
      scopes: _,
      responseType: t.response_type,
      redirectUri: t.redirect_uri,
      codeChallenge: t.code_challenge,
      codeChallengeMethod: t.code_challenge_method,
      state: t.state,
      permissions: n,
      channelId: r,
      guildId: c,
      prompt: t.prompt,
      disableGuildSelect: "true" === t.disable_guild_select,
      integrationType: null == t.integration_type ? void 0 : Number(t.integration_type),
      nonce: t.nonce,
    };
  }
}
