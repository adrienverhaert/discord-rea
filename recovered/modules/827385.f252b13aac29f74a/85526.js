/* Recovered shipped factory. Module 85526.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 95..1403
 * Raw property SHA-256: 84836d41fb3444cd99a84159506d2fca6695725f8e6db61db10ee4034a897dee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n) {
  ((n.byteLength = function (e) {
    var n = d(e),
      t = n[0],
      a = n[1];
    return ((t + a) * 3) / 4 - a;
  }),
    (n.toByteArray = function (e) {
      var n,
        t,
        u = d(e),
        s = u[0],
        i = u[1],
        l = new r(((s + i) * 3) / 4 - i),
        o = 0,
        _ = i > 0 ? s - 4 : s;
      for (t = 0; t < _; t += 4)
        ((n =
          (a[e.charCodeAt(t)] << 18) |
          (a[e.charCodeAt(t + 1)] << 12) |
          (a[e.charCodeAt(t + 2)] << 6) |
          a[e.charCodeAt(t + 3)]),
          (l[o++] = (n >> 16) & 255),
          (l[o++] = (n >> 8) & 255),
          (l[o++] = 255 & n));
      return (
        2 === i &&
          ((n = (a[e.charCodeAt(t)] << 2) | (a[e.charCodeAt(t + 1)] >> 4)), (l[o++] = 255 & n)),
        1 === i &&
          ((n =
            (a[e.charCodeAt(t)] << 10) |
            (a[e.charCodeAt(t + 1)] << 4) |
            (a[e.charCodeAt(t + 2)] >> 2)),
          (l[o++] = (n >> 8) & 255),
          (l[o++] = 255 & n)),
        l
      );
    }),
    (n.fromByteArray = function (e) {
      for (var n, a = e.length, r = a % 3, u = [], s = 0, i = a - r; s < i; s += 16383)
        u.push(
          (function (e, n, a) {
            for (var r, u = [], s = n; s < a; s += 3)
              ((r = ((e[s] << 16) & 0xff0000) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])),
                u.push(t[(r >> 18) & 63] + t[(r >> 12) & 63] + t[(r >> 6) & 63] + t[63 & r]));
            return u.join("");
          })(e, s, s + 16383 > i ? i : s + 16383),
        );
      return (
        1 === r
          ? u.push(t[(n = e[a - 1]) >> 2] + t[(n << 4) & 63] + "==")
          : 2 === r &&
            u.push(
              t[(n = (e[a - 2] << 8) + e[a - 1]) >> 10] + t[(n >> 4) & 63] + t[(n << 2) & 63] + "=",
            ),
        u.join("")
      );
    }));
  for (
    var t = [],
      a = [],
      r = "u" > typeof Uint8Array ? Uint8Array : Array,
      u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      s = 0,
      i = u.length;
    s < i;
    ++s
  )
    ((t[s] = u[s]), (a[u.charCodeAt(s)] = s));
  function d(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var t = e.indexOf("=");
    -1 === t && (t = n);
    var a = t === n ? 0 : 4 - (t % 4);
    return [t, a];
  }
  ((a[45] = 62), (a[95] = 63));
}
