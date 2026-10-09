/* Recovered shipped factory. Module 297494.
 * Source: recovered/web/assets/c170ce2099e03de9.js
 * UTF-16 property offsets: 4660..5036
 * Raw property SHA-256: f3d1c94800b052b73b7ffe7a31fef7db998168065ce07bb484a867b0281a1a9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { H: () => a, v: () => o });
  var i = n(435558),
    l = n(998304);
  function o(e, t) {
    let n = (0, l.Q7)([t.r, t.g, t.b], 2);
    return (e = e.replace(
      /(\[1,0,0,)/g,
      `[${n[0][0] / 255},${n[0][1] / 255},${n[0][2] / 255},`,
    )).replace(/\[0,0,1,/g, `[${n[1][0] / 255},${n[1][1] / 255},${n[1][2] / 255},`);
  }
  let a = (0, i.memoize)((e) => {
    let t = 0;
    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
    return Math.abs(t);
  });
}
