/* Recovered shipped factory. Module 487851.
 * Source: recovered/web/assets/64310.f09c86493518d14b.js
 * UTF-16 property offsets: 7871..8110
 * Raw property SHA-256: 1c1561e8367d5a7f07f344562324fa86c0bb8da47d58e2eeaec80159ad0b82fb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, s) {
  s.d(e, {
    h: () =>
      function t(e, s, i = 2) {
        if (!s || "object" != typeof s || i <= 0) return s;
        if (e && s && 0 === Object.keys(s).length) return e;
        let n = { ...e };
        for (let e in s)
          Object.prototype.hasOwnProperty.call(s, e) && (n[e] = t(n[e], s[e], i - 1));
        return n;
      },
  });
}
