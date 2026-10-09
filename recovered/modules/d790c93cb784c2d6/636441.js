/* Recovered shipped factory. Module 636441.
 * Source: recovered/web/assets/d790c93cb784c2d6.js
 * UTF-16 property offsets: 3603..4332
 * Raw property SHA-256: 64f392c096fb1bed9e71b66ff225fdff61ea27f3632f45d4cc1f52adf5a482a3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => l });
  var a = n(477900);
  n(582128);
  var i = n(772707),
    c = n(834730),
    r = n(660183),
    s = n(832011);
  function l(e) {
    let t,
      {
        transitionState: n,
        guild: l,
        guildBoostQuantity: o,
        isTransfer: d,
        graphic: u,
        onClose: b,
      } = e,
      p = l?.name;
    t = d
      ? null == p
        ? r.intl.format(r.t.mYRfYx, {})
        : r.intl.format(r.t["Ps/5bb"], { guildName: p })
      : null == p
        ? r.intl.format(r.t["4fw/T2"], { guildSubscriptionQuantity: o })
        : r.intl.format(r.t.IeFTQu, { guildName: p, guildSubscriptionQuantity: o });
    let f = d ? r.intl.string(r.t["5uYZHN"]) : r.intl.string(r.t.mpb7t3),
      m = [{ variant: "primary", text: r.intl.string(r.t["/iTxgz"]), onClick: b }];
    return (0, a.jsx)(i.k, {
      transitionState: n,
      onClose: b,
      graphic: u,
      title: f,
      actions: m,
      children: (0, a.jsx)(c.E, { variant: "text-md/normal", className: s.x, children: t }),
    });
  }
}
