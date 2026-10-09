/* Recovered shipped factory. Module 320137.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 16657..16881
 * Raw property SHA-256: d1d1ef228d65645821d695e713538628ebb370bd936639ff04b640263d6c0f83
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => u });
  var l = n(582128),
    r = n(17928),
    o = n(236285),
    i = n(492494);
  let a = [];
  function u(e) {
    let t = (0, r.bG)([o.Ay], () => o.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == t ? a : t.filter((t) => (0, i.Eg)(t, e))), [t, e]);
  }
}
