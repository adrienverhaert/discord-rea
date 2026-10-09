/* Recovered shipped factory. Module 138869.
 * Source: recovered/web/assets/c4c06700397eafb3.js
 * UTF-16 property offsets: 95..553
 * Raw property SHA-256: 6f1759d9d019cdb365ce4ac0c25faba0cdd0d30eb82bd53436aa009ef700d3ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (i, c, s) {
  s.d(c, { A: () => u, V: () => l });
  var a,
    n = s(477900);
  s(582128);
  var t = s(503698),
    p = s.n(t),
    d = s(486020),
    e = s(371794),
    r = s(389343),
    l =
      (((a = {})[(a.SMALL = 40)] = "SMALL"),
      (a[(a.MEDIUM = 66)] = "MEDIUM"),
      (a[(a.LARGE = 128)] = "LARGE"),
      a);
  let o = { 40: r.EX, 66: r.Y, 128: r.as },
    u = function (i) {
      let c,
        { application: s, size: a, asset: t, className: l } = i;
      return (
        (c =
          null != t
            ? (0, e.YE)(s.id, t, a)
            : d.Ay.getApplicationIconURL({ id: s.id, icon: s.icon, size: a })),
        (0, n.jsx)("img", { alt: "", src: c, className: p()(r.Kk, o[a], l) })
      );
    };
}
