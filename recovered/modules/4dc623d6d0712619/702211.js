/* Recovered shipped factory. Module 702211.
 * Source: recovered/web/assets/4dc623d6d0712619.js
 * UTF-16 property offsets: 95..355
 * Raw property SHA-256: fea339996384e48c830bcb52f5aa78b97b18f4c04e64eaea7e90fd1ef3b9d6c1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { b: () => p });
  var u = r(17928),
    i = r(287809),
    s = r(474090),
    d = r(202541);
  function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (
      !(0, u.bG)([i.default], () =>
        s.Ay.isPremium(i.default.getCurrentUser(), d.PremiumTypes.TIER_2),
      ) && !e
    );
  }
}
