/* Recovered shipped factory. Module 197184.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4260424..4260662
 * Raw property SHA-256: 209137247920f09d8a8734938c24b8ae3621a223397537c4c2e26f2df62a10be
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(991690);
  function r(e) {
    if (null != e)
      switch (e.type) {
        case i.U.MAIN:
        case i.U.APP_CHANNEL:
        case i.U.VOICE_CHANNEL:
        case i.U.INTERACTION_MODAL:
          return e.channelId;
        case i.U.OVERLAY:
        default:
          return;
      }
  }
}
