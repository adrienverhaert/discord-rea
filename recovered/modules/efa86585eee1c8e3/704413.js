/* Recovered shipped factory. Module 704413.
 * Source: recovered/web/assets/efa86585eee1c8e3.js
 * UTF-16 property offsets: 8608..8961
 * Raw property SHA-256: b1db4935253a8561d5598feb419352e0f5fec1143c53ac2296e5b06fadb4f81c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var s = n(582128),
    i = n(736653),
    a = n(885386),
    r = n(862780),
    l = n(21878),
    o = n(951727),
    c = n(708676);
  function d(e, t) {
    let n = (0, l.M)(e),
      d = (0, r.d$)(n.getChannelId())[n.id],
      u = (0, c.A)(n.poll?.expiry),
      h = a.Sf.useSetting(),
      m = (0, i.Ay)(),
      x = t ?? m;
    return s.useMemo(
      () => (0, o.Ay)(n, d, { animateEmoji: h, theme: x, formattedExpirationLabel: u }),
      [h, n, d, u, x],
    );
  }
}
