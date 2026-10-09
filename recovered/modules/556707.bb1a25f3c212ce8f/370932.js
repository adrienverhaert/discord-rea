/* Recovered shipped factory. Module 370932.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 323658..323904
 * Raw property SHA-256: ad972c4a818470d4944656ac305ea97968cf7fcaec536496fce31803eb23ab31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { w: () => i });
  var r = n(630449);
  function i(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = (0, r.KU)(),
      n = e || (t && t.getOptions());
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
  }
}
