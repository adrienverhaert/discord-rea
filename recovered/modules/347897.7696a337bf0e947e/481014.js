/* Recovered shipped factory. Module 481014.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 801747..802136
 * Raw property SHA-256: d166b8c24bdecbfaed4e786acf06dd34a2ead98cd3f4ba4fafc401cd41a3b636
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  let n = r(532618);
  e.exports = (e, t) => {
    let r = n(e, null, !0),
      i = n(t, null, !0),
      o = r.compare(i);
    if (0 === o) return null;
    let a = o > 0,
      s = a ? r : i,
      l = a ? i : r,
      u = !!s.prerelease.length;
    if (l.prerelease.length && !u)
      return l.patch || l.minor ? (s.patch ? "patch" : s.minor ? "minor" : "major") : "major";
    let c = u ? "pre" : "";
    return r.major !== i.major
      ? c + "major"
      : r.minor !== i.minor
        ? c + "minor"
        : r.patch !== i.patch
          ? c + "patch"
          : "prerelease";
  };
}
