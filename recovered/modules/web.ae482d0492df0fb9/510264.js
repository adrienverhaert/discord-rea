/* Recovered shipped factory. Module 510264.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4250860..4251619
 * Raw property SHA-256: d7878f620cd5b543ba12d59d19dd5abd116b85fa43f46b42595f3464911dd603
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => E, A: () => A });
  var i = n(636537),
    r = n(439372),
    a = n(477900);
  n(582128);
  var s = n(506774),
    l = n(192308),
    o = n(386936);
  let d = "dmSettingsUpsellLastShown",
    c = {
      openDmSettingsUpsellModal(e) {
        let t = s.w.get(d),
          i = Date.now();
        null == t || i - t > 6048e5
          ? (s.w.set(d, i),
            (0, l.openModalLazy)(async () => {
              let { default: t } = await Promise.all([
                n.e("494150"),
                n.e("273084"),
                n.e("962684"),
              ]).then(n.bind(n, 228855));
              return (n) => (0, a.jsx)(t, { ...n, guildId: e });
            }))
          : (0, o.$)(o.s.SUPPRESSED_BY_COOLDOWN, e);
      },
    };
  var u = n(652215);
  class _ extends r.A {
    actions = { DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow };
    handleDmSettingsUpsellShow(e) {
      c.openDmSettingsUpsellModal(e.guildId);
    }
  }
  function E(e) {
    return i.Bo.post({ url: u.Rsh.DM_SETTINGS_UPSELL_ACK(e), rejectWithError: !1 });
  }
  let A = new _();
}
