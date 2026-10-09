/* Recovered shipped factory. Module 747180.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4260663..4260899
 * Raw property SHA-256: 947dd97ca5eee3075605465afaf9691bb2cafe364d76b1fe52b063e1552f58b2
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
          return e.guildId;
        case i.U.OVERLAY:
        default:
          return;
      }
  }
}
