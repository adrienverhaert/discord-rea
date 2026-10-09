/* Recovered shipped factory. Module 495142.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 6136..15984
 * Raw property SHA-256: b762605c5d7c48bedd0ffa8a0d62e975af92db77c8320ae0c6035c3bc82ed723
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  var a;
  let r, u;
  function s(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`);
  }
  function i(e, ...n) {
    if (!(
      e instanceof Uint8Array ||
      (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)
    ))
      throw Error("Uint8Array expected");
    if (n.length > 0 && !n.includes(e.length))
      throw Error(`Uint8Array expected of length ${n}, not of length=${e.length}`);
  }
  function d(e) {
    if ("function" != typeof e || "function" != typeof e.create)
      throw Error("Hash should be wrapped by utils.wrapConstructor");
    (s(e.outputLen), s(e.blockLen));
  }
  function l(e, n = !0) {
    if (e.destroyed) throw Error("Hash instance has been destroyed");
    if (n && e.finished) throw Error("Hash#digest() has already been called");
  }
  t.d(n, { Q: () => O });
  let o = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    _ = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
    c = (e, n) => (e << (32 - n)) | (e >>> n),
    y = (e, n) => (e << n) | ((e >>> (32 - n)) >>> 0),
    f = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    h = (e) =>
      ((e << 24) & 0xff000000) | ((e << 8) & 0xff0000) | ((e >>> 8) & 65280) | ((e >>> 24) & 255);
  function w(e) {
    for (let n = 0; n < e.length; n++) e[n] = h(e[n]);
  }
  let m = async () => {};
  async function p(e, n, t) {
    let a = Date.now();
    for (let r = 0; r < e; r++) {
      t(r);
      let e = Date.now() - a;
      (e >= 0 && e < n) || (await m(), (a += e));
    }
  }
  function b(e) {
    return (
      "string" == typeof e &&
        (e = (function (e) {
          if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
          return new Uint8Array(new TextEncoder().encode(e));
        })(e)),
      i(e),
      e
    );
  }
  class g {
    clone() {
      return this._cloneInto();
    }
  }
  let M = {}.toString;
  function S(e, n) {
    if (void 0 !== n && "[object Object]" !== M.call(n))
      throw Error("Options should be object or undefined");
    return Object.assign(e, n);
  }
  let L = (e, n, t) => (e & n) ^ (~e & t),
    A = (e, n, t) => (e & n) ^ (e & t) ^ (n & t);
  class v extends g {
    constructor(e, n, t, a) {
      (super(),
        (this.blockLen = e),
        (this.outputLen = n),
        (this.padOffset = t),
        (this.isLE = a),
        (this.finished = !1),
        (this.length = 0),
        (this.pos = 0),
        (this.destroyed = !1),
        (this.buffer = new Uint8Array(e)),
        (this.view = _(this.buffer)));
    }
    update(e) {
      l(this);
      let { view: n, buffer: t, blockLen: a } = this,
        r = (e = b(e)).length;
      for (let u = 0; u < r;) {
        let s = Math.min(a - this.pos, r - u);
        if (s === a) {
          let n = _(e);
          for (; a <= r - u; u += a) this.process(n, u);
          continue;
        }
        (t.set(e.subarray(u, u + s), this.pos),
          (this.pos += s),
          (u += s),
          this.pos === a && (this.process(n, 0), (this.pos = 0)));
      }
      return ((this.length += e.length), this.roundClean(), this);
    }
    digestInto(e) {
      l(this);
      i(e);
      let n = this.outputLen;
      if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
      this.finished = !0;
      let { buffer: t, view: a, blockLen: r, isLE: u } = this,
        { pos: s } = this;
      ((t[s++] = 128),
        this.buffer.subarray(s).fill(0),
        this.padOffset > r - s && (this.process(a, 0), (s = 0)));
      for (let e = s; e < r; e++) t[e] = 0;
      (!(function (e, n, t, a) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(n, t, a);
        let r = BigInt(32),
          u = BigInt(0xffffffff),
          s = Number((t >> r) & u),
          i = Number(t & u),
          d = 4 * !!a,
          l = 4 * !a;
        (e.setUint32(n + d, s, a), e.setUint32(n + l, i, a));
      })(a, r - 8, BigInt(8 * this.length), u),
        this.process(a, 0));
      let d = _(e),
        o = this.outputLen;
      if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
      let c = o / 4,
        y = this.get();
      if (c > y.length) throw Error("_sha2: outputLen bigger than state");
      for (let e = 0; e < c; e++) d.setUint32(4 * e, y[e], u);
    }
    digest() {
      let { buffer: e, outputLen: n } = this;
      this.digestInto(e);
      let t = e.slice(0, n);
      return (this.destroy(), t);
    }
    _cloneInto(e) {
      (e || (e = new this.constructor()), e.set(...this.get()));
      let { blockLen: n, buffer: t, length: a, finished: r, destroyed: u, pos: s } = this;
      return (
        (e.length = a),
        (e.pos = s),
        (e.finished = r),
        (e.destroyed = u),
        a % n && e.buffer.set(t),
        e
      );
    }
  }
  let C = new Uint32Array([
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4,
      0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe,
      0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa,
      0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3,
      0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
      0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
      0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c,
      0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f,
      0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ]),
    E = new Uint32Array([
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab,
      0x5be0cd19,
    ]),
    G = new Uint32Array(64);
  class I extends v {
    constructor() {
      (super(64, 32, 8, !1),
        (this.A = 0 | E[0]),
        (this.B = 0 | E[1]),
        (this.C = 0 | E[2]),
        (this.D = 0 | E[3]),
        (this.E = 0 | E[4]),
        (this.F = 0 | E[5]),
        (this.G = 0 | E[6]),
        (this.H = 0 | E[7]));
    }
    get() {
      let { A: e, B: n, C: t, D: a, E: r, F: u, G: s, H: i } = this;
      return [e, n, t, a, r, u, s, i];
    }
    set(e, n, t, a, r, u, s, i) {
      ((this.A = 0 | e),
        (this.B = 0 | n),
        (this.C = 0 | t),
        (this.D = 0 | a),
        (this.E = 0 | r),
        (this.F = 0 | u),
        (this.G = 0 | s),
        (this.H = 0 | i));
    }
    process(e, n) {
      for (let t = 0; t < 16; t++, n += 4) G[t] = e.getUint32(n, !1);
      for (let e = 16; e < 64; e++) {
        let n = G[e - 15],
          t = G[e - 2],
          a = c(n, 7) ^ c(n, 18) ^ (n >>> 3),
          r = c(t, 17) ^ c(t, 19) ^ (t >>> 10);
        G[e] = (r + G[e - 7] + a + G[e - 16]) | 0;
      }
      let { A: t, B: a, C: r, D: u, E: s, F: i, G: d, H: l } = this;
      for (let e = 0; e < 64; e++) {
        let n = (l + (c(s, 6) ^ c(s, 11) ^ c(s, 25)) + L(s, i, d) + C[e] + G[e]) | 0,
          o = ((c(t, 2) ^ c(t, 13) ^ c(t, 22)) + A(t, a, r)) | 0;
        ((l = d),
          (d = i),
          (i = s),
          (s = (u + n) | 0),
          (u = r),
          (r = a),
          (a = t),
          (t = (n + o) | 0));
      }
      ((t = (t + this.A) | 0),
        (a = (a + this.B) | 0),
        (r = (r + this.C) | 0),
        (u = (u + this.D) | 0),
        (s = (s + this.E) | 0),
        (i = (i + this.F) | 0),
        (d = (d + this.G) | 0),
        (l = (l + this.H) | 0),
        this.set(t, a, r, u, s, i, d, l));
    }
    roundClean() {
      G.fill(0);
    }
    destroy() {
      (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
    }
  }
  let T =
    ((a = () => new I()),
    ((r = (e) => a().update(b(e)).digest()).outputLen = (u = a()).outputLen),
    (r.blockLen = u.blockLen),
    (r.create = () => a()),
    r);
  class k extends g {
    constructor(e, n) {
      (super(), (this.finished = !1), (this.destroyed = !1), d(e));
      const t = b(n);
      if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
        throw Error("Expected instance of class which extends utils.Hash");
      ((this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen));
      const a = this.blockLen,
        r = new Uint8Array(a);
      r.set(t.length > a ? e.create().update(t).digest() : t);
      for (let e = 0; e < r.length; e++) r[e] ^= 54;
      (this.iHash.update(r), (this.oHash = e.create()));
      for (let e = 0; e < r.length; e++) r[e] ^= 106;
      (this.oHash.update(r), r.fill(0));
    }
    update(e) {
      return (l(this), this.iHash.update(e), this);
    }
    digestInto(e) {
      (l(this),
        i(e, this.outputLen),
        (this.finished = !0),
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy());
    }
    digest() {
      let e = new Uint8Array(this.oHash.outputLen);
      return (this.digestInto(e), e);
    }
    _cloneInto(e) {
      e || (e = Object.create(Object.getPrototypeOf(this), {}));
      let { oHash: n, iHash: t, finished: a, destroyed: r, blockLen: u, outputLen: s } = this;
      return (
        (e.finished = a),
        (e.destroyed = r),
        (e.blockLen = u),
        (e.outputLen = s),
        (e.oHash = n._cloneInto(e.oHash)),
        (e.iHash = t._cloneInto(e.iHash)),
        e
      );
    }
    destroy() {
      ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
    }
  }
  let x = (e, n, t) => new k(e, n).update(t).digest();
  function B(e, n, t, a) {
    var r;
    let u,
      {
        c: i,
        dkLen: l,
        DK: o,
        PRF: c,
        PRFSalt: y,
      } = (function (e, n, t, a) {
        d(e);
        let { c: r, dkLen: u, asyncTick: i } = S({ dkLen: 32, asyncTick: 10 }, a);
        if ((s(r), s(u), s(i), r < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
        let l = b(n),
          o = b(t),
          _ = new Uint8Array(u),
          c = x.create(e, l),
          y = c._cloneInto().update(o);
        return { c: r, dkLen: u, asyncTick: i, DK: _, PRF: c, PRFSalt: y };
      })(e, n, t, a),
      f = new Uint8Array(4),
      h = _(f),
      w = new Uint8Array(c.outputLen);
    for (let e = 1, n = 0; n < l; e++, n += c.outputLen) {
      let t = o.subarray(n, n + c.outputLen);
      (h.setInt32(0, e, !1),
        (u = y._cloneInto(u)).update(f).digestInto(w),
        t.set(w.subarray(0, t.length)));
      for (let e = 1; e < i; e++) {
        c._cloneInto(u).update(w).digestInto(w);
        for (let e = 0; e < t.length; e++) t[e] ^= w[e];
      }
    }
    return ((r = u), c.destroy(), y.destroy(), r && r.destroy(), w.fill(0), o);
  }
  function N(e, n, t, a, r, u) {
    let s = e[n++] ^ t[a++],
      i = e[n++] ^ t[a++],
      d = e[n++] ^ t[a++],
      l = e[n++] ^ t[a++],
      o = e[n++] ^ t[a++],
      _ = e[n++] ^ t[a++],
      c = e[n++] ^ t[a++],
      f = e[n++] ^ t[a++],
      h = e[n++] ^ t[a++],
      w = e[n++] ^ t[a++],
      m = e[n++] ^ t[a++],
      p = e[n++] ^ t[a++],
      b = e[n++] ^ t[a++],
      g = e[n++] ^ t[a++],
      M = e[n++] ^ t[a++],
      S = e[n++] ^ t[a++],
      L = s,
      A = i,
      v = d,
      C = l,
      E = o,
      G = _,
      I = c,
      T = f,
      k = h,
      x = w,
      B = m,
      N = p,
      H = b,
      O = g,
      R = M,
      D = S;
    for (let e = 0; e < 8; e += 2)
      ((E ^= y((L + H) | 0, 7)),
        (k ^= y((E + L) | 0, 9)),
        (H ^= y((k + E) | 0, 13)),
        (L ^= y((H + k) | 0, 18)),
        (x ^= y((G + A) | 0, 7)),
        (O ^= y((x + G) | 0, 9)),
        (A ^= y((O + x) | 0, 13)),
        (G ^= y((A + O) | 0, 18)),
        (R ^= y((B + I) | 0, 7)),
        (v ^= y((R + B) | 0, 9)),
        (I ^= y((v + R) | 0, 13)),
        (B ^= y((I + v) | 0, 18)),
        (C ^= y((D + N) | 0, 7)),
        (T ^= y((C + D) | 0, 9)),
        (N ^= y((T + C) | 0, 13)),
        (D ^= y((N + T) | 0, 18)),
        (A ^= y((L + C) | 0, 7)),
        (v ^= y((A + L) | 0, 9)),
        (C ^= y((v + A) | 0, 13)),
        (L ^= y((C + v) | 0, 18)),
        (I ^= y((G + E) | 0, 7)),
        (T ^= y((I + G) | 0, 9)),
        (E ^= y((T + I) | 0, 13)),
        (G ^= y((E + T) | 0, 18)),
        (N ^= y((B + x) | 0, 7)),
        (k ^= y((N + B) | 0, 9)),
        (x ^= y((k + N) | 0, 13)),
        (B ^= y((x + k) | 0, 18)),
        (H ^= y((D + R) | 0, 7)),
        (O ^= y((H + D) | 0, 9)),
        (R ^= y((O + H) | 0, 13)),
        (D ^= y((R + O) | 0, 18)));
    ((r[u++] = (s + L) | 0),
      (r[u++] = (i + A) | 0),
      (r[u++] = (d + v) | 0),
      (r[u++] = (l + C) | 0),
      (r[u++] = (o + E) | 0),
      (r[u++] = (_ + G) | 0),
      (r[u++] = (c + I) | 0),
      (r[u++] = (f + T) | 0),
      (r[u++] = (h + k) | 0),
      (r[u++] = (w + x) | 0),
      (r[u++] = (m + B) | 0),
      (r[u++] = (p + N) | 0),
      (r[u++] = (b + H) | 0),
      (r[u++] = (g + O) | 0),
      (r[u++] = (M + R) | 0),
      (r[u++] = (S + D) | 0));
  }
  function H(e, n, t, a, r) {
    let u = a + 0,
      s = a + 16 * r;
    for (let a = 0; a < 16; a++) t[s + a] = e[n + (2 * r - 1) * 16 + a];
    for (let a = 0; a < r; a++, u += 16, n += 16)
      (N(t, s, e, n, t, u), a > 0 && (s += 16), N(t, u, e, (n += 16), t, s));
  }
  async function O(e, n, t) {
    let a,
      {
        N: r,
        r: u,
        p: i,
        dkLen: d,
        blockSize32: l,
        V: _,
        B32: c,
        B: y,
        tmp: h,
        blockMixCb: m,
        asyncTick: b,
      } = (function (e, n, t) {
        let {
          N: a,
          r,
          p: u,
          dkLen: i,
          asyncTick: d,
          maxmem: l,
          onProgress: _,
        } = S({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, t);
        if ((s(a), s(r), s(u), s(i), s(d), s(l), void 0 !== _ && "function" != typeof _))
          throw Error("progressCb should be function");
        let c = 128 * r,
          y = c / 4;
        if (a <= 1 || (a & (a - 1)) != 0 || a > 0x100000000)
          throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
        if (u < 0 || u > ((0x100000000 - 1) * 32) / c)
          throw Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
          );
        if (i < 0 || i > (0x100000000 - 1) * 32)
          throw Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
          );
        let f = c * (a + u);
        if (f > l)
          throw Error(`Scrypt: parameters too large, ${f} (128 * r * (N + p)) > ${l} (maxmem)`);
        let h = B(T, e, n, { c: 1, dkLen: c * u }),
          w = o(h),
          m = o(new Uint8Array(c * a)),
          p = o(new Uint8Array(c)),
          b = () => {};
        if (_) {
          let e = 2 * a * u,
            n = Math.max(Math.floor(e / 1e4), 1),
            t = 0;
          b = () => {
            (t++, _ && (!(t % n) || t === e) && _(t / e));
          };
        }
        return {
          N: a,
          r,
          p: u,
          dkLen: i,
          blockSize32: y,
          V: m,
          B32: w,
          B: h,
          tmp: p,
          blockMixCb: b,
          asyncTick: d,
        };
      })(e, n, t);
    f || w(c);
    for (let e = 0; e < i; e++) {
      let n = l * e;
      for (let e = 0; e < l; e++) _[e] = c[n + e];
      let t = 0;
      (await p(r - 1, b, () => {
        (H(_, t, _, (t += l), u), m());
      }),
        H(_, (r - 1) * l, c, n, u),
        m(),
        await p(r, b, () => {
          let e = c[n + l - 16] % r;
          for (let t = 0; t < l; t++) h[t] = c[n + t] ^ _[e * l + t];
          (H(h, 0, c, n, u), m());
        }));
    }
    return (f || w(c), (a = B(T, e, y, { c: 1, dkLen: d })), y.fill(0), _.fill(0), h.fill(0), a);
  }
  x.create = (e, n) => new k(e, n);
}
