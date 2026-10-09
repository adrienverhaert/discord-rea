/* Recovered shipped factory. Module 823809.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3916675..3917249
 * Raw property SHA-256: 5ec8c8a82a7f68285d9f3ff830199c8f9ffab14059c1a54525ee2993961a8979
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BZ: () => d, Kn: () => s, sq: () => c, we: () => o });
  var i = n(652215);
  let r = "vibegrations_application_id=",
    a = /^\d{17,20}$/;
  function s(e) {
    if (null == e || !e.startsWith(r)) return null;
    let t = e.slice(r.length);
    return a.test(t) ? t : null;
  }
  function l(e, t) {
    return (e ?? i.rbe.GUILD_TEXT) === i.rbe.GUILD_TEXT ? s(t) : null;
  }
  function o(e) {
    let t = l(e.type, e.topic);
    return null == t ? e : { ...e, type: i.rbe.GUILD_APP, application_id: t };
  }
  function d(e) {
    let t = l(e.type, e.topic_);
    return null == t ? e : { ...e, type: i.rbe.GUILD_APP, application_id: t };
  }
  function c(e, t) {
    return e === i.rbe.GUILD_APP && null != s(t);
  }
}
