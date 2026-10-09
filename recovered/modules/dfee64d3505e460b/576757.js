/* Recovered shipped factory. Module 576757.
 * Source: recovered/web/assets/dfee64d3505e460b.js
 * UTF-16 property offsets: 358..913
 * Raw property SHA-256: cd35f3de6d435d44a4590657a5070c73d9d1c2e5068f8566319b769f50182724
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, l) {
  l.d(e, { A: () => d });
  var n = l(582128),
    i = l(17928),
    r = l(287809),
    a = l(403362);
  let u = [];
  function d(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      l = (0, i.yK)(
        [r.default],
        () => {
          let e = t.participants.map((t) => r.default.getUser(t)).filter(a.Vq),
            l = e.find((e) => e.id === t.author_id),
            n = e.filter((e) => e.id !== t.author_id);
          return null == l ? u : [...n, l];
        },
        [t],
      ),
      d = n.useMemo(() => l.slice(-e), [e, l]),
      s = d[d.length - 1],
      h = d[d.length - 2],
      c = Math.max(l.length - 1, 0);
    return {
      orderedParticipants: l,
      displayParticipants: d,
      participant1: s,
      participant2: h,
      numOtherParticipants: c,
    };
  }
}
