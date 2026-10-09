/* Recovered shipped factory. Module 733344.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 313431..315577
 * Raw property SHA-256: e758467c38cb3caecb33d9333ad362b84f2e86e63953bbc088d8d0967890f0a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(683402),
    o = n(549412),
    a = n(382811),
    i = n(163173),
    u = n(267795),
    l = Object.prototype.toString;
  function s(e) {
    if (!(this instanceof s)) return new s(e);
    this.options = o.assign(
      { level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" },
      e || {},
    );
    var t,
      n = this.options;
    (n.raw && n.windowBits > 0
      ? (n.windowBits = -n.windowBits)
      : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new u()),
      (this.strm.avail_out = 0));
    var c = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
    if (0 !== c) throw Error(i[c]);
    if ((n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary)) {
      if (
        ((t =
          "string" == typeof n.dictionary
            ? a.string2buf(n.dictionary)
            : "[object ArrayBuffer]" === l.call(n.dictionary)
              ? new Uint8Array(n.dictionary)
              : n.dictionary),
        0 !== (c = r.deflateSetDictionary(this.strm, t)))
      )
        throw Error(i[c]);
      this._dict_set = !0;
    }
  }
  function c(e, t) {
    var n = new s(t);
    if ((n.push(e, !0), n.err)) throw n.msg || i[n.err];
    return n.result;
  }
  ((s.prototype.push = function (e, t) {
    var n,
      i,
      u = this.strm,
      s = this.options.chunkSize;
    if (this.ended) return !1;
    ((i = t === ~~t ? t : 4 * (!0 === t)),
      "string" == typeof e
        ? (u.input = a.string2buf(e))
        : "[object ArrayBuffer]" === l.call(e)
          ? (u.input = new Uint8Array(e))
          : (u.input = e),
      (u.next_in = 0),
      (u.avail_in = u.input.length));
    do {
      if (
        (0 === u.avail_out && ((u.output = new o.Buf8(s)), (u.next_out = 0), (u.avail_out = s)),
        1 !== (n = r.deflate(u, i)) && 0 !== n)
      )
        return (this.onEnd(n), (this.ended = !0), !1);
      (0 === u.avail_out || (0 === u.avail_in && (4 === i || 2 === i))) &&
        ("string" === this.options.to
          ? this.onData(a.buf2binstring(o.shrinkBuf(u.output, u.next_out)))
          : this.onData(o.shrinkBuf(u.output, u.next_out)));
    } while ((u.avail_in > 0 || 0 === u.avail_out) && 1 !== n);
    return 4 === i
      ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), 0 === n)
      : (2 === i && (this.onEnd(0), (u.avail_out = 0)), !0);
  }),
    (s.prototype.onData = function (e) {
      this.chunks.push(e);
    }),
    (s.prototype.onEnd = function (e) {
      (0 === e &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = o.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg));
    }),
    (t.Deflate = s),
    (t.deflate = c),
    (t.deflateRaw = function (e, t) {
      return (((t = t || {}).raw = !0), c(e, t));
    }),
    (t.gzip = function (e, t) {
      return (((t = t || {}).gzip = !0), c(e, t));
    }));
}
