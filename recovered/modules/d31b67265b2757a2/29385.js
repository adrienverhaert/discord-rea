/* Recovered shipped factory. Module 29385.
 * Source: recovered/web/assets/d31b67265b2757a2.js
 * UTF-16 property offsets: 178503..179281
 * Raw property SHA-256: c1648fded9c8a28a0341dc266915386e74c7b094fdda0a3c03becc170d400ff7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { e: () => h });
  var i = t(17928),
    l = t(164956),
    s = t(34457),
    r = t(734057),
    a = t(317525),
    o = t(71393),
    d = t(599941),
    c = t(855918),
    u = t(652215);
  function h(e) {
    let { guildId: n, channelId: t } = e,
      h = (0, d.uP)(n);
    return (0, i.yK)(
      [r.A, o.A, l.A],
      () => {
        let e = r.A.getChannel(t),
          i = o.A.getGuild(n),
          d = l.A.isViewingServerShop(n);
        return null != i && null != e
          ? h.filter((n) =>
              (function (e, n, t) {
                let { isPreviewingRoles: i = !1 } =
                  arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!(i || e.published)) return !1;
                let l = t.permissionOverwrites[e.role_id];
                if ((0, c.Uj)(t, l)) return !0;
                let r = a.A.getEveryoneRole(n),
                  o = null != r && !(0, s._m)(r, u.xBc.VIEW_CHANNEL),
                  d = (0, c.AN)(t, t.permissionOverwrites[n.id]),
                  h = a.A.getRole(n.id, e.role_id);
                return o && !d && null != h && (0, c.iR)(h) && !(0, c.AN)(t, l);
              })(n, i, e, { isPreviewingRoles: d }),
            )
          : [];
      },
      [n, t, h],
    );
  }
}
