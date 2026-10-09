/* Recovered shipped factory. Module 628691.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9677495..9678009
 * Raw property SHA-256: c8f8014363be7633c706df95179d81ca5497fb04928ba8ba238da23e6671d843
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AR: () => d, UN: () => l, ul: () => o });
  var i = n(734057),
    r = n(576705),
    a = n(287809),
    s = n(652215);
  function l(e) {
    if (null == e) return !1;
    let t = e.id,
      n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
  }
  function o(e) {
    return null != e && !s.MRS.NON_REPORTABLE.has(e.type) && l(e.author);
  }
  function d(e) {
    var t;
    let n;
    return (
      null != e &&
      o(e) &&
      ((t = e.getChannelId()),
      null != (n = i.A.getChannel(t)) &&
        (n.type === s.rbe.DM ||
          n.type === s.rbe.GROUP_DM ||
          r.A.canWithPartialContext(s.xBc.MANAGE_MESSAGES, { channelId: t })))
    );
  }
}
