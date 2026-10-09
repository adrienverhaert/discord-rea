/* Recovered shipped factory. Module 323617.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4171911..4172756
 * Raw property SHA-256: e241449bbede84b2f386330da1f9489155e94d70ff378200fa858abef44910ed
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(439372),
    r = n(710195),
    a = n(723702);
  let s = (0, n(945810).mj)({
    name: "2026-07-desktop-tti-update-backoff-algo",
    kind: "user",
    defaultConfig: { algo: 0 },
    variations: { 1: { algo: 1 } },
  });
  function l(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
  }
  let o = !1,
    d = null;
  async function c() {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { algo: e } = l({ location: "updateSwitch" }),
      t = "DESKTOP_TTI_UPDATE_BACKOFF_ALGO";
    (e !== (await window.DiscordNative.settings.get(t, 0)) &&
      (await window.DiscordNative.settings.set(t, e)),
      (d = e));
  }
  class u extends i.A {
    stores = new Map().set(r.A, () => {
      if (o) {
        let { algo: e } = l({ location: "experimentStoreUpdate" });
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
