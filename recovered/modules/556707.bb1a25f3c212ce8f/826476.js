/* Recovered shipped factory. Module 826476.
 * Source: recovered/web/assets/556707.bb1a25f3c212ce8f.js
 * UTF-16 property offsets: 319254..320023
 * Raw property SHA-256: d4b83f37f60943218b360917a5f598a9a9c4c16903e3fa225c5b9b68a724a17a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Xr: () => s, gt: () => a, nC: () => o, xv: () => i });
  var r = n(875565);
  function i(e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
  }
  function o(e, t) {
    let n = e,
      r = n.length;
    if (r <= 150) return n;
    t > r && (t = r);
    let i = Math.max(t - 60, 0);
    i < 5 && (i = 0);
    let o = Math.min(i + 140, r);
    return (
      o > r - 5 && (o = r),
      o === r && (i = Math.max(o - 140, 0)),
      (n = n.slice(i, o)),
      i > 0 && (n = `'{snip} ${n}`),
      o < r && (n += " {snip}"),
      n
    );
  }
  function a(e, t) {
    if (!Array.isArray(e)) return "";
    let n = [];
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      try {
        (0, r.L2)(i) ? n.push("[VueViewModel]") : n.push(String(i));
      } catch (e) {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(t);
  }
  function s(e, t = [], n = !1) {
    return t.some((t) =>
      (function (e, t, n = !1) {
        return (
          !!(0, r.Kg)(e) &&
          ((0, r.gd)(t) ? t.test(e) : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)))
        );
      })(e, t, n),
    );
  }
}
