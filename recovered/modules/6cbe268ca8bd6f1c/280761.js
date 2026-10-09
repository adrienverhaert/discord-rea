/* Recovered shipped factory. Module 280761.
 * Source: recovered/web/assets/6cbe268ca8bd6f1c.js
 * UTF-16 property offsets: 2065..2351
 * Raw property SHA-256: 93f6d7f84e3abd321c49a0136b30bed941cc77a33416948449e92fc997ba49a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, t) {
  t.d(r, { U: () => s });
  var n = t(17928),
    i = t(918467),
    l = t(288106),
    a = t(202541);
  function s() {
    let e = (0, n.bG)([i.A], () => i.A.getPromotionsForApplication(a.tv));
    return e?.find((e) => {
      var r;
      return (
        "1554541212982050847" === e.id &&
        null != (r = e.rewardStatus) &&
        (r === l.GM.EARNED || r === l.GM.CONSUMED)
      );
    });
  }
}
