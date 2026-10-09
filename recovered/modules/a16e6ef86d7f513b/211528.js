/* Recovered shipped factory. Module 211528.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 1021..3655
 * Raw property SHA-256: b9825d2732d7344100c09f845c3423d72bc55af93c3e5e030667d8099400c6e9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { KS: () => S, Wf: () => y, ZB: () => g });
  var l = n(477900),
    r = n(582128),
    o = n(643909),
    i = n(17928),
    a = n(783327),
    u = n(166532),
    s = n(287809),
    c = n(174459),
    d = n(240248),
    C = n(71532),
    h = n(116673),
    p = n(942340),
    m = n(648335),
    E = n(652215),
    f = n(818348),
    _ = n(400400);
  let y = r.memo(function (e) {
    let {
        paymentMethodOrder: t,
        wallets: n = [],
        customPaymentMethodIdsToSourceTypes: a,
        analyticsContext: d,
        options: C,
        onChange: h,
        step: p,
        ..._
      } = e,
      y = (0, i.bG)([s.default], () => {
        let e = s.default.getCurrentUser();
        return null != e ? e.email : null;
      }),
      A = (0, i.bG)([s.default], () => {
        let e = s.default.getCurrentUser();
        return null != e ? e.globalName : null;
      }),
      g = r.useCallback(
        (e) => {
          if (p !== u.pn.PAYMENT_ELEMENT) return;
          let t = (0, m.Wn)(e.value.type, a);
          if ((null != h && h(e, t), null != d)) {
            let { contextMetadata: n, activitySessionId: l, analyticsData: r } = d,
              o = null != t && t !== f.he.PAYMENT_REQUEST ? m.mr[t] : e.value.type;
            c.default.track(E.HAw.PAYMENT_ELEMENT_CHANGED, {
              load_id: n.loadId,
              activity_session_id: l,
              payment_element_selected_method: o,
              payment_source_type: t,
              complete: e.complete,
              empty: e.empty,
              ...("string" == typeof r.location ? { location: r.location } : void 0),
            });
          }
        },
        [h, d, p, a],
      ),
      S = r.useMemo(
        () => ({
          applePay: n.includes("applePay") ? "auto" : "never",
          googlePay: n.includes("googlePay") ? "auto" : "never",
          link: n.includes("link") ? "auto" : "never",
        }),
        [n],
      ),
      N = r.useMemo(
        () => ({
          billingDetails: { ...(null != y && { email: y }), ...(null != A && { name: A }) },
        }),
        [y, A],
      ),
      T = r.useMemo(
        () => ({
          id: "stripe-payment-element",
          options: {
            layout: { type: "tabs" },
            wallets: S,
            defaultValues: N,
            paymentMethodOrder: t,
            ...C,
          },
          onChange: g,
          ..._,
        }),
        [S, N, C, _, g, t],
      );
    return (0, l.jsx)(o.PaymentElement, { ...T });
  });
  function A(e) {
    let { children: t } = e,
      n = (0, a.S)(),
      { elementsAppearance: r } = (0, p.E)(),
      i = (0, C.PU)();
    return (0, l.jsx)(o.Elements, {
      stripe: n,
      options: { appearance: r, locale: i, mode: "setup", currency: "usd" },
      children: t,
    });
  }
  function g(e) {
    return null != e && null != e && (!(0, d.uJ)(e.line1) || !(0, d.uJ)(e.city));
  }
  let S = r.memo(function (e) {
    let {
        options: t,
        renderAsStandaloneElement: n,
        addressElementOnChangeFired: i,
        billingAddressInfo: a,
        internalKey: u,
        ...s
      } = e,
      c = (0, h.z)(),
      p = null != c && c.length > 0 ? c[0] : (0, d.uJ)(a.country) ? "" : a.country,
      m = r.useMemo(() => {
        let { name: e, address: t } = (0, C._Z)({ ...a, country: p });
        return null != t && g(t)
          ? {
              ...(null != e && "" !== e && { name: e }),
              address: Object.fromEntries(
                Object.entries(t).filter((e) => {
                  let [t, n] = e;
                  return void 0 !== n;
                }),
              ),
            }
          : null != e && "" !== e
            ? { name: e }
            : null != t && null != t.country && i
              ? { address: { country: p } }
              : void 0;
      }, [a, i, p]),
      E = r.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
      f = r.useMemo(
        () =>
          (0, l.jsx)(
            o.AddressElement,
            { options: { mode: "billing", defaultValues: m, allowedCountries: E, ...t }, ...s },
            u,
          ),
        [m, E, t, s, u],
      );
    return n
      ? (0, l.jsxs)(A, {
          children: [
            (0, l.jsx)("div", {
              className: _.R,
              children: (0, l.jsx)(o.PaymentElement, { id: "stripe-payment-element" }),
            }),
            f,
          ],
        })
      : f;
  });
}
