/* Recovered shipped factory. Module 970853.
 * Source: recovered/web/assets/9e7b3da0bc3d86d8.js
 * UTF-16 property offsets: 95..443
 * Raw property SHA-256: a6998f054eea32a6f3821237652589c6fd30684d6272f45ea5e29f7ec42252b5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, a) {
  a.d(e, { A: () => _ });
  var d = a(582128),
    i = a(5180),
    r = a(17839),
    s = a(652215),
    u = a(384539),
    l = a(660183);
  function _(t) {
    let e = d.useCallback(() => {
      (0, r.A)({ parentId: t.id, source: "favorites_add_to_category" });
    }, [t.id]);
    return __OVERLAY__ || !(0, i.ai)(t.getGuildId()) || t.type !== s.rbe.GUILD_CATEGORY
      ? null
      : { label: l.intl.string(u.default["1QJmIL"]), perform: e };
  }
}
