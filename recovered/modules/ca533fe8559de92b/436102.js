/* Recovered shipped factory. Module 436102.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 393114..394224
 * Raw property SHA-256: 3dc2a1a6b5fc0379dd0c2d9610b59c1b0fa724f7b12f9950a1318642c224e1e8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { X: () => m, s: () => d });
  var l = n(582128),
    i = n(17928),
    r = n(157559),
    a = n(97352),
    s = n(469778),
    o = n(158045),
    u = n(818348),
    c = n(660183);
  function d(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      a = { closeModal: t, isGift: n },
      s = l.useRef(a);
    (l.useEffect(() => {
      s.current = a;
    }),
      l.useEffect(() => {
        if (!i) return;
        let { closeModal: t, isGift: n } = s.current;
        null != e &&
          e.isPurchasedExternally &&
          null != e.paymentGateway &&
          !n &&
          (r.A.show({
            title: c.intl.formatToPlainString(c.t["6mIX6s"], {
              paymentGatewayName: u.qm[e.paymentGateway],
            }),
            body: c.intl.format(c.t.EOa8ei, {
              paymentGatewayName: u.qm[e.paymentGateway],
              subscriptionManagementLink: (0, o.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
            }),
            confirmText: c.intl.string(c.t.BddRzS),
          }),
          t());
      }, [e, i]));
  }
  let p = [];
  function m(e, t) {
    let n = (0, i.bG)([a.A], () => (null != e ? a.A.get(e) : null)),
      r = (0, i.yK)([s.A], () => {
        let e = null != n ? s.A.getForSku(n.skuId) : null;
        return null != e ? Array.from(e) : p;
      }),
      u = l.useMemo(
        () =>
          r.filter((e) => {
            let { parentId: t, consumed: n } = e;
            return null != t && !n;
          }),
        [r],
      );
    return {
      hasEntitlements:
        !t &&
        null != n &&
        null != u &&
        u.length >= o.Ay.getIntervalMonths(n.interval, n.intervalCount),
      entitlements: u,
    };
  }
}
