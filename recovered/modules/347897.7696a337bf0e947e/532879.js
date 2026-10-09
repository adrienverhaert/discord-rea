/* Recovered shipped factory. Module 532879.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 809844..810270
 * Raw property SHA-256: cd7a1f0766fd77f638b0bb32e0391c2171a5c5db1bdf7abb5b0839a21d96b970
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(4144),
    i = r(481558);
  e.exports = (e, t, r) => {
    let o = [],
      a = null,
      s = null,
      l = e.sort((e, t) => i(e, t, r));
    for (let e of l)
      n(e, t, r) ? ((s = e), a || (a = e)) : (s && o.push([a, s]), (s = null), (a = null));
    a && o.push([a, null]);
    let u = [];
    for (let [e, t] of o)
      e === t
        ? u.push(e)
        : t || e !== l[0]
          ? t
            ? e === l[0]
              ? u.push(`<=${t}`)
              : u.push(`${e} - ${t}`)
            : u.push(`>=${e}`)
          : u.push("*");
    let c = u.join(" || "),
      f = "string" == typeof t.raw ? t.raw : String(t);
    return c.length < f.length ? c : t;
  };
}
