/* Recovered shipped factory. Module 397244.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2707125..2707414
 * Raw property SHA-256: 7df917f4baf7c2ca08fb1646739aeaa87d8d50a0928bcc413fff56c72504b8b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(652215),
    r = n(818348);
  function a(e) {
    let { activities: t, status: n, applicationStream: a, voiceChannel: s } = e;
    if (n === r.cl.OFFLINE || n === r.cl.INVISIBLE) return !1;
    let l = t?.filter((e) => e.type !== i.$pd.HANG_STATUS);
    return null != a || null != s || (l?.length ?? 0) > 0;
  }
}
