/* Recovered shipped factory. Module 855511.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2658544..2658752
 * Raw property SHA-256: 070bff5987c0b9690009bd9c3355b1f2567516890ba0a984e2335650e1f68186
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(61330),
    r = n(652215);
  function a(e) {
    return null == e || null == e.type || e.type !== r.$pd.PLAYING
      ? null
      : (0, i.A)(e)
        ? r.yTV.XBOX
        : null != e.platform
          ? e.platform
          : r.yTV.DESKTOP;
  }
}
