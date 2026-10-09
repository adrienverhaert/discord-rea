/* Recovered shipped factory. Module 518865.
 * Source: recovered/web/assets/8aa441422f57b440.js
 * UTF-16 property offsets: 1134..2068
 * Raw property SHA-256: dd5b7da761105a71b98ff2a1eab08298e55312ee250586ec8fa2f72000695052
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { Dj: () => i, Jl: () => d, MX: () => s, PY: () => c, aJ: () => f, lG: () => p });
  var r = e(288106),
    u = e(604913),
    l = e(993408),
    a = e(623373),
    o = e(660183);
  function i(t) {
    return t?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
  }
  function c(t, n) {
    if (null == n || n.rewardStatus !== r.GM.EARNED || !i(n)) return null;
    let e = n.rewardConfig?.discount;
    if (null == e || (0, l.G0)(t) || !t.isFirstParty || ((0, l.aw)(t) && !n.includeBundles))
      return null;
    let u = e.fiatEnabled && (0, a.go)(t),
      o = e.orbsEnabled && (0, a.Vx)(t);
    return u || o ? n : null;
  }
  function s(t) {
    return i(t) && t?.rewardConfig?.discount != null
      ? t.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === t.rewardConfig.discount.amount
        ? o.intl.string(o.t["302tKP"])
        : o.intl.string(o.t["7EGhnE"])
      : null;
  }
  function d(t) {
    if (!i(t)) return !1;
    let n = t?.rewardConfig?.discount;
    return null != n && n.fiatEnabled && !n.orbsEnabled;
  }
  function f(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "collectibles";
  }
  function p(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "purple";
  }
}
