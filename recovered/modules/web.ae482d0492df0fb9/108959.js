/* Recovered shipped factory. Module 108959.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2662259..2662684
 * Raw property SHA-256: 76204d44f79a9d93ad2b83ffead8e71dd021237d2252ba9b302d81f8e44ab750
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(478437),
    r = n(280450),
    a = n(734057),
    s = n(309010),
    l = n(977997);
  function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
      o = t.getChannel(e),
      d = n.getVoiceChannelId();
    return (
      null != o &&
      (o.type === i.r.GUILD_VOICE ||
        (!!o.isPrivate() &&
          (o.id === d || null != l.A.getVoiceStatesForChannel(o.id)[r.default.getId()])))
    );
  }
}
