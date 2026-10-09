/* Recovered shipped factory. Module 314519.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2273091..2273440
 * Raw property SHA-256: 3199a45c4c3e5e00f7b4e757c9170b8b4f6b739a1cc03cf21e9563aa49993333
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { s: () => s });
  var i = n(148494),
    r = n(573163),
    a = n(309010);
  let s = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
      let e = a.Ay.getChannelId();
      if (null != e) {
        let t = r.Ay.ackMessageId(e);
        null != t &&
          r.Ay.getOldestUnreadTimestamp(e) > 0 &&
          i.A.jumpToMessage({
            channelId: e,
            messageId: t,
            offset: 1,
            context: "Keyboard Shortcut",
          });
      }
      return !1;
    },
  };
}
