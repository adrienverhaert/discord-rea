/* Recovered shipped factory. Module 311564.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 335847..337653
 * Raw property SHA-256: 7138c9845ea18d06d299ff470d25f7a69d24c65e0abc03d92749b199858a7bd7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t) {
    var n, r, o, a, i, u, l, s, c, f, d, h, p, y, m, v, g, b, w, _, k, x, S, E, O;
    ((n = e.state),
      (r = e.next_in),
      (E = e.input),
      (o = r + (e.avail_in - 5)),
      (a = e.next_out),
      (O = e.output),
      (i = a - (t - e.avail_out)),
      (u = a + (e.avail_out - 257)),
      (l = n.dmax),
      (s = n.wsize),
      (c = n.whave),
      (f = n.wnext),
      (d = n.window),
      (h = n.hold),
      (p = n.bits),
      (y = n.lencode),
      (m = n.distcode),
      (v = (1 << n.lenbits) - 1),
      (g = (1 << n.distbits) - 1));
    t: do
      for (
        p < 15 && ((h += E[r++] << p), (p += 8), (h += E[r++] << p), (p += 8)), b = y[h & v];
        ;
      ) {
        if (((h >>>= w = b >>> 24), (p -= w), 0 == (w = (b >>> 16) & 255))) O[a++] = 65535 & b;
        else if (16 & w)
          for (
            _ = 65535 & b,
              (w &= 15) &&
                (p < w && ((h += E[r++] << p), (p += 8)),
                (_ += h & ((1 << w) - 1)),
                (h >>>= w),
                (p -= w)),
              p < 15 && ((h += E[r++] << p), (p += 8), (h += E[r++] << p), (p += 8)),
              b = m[h & g];
            ;
          ) {
            if (((h >>>= w = b >>> 24), (p -= w), 16 & (w = (b >>> 16) & 255))) {
              if (
                ((k = 65535 & b),
                p < (w &= 15) &&
                  ((h += E[r++] << p), (p += 8) < w && ((h += E[r++] << p), (p += 8))),
                (k += h & ((1 << w) - 1)) > l)
              ) {
                ((e.msg = "invalid distance too far back"), (n.mode = 30));
                break t;
              }
              if (((h >>>= w), (p -= w), k > (w = a - i))) {
                if ((w = k - w) > c && n.sane) {
                  ((e.msg = "invalid distance too far back"), (n.mode = 30));
                  break t;
                }
                if (((x = 0), (S = d), 0 === f)) {
                  if (((x += s - w), w < _)) {
                    _ -= w;
                    do O[a++] = d[x++];
                    while (--w);
                    ((x = a - k), (S = O));
                  }
                } else if (f < w) {
                  if (((x += s + f - w), (w -= f) < _)) {
                    _ -= w;
                    do O[a++] = d[x++];
                    while (--w);
                    if (((x = 0), f < _)) {
                      _ -= w = f;
                      do O[a++] = d[x++];
                      while (--w);
                      ((x = a - k), (S = O));
                    }
                  }
                } else if (((x += f - w), w < _)) {
                  _ -= w;
                  do O[a++] = d[x++];
                  while (--w);
                  ((x = a - k), (S = O));
                }
                for (; _ > 2;) ((O[a++] = S[x++]), (O[a++] = S[x++]), (O[a++] = S[x++]), (_ -= 3));
                _ && ((O[a++] = S[x++]), _ > 1 && (O[a++] = S[x++]));
              } else {
                x = a - k;
                do ((O[a++] = O[x++]), (O[a++] = O[x++]), (O[a++] = O[x++]), (_ -= 3));
                while (_ > 2);
                _ && ((O[a++] = O[x++]), _ > 1 && (O[a++] = O[x++]));
              }
            } else if ((64 & w) == 0) {
              b = m[(65535 & b) + (h & ((1 << w) - 1))];
              continue;
            } else {
              ((e.msg = "invalid distance code"), (n.mode = 30));
              break t;
            }
            break;
          }
        else if ((64 & w) == 0) {
          b = y[(65535 & b) + (h & ((1 << w) - 1))];
          continue;
        } else if (32 & w) {
          n.mode = 12;
          break t;
        } else {
          ((e.msg = "invalid literal/length code"), (n.mode = 30));
          break t;
        }
        break;
      }
    while (r < o && a < u);
    ((r -= _ = p >> 3),
      (p -= _ << 3),
      (h &= (1 << p) - 1),
      (e.next_in = r),
      (e.next_out = a),
      (e.avail_in = r < o ? 5 + (o - r) : 5 - (r - o)),
      (e.avail_out = a < u ? 257 + (u - a) : 257 - (a - u)),
      (n.hold = h),
      (n.bits = p));
  };
}
