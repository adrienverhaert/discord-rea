/* Recovered shipped factory. Module 499211.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5276960..5277694
 * Raw property SHA-256: eb6ae34a21b67c5db0a9036e5dec5a7cde764632142db084ac81bba5f6e28ab9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, p: () => c });
  var i = n(17928),
    r = n(717125),
    a = n(734057),
    s = n(576705),
    l = n(652215);
  let o = { needSubscriptionToAccess: !1, isSubscriptionGated: !1 };
  function d(e) {
    return (0, i.cf)([a.A, r.A, s.A], () => c(e, a.A, r.A, s.A), [e]);
  }
  function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
      d = t.getChannel(e);
    return d?.isRoleSubscriptionTemplatePreviewChannel()
      ? { isSubscriptionGated: !0, needSubscriptionToAccess: !0 }
      : null != d && n.isChannelGated(d.guild_id, d.id)
        ? {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: d.isGuildVocal()
              ? !i.can(l.xBc.CONNECT, d)
              : !i.can(l.xBc.VIEW_CHANNEL, d),
          }
        : o;
  }
}
