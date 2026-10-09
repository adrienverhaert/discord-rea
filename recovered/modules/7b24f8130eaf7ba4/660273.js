/* Recovered shipped factory. Module 660273.
 * Source: recovered/web/assets/7b24f8130eaf7ba4.js
 * UTF-16 property offsets: 95..658
 * Raw property SHA-256: 88ba3943f759ec8ea2da310712307578b041092d3459a01c7397140a187b83e8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (i, t, n) {
  n.d(t, { A: () => o });
  var r = n(477900);
  n(582128);
  var s = n(17928),
    a = n(477782),
    d = n(857071),
    l = n(152007),
    e = n(867455),
    u = n(660183);
  function o(i, t) {
    let n = (0, s.bG)([l.A], () => l.A.hasJoined(i.id));
    return (0, s.bG)([d.A], () => null != i.guild_id && d.A.isLurking(i.guild_id))
      ? null
      : n
        ? (0, r.jsx)(a.Dr, {
            id: "leave-thread",
            label: i.isForumPost() ? u.intl.string(u.t["2LsZdT"]) : u.intl.string(u.t["fa/84m"]),
            action: () => e.A.leaveThread(i, t),
          })
        : (0, r.jsx)(a.Dr, {
            id: "join-thread",
            label: i.isForumPost() ? u.intl.string(u.t.ihLPiO) : u.intl.string(u.t["10kukS"]),
            action: () => e.A.joinThread(i, t),
          });
  }
}
