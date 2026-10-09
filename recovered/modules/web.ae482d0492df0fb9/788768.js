/* Recovered shipped factory. Module 788768.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4171052..4171910
 * Raw property SHA-256: c083d304521a867feced5a065236dbc493660a2cbcdb66cfc29d0367bde63955
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(439372),
    r = n(710195),
    a = n(723702);
  let s = (0, n(945810).mj)({
    name: "2026-04-desktop-tti-early-update-check",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function l(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
  }
  let o = !1,
    d = null;
  async function c() {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { enabled: e } = l({ location: "updateSwitch" }),
      t = "DESKTOP_TTI_EARLY_UPDATE_CHECK";
    (e !== (await window.DiscordNative.settings.get(t, !1)) &&
      (await window.DiscordNative.settings.set(t, e)),
      (d = e));
  }
  class u extends i.A {
    stores = new Map().set(r.A, () => {
      if (o) {
        let { enabled: e } = l({ location: "experimentStoreUpdate" });
        d !== e && c();
      }
    });
    actions = {
      POST_CONNECTION_OPEN: async () => {
        o ||
          window.DiscordNative?.settings?.set == null ||
          ((0, a.isDesktop)() && ((o = !0), await c()));
      },
      LOGOUT: () => {
        ((o = !1), (d = null));
      },
    };
  }
  let _ = new u();
}
