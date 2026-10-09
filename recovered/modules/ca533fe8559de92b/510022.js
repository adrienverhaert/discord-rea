/* Recovered shipped factory. Module 510022.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 418144..419028
 * Raw property SHA-256: f5b78e6c0803853d7c16a12be2b7f05afacd4427c715aea593758c72b2426ded
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { n: () => u });
  var l = n(477900),
    i = n(192308),
    r = n(174459),
    a = n(188275),
    s = n(652215);
  let o = "social-layer-storefront-item-claimed-successfully-modal",
    u = (e) => {
      let { sku: t, application: u, analyticsLocations: c, entitlement: d, contextKey: p } = e,
        m = p ?? (0, i.getInteractingModalContext)(),
        h = !1;
      function C(e) {
        h = e.shouldIgnoreCloseRequest;
      }
      (0, i.openModalLazy)(
        async () => {
          let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await Promise.all([
            n.e("728809"),
            n.e("572963"),
            n.e("493014"),
            n.e("672877"),
            n.e("520491"),
            n.e("361684"),
            n.e("180307"),
          ]).then(n.bind(n, 472734));
          return (n) =>
            (0, l.jsx)(e, {
              ...n,
              sku: t,
              application: u,
              analyticsLocations: c,
              entitlement: d,
              onSetIgnoreCloseRequest: C,
            });
        },
        {
          modalKey: o,
          contextKey: m,
          onCloseRequest: () => {
            h || (0, i.closeModal)(o, m);
          },
          onCloseCallback: () => {
            r.default.track(s.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
              type: a.e2,
              sku_id: t.id,
              application_id: u.id,
              location_stack: c ?? [],
            });
          },
        },
      );
    };
}
