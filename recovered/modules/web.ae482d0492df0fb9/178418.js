/* Recovered shipped factory. Module 178418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3014276..3014458
 * Raw property SHA-256: dde77de88ebc241b69e9c77376c9fbde6c101fb0825a0a213ba7cb5e21369cc8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { c: () => r });
  var i = n(734057);
  function r(e, t) {
    let n = i.A.getChannel(t);
    return (
      null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find((t) => t.id === e.id)
    );
  }
}
