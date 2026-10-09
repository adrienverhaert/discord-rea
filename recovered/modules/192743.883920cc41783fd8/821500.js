/* Recovered shipped factory. Module 821500.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 315578..318106
 * Raw property SHA-256: 1664394f69f1071095afa8b96ce13f40b8d6881bbeab3489af3a239a0bb33b40
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(195554),
    o = n(549412),
    a = n(382811),
    i = n(231428),
    u = n(163173),
    l = n(267795),
    s = n(236525),
    c = Object.prototype.toString;
  function f(e) {
    if (!(this instanceof f)) return new f(e);
    this.options = o.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e || {});
    var t = this.options;
    (t.raw &&
      t.windowBits >= 0 &&
      t.windowBits < 16 &&
      ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
      t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32),
      t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits) == 0 && (t.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new l()),
      (this.strm.avail_out = 0));
    var n = r.inflateInit2(this.strm, t.windowBits);
    if (n !== i.Z_OK) throw Error(u[n]);
    ((this.header = new s()), r.inflateGetHeader(this.strm, this.header));
  }
  function d(e, t) {
    var n = new f(t);
    if ((n.push(e, !0), n.err)) throw n.msg || u[n.err];
    return n.result;
  }
  ((f.prototype.push = function (e, t) {
    var n,
      u,
      l,
      s,
      f,
      d,
      h = this.strm,
      p = this.options.chunkSize,
      y = this.options.dictionary,
      m = !1;
    if (this.ended) return !1;
    ((u = t === ~~t ? t : !0 === t ? i.Z_FINISH : i.Z_NO_FLUSH),
      "string" == typeof e
        ? (h.input = a.binstring2buf(e))
        : "[object ArrayBuffer]" === c.call(e)
          ? (h.input = new Uint8Array(e))
          : (h.input = e),
      (h.next_in = 0),
      (h.avail_in = h.input.length));
    do {
      if (
        (0 === h.avail_out && ((h.output = new o.Buf8(p)), (h.next_out = 0), (h.avail_out = p)),
        (n = r.inflate(h, i.Z_NO_FLUSH)) === i.Z_NEED_DICT &&
          y &&
          ((d =
            "string" == typeof y
              ? a.string2buf(y)
              : "[object ArrayBuffer]" === c.call(y)
                ? new Uint8Array(y)
                : y),
          (n = r.inflateSetDictionary(this.strm, d))),
        n === i.Z_BUF_ERROR && !0 === m && ((n = i.Z_OK), (m = !1)),
        n !== i.Z_STREAM_END && n !== i.Z_OK)
      )
        return (this.onEnd(n), (this.ended = !0), !1);
      (h.next_out &&
        (0 === h.avail_out ||
          n === i.Z_STREAM_END ||
          (0 === h.avail_in && (u === i.Z_FINISH || u === i.Z_SYNC_FLUSH))) &&
        ("string" === this.options.to
          ? ((l = a.utf8border(h.output, h.next_out)),
            (s = h.next_out - l),
            (f = a.buf2string(h.output, l)),
            (h.next_out = s),
            (h.avail_out = p - s),
            s && o.arraySet(h.output, h.output, l, s, 0),
            this.onData(f))
          : this.onData(o.shrinkBuf(h.output, h.next_out))),
        0 === h.avail_in && 0 === h.avail_out && (m = !0));
    } while ((h.avail_in > 0 || 0 === h.avail_out) && n !== i.Z_STREAM_END);
    return (n === i.Z_STREAM_END && (u = i.Z_FINISH), u === i.Z_FINISH)
      ? ((n = r.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === i.Z_OK)
      : (u === i.Z_SYNC_FLUSH && (this.onEnd(i.Z_OK), (h.avail_out = 0)), !0);
  }),
    (f.prototype.onData = function (e) {
      this.chunks.push(e);
    }),
    (f.prototype.onEnd = function (e) {
      (e === i.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = o.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg));
    }),
    (t.Inflate = f),
    (t.inflate = d),
    (t.inflateRaw = function (e, t) {
      return (((t = t || {}).raw = !0), d(e, t));
    }),
    (t.ungzip = d));
}
