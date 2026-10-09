/* Recovered shipped factory. Module 683402.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 321644..335665
 * Raw property SHA-256: 87fe6644bd928793d48cce1465fea00eaffeafe307f58c0c088551d13beb68a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r,
    o = n(549412),
    a = n(666624),
    i = n(22700),
    u = n(96726),
    l = n(163173),
    s = 573;
  function c(e, t) {
    return ((e.msg = l[t]), t);
  }
  function f(e) {
    return (e << 1) - 9 * (e > 4);
  }
  function d(e) {
    for (var t = e.length; --t >= 0;) e[t] = 0;
  }
  function h(e) {
    var t = e.state,
      n = t.pending;
    (n > e.avail_out && (n = e.avail_out),
      0 !== n &&
        (o.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
        (e.next_out += n),
        (t.pending_out += n),
        (e.total_out += n),
        (e.avail_out -= n),
        (t.pending -= n),
        0 === t.pending && (t.pending_out = 0)));
  }
  function p(e, t) {
    (a._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
      (e.block_start = e.strstart),
      h(e.strm));
  }
  function y(e, t) {
    e.pending_buf[e.pending++] = t;
  }
  function m(e, t) {
    ((e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t));
  }
  function v(e, t) {
    var n,
      r,
      o = e.max_chain_length,
      a = e.strstart,
      i = e.prev_length,
      u = e.nice_match,
      l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
      s = e.window,
      c = e.w_mask,
      f = e.prev,
      d = e.strstart + 258,
      h = s[a + i - 1],
      p = s[a + i];
    (e.prev_length >= e.good_match && (o >>= 2), u > e.lookahead && (u = e.lookahead));
    do {
      if (s[(n = t) + i] !== p || s[n + i - 1] !== h || s[n] !== s[a] || s[++n] !== s[a + 1])
        continue;
      ((a += 2), n++);
      do;
      while (
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        s[++a] === s[++n] &&
        a < d
      );
      if (((r = 258 - (d - a)), (a = d - 258), r > i)) {
        if (((e.match_start = t), (i = r), r >= u)) break;
        ((h = s[a + i - 1]), (p = s[a + i]));
      }
    } while ((t = f[t & c]) > l && 0 != --o);
    return i <= e.lookahead ? i : e.lookahead;
  }
  function g(e) {
    var t,
      n,
      r,
      a,
      l,
      s = e.w_size;
    do {
      if (((a = e.window_size - e.lookahead - e.strstart), e.strstart >= s + (s - 262))) {
        (o.arraySet(e.window, e.window, s, s, 0),
          (e.match_start -= s),
          (e.strstart -= s),
          (e.block_start -= s),
          (t = n = e.hash_size));
        do ((r = e.head[--t]), (e.head[t] = r >= s ? r - s : 0));
        while (--n);
        t = n = s;
        do ((r = e.prev[--t]), (e.prev[t] = r >= s ? r - s : 0));
        while (--n);
        a += s;
      }
      if (0 === e.strm.avail_in) break;
      if (
        ((n = (function (e, t, n, r) {
          var a = e.avail_in;
          return (a > r && (a = r), 0 === a)
            ? 0
            : ((e.avail_in -= a),
              o.arraySet(t, e.input, e.next_in, a, n),
              1 === e.state.wrap
                ? (e.adler = i(e.adler, t, a, n))
                : 2 === e.state.wrap && (e.adler = u(e.adler, t, a, n)),
              (e.next_in += a),
              (e.total_in += a),
              a);
        })(e.strm, e.window, e.strstart + e.lookahead, a)),
        (e.lookahead += n),
        e.lookahead + e.insert >= 3)
      )
        for (
          l = e.strstart - e.insert,
            e.ins_h = e.window[l],
            e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 1]) & e.hash_mask;
          e.insert &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[l + 3 - 1]) & e.hash_mask),
          (e.prev[l & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = l),
          l++,
          e.insert--,
          !(e.lookahead + e.insert < 3));
        );
    } while (e.lookahead < 262 && 0 !== e.strm.avail_in);
  }
  function b(e, t) {
    for (var n, r; ;) {
      if (e.lookahead < 262) {
        if ((g(e), e.lookahead < 262 && 0 === t)) return 1;
        if (0 === e.lookahead) break;
      }
      if (
        ((n = 0),
        e.lookahead >= 3 &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        0 !== n && e.strstart - n <= e.w_size - 262 && (e.match_length = v(e, n)),
        e.match_length >= 3)
      )
        if (
          ((r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - 3)),
          (e.lookahead -= e.match_length),
          e.match_length <= e.max_lazy_match && e.lookahead >= 3)
        ) {
          e.match_length--;
          do
            (e.strstart++,
              (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart));
          while (0 != --e.match_length);
          e.strstart++;
        } else
          ((e.strstart += e.match_length),
            (e.match_length = 0),
            (e.ins_h = e.window[e.strstart]),
            (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask));
      else ((r = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++);
      if (r && (p(e, !1), 0 === e.strm.avail_out)) return 1;
    }
    return ((e.insert = e.strstart < 2 ? e.strstart : 2), 4 === t)
      ? (p(e, !0), 0 === e.strm.avail_out)
        ? 3
        : 4
      : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
        ? 1
        : 2;
  }
  function w(e, t) {
    for (var n, r, o; ;) {
      if (e.lookahead < 262) {
        if ((g(e), e.lookahead < 262 && 0 === t)) return 1;
        if (0 === e.lookahead) break;
      }
      if (
        ((n = 0),
        e.lookahead >= 3 &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        (e.prev_length = e.match_length),
        (e.prev_match = e.match_start),
        (e.match_length = 2),
        0 !== n &&
          e.prev_length < e.max_lazy_match &&
          e.strstart - n <= e.w_size - 262 &&
          ((e.match_length = v(e, n)),
          e.match_length <= 5 &&
            (1 === e.strategy || (3 === e.match_length && e.strstart - e.match_start > 4096)) &&
            (e.match_length = 2)),
        e.prev_length >= 3 && e.match_length <= e.prev_length)
      ) {
        ((o = e.strstart + e.lookahead - 3),
          (r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
          (e.lookahead -= e.prev_length - 1),
          (e.prev_length -= 2));
        do
          ++e.strstart <= o &&
            ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
            (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart));
        while (0 != --e.prev_length);
        if (
          ((e.match_available = 0),
          (e.match_length = 2),
          e.strstart++,
          r && (p(e, !1), 0 === e.strm.avail_out))
        )
          return 1;
      } else if (e.match_available) {
        if (
          ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && p(e, !1),
          e.strstart++,
          e.lookahead--,
          0 === e.strm.avail_out)
        )
          return 1;
      } else ((e.match_available = 1), e.strstart++, e.lookahead--);
    }
    return (e.match_available &&
      ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
    (e.insert = e.strstart < 2 ? e.strstart : 2),
    4 === t)
      ? (p(e, !0), 0 === e.strm.avail_out)
        ? 3
        : 4
      : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
        ? 1
        : 2;
  }
  function _(e, t, n, r, o) {
    ((this.good_length = e),
      (this.max_lazy = t),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = o));
  }
  function k() {
    ((this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = 8),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new o.Buf16(2 * s)),
      (this.dyn_dtree = new o.Buf16(122)),
      (this.bl_tree = new o.Buf16(78)),
      d(this.dyn_ltree),
      d(this.dyn_dtree),
      d(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new o.Buf16(16)),
      (this.heap = new o.Buf16(573)),
      d(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new o.Buf16(573)),
      d(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0));
  }
  function x(e) {
    var t;
    return e && e.state
      ? ((e.total_in = e.total_out = 0),
        (e.data_type = 2),
        ((t = e.state).pending = 0),
        (t.pending_out = 0),
        t.wrap < 0 && (t.wrap = -t.wrap),
        (t.status = t.wrap ? 42 : 113),
        (e.adler = +(2 !== t.wrap)),
        (t.last_flush = 0),
        a._tr_init(t),
        0)
      : c(e, -2);
  }
  function S(e) {
    var t,
      n = x(e);
    return (
      0 === n &&
        (((t = e.state).window_size = 2 * t.w_size),
        d(t.head),
        (t.max_lazy_match = r[t.level].max_lazy),
        (t.good_match = r[t.level].good_length),
        (t.nice_match = r[t.level].nice_length),
        (t.max_chain_length = r[t.level].max_chain),
        (t.strstart = 0),
        (t.block_start = 0),
        (t.lookahead = 0),
        (t.insert = 0),
        (t.match_length = t.prev_length = 2),
        (t.match_available = 0),
        (t.ins_h = 0)),
      n
    );
  }
  function E(e, t, n, r, a, i) {
    if (!e) return -2;
    var u = 1;
    if (
      (-1 === t && (t = 6),
      r < 0 ? ((u = 0), (r = -r)) : r > 15 && ((u = 2), (r -= 16)),
      a < 1 || a > 9 || 8 !== n || r < 8 || r > 15 || t < 0 || t > 9 || i < 0 || i > 4)
    )
      return c(e, -2);
    8 === r && (r = 9);
    var l = new k();
    return (
      (e.state = l),
      (l.strm = e),
      (l.wrap = u),
      (l.gzhead = null),
      (l.w_bits = r),
      (l.w_size = 1 << l.w_bits),
      (l.w_mask = l.w_size - 1),
      (l.hash_bits = a + 7),
      (l.hash_size = 1 << l.hash_bits),
      (l.hash_mask = l.hash_size - 1),
      (l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3)),
      (l.window = new o.Buf8(2 * l.w_size)),
      (l.head = new o.Buf16(l.hash_size)),
      (l.prev = new o.Buf16(l.w_size)),
      (l.lit_bufsize = 1 << (a + 6)),
      (l.pending_buf_size = 4 * l.lit_bufsize),
      (l.pending_buf = new o.Buf8(l.pending_buf_size)),
      (l.d_buf = +l.lit_bufsize),
      (l.l_buf = 3 * l.lit_bufsize),
      (l.level = t),
      (l.strategy = i),
      (l.method = n),
      S(e)
    );
  }
  ((r = [
    new _(0, 0, 0, 0, function (e, t) {
      var n = 65535;
      for (65535 > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
        if (e.lookahead <= 1) {
          if ((g(e), 0 === e.lookahead && 0 === t)) return 1;
          if (0 === e.lookahead) break;
        }
        ((e.strstart += e.lookahead), (e.lookahead = 0));
        var r = e.block_start + n;
        if (
          ((0 === e.strstart || e.strstart >= r) &&
            ((e.lookahead = e.strstart - r), (e.strstart = r), p(e, !1), 0 === e.strm.avail_out)) ||
          (e.strstart - e.block_start >= e.w_size - 262 && (p(e, !1), 0 === e.strm.avail_out))
        )
          return 1;
      }
      return ((e.insert = 0), 4 === t)
        ? (p(e, !0), 0 === e.strm.avail_out)
          ? 3
          : 4
        : (e.strstart > e.block_start && (p(e, !1), e.strm.avail_out), 1);
    }),
    new _(4, 4, 8, 4, b),
    new _(4, 5, 16, 8, b),
    new _(4, 6, 32, 32, b),
    new _(4, 4, 16, 16, w),
    new _(8, 16, 32, 32, w),
    new _(8, 16, 128, 128, w),
    new _(8, 32, 128, 256, w),
    new _(32, 128, 258, 1024, w),
    new _(32, 258, 258, 4096, w),
  ]),
    (t.deflateInit = function (e, t) {
      return E(e, t, 8, 15, 8, 0);
    }),
    (t.deflateInit2 = E),
    (t.deflateReset = S),
    (t.deflateResetKeep = x),
    (t.deflateSetHeader = function (e, t) {
      return e && e.state && 2 === e.state.wrap ? ((e.state.gzhead = t), 0) : -2;
    }),
    (t.deflate = function (e, t) {
      if (!e || !e.state || t > 5 || t < 0) return e ? c(e, -2) : -2;
      if (
        ((o = e.state),
        !e.output || (!e.input && 0 !== e.avail_in) || (666 === o.status && 4 !== t))
      )
        return c(e, 0 === e.avail_out ? -5 : -2);
      if (((o.strm = e), (n = o.last_flush), (o.last_flush = t), 42 === o.status))
        if (2 === o.wrap)
          ((e.adler = 0),
            y(o, 31),
            y(o, 139),
            y(o, 8),
            o.gzhead
              ? (y(
                  o,
                  +!!o.gzhead.text +
                    2 * !!o.gzhead.hcrc +
                    4 * !!o.gzhead.extra +
                    8 * !!o.gzhead.name +
                    16 * !!o.gzhead.comment,
                ),
                y(o, 255 & o.gzhead.time),
                y(o, (o.gzhead.time >> 8) & 255),
                y(o, (o.gzhead.time >> 16) & 255),
                y(o, (o.gzhead.time >> 24) & 255),
                y(o, 9 === o.level ? 2 : 4 * (o.strategy >= 2 || o.level < 2)),
                y(o, 255 & o.gzhead.os),
                o.gzhead.extra &&
                  o.gzhead.extra.length &&
                  (y(o, 255 & o.gzhead.extra.length), y(o, (o.gzhead.extra.length >> 8) & 255)),
                o.gzhead.hcrc && (e.adler = u(e.adler, o.pending_buf, o.pending, 0)),
                (o.gzindex = 0),
                (o.status = 69))
              : (y(o, 0),
                y(o, 0),
                y(o, 0),
                y(o, 0),
                y(o, 0),
                y(o, 9 === o.level ? 2 : 4 * (o.strategy >= 2 || o.level < 2)),
                y(o, 3),
                (o.status = 113)));
        else {
          var n,
            o,
            i,
            l,
            s = (8 + ((o.w_bits - 8) << 4)) << 8;
          ((s |=
            (o.strategy >= 2 || o.level < 2 ? 0 : o.level < 6 ? 1 : 6 === o.level ? 2 : 3) << 6),
            0 !== o.strstart && (s |= 32),
            (s += 31 - (s % 31)),
            (o.status = 113),
            m(o, s),
            0 !== o.strstart && (m(o, e.adler >>> 16), m(o, 65535 & e.adler)),
            (e.adler = 1));
        }
      if (69 === o.status)
        if (o.gzhead.extra) {
          for (
            i = o.pending;
            o.gzindex < (65535 & o.gzhead.extra.length) &&
            (o.pending !== o.pending_buf_size ||
              (o.gzhead.hcrc &&
                o.pending > i &&
                (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
              h(e),
              (i = o.pending),
              o.pending !== o.pending_buf_size));
          )
            (y(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++);
          (o.gzhead.hcrc &&
            o.pending > i &&
            (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
            o.gzindex === o.gzhead.extra.length && ((o.gzindex = 0), (o.status = 73)));
        } else o.status = 73;
      if (73 === o.status)
        if (o.gzhead.name) {
          i = o.pending;
          do {
            if (
              o.pending === o.pending_buf_size &&
              (o.gzhead.hcrc &&
                o.pending > i &&
                (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
              h(e),
              (i = o.pending),
              o.pending === o.pending_buf_size)
            ) {
              l = 1;
              break;
            }
            ((l =
              o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0),
              y(o, l));
          } while (0 !== l);
          (o.gzhead.hcrc &&
            o.pending > i &&
            (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
            0 === l && ((o.gzindex = 0), (o.status = 91)));
        } else o.status = 91;
      if (91 === o.status)
        if (o.gzhead.comment) {
          i = o.pending;
          do {
            if (
              o.pending === o.pending_buf_size &&
              (o.gzhead.hcrc &&
                o.pending > i &&
                (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
              h(e),
              (i = o.pending),
              o.pending === o.pending_buf_size)
            ) {
              l = 1;
              break;
            }
            ((l =
              o.gzindex < o.gzhead.comment.length
                ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++)
                : 0),
              y(o, l));
          } while (0 !== l);
          (o.gzhead.hcrc &&
            o.pending > i &&
            (e.adler = u(e.adler, o.pending_buf, o.pending - i, i)),
            0 === l && (o.status = 103));
        } else o.status = 103;
      if (
        (103 === o.status &&
          (o.gzhead.hcrc
            ? (o.pending + 2 > o.pending_buf_size && h(e),
              o.pending + 2 <= o.pending_buf_size &&
                (y(o, 255 & e.adler), y(o, (e.adler >> 8) & 255), (e.adler = 0), (o.status = 113)))
            : (o.status = 113)),
        0 !== o.pending)
      ) {
        if ((h(e), 0 === e.avail_out)) return ((o.last_flush = -1), 0);
      } else if (0 === e.avail_in && f(t) <= f(n) && 4 !== t) return c(e, -5);
      if (666 === o.status && 0 !== e.avail_in) return c(e, -5);
      if (0 !== e.avail_in || 0 !== o.lookahead || (0 !== t && 666 !== o.status)) {
        var v =
          2 === o.strategy
            ? (function (e, t) {
                for (var n; ;) {
                  if (0 === e.lookahead && (g(e), 0 === e.lookahead)) {
                    if (0 === t) return 1;
                    break;
                  }
                  if (
                    ((e.match_length = 0),
                    (n = a._tr_tally(e, 0, e.window[e.strstart])),
                    e.lookahead--,
                    e.strstart++,
                    n && (p(e, !1), 0 === e.strm.avail_out))
                  )
                    return 1;
                }
                return ((e.insert = 0), 4 === t)
                  ? (p(e, !0), 0 === e.strm.avail_out)
                    ? 3
                    : 4
                  : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
                    ? 1
                    : 2;
              })(o, t)
            : 3 === o.strategy
              ? (function (e, t) {
                  for (var n, r, o, i, u = e.window; ;) {
                    if (e.lookahead <= 258) {
                      if ((g(e), e.lookahead <= 258 && 0 === t)) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= 3 &&
                        e.strstart > 0 &&
                        (r = u[(o = e.strstart - 1)]) === u[++o] &&
                        r === u[++o] &&
                        r === u[++o])
                    ) {
                      i = e.strstart + 258;
                      do;
                      while (
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        r === u[++o] &&
                        o < i
                      );
                      ((e.match_length = 258 - (i - o)),
                        e.match_length > e.lookahead && (e.match_length = e.lookahead));
                    }
                    if (
                      (e.match_length >= 3
                        ? ((n = a._tr_tally(e, 1, e.match_length - 3)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((n = a._tr_tally(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      n && (p(e, !1), 0 === e.strm.avail_out))
                    )
                      return 1;
                  }
                  return ((e.insert = 0), 4 === t)
                    ? (p(e, !0), 0 === e.strm.avail_out)
                      ? 3
                      : 4
                    : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
                      ? 1
                      : 2;
                })(o, t)
              : r[o.level].func(o, t);
        if (((3 === v || 4 === v) && (o.status = 666), 1 === v || 3 === v))
          return (0 === e.avail_out && (o.last_flush = -1), 0);
        if (
          2 === v &&
          (1 === t
            ? a._tr_align(o)
            : 5 !== t &&
              (a._tr_stored_block(o, 0, 0, !1),
              3 === t &&
                (d(o.head),
                0 === o.lookahead && ((o.strstart = 0), (o.block_start = 0), (o.insert = 0)))),
          h(e),
          0 === e.avail_out)
        )
          return ((o.last_flush = -1), 0);
      }
      return 4 !== t
        ? 0
        : o.wrap <= 0
          ? 1
          : (2 === o.wrap
              ? (y(o, 255 & e.adler),
                y(o, (e.adler >> 8) & 255),
                y(o, (e.adler >> 16) & 255),
                y(o, (e.adler >> 24) & 255),
                y(o, 255 & e.total_in),
                y(o, (e.total_in >> 8) & 255),
                y(o, (e.total_in >> 16) & 255),
                y(o, (e.total_in >> 24) & 255))
              : (m(o, e.adler >>> 16), m(o, 65535 & e.adler)),
            h(e),
            o.wrap > 0 && (o.wrap = -o.wrap),
            +(0 === o.pending));
    }),
    (t.deflateEnd = function (e) {
      var t;
      return e && e.state
        ? 42 !== (t = e.state.status) &&
          69 !== t &&
          73 !== t &&
          91 !== t &&
          103 !== t &&
          113 !== t &&
          666 !== t
          ? c(e, -2)
          : ((e.state = null), 113 === t ? c(e, -3) : 0)
        : -2;
    }),
    (t.deflateSetDictionary = function (e, t) {
      var n,
        r,
        a,
        u,
        l,
        s,
        c,
        f,
        h = t.length;
      if (
        !e ||
        !e.state ||
        2 === (u = (n = e.state).wrap) ||
        (1 === u && 42 !== n.status) ||
        n.lookahead
      )
        return -2;
      for (
        1 === u && (e.adler = i(e.adler, t, h, 0)),
          n.wrap = 0,
          h >= n.w_size &&
            (0 === u && (d(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
            (f = new o.Buf8(n.w_size)),
            o.arraySet(f, t, h - n.w_size, n.w_size, 0),
            (t = f),
            (h = n.w_size)),
          l = e.avail_in,
          s = e.next_in,
          c = e.input,
          e.avail_in = h,
          e.next_in = 0,
          e.input = t,
          g(n);
        n.lookahead >= 3;
      ) {
        ((r = n.strstart), (a = n.lookahead - 2));
        do
          ((n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[r + 3 - 1]) & n.hash_mask),
            (n.prev[r & n.w_mask] = n.head[n.ins_h]),
            (n.head[n.ins_h] = r),
            r++);
        while (--a);
        ((n.strstart = r), (n.lookahead = 2), g(n));
      }
      return (
        (n.strstart += n.lookahead),
        (n.block_start = n.strstart),
        (n.insert = n.lookahead),
        (n.lookahead = 0),
        (n.match_length = n.prev_length = 2),
        (n.match_available = 0),
        (e.next_in = s),
        (e.input = c),
        (e.avail_in = l),
        (n.wrap = u),
        0
      );
    }),
    (t.deflateInfo = "pako deflate (from Nodeca project)"));
}
