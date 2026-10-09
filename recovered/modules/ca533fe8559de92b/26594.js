/* Recovered shipped factory. Module 26594.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 415864..416181
 * Raw property SHA-256: c8ef9491156fa9067ddbd3a74a9605a64dcdee3981d34d5c52ad5cc718940645
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { G: () => a });
  var l = n(318254),
    i = n(660183),
    r = n(427483);
  function a(e) {
    let { isGift: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e?.metadata?.orbs_reward;
    return null != n && n > 0
      ? {
          Icon: l.C,
          text: i.intl.format(t ? i.t["ZV+aS9"] : i.t["0StwHe"], { orbCount: n }),
          graphic: { type: "video", url: r.A },
        }
      : null;
  }
}
