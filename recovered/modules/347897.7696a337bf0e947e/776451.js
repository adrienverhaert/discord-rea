/* Recovered shipped factory. Module 776451.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 858951..859982
 * Raw property SHA-256: 7afb6b3ccbc4d48d5765bd3ca7d0b9713820e34690fe6b378a3a05ef39b21ab9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(264572).Buffer,
    i = [
      255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255,
      255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 255, 255, 255, 255, 255,
    ];
  ((t.encode = function (e) {
    n.isBuffer(e) || (e = new n(e));
    for (
      var t,
        r,
        i = 0,
        o = 0,
        a = 0,
        s = 0,
        l = new n(8 * ((r = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? r : r + 1));
      i < e.length;
    ) {
      var u = e[i];
      (a > 3
        ? ((s =
            ((s = u & (255 >> a)) << (a = (a + 5) % 8)) |
            ((i + 1 < e.length ? e[i + 1] : 0) >> (8 - a))),
          i++)
        : ((s = (u >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
        (l[o] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s)),
        o++);
    }
    for (i = o; i < l.length; i++) l[i] = 61;
    return l;
  }),
    (t.decode = function (e) {
      var t,
        r = 0,
        o = 0,
        a = 0;
      n.isBuffer(e) || (e = new n(e));
      for (var s = new n(Math.ceil((5 * e.length) / 8)), l = 0; l < e.length && 61 !== e[l]; l++) {
        var u = e[l] - 48;
        if (u < i.length)
          ((o = i[u]),
            r <= 3
              ? 0 == (r = (r + 5) % 8)
                ? ((t |= o), (s[a] = t), a++, (t = 0))
                : (t |= 255 & (o << (8 - r)))
              : ((t |= 255 & (o >>> (r = (r + 5) % 8))),
                (s[a] = t),
                a++,
                (t = 255 & (o << (8 - r)))));
        else throw Error("Invalid input - it is not base32 encoded string");
      }
      return s.slice(0, a);
    }));
}
