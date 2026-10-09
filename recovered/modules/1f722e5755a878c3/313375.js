/* Recovered shipped factory. Module 313375.
 * Source: recovered/web/assets/1f722e5755a878c3.js
 * UTF-16 property offsets: 95..448
 * Raw property SHA-256: a01486b7e46f43f9978a2253ab992e0e63227c8c02e7ec6701823042e5da464e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, s, t) {
  t.d(s, { A: () => p });
  var e = t(477900);
  t(582128);
  var a = t(734660),
    c = t(369163),
    i = t(359286),
    u = t(652215);
  function p(r) {
    let { tier: s, ...t } = r;
    switch (s) {
      case u.TVA.NONE:
      case u.TVA.TIER_1:
        return (0, e.jsx)(a.E, { ...t });
      case u.TVA.TIER_2:
        return (0, e.jsx)(c.v, { ...t });
      case u.TVA.TIER_3:
        return (0, e.jsx)(i.q, { ...t });
      default:
        throw Error("Not a valid tier type");
    }
  }
}
