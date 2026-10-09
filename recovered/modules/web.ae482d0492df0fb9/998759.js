/* Recovered shipped factory. Module 998759.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7316599..7317064
 * Raw property SHA-256: 085ba1bcbef1388dbd1de617d99b4c95fbf6091282b780fff8877ea04f65862f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => s });
  var i = n(582128),
    r = n(827762),
    a = n(277515);
  function s(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: s } = e,
      l = i.useMemo(() => {
        if (null == t || "" === t) return null;
        let e = r.toByteArray(t),
          i = (0, a.DB)(e, s, n);
        if (null == i) return null;
        let l = RegExp(`.{1,${n}}`, "g"),
          o = i.match(l);
        return null == o ? null : Array.from(o);
      }, [n, t, s]);
    if (null != t && "" !== t && null == l)
      throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return l;
  }
}
