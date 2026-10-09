/* Recovered shipped factory. Module 284059.
 * Source: recovered/web/assets/fa940d587991ed91.js
 * UTF-16 property offsets: 4958..5180
 * Raw property SHA-256: 5c3996d2e8020d8b11a2f366c1ec3f7fbda983eecf77df779a6419caa1394804
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, n) {
  n.d(l, { r: () => s });
  var t = n(317097),
    r = n(652215);
  function s(e, l) {
    let n = e
      .map((l, n) => {
        let s = e.length > 1 ? (n / (e.length - 1)) * 100 : 0;
        return `${(0, t.Hl)(l ?? r.TGz)} ${s}%`;
      })
      .join(", ");
    return `linear-gradient(${l}deg, ${n})`;
  }
}
