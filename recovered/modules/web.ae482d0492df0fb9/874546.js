/* Recovered shipped factory. Module 874546.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2659953..2660397
 * Raw property SHA-256: 8296ded600544bfc921cf60726115ecf224c8172053c4f83597aa4625fa3fd3d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => o, _C: () => l });
  var i = n(574381),
    r = n(809733),
    a = n(55730),
    s = n(652215);
  function l(e) {
    return null != e && !!(0, a.A)(e, s.jUm.JOIN) && e.type === s.$pd.PLAYING;
  }
  function o(e) {
    if (!l(e)) return !1;
    let t = (0, i.un)()
      ? s.yTV.IOS
      : (0, r.IA)()
        ? s.yTV.META_QUEST
        : (0, i.m0)()
          ? s.yTV.ANDROID
          : s.yTV.DESKTOP;
    if ((e?.platform != null ? e.platform : s.yTV.DESKTOP) === t) return !0;
    let n = e?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(t);
  }
}
