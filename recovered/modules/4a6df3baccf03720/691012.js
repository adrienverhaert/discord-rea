/* Recovered shipped factory. Module 691012.
 * Source: recovered/web/assets/4a6df3baccf03720.js
 * UTF-16 property offsets: 669..1034
 * Raw property SHA-256: c05c3449dec237dc19a2e701184700d2a485ade2cdb4146b71880dcd1e0e0f1c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => i });
  var l = n(776231),
    r = n(652215);
  function i(t, e) {
    if (null == t.image) return null;
    (null == e && (e = window.screen.width * (0, l.mZ)()), (e = (0, l.kr)(e)));
    let n = window.GLOBAL_ENV.CDN_HOST;
    return (
      (null != n
        ? `https://${n}/guild-events/${t.id}/${t.image}`
        : location.protocol +
          window.GLOBAL_ENV.API_ENDPOINT +
          r.Rsh.GUILD_EVENT_IMAGE(t.id, t.image, "png")) + `?size=${e}`
    );
  }
}
