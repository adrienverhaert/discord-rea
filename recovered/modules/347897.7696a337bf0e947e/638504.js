/* Recovered shipped factory. Module 638504.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 79988..81847
 * Raw property SHA-256: db760bd304189706329137234601f5c1b757a7af90bf828a7ab7cb14ec5bac35
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { V: () => l, e: () => s });
  var n = r(852015),
    i = r(82180),
    o = r(679314);
  let a = { readUnknownField: !0, readerFactory: (e) => new l(e) };
  function s(e) {
    return e ? Object.assign(Object.assign({}, a), e) : a;
  }
  class l {
    constructor(e, t) {
      ((this.varint64 = o.ls),
        (this.uint32 = o.Gn),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder =
          null != t ? t : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 })));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        r = 7 & e;
      if (t <= 0 || r < 0 || r > 5) throw Error("illegal tag: field no " + t + " wire type " + r);
      return [t, r];
    }
    skip(e) {
      let t = this.pos;
      switch (e) {
        case n.O0.Varint:
          for (; 128 & this.buf[this.pos++];);
          break;
        case n.O0.Bit64:
          this.pos += 4;
        case n.O0.Bit32:
          this.pos += 4;
          break;
        case n.O0.LengthDelimited:
          let r = this.uint32();
          this.pos += r;
          break;
        case n.O0.StartGroup:
          let i;
          for (; (i = this.tag()[1]) !== n.O0.EndGroup;) this.skip(i);
          break;
        default:
          throw Error("cant skip wire type " + e);
      }
      return (this.assertBounds(), this.buf.subarray(t, this.pos));
    }
    assertBounds() {
      if (this.pos > this.len) throw RangeError("premature EOF");
    }
    int32() {
      return 0 | this.uint32();
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(1 & e);
    }
    int64() {
      return new i.h(...this.varint64());
    }
    uint64() {
      return new i.e(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        r = -(1 & e);
      return ((e = ((e >>> 1) | ((1 & t) << 31)) ^ r), (t = (t >>> 1) ^ r), new i.h(e, t));
    }
    bool() {
      let [e, t] = this.varint64();
      return 0 !== e || 0 !== t;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new i.e(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new i.h(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return ((this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e));
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  }
}
