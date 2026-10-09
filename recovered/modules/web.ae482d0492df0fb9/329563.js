/* Recovered shipped factory. Module 329563.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2232156..2232477
 * Raw property SHA-256: 218d66cc0edd2e8ebfbc1c753734e596600d349c5aed5f07c1bcf573fa240731
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var i = n(626584),
    r = n(279234);
  try {
    performance.setResourceTimingBufferSize(500);
  } catch {}
  let a = new i.A("libdiscore");
  !(async function () {
    try {
      __OVERLAY__ || (await (0, r.P)());
    } catch (e) {
      a.error("Failed to initialize libdiscore", e);
    }
    setTimeout(() => {
      try {
        n(547533);
      } finally {
        n(19575).Ay.indexLoadedAsync();
      }
    }, 0);
  })();
}
