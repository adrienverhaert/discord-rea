/* Recovered shipped factory. Module 189715.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 808632..809173
 * Raw property SHA-256: 366c388e3b15a469138dc2fcff700606827ea1ec645746194fc4de8c201b38a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(864886),
    i = r(74509),
    o = r(800670);
  e.exports = (e, t) => {
    e = new i(e, t);
    let r = new n("0.0.0");
    if (e.test(r) || ((r = new n("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let t = 0; t < e.set.length; ++t) {
      let i = e.set[t],
        a = null;
      (i.forEach((e) => {
        let t = new n(e.semver.version);
        switch (e.operator) {
          case ">":
            (0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format()));
          case "":
          case ">=":
            (!a || o(t, a)) && (a = t);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw Error(`Unexpected operation: ${e.operator}`);
        }
      }),
        a && (!r || o(r, a)) && (r = a));
    }
    return r && e.test(r) ? r : null;
  };
}
