/* Recovered shipped factory. Module 461678.
 * Source: recovered/web/assets/aa865ad16b16d430.js
 * UTF-16 property offsets: 95..622
 * Raw property SHA-256: 4cc6029554d6376af5d4027b30b5fe77b83972c179b9c42f28519f94ecd776c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, d) {
  d.d(r, { A: () => h });
  var i = d(477900);
  d(582128);
  var n = d(17928),
    a = d(980707),
    l = d(477782),
    s = d(995102),
    c = d(288104),
    t = d(507238),
    u = d(71393);
  function h(e) {
    let {
        channel: r,
        closePopout: d,
        onSelect: h,
        navId: p,
        label: o,
        location: b,
        includeGuildMute: A,
      } = e,
      j = (0, c.b)(r),
      k = (0, n.bG)([u.A], () => u.A.getGuild(r.guild_id)),
      x = (0, t.A)(k);
    return (0, i.jsxs)(a.W, {
      "data-menu-migrated": !0,
      navId: p,
      onClose: d,
      "aria-label": o,
      onSelect: h,
      children: [
        (0, i.jsx)(l.rX, { children: (0, s.A)(r, b) }),
        A ? (0, i.jsx)(l.rX, { children: x }) : null,
        (0, i.jsx)(l.rX, { children: j }),
      ],
    });
  }
}
