/* Recovered shipped factory. Module 549699.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2911169..2911630
 * Raw property SHA-256: 5417b51ac1ad4b822a25e916782bd67577dde87125b5b99b0f93a35a2c40e45d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Q: () => a }), n(323874), n(14289), n(35956));
  var i = n(636537),
    r = n(776231);
  function a(e, t, n) {
    let a = new URL(
      null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
        : `${(0, i.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
    );
    return (
      null != n && a.searchParams.set("size", (0, r.kr)(n).toString()),
      t.metadata.is_animated && a.searchParams.set("animated", "true"),
      a.toString()
    );
  }
}
