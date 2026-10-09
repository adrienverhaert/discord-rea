/* Recovered shipped factory. Module 382811.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 319155..320798
 * Raw property SHA-256: 3f65f0ea127f0950bdf494bdce96f6055edaaa2a2391767f5590fdb3d748652a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(549412),
    o = !0,
    a = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (e) {
    o = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (e) {
    a = !1;
  }
  for (var i = new r.Buf8(256), u = 0; u < 256; u++)
    i[u] = u >= 252 ? 6 : u >= 248 ? 5 : u >= 240 ? 4 : u >= 224 ? 3 : u >= 192 ? 2 : 1;
  function l(e, t) {
    if (t < 65534 && ((e.subarray && a) || (!e.subarray && o)))
      return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = "", i = 0; i < t; i++) n += String.fromCharCode(e[i]);
    return n;
  }
  ((i[254] = i[254] = 1),
    (t.string2buf = function (e) {
      var t,
        n,
        o,
        a,
        i,
        u = e.length,
        l = 0;
      for (a = 0; a < u; a++)
        ((64512 & (n = e.charCodeAt(a))) == 55296 &&
          a + 1 < u &&
          (64512 & (o = e.charCodeAt(a + 1))) == 56320 &&
          ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), a++),
          (l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4));
      for (i = 0, t = new r.Buf8(l), a = 0; i < l; a++)
        ((64512 & (n = e.charCodeAt(a))) == 55296 &&
          a + 1 < u &&
          (64512 & (o = e.charCodeAt(a + 1))) == 56320 &&
          ((n = 65536 + ((n - 55296) << 10) + (o - 56320)), a++),
          n < 128
            ? (t[i++] = n)
            : (n < 2048
                ? (t[i++] = 192 | (n >>> 6))
                : (n < 65536
                    ? (t[i++] = 224 | (n >>> 12))
                    : ((t[i++] = 240 | (n >>> 18)), (t[i++] = 128 | ((n >>> 12) & 63))),
                  (t[i++] = 128 | ((n >>> 6) & 63))),
              (t[i++] = 128 | (63 & n))));
      return t;
    }),
    (t.buf2binstring = function (e) {
      return l(e, e.length);
    }),
    (t.binstring2buf = function (e) {
      for (var t = new r.Buf8(e.length), n = 0, o = t.length; n < o; n++) t[n] = e.charCodeAt(n);
      return t;
    }),
    (t.buf2string = function (e, t) {
      var n,
        r,
        o,
        a,
        u = t || e.length,
        s = Array(2 * u);
      for (r = 0, n = 0; n < u;) {
        if ((o = e[n++]) < 128) {
          s[r++] = o;
          continue;
        }
        if ((a = i[o]) > 4) {
          ((s[r++] = 65533), (n += a - 1));
          continue;
        }
        for (o &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < u;)
          ((o = (o << 6) | (63 & e[n++])), a--);
        if (a > 1) {
          s[r++] = 65533;
          continue;
        }
        o < 65536
          ? (s[r++] = o)
          : ((o -= 65536), (s[r++] = 55296 | ((o >> 10) & 1023)), (s[r++] = 56320 | (1023 & o)));
      }
      return l(s, r);
    }),
    (t.utf8border = function (e, t) {
      var n;
      for (
        (t = t || e.length) > e.length && (t = e.length), n = t - 1;
        n >= 0 && (192 & e[n]) == 128;
      )
        n--;
      return n < 0 || 0 === n ? t : n + i[e[n]] > t ? n : t;
    }));
}
