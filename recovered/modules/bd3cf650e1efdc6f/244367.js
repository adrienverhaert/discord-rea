/* Recovered shipped factory. Module 244367.
 * Source: recovered/web/assets/bd3cf650e1efdc6f.js
 * UTF-16 property offsets: 95..494
 * Raw property SHA-256: da2c32cd0bcfc13d225aaaf0eb8aea2883d2fd3ca48146843a8bb40471eaaa70
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { a: () => l, t: () => c });
  var s = a(477900);
  a(582128);
  var d = a(503698),
    i = a.n(d),
    r = a(834730),
    n = a(458029);
  let c = { DEFAULT: "default", DESCRIPTION: "description" };
  function l(e) {
    let { type: t = c.DEFAULT, className: a, disabled: d, children: l, style: p, ...u } = e,
      o = "modeDefault";
    return (
      d && (o = "modeDisabled"),
      (0, s.jsx)(r.E, {
        variant: "text-sm/normal",
        className: i()(n[t], a, n[o]),
        style: p,
        ...u,
        children: l,
      })
    );
  }
  l.Types = c;
}
