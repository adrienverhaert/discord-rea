/* Recovered shipped factory. Module 435582.
 * Source: recovered/web/assets/6df4ea35a32d9e36.js
 * UTF-16 property offsets: 95..344
 * Raw property SHA-256: 16b569bdf93f37a8ac829a3160944a677a85ccd943156d9ffbc8798bdf28aff0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, l) {
  l.d(t, { A: () => s });
  var i = l(652215);
  function s(e, t) {
    let l = window.GLOBAL_ENV.CDN_HOST,
      s = window.GLOBAL_ENV.API_ENDPOINT;
    return null != l
      ? `https://${l}/app-assets/${e}/store/${t}.mp4`
      : `${location.protocol}${s}${i.Rsh.STORE_ASSET(e, t, "mp4")}`;
  }
}
