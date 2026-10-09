/* Recovered shipped factory. Module 892110.
 * Source: recovered/web/assets/d31b67265b2757a2.js
 * UTF-16 property offsets: 178324..178502
 * Raw property SHA-256: 0c96df47775177a9fabf96ba8f6432bde4e332be57b3858ddf26d6a778a0ddf7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { l: () => r });
  var i = t(536637),
    l = t.n(i),
    s = t(935208);
  function r(e) {
    let n = s.default.extractTimestamp(e);
    return !l()().isBefore(l()(n).add(l().duration(15, "days")));
  }
}
