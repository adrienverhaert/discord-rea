/* Recovered shipped factory. Module 336590.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 79968..80471
 * Raw property SHA-256: 14cea529aea043b95bb0bcfdb27ca671c236f7ebee283db169cf92f4abcd2e21
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { k: () => d, r: () => u });
  var l = n(582128),
    i = n(17928),
    s = n(724442),
    a = n(380335),
    r = n(157550),
    o = n(411976),
    c = n(790499);
  function d() {
    let e = (0, o.W)(),
      t = l.useRef(e),
      n = (0, i.bG)([a.A], () => a.A.isReady()),
      r = l.useRef(n);
    return (
      l.useEffect(() => {
        n && !r.current && ((r.current = !0), (t.current = e));
      }, [n, e]),
      1 >= (0, s.A)(t) && 1 === e
    );
  }
  function u() {
    let e = (0, c.I)(),
      t = l.useRef(e),
      n = (0, i.bG)([r.A], () => r.A.isReady()),
      a = l.useRef(n);
    return (
      l.useEffect(() => {
        n && !a.current && ((a.current = !0), (t.current = e));
      }, [n, e]),
      1 >= (0, s.A)(t) && 1 === e
    );
  }
}
