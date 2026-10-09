/* Recovered shipped factory. Module 631305.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5125041..5125847
 * Raw property SHA-256: ba44d938f70dea6f93ea107dca86959e0fddfaf7c73fe67987b4ba7e6a2aeade
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(231723),
    a = n(192308),
    s = n(869146),
    l = n(709055),
    o = n(174459),
    d = n(652215);
  function c(e, t) {
    let c = t ?? `${d.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
    (null != e.targetBoostedGuildTier && (c += ` - Tier ${e.targetBoostedGuildTier}`),
      o.default.track(d.HAw.OPEN_MODAL, { type: c, location: e.analyticsSourceLocation }));
    let { openInPopoutEnabled: u, ..._ } = e,
      E = s.A.getWindowOpen(d.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
    E && (0, l.A)(d.MLl.CHANNEL_CALL_POPOUT);
    let A = E ? r.KX : r.SY;
    (0, a.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([n.e("265480"), n.e("971508"), n.e("845210")]).then(
          n.bind(n, 331617),
        );
        return (t) => (0, i.jsx)(e, { ..._, ...t });
      },
      {
        onCloseCallback: function () {
          o.default.track(d.HAw.MODAL_DISMISSED, { type: c, location: e.analyticsSourceLocation });
        },
        contextKey: A,
      },
    );
  }
}
