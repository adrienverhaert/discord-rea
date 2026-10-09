/* Recovered shipped factory. Module 565860.
 * Source: recovered/web/assets/fbb76afca9ed8c55.js
 * UTF-16 property offsets: 95..554
 * Raw property SHA-256: a7472061a8c6f30e7f87003b759042c1ab894ca8e26623d886b8d4d9566147a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, l) {
  (l.d(t, { HI: () => u, jP: () => r }), l(586774));
  var i = l(696451),
    n = l(994500),
    s = l(240248),
    a = l(427262);
  function u(e) {
    return (0, s.sS)(e.toLocaleLowerCase()).trim();
  }
  function r(e) {
    let t = {},
      l = n.A.getNickname(e.id);
    null != l && (t[l] = u(l).split(" "));
    let s = a.Ay.getGlobalName(e);
    return (
      null != s && null == t[s] && (t[s] = u(s).split(" ")),
      (t[e.username] = u(e.username).split(" ")),
      i.Ay.getNicknames(e.id).forEach((e) => {
        null == t[e] && (t[e] = u(e).split(" "));
      }),
      { names: t, nick: l }
    );
  }
  l(652215);
}
