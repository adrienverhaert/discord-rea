/* Recovered shipped factory. Module 552229.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 348819..350411
 * Raw property SHA-256: 7f6167f14c0d303d8608d4e02a9af9c2f9f935933bf7b645ef297bffce6c5b15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(549412),
    o = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
      163, 195, 227, 258, 0, 0,
    ],
    a = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20,
      20, 21, 21, 21, 21, 16, 72, 78,
    ],
    i = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
      2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    u = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26,
      26, 27, 27, 28, 28, 29, 29, 64, 64,
    ];
  e.exports = function (e, t, n, l, s, c, f, d) {
    var h,
      p,
      y,
      m,
      v,
      g,
      b,
      w,
      _,
      k = d.bits,
      x = 0,
      S = 0,
      E = 0,
      O = 0,
      T = 0,
      R = 0,
      A = 0,
      C = 0,
      M = 0,
      D = 0,
      P = null,
      N = 0,
      j = new r.Buf16(16),
      L = new r.Buf16(16),
      z = null,
      U = 0;
    for (x = 0; x <= 15; x++) j[x] = 0;
    for (S = 0; S < l; S++) j[t[n + S]]++;
    for (O = 15, T = k; O >= 1 && 0 === j[O]; O--);
    if ((T > O && (T = O), 0 === O))
      return ((s[c++] = 0x1400000), (s[c++] = 0x1400000), (d.bits = 1), 0);
    for (E = 1; E < O && 0 === j[E]; E++);
    for (T < E && (T = E), C = 1, x = 1; x <= 15; x++) if (((C <<= 1), (C -= j[x]) < 0)) return -1;
    if (C > 0 && (0 === e || 1 !== O)) return -1;
    for (x = 1, L[1] = 0; x < 15; x++) L[x + 1] = L[x] + j[x];
    for (S = 0; S < l; S++) 0 !== t[n + S] && (f[L[t[n + S]]++] = S);
    if (
      (0 === e
        ? ((P = z = f), (g = 19))
        : 1 === e
          ? ((P = o), (N -= 257), (z = a), (U -= 257), (g = 256))
          : ((P = i), (z = u), (g = -1)),
      (D = 0),
      (S = 0),
      (x = E),
      (v = c),
      (R = T),
      (A = 0),
      (y = -1),
      (m = (M = 1 << T) - 1),
      (1 === e && M > 852) || (2 === e && M > 592))
    )
      return 1;
    for (;;) {
      ((b = x - A),
        f[S] < g
          ? ((w = 0), (_ = f[S]))
          : f[S] > g
            ? ((w = z[U + f[S]]), (_ = P[N + f[S]]))
            : ((w = 96), (_ = 0)),
        (h = 1 << (x - A)),
        (E = p = 1 << R));
      do s[v + (D >> A) + (p -= h)] = (b << 24) | (w << 16) | _;
      while (0 !== p);
      for (h = 1 << (x - 1); D & h;) h >>= 1;
      if ((0 !== h ? ((D &= h - 1), (D += h)) : (D = 0), S++, 0 == --j[x])) {
        if (x === O) break;
        x = t[n + f[S]];
      }
      if (x > T && (D & m) !== y) {
        for (
          0 === A && (A = T), v += E, C = 1 << (R = x - A);
          R + A < O && !((C -= j[R + A]) <= 0);
        )
          (R++, (C <<= 1));
        if (((M += 1 << R), (1 === e && M > 852) || (2 === e && M > 592))) return 1;
        s[(y = D & m)] = (T << 24) | (R << 16) | (v - c);
      }
    }
    return (0 !== D && (s[v + D] = ((x - A) << 24) | 4194304), (d.bits = T), 0);
  };
}
