/* Recovered shipped factory. Module 300182.
 * Source: recovered/web/assets/f2f84c482534d769.js
 * UTF-16 property offsets: 1148..1520
 * Raw property SHA-256: c7cc12d4136cb30278e86b0215c7217dd2d876c77e62c9f3b8a0186506e46362
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { A: () => o });
  var n = t(477900);
  t(582128);
  var r = t(866665),
    a = t(408278),
    i = t(597770),
    s = t(660183);
  let o = function (e) {
    let { onGift: l, tooltipDelay: t = 250, tabIndex: o } = e;
    return (0, n.jsx)(r.m, {
      text: s.intl.string(s.t["JCFN/y"]),
      delay: t,
      children: (0, n.jsx)(a.K, {
        "aria-label": s.intl.string(s.t["JCFN/y"]),
        variant: "primary",
        icon: i.GiftIcon,
        size: "md",
        onClick: l,
        tabIndex: o,
      }),
    });
  };
}
