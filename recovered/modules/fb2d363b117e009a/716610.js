/* Recovered shipped factory. Module 716610.
 * Source: recovered/web/assets/fb2d363b117e009a.js
 * UTF-16 property offsets: 8528..9106
 * Raw property SHA-256: 054b8c76b553d640b3811f8d8648362c7be95492d9e3c83675488640d33de72a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, t) {
  t.d(i, { l: () => s, v: () => r });
  var l,
    n = t(652215),
    r =
      (((l = {}).INELIGIBLE = "ineligible"),
      (l.DISQUALIFIED = "disqualified"),
      (l.ELIGIBLE_DISABLED = "eligible_disabled"),
      (l.ELIGIBLE_ENABLED = "eligible_enabled"),
      l);
  function s(e, i) {
    let t = e.features.has(n.GuildFeatures.VERIFIED),
      l = e.features.has(n.GuildFeatures.DISCOVERABLE);
    if (t) return l ? "eligible_enabled" : "eligible_disabled";
    if (l) {
      let e =
        i.sufficientWithoutGracePeriod &&
        null != i.gracePeriodEndDate &&
        i.gracePeriodEndDate > new Date();
      return i.sufficient || e ? "eligible_enabled" : "disqualified";
    }
    return i.sufficient ? "eligible_disabled" : "ineligible";
  }
}
