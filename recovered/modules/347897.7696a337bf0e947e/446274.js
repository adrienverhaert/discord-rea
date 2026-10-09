/* Recovered shipped factory. Module 446274.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 12888..13505
 * Raw property SHA-256: f151c94e6167847ab6d0d97e28909d4a1bea65f47794bc959ed9238c9b506275
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  let n;
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.runtimeHashMessageKey = function (e) {
      let t = (function (e) {
        e = BigInt(e);
        let t = [],
          r = Math.ceil(Math.floor(Math.log2(Number(e)) + 1) / 8);
        for (let n = 0; n < r; n++) t.unshift(Number((e >> BigInt(8 * n)) & BigInt(255)));
        let n = new Uint8Array(t);
        return a ? n : n.reverse();
      })((0, i.hash)(e, 0));
      return [
        o[t[0] >> 2],
        o[((3 & t[0]) << 4) | (t[1] >> 4)],
        o[((15 & t[1]) << 2) | (t[2] >> 6)],
        o[63 & t[2]],
        o[t[3] >> 2],
        o[((3 & t[3]) << 4) | (t[4] >> 4)],
      ].join("");
    }));
  let i = r(618830),
    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    a = !((new Uint32Array((n = new Uint8Array(4)).buffer)[0] = 1) & n[0]);
}
