/* Recovered shipped factory. Module 462539.
 * Source: recovered/web/assets/287788.9d9b891317b8bb7c.js
 * UTF-16 property offsets: 10841..11257
 * Raw property SHA-256: d68c92a644ee686ff9c46bb9591746e3a2d0ab76e0f737133b802d7a402ef5c2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t) {
  for (
    var e = {
        glog: function (t) {
          if (t < 1) throw Error("glog(" + t + ")");
          return e.LOG_TABLE[t];
        },
        gexp: function (t) {
          for (; t < 0;) t += 255;
          for (; t >= 256;) t -= 255;
          return e.EXP_TABLE[t];
        },
        EXP_TABLE: Array(256),
        LOG_TABLE: Array(256),
      },
      r = 0;
    r < 8;
    r++
  )
    e.EXP_TABLE[r] = 1 << r;
  for (var r = 8; r < 256; r++)
    e.EXP_TABLE[r] =
      e.EXP_TABLE[r - 4] ^ e.EXP_TABLE[r - 5] ^ e.EXP_TABLE[r - 6] ^ e.EXP_TABLE[r - 8];
  for (var r = 0; r < 255; r++) e.LOG_TABLE[e.EXP_TABLE[r]] = r;
  t.exports = e;
}
