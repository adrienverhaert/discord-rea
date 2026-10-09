/* Recovered shipped factory. Module 370876.
 * Source: recovered/web/assets/00cd7f4e3762eaea.js
 * UTF-16 property offsets: 10084..10994
 * Raw property SHA-256: 099598e98eff92375cfe2d453f051b04f8431e9c3e4db55bece8406e980c7b10
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A3: () => s, DN: () => I, _t: () => E, mR: () => _, zP: () => p });
  var i = n(284009),
    r = n.n(i),
    a = n(435558),
    l = n.n(a),
    d = n(946116);
  function _(t) {
    if (t.type === d.fx.GUILD)
      return {
        channelId: t.directory_channel_id,
        guildId: t.entity_id,
        type: t.type,
        authorId: t.author_id,
        createdAt: t.created_at,
        description: t.description,
        primaryCategoryId: t.primary_category_id,
        name: t.guild?.name,
        icon: t.guild?.icon,
        splash: t.guild?.splash,
        features: new Set(t.guild?.features),
        approximateMemberCount: t.guild?.approximate_member_count,
        approximatePresenceCount: t.guild?.approximate_presence_count,
        featurableInDirectory: t.guild?.featurable_in_directory,
      };
    (t.type, r()(!1, "Directory entries must be connected to a guild!"));
  }
  let p = 5;
  function I(t) {
    return l().orderBy(t, [(t) => t.approximateMemberCount], ["desc"]);
  }
  function s(t) {
    var e;
    return ((e = t.filter((t) => t.featurableInDirectory)),
    l().orderBy(e, [(t) => t.createdAt], ["desc"])).slice(0, p);
  }
  function E(t) {
    return I(t);
  }
}
