/* Recovered shipped factory. Module 35587.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6816991..6818972
 * Raw property SHA-256: 9a26748486bcd5825bfb1b0f684bf8d668fcf408c4ed8bf39340e02a2b3ce524
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { IO: () => A, Sq: () => f, T1: () => _, Wi: () => h, y7: () => E });
  var i = n(582128),
    r = n(17928),
    a = n(73153),
    s = n(287809),
    l = n(158045),
    o = n(264779),
    d = n(962644),
    c = n(412260),
    u = n(202541);
  function _() {
    let { includeClaimedPromotions: e = !1 } =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = (0, r.yK)([c.A], () => c.A.outboundPromotions),
      n = (0, r.bG)([c.A], () => c.A.consumedInboundPromotionId),
      a = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
      let i = e
        ? new Set(
            a.map((e) => {
              let { promotion: t } = e;
              return t.id;
            }),
          )
        : null;
      return t.filter((e) => !(e.id === n || !(0, o.OP)(e) || (0, o.g_)(e)) && (i?.has(e.id), !0));
    }, [t, n, a, e]);
  }
  function E() {
    let e = (0, r.bG)([c.A], () => c.A.lastFetchedActivePromotions),
      t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
      n = l.Ay.isPremiumExactly(t, u.PremiumTypes.TIER_2),
      E = !l.Ay.isPremium(t) || n,
      A = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
      h = (0, r.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    (i.useEffect(() => {
      null != e && a.h.wait(() => d.Ay.markOutboundPromotionsSeen());
    }, [e]),
      i.useEffect(() => {
        a.h.wait(() => {
          E && null == e && d.Ay.fetchActivePromotions();
        });
      }, [e, E]),
      i.useEffect(() => {
        a.h.wait(() => {
          d.Ay.fetchClaimedOutboundPromotionCodes();
        });
      }, []));
    let f = i.useMemo(() => (0, o.eN)(A), [A]),
      I = _({ includeClaimedPromotions: !0 }),
      p = i.useMemo(() => {
        let e = new Set(
          I.map((e) => {
            let { id: t } = e;
            return t;
          }),
        );
        return A.filter((t) => {
          let { promotion: n } = t;
          return (
            !e.has(n.id) &&
            !1 === (0, o.HB)({ promotionType: n.promotionType }) &&
            !(0, o.g_)(n) &&
            (0, o.OP)(n)
          );
        });
      }, [I, A]);
    return {
      promotionsLoaded: h && (!E || null != e),
      activeOutboundPromotions: I,
      claimedEndedOutboundPromotions: p,
      claimedOutboundPromotionCodeMap: f,
    };
  }
  function A() {
    let e = (0, r.bG)([c.A], () => c.A.lastSeenOutboundPromotionStartDate),
      t = _();
    return i
      .useMemo(
        () =>
          null == e
            ? t
            : t.filter((t) => {
                let { startDate: n } = t;
                return new Date(n) > new Date(e);
              }),
        [t, e],
      )
      .filter((e) => (0, o.OP)(e));
  }
  function h(e) {
    return (0, r.bG)([c.A], () => c.A.hasPromotion(e));
  }
  function f() {
    return (
      i.useEffect(() => {
        (0, d.BE)();
      }, []),
      (0, r.bG)([c.A], () => c.A.hasActiveBogoRewardPromotion())
    );
  }
}
