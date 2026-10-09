/* Recovered shipped factory. Module 740076.
 * Source: recovered/web/assets/782d5882697dd8f9.js
 * UTF-16 property offsets: 652..970
 * Raw property SHA-256: 28e914311365bffa8e74ff6f03723c8bda9a67da22a638791ac023f2b3a8e4a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { I: () => a });
  var r = n(334279),
    i = n(17928),
    s = n(166403),
    l = n(660183);
  function a(e) {
    let t = (0, i.bG)([s.A], () => {
      let e = s.A.getPremiumSubscription();
      return e?.isPurchasedExternally === !0;
    });
    return r.I.ALL.has(e)
      ? { isDisabled: t, disabledReason: t ? l.intl.string(l.t.NbveHD) : null }
      : { isDisabled: !1, disabledReason: null };
  }
}
