/* Recovered shipped factory. Module 918825.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6220522..6221402
 * Raw property SHA-256: 3f0303a7af7c38d189d56d33833511aac9d493841dee34cfd6b000a0028a643a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { OverlayToggledClientSettingType: () => d, Q: () => c });
  var i,
    r = n(77729),
    a = n(760751),
    s = n(174459),
    l = n(41984),
    o = n(652215),
    d =
      (((i = {}).OOP = "oop"),
      (i.OOP_GAME = "oop game"),
      (i.LEGACY = "legacy"),
      (i.LEGACY_GAME = "legacy game"),
      i);
  async function c(e, t, i) {
    let d = null != i ? a.A.getDetectableGame(i) : null,
      { default: c } = await Promise.resolve().then(n.bind(n, 296027)),
      u = c?.getMostRecentOverlayRenderMethod() ?? void 0,
      _ = null != u ? l.Ue[u] : void 0;
    (__OVERLAY__ && (_ = l.Ue[l.Ue.Hook]),
      s.default.track(o.HAw.OVERLAY_TOGGLED, {
        enabled: e,
        setting_type: (function (e) {
          switch (e) {
            case "oop":
            case "oop game":
            default:
              return "overlay toggled - global";
            case "legacy":
            case "legacy game":
              return "overlay toggled - game";
          }
        })(t),
        client_setting_type: t,
        application_id: d?.id ?? void 0,
        application_name: d?.name ?? void 0,
        most_recent_overlay_render_method: _,
        hardware_display_count: (await r.A?.hardware?.getDisplayCount?.()) ?? null,
      }));
  }
}
