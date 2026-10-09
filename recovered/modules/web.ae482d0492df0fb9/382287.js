/* Recovered shipped factory. Module 382287.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9803022..9803719
 * Raw property SHA-256: 21eb9fa5fcb6d6243d2005fe6ac256db0b27ddf6ca44066baa8febf605a733ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { LJ: () => _, WQ: () => c, fJ: () => u }), n(321073));
  var i = n(409481),
    r = n(274652),
    a = n(820465),
    s = n(453771),
    l = n(158045),
    o = n(202541),
    d = n(660183);
  function c(e, t, n) {
    let i = s.Hb(n ?? s.o2(t));
    return l.Ay.isPremium(e, o.PremiumTypes.TIER_2)
      ? d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: i })
      : l.Ay.isPremium(e, o.PremiumTypes.TIER_1)
        ? d.intl.formatToPlainString(d.t["Nr+LsZ"], { maxSize: i })
        : d.intl.formatToPlainString(d.t.fxEKdS, { maxSize: i });
  }
  function u(e) {
    let { files: t, guildId: n, canDeferSizeChecks: r = !0 } = e;
    if (r && (0, a.M)()) return !1;
    let l = (0, i.C)(s.o2(n));
    return Array.from(t).some((e) => e.size > l) || s.Aw(t);
  }
  function _(e) {
    return e.reduce((e, t) => (t.item.platform === r.x.WEB && e.push(t.item.file), e), []);
  }
}
