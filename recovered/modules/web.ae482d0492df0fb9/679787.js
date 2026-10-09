/* Recovered shipped factory. Module 679787.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5452261..5453437
 * Raw property SHA-256: a0d842fa7db041165062bfd11919a3f49e4843500ce8d9289329920897850963
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return null == e
      ? null
      : {
          presetId: e.presetId,
          customUserThemeSettings: (function (e) {
            if (null != e)
              return {
                colors: [...e.colors],
                gradientColorStops: [...(e.gradientColorStops ?? [])],
                gradientAngle: e.gradientAngle,
                baseMix: e.baseMix,
              };
          })(e.customUserThemeSettings),
        };
  }
  function r(e) {
    return null == e ? null : { enabled: e.enabled, themeSettings: i(e.themeSettings) };
  }
  function a(e) {
    var t;
    return null == e
      ? { preset_id: null, custom_user_theme_settings: null }
      : {
          preset_id: e.presetId ?? null,
          custom_user_theme_settings:
            null == (t = e.customUserThemeSettings)
              ? null
              : {
                  colors: [...t.colors],
                  gradient_color_stops:
                    null != t.gradientColorStops ? [...t.gradientColorStops] : [],
                  gradient_angle: t.gradientAngle ?? 0,
                  base_mix: t.baseMix ?? 0,
                },
        };
  }
  function s(e) {
    return null == e || (null == e.preset_id && null == e.custom_user_theme_settings)
      ? null
      : {
          presetId: null == e.preset_id ? void 0 : e.preset_id,
          customUserThemeSettings: (function (e) {
            if (null != e)
              return {
                colors: e.colors,
                gradientColorStops: e.gradient_color_stops ?? [],
                gradientAngle: e.gradient_angle ?? 0,
                baseMix: e.base_mix ?? 0,
              };
          })(e.custom_user_theme_settings),
        };
  }
  function l(e) {
    return null == e ? null : { enabled: e.enabled, themeSettings: s(e) };
  }
  n.d(t, { L8: () => s, QK: () => a, UW: () => l, yX: () => r, z_: () => i });
}
