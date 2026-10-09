/* Recovered shipped factory. Module 400253.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10493546..10493874
 * Raw property SHA-256: 10f958634ce7125da741d6d2f60a725945fde70ee298d9a78e684af0cb590010
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.INVITE_HOST}/${e}`;
  }
  function r(e) {
    return `${location.protocol}//${window.GLOBAL_ENV.GUILD_TEMPLATE_HOST}/${e}`;
  }
  function a() {
    return `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/channels/@me`;
  }
  n.d(t, { BH: () => a, FH: () => r, jN: () => i });
}
