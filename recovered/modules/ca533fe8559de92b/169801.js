/* Recovered shipped factory. Module 169801.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 328359..328713
 * Raw property SHA-256: 9dc0a82cb275eab1b3ea4c0c6a52d7caba4cfbeb4b5936722b233cc9f37e35a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s, t: () => a });
  var l = n(642639),
    i = n(732280),
    r = n(202541);
  function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: l } = e;
    return !n && null != t && null != l && r.kb[t.trialId].skus.includes(l);
  }
  function s(e) {
    let { isGift: t, skuId: n } = e,
      a = (0, l.t4)((e) => e.referralTrialOfferId ?? void 0),
      s = (0, i.V)(a);
    return !t && null != s && null != n && r.kb[s.trialId].skus.includes(n);
  }
}
