/* Recovered shipped factory. Module 207133.
 * Source: recovered/web/assets/1da391ff0869f800.js
 * UTF-16 property offsets: 95..367
 * Raw property SHA-256: 7fb06d4e5f18bc406b0f38bb94798ddbbb3c01aa57838647c7617e7f39d277b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, e) {
  e.d(t, { A: () => s });
  var a = e(702841),
    r = e(734057),
    l = e(746080);
  function s(n) {
    let t = (0, a.bG)([r.A], () => {
      let t = r.A.getChannel(n);
      return t?.parent_id != null && t.isForumPost() ? r.A.getChannel(t?.parent_id) : null;
    });
    return t?.hasFlag(l.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS) === !0;
  }
}
