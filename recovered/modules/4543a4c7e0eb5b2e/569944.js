/* Recovered shipped factory. Module 569944.
 * Source: recovered/web/assets/4543a4c7e0eb5b2e.js
 * UTF-16 property offsets: 4990..5271
 * Raw property SHA-256: 7b4c891bd4d5bce270c020d499a909ea5c75e095abc1b65c3fddc37dc0f64814
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, n) {
  n.d(l, { c: () => i });
  var s = n(260509),
    t = n(488926),
    a = n(652215);
  function i(e, l) {
    return (
      !!((0, s.bM)(e, l) || t.$3({ permission: a.xBc.ADMINISTRATOR, context: e, user: l })) ||
      (t.$3({ permission: a.xBc.MANAGE_GUILD, context: e, user: l }) &&
        t.$3({ permission: a.xBc.MANAGE_ROLES, context: e, user: l }))
    );
  }
}
