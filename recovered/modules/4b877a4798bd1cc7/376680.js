/* Recovered shipped factory. Module 376680.
 * Source: recovered/web/assets/4b877a4798bd1cc7.js
 * UTF-16 property offsets: 823..1050
 * Raw property SHA-256: 261908d03f187bff9d69ad2e80db36121cff1639506932acd9b4d511277d8003
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, l) {
  l.d(t, { A: () => u });
  var e = l(17928),
    r = l(832163);
  function u(n) {
    let { applicationId: t, guildId: l } = n;
    return (0, e.bG)(
      [r.A],
      () =>
        null != t
          ? r.A.getStorefrontDataForApplicationId(t)
          : null != l
            ? r.A.getStorefrontData(l)
            : void 0,
      [t, l],
    );
  }
}
