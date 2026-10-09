/* Recovered shipped factory. Module 937050.
 * Source: recovered/web/assets/4a6df3baccf03720.js
 * UTF-16 property offsets: 1035..1496
 * Raw property SHA-256: 5be5f9e024a5bc7fb96fa66c0c526bf790b7acb9f6c993f11c5a47591f1e04db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => m });
  var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(435328),
    c = n(17928),
    u = n(808728),
    o = n(813754),
    d = n(165648);
  function m(t) {
    let { description: e, className: n, guildId: i, truncate: m = !0 } = t,
      x = (0, c.bG)([u.Ay], () => (null != i ? u.Ay.getDefaultChannel(i)?.id : void 0), [i]),
      g = r.useMemo(
        () =>
          (0, s.l)(e, !0, {
            guildId: i,
            channelId: x,
            allowLinks: !0,
            allowHeading: !0,
            allowList: !0,
          }),
        [e, i, x],
      );
    return (0, l.jsx)("div", { className: a()(o.i, n, d.PT, { [o.x]: m }), children: g });
  }
}
