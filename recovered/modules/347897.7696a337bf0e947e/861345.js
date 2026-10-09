/* Recovered shipped factory. Module 861345.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 809174..809843
 * Raw property SHA-256: 2e795443895add2a4f081a8e2ad6992a555b8ef9cabcca5bea1dc7e2f2114485
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(864886),
    i = r(46666),
    { ANY: o } = i,
    a = r(74509),
    s = r(4144),
    l = r(800670),
    u = r(596641),
    c = r(738018),
    f = r(569671);
  e.exports = (e, t, r, p) => {
    let d, h, m, v, y;
    switch (((e = new n(e, p)), (t = new a(t, p)), r)) {
      case ">":
        ((d = l), (h = c), (m = u), (v = ">"), (y = ">="));
        break;
      case "<":
        ((d = u), (h = f), (m = l), (v = "<"), (y = "<="));
        break;
      default:
        throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (s(e, t, p)) return !1;
    for (let r = 0; r < t.set.length; ++r) {
      let n = t.set[r],
        a = null,
        s = null;
      if (
        (n.forEach((e) => {
          (e.semver === o && (e = new i(">=0.0.0")),
            (a = a || e),
            (s = s || e),
            d(e.semver, a.semver, p) ? (a = e) : m(e.semver, s.semver, p) && (s = e));
        }),
        a.operator === v ||
          a.operator === y ||
          ((!s.operator || s.operator === v) && h(e, s.semver)) ||
          (s.operator === y && m(e, s.semver)))
      )
        return !1;
    }
    return !0;
  };
}
