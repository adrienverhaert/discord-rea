/* Recovered shipped factory. Module 386936.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4251620..4252024
 * Raw property SHA-256: 32c5bd3cf0d7d11eb6789455a22a14b978f70a6adc48afa27228142c3bc00d11
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => s, s: () => l });
  var i,
    r = n(174459),
    a = n(652215);
  function s(e, t) {
    r.default.track(a.HAw.DM_SETTINGS_UPSELL_ACTION, { action: e, guild_id: t });
  }
  var l =
    (((i = {}).MODAL_VIEWED = "modal_viewed"),
    (i.MODAL_DISMISSED = "modal_dismissed"),
    (i.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked"),
    (i.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown"),
    (i.MODAL_DISABLED_DMS = "modal_disabled_dms"),
    i);
}
