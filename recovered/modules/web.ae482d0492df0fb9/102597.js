/* Recovered shipped factory. Module 102597.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7530343..7530617
 * Raw property SHA-256: 9fc1c198cf6fc2c76682dc8b399daa99844cf8258f6a0b72f1d8e19070668a45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(652215);
  function r(e) {
    let { CDN_HOST: t, PROJECT_ENV: n } = window.GLOBAL_ENV;
    return "development" !== n
      ? `https://${t}${i.Rsh.SOUNDBOARD_SOUND(e)}`
      : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}${i.Rsh.SOUNDBOARD_SOUND(e)}`;
  }
}
