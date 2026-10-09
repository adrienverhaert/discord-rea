/* Recovered shipped factory. Module 74847.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3696734..3696971
 * Raw property SHA-256: a00d2f00174bd372c298c3e91239cd0f442fcc39edf016efcf632c96574dca31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { t: () => s });
  var i = n(734057),
    r = n(576705),
    a = n(652215);
  function s(e) {
    let t = i.A.getChannel(e),
      n = t?.isPrivate(),
      s = t?.isForumChannel();
    return n || (r.A.can(a.xBc.ATTACH_FILES, t) && r.A.can(a.xBc.SEND_MESSAGES, t) && !s);
  }
}
