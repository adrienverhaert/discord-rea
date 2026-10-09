/* Recovered shipped factory. Module 819027.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3197072..3197561
 * Raw property SHA-256: b3c4b5312bae07b832e5f572083c39d16169585023a6ad50a6d1bc9877d72bec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(477782),
    a = n(625903),
    s = n(688810),
    l = n(474397),
    o = n(780964),
    d = n(766075),
    c = n(652215),
    u = n(660183);
  function _(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return (0, i.jsx)(r.Dr, {
      id: "voice-settings",
      label: u.intl.string(u.t.NiTd0e),
      action: () => {
        ((0, d.openUserSettings)(o.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
          (0, l.A)(e, e === c.BRT.POPOUT));
      },
      icon: a.SettingsIcon,
      leadingAccessory: { type: "icon", icon: a.SettingsIcon },
    });
  }
}
