/* Recovered shipped factory. Module 891786.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6826354..6826973
 * Raw property SHA-256: 7295d4eb38c91d5cf799aea9fa5fb3aaef21d72955f02a57a670349fda75f07c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    let n = e.effectiveStartDate?.getTime() ?? -1 / 0,
      i = t.effectiveStartDate?.getTime() ?? -1 / 0;
    if (n !== i) return i - n;
    let r = e.effectiveEndDate?.getTime() ?? 1 / 0,
      a = t.effectiveEndDate?.getTime() ?? 1 / 0;
    if (r !== a) return a - r;
    let s = BigInt(e.id),
      l = BigInt(t.id);
    return s === l ? 0 : l > s ? 1 : -1;
  }
  function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0,
      r = e.filter((e) => {
        var i, r;
        return (
          (i = e.effectiveStartDate),
          (r = e.effectiveEndDate),
          !((null != i && t.getTime() < i.getTime()) || (null != r && t.getTime() > r.getTime())) &&
            (!e.isTimed || n(e))
        );
      });
    return 0 === r.length ? null : ([...r].sort(i)[0] ?? null);
  }
  n.d(t, { A: () => r });
}
