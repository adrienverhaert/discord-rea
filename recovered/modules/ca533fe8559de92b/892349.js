/* Recovered shipped factory. Module 892349.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 364513..364837
 * Raw property SHA-256: 42a28fd42ec927351fb5af8b1dcde705cedfb3cde07409cfb2d24b0b7355dc7d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { p: () => u });
  var l = n(883645),
    i = n(558620),
    r = n(951305),
    a = n(166532),
    s = n(332026),
    o = n(557679);
  function u(e) {
    let t = (0, i.A)(),
      n = (0, l.s2)(),
      { isGift: u, giftRecipient: c } = (0, r.Pv)(),
      d = s.Ay.useConfig({ location: e });
    return (
      n === a.pn.PLAN_SELECT &&
      d === s.o3.PRESETS &&
      (0, o.M)({ isGift: u, giftRecipient: c, selectedPlanId: t?.id })
    );
  }
}
