/* Recovered shipped factory. Module 152772.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 615844..616034
 * Raw property SHA-256: 229b52cf5b73b1f685122e0260786aa01dbff7f20e9be27a4b2ed068c8c7833d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e, t, r) {
      let n = 0,
        i = e.length;
      for (; i > 0;) {
        let o = (i / 2) | 0,
          a = n + o;
        0 >= r(e[a], t) ? ((n = ++a), (i -= o + 1)) : (i = o);
      }
      return n;
    }));
}
