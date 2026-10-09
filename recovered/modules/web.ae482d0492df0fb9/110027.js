/* Recovered shipped factory. Module 110027.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8262431..8263139
 * Raw property SHA-256: 7c61906ab8607631ec7d5fa6bea003a58a0be46c87d7e884ee0b02e854bd79b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(477782),
    s = n(827343),
    l = n(192820),
    o = n(852712),
    d = n(621380),
    c = n(660183);
  function u(e) {
    let { enabledInputProfiles: t } = (0, o.d)({ location: "useInputProfileItems" }),
      n = {
        [d.m.VOICE_ISOLATION]: c.intl.string(c.t.cjPbpT),
        [d.m.STUDIO]: c.intl.string(c.t.VZPR0R),
        [d.m.CUSTOM]: c.intl.string(c.t["N/PQjv"]),
      },
      u = (0, r.bG)([l.Ay], () => l.Ay.getActiveInputProfile()),
      _ = t.map((t) =>
        (0, i.jsx)(
          a.iD,
          {
            id: t,
            group: "input-profiles",
            label: n[t],
            checked: t === (u ?? d.m.CUSTOM),
            action: () => s.default.setActiveInputProfile(t, { analyticsLocations: e }),
          },
          t,
        ),
      );
    return (0, i.jsx)(a.Dr, {
      id: "input-profiles",
      label: c.intl.string(c.t.LM3U3k),
      subtext: n[u ?? d.m.CUSTOM],
      children: _,
    });
  }
}
