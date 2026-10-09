/* Recovered shipped factory. Module 72563.
 * Source: recovered/web/assets/46c1c99a81e2e24a.js
 * UTF-16 property offsets: 95..781
 * Raw property SHA-256: c3af187a57cd45b968b7e31783627b4486f67a8e5be39dbf4f4c4341b2cfed2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, r) {
  r.d(n, { i: () => s });
  var e = r(582128),
    i = r(17928),
    l = r(287809),
    a = r(403362),
    u = r(427262),
    f = r(660183);
  function s(t) {
    let n = (0, i.yK)([l.default], () =>
      t.recipients
        .map((t) => l.default.getUser(t))
        .filter(a.Vq)
        .map((t) => u.Ay.getName(t)),
    );
    return e.useMemo(() => {
      if ("" === t.name) return null;
      if (0 === n.length) return null;
      if (1 === n.length) return f.intl.formatToPlainString(f.t["J+Wpst"], { first: n[0] });
      if (2 === n.length)
        return f.intl.formatToPlainString(f.t.gwRP0Y, { first: n[0], second: n[1] });
      if (3 === n.length)
        return f.intl.formatToPlainString(f.t.QDB5et, { first: n[0], second: n[1], third: n[2] });
      let r = n.length - 3;
      return f.intl.formatToPlainString(f.t.VYfueb, {
        first: n[0],
        second: n[1],
        third: n[2],
        count: r,
      });
    }, [t, n]);
  }
}
