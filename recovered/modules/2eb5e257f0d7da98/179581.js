/* Recovered shipped factory. Module 179581.
 * Source: recovered/web/assets/2eb5e257f0d7da98.js
 * UTF-16 property offsets: 95..287
 * Raw property SHA-256: 141101bee976b08b08919987dd0052b5843de0b0409fa2cf5c689d0452c617f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { N: () => a });
  var i = e(309010),
    l = e(746080);
  function a() {
    let t = i.Ay.getCurrentlySelectedChannelId() ?? void 0;
    return null != t && (0, l.jq)(t) ? { channel_static_route: t } : { channel_id: t };
  }
}
