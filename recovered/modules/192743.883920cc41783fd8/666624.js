/* Recovered shipped factory. Module 666624.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 350619..356990
 * Raw property SHA-256: 201cebde75d76631a90f41469df4390d95c116c8dfecc40bb61e63a01ad2551f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r,
    o,
    a,
    i = n(549412);
  function u(e) {
    for (var t = e.length; --t >= 0;) e[t] = 0;
  }
  var l = 573,
    s = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    c = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
      13,
    ],
    f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    d = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    h = Array(576);
  u(h);
  var p = Array(60);
  u(p);
  var y = Array(512);
  u(y);
  var m = Array(256);
  u(m);
  var v = Array(29);
  u(v);
  var g = Array(30);
  function b(e, t, n, r, o) {
    ((this.static_tree = e),
      (this.extra_bits = t),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = o),
      (this.has_stree = e && e.length));
  }
  function w(e, t) {
    ((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t));
  }
  function _(e) {
    return e < 256 ? y[e] : y[256 + (e >>> 7)];
  }
  function k(e, t) {
    ((e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255));
  }
  function x(e, t, n) {
    e.bi_valid > 16 - n
      ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
        k(e, e.bi_buf),
        (e.bi_buf = t >> (16 - e.bi_valid)),
        (e.bi_valid += n - 16))
      : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
  }
  function S(e, t, n) {
    x(e, n[2 * t], n[2 * t + 1]);
  }
  function E(e, t) {
    var n = 0;
    do ((n |= 1 & e), (e >>>= 1), (n <<= 1));
    while (--t > 0);
    return n >>> 1;
  }
  function O(e, t, n) {
    var r,
      o,
      a = Array(16),
      i = 0;
    for (r = 1; r <= 15; r++) a[r] = i = (i + n[r - 1]) << 1;
    for (o = 0; o <= t; o++) {
      var u = e[2 * o + 1];
      0 !== u && (e[2 * o] = E(a[u]++, u));
    }
  }
  function T(e) {
    var t;
    for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
    ((e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0));
  }
  function R(e) {
    (e.bi_valid > 8 ? k(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
      (e.bi_buf = 0),
      (e.bi_valid = 0));
  }
  function A(e, t, n, r) {
    var o = 2 * t,
      a = 2 * n;
    return e[o] < e[a] || (e[o] === e[a] && r[t] <= r[n]);
  }
  function C(e, t, n) {
    for (
      var r = e.heap[n], o = n << 1;
      o <= e.heap_len &&
      (o < e.heap_len && A(t, e.heap[o + 1], e.heap[o], e.depth) && o++,
      !A(t, r, e.heap[o], e.depth));
    )
      ((e.heap[n] = e.heap[o]), (n = o), (o <<= 1));
    e.heap[n] = r;
  }
  function M(e, t, n) {
    var r,
      o,
      a,
      i,
      u = 0;
    if (0 !== e.last_lit)
      do
        ((r = (e.pending_buf[e.d_buf + 2 * u] << 8) | e.pending_buf[e.d_buf + 2 * u + 1]),
          (o = e.pending_buf[e.l_buf + u]),
          u++,
          0 === r
            ? S(e, o, t)
            : (S(e, (a = m[o]) + 256 + 1, t),
              0 !== (i = s[a]) && x(e, (o -= v[a]), i),
              S(e, (a = _(--r)), n),
              0 !== (i = c[a]) && x(e, (r -= g[a]), i)));
      while (u < e.last_lit);
    S(e, 256, t);
  }
  function D(e, t) {
    var n,
      r,
      o,
      a = t.dyn_tree,
      i = t.stat_desc.static_tree,
      u = t.stat_desc.has_stree,
      s = t.stat_desc.elems,
      c = -1;
    for (n = 0, e.heap_len = 0, e.heap_max = l; n < s; n++)
      0 !== a[2 * n] ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0);
    for (; e.heap_len < 2;)
      ((a[2 * (o = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1),
        (e.depth[o] = 0),
        e.opt_len--,
        u && (e.static_len -= i[2 * o + 1]));
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) C(e, a, n);
    o = s;
    do
      ((n = e.heap[1]),
        (e.heap[1] = e.heap[e.heap_len--]),
        C(e, a, 1),
        (r = e.heap[1]),
        (e.heap[--e.heap_max] = n),
        (e.heap[--e.heap_max] = r),
        (a[2 * o] = a[2 * n] + a[2 * r]),
        (e.depth[o] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
        (a[2 * n + 1] = a[2 * r + 1] = o),
        (e.heap[1] = o++),
        C(e, a, 1));
    while (e.heap_len >= 2);
    ((e.heap[--e.heap_max] = e.heap[1]),
      (function (e, t) {
        var n,
          r,
          o,
          a,
          i,
          u,
          s = t.dyn_tree,
          c = t.max_code,
          f = t.stat_desc.static_tree,
          d = t.stat_desc.has_stree,
          h = t.stat_desc.extra_bits,
          p = t.stat_desc.extra_base,
          y = t.stat_desc.max_length,
          m = 0;
        for (a = 0; a <= 15; a++) e.bl_count[a] = 0;
        for (s[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < l; n++)
          ((a = s[2 * s[2 * (r = e.heap[n]) + 1] + 1] + 1) > y && ((a = y), m++),
            (s[2 * r + 1] = a),
            !(r > c) &&
              (e.bl_count[a]++,
              (i = 0),
              r >= p && (i = h[r - p]),
              (u = s[2 * r]),
              (e.opt_len += u * (a + i)),
              d && (e.static_len += u * (f[2 * r + 1] + i))));
        if (0 !== m) {
          do {
            for (a = y - 1; 0 === e.bl_count[a];) a--;
            (e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[y]--, (m -= 2));
          } while (m > 0);
          for (a = y; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r;)
              !((o = e.heap[--n]) > c) &&
                (s[2 * o + 1] !== a &&
                  ((e.opt_len += (a - s[2 * o + 1]) * s[2 * o]), (s[2 * o + 1] = a)),
                r--);
        }
      })(e, t),
      O(a, c, e.bl_count));
  }
  function P(e, t, n) {
    var r,
      o,
      a = -1,
      i = t[1],
      u = 0,
      l = 7,
      s = 4;
    for (0 === i && ((l = 138), (s = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++)
      ((o = i),
        (i = t[(r + 1) * 2 + 1]),
        (++u < l && o === i) ||
          (u < s
            ? (e.bl_tree[2 * o] += u)
            : 0 !== o
              ? (o !== a && e.bl_tree[2 * o]++, e.bl_tree[32]++)
              : u <= 10
                ? e.bl_tree[34]++
                : e.bl_tree[36]++,
          (u = 0),
          (a = o),
          0 === i ? ((l = 138), (s = 3)) : o === i ? ((l = 6), (s = 3)) : ((l = 7), (s = 4))));
  }
  function N(e, t, n) {
    var r,
      o,
      a = -1,
      i = t[1],
      u = 0,
      l = 7,
      s = 4;
    for (0 === i && ((l = 138), (s = 3)), r = 0; r <= n; r++)
      if (((o = i), (i = t[(r + 1) * 2 + 1]), !(++u < l) || o !== i)) {
        if (u < s)
          do S(e, o, e.bl_tree);
          while (0 != --u);
        else
          0 !== o
            ? (o !== a && (S(e, o, e.bl_tree), u--), S(e, 16, e.bl_tree), x(e, u - 3, 2))
            : u <= 10
              ? (S(e, 17, e.bl_tree), x(e, u - 3, 3))
              : (S(e, 18, e.bl_tree), x(e, u - 11, 7));
        ((u = 0),
          (a = o),
          0 === i ? ((l = 138), (s = 3)) : o === i ? ((l = 6), (s = 3)) : ((l = 7), (s = 4)));
      }
  }
  u(g);
  var j = !1;
  function L(e, t, n, r) {
    (x(e, 0 + +!!r, 3),
      R(e),
      k(e, n),
      k(e, ~n),
      i.arraySet(e.pending_buf, e.window, t, n, e.pending),
      (e.pending += n));
  }
  ((t._tr_init = function (e) {
    (j ||
      (!(function () {
        var e,
          t,
          n,
          i,
          u,
          l = Array(16);
        for (i = 0, n = 0; i < 28; i++) for (e = 0, v[i] = n; e < 1 << s[i]; e++) m[n++] = i;
        for (m[n - 1] = i, u = 0, i = 0; i < 16; i++)
          for (e = 0, g[i] = u; e < 1 << c[i]; e++) y[u++] = i;
        for (u >>= 7; i < 30; i++)
          for (e = 0, g[i] = u << 7; e < 1 << (c[i] - 7); e++) y[256 + u++] = i;
        for (t = 0; t <= 15; t++) l[t] = 0;
        for (e = 0; e <= 143;) ((h[2 * e + 1] = 8), e++, l[8]++);
        for (; e <= 255;) ((h[2 * e + 1] = 9), e++, l[9]++);
        for (; e <= 279;) ((h[2 * e + 1] = 7), e++, l[7]++);
        for (; e <= 287;) ((h[2 * e + 1] = 8), e++, l[8]++);
        for (O(h, 287, l), e = 0; e < 30; e++) ((p[2 * e + 1] = 5), (p[2 * e] = E(e, 5)));
        ((r = new b(h, s, 257, 286, 15)),
          (o = new b(p, c, 0, 30, 15)),
          (a = new b([], f, 0, 19, 7)));
      })(),
      (j = !0)),
      (e.l_desc = new w(e.dyn_ltree, r)),
      (e.d_desc = new w(e.dyn_dtree, o)),
      (e.bl_desc = new w(e.bl_tree, a)),
      (e.bi_buf = 0),
      (e.bi_valid = 0),
      T(e));
  }),
    (t._tr_stored_block = L),
    (t._tr_flush_block = function (e, t, n, r) {
      var o,
        a,
        i = 0;
      (e.level > 0
        ? (2 === e.strm.data_type &&
            (e.strm.data_type = (function (e) {
              var t,
                n = 0xf3ffc07f;
              for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
              if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
              for (t = 32; t < 256; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
              return 0;
            })(e)),
          D(e, e.l_desc),
          D(e, e.d_desc),
          (i = (function (e) {
            var t;
            for (
              P(e, e.dyn_ltree, e.l_desc.max_code),
                P(e, e.dyn_dtree, e.d_desc.max_code),
                D(e, e.bl_desc),
                t = 18;
              t >= 3 && 0 === e.bl_tree[2 * d[t] + 1];
              t--
            );
            return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
          })(e)),
          (o = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= o && (o = a))
        : (o = a = n + 5),
        n + 4 <= o && -1 !== t
          ? L(e, t, n, r)
          : 4 === e.strategy || a === o
            ? (x(e, 2 + +!!r, 3), M(e, h, p))
            : (x(e, 4 + +!!r, 3),
              (function (e, t, n, r) {
                var o;
                for (x(e, t - 257, 5), x(e, n - 1, 5), x(e, r - 4, 4), o = 0; o < r; o++)
                  x(e, e.bl_tree[2 * d[o] + 1], 3);
                (N(e, e.dyn_ltree, t - 1), N(e, e.dyn_dtree, n - 1));
              })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, i + 1),
              M(e, e.dyn_ltree, e.dyn_dtree)),
        T(e),
        r && R(e));
    }),
    (t._tr_tally = function (e, t, n) {
      return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t
          ? e.dyn_ltree[2 * n]++
          : (e.matches++, t--, e.dyn_ltree[(m[n] + 256 + 1) * 2]++, e.dyn_dtree[2 * _(t)]++),
        e.last_lit === e.lit_bufsize - 1
      );
    }),
    (t._tr_align = function (e) {
      (x(e, 2, 3),
        S(e, 256, h),
        16 === e.bi_valid
          ? (k(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
          : e.bi_valid >= 8 &&
            ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8)));
    }));
}
