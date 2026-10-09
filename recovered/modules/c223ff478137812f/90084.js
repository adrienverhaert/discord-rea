/* Recovered shipped factory. Module 90084.
 * Source: recovered/web/assets/c223ff478137812f.js
 * UTF-16 property offsets: 95..460
 * Raw property SHA-256: a7f1009e607b68206efc53c5230c13d4b6c075136f6760ca7715b926e745e726
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, i) {
  i.d(e, { u: () => r });
  var u = i(582128),
    a = i(17928),
    c = i(250527),
    n = i(837011);
  function r(t) {
    let e = (0, a.bG)([n.A], () => n.A.getProfile(t)),
      i = (0, a.bG)([n.A], () => n.A.getFetchStatus(t));
    return {
      guildProfile: e,
      fetchGuildProfile: u.useCallback(
        async function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return await (0, c.L4)(t, e);
        },
        [t],
      ),
      fetchStatus: i,
    };
  }
}
