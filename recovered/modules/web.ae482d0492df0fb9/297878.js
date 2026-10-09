/* Recovered shipped factory. Module 297878.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4621902..4622132
 * Raw property SHA-256: 04c382c89e9197647b1fb55e4f86c69e6b29a212842da6a646de0d5fa149a9e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(991690),
    r = n(823809),
    a = n(734057);
  function s(e) {
    if (e.type === i.U.APP_CHANNEL) {
      let t = a.A.getChannel(e.channelId);
      if (null != t && (0, r.sq)(t.type, t.topic_)) return i.U.MAIN;
    }
    return e.type;
  }
}
