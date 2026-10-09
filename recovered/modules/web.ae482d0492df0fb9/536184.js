/* Recovered shipped factory. Module 536184.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7512764..7513010
 * Raw property SHA-256: 96490b681af49bf58498b856a2f444aa19166bf9e2d14d8d3b8f76072dbb85f9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(76788);
  let r = "" !== new Audio().canPlayType("audio/ogg; codecs=opus");
  async function a(e) {
    return r || "audio/ogg" !== (await fetch(e, { method: "HEAD" })).headers.get("Content-Type")
      ? Audio
      : i.A.OGVPlayer;
  }
}
