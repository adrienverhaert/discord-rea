/* Recovered shipped factory. Module 361610.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 618107..619064
 * Raw property SHA-256: 4931d9f96f92f9653de10b46154ed1b9c320343922ec6ea87b1407ac75f8b00f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Cf: () => l, Ey: () => d, G9: () => o, NE: () => s, NJ: () => c, un: () => a }),
    n(321073));
  var i = n(73153),
    r = n(36124);
  function a(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
  }
  function s(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
  }
  function l(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
  }
  function o(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
  }
  function d(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
  }
  function c(e) {
    let { guildId: t, channelId: n, y: i, height: a, rowHeight: s } = e;
    function l(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let o = [];
    function c(e) {
      let t = e + (r.JM - 1);
      return (o.push([e, t]), t + 1);
    }
    let u = l(0.5 * a),
      _ = l(i, -u),
      E = l(i + a, u);
    for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / r.JM) * r.JM; _ <= E;) _ = c(_);
    d(t, n, o);
  }
}
