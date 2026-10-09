/* Recovered shipped factory. Module 74396.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3552377..3553580
 * Raw property SHA-256: 0dbd9ac9db0eb0697e4ba0dce273e0cae8126295878768e7575d8338160f5d9b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(38405),
    s = n(185928);
  let l = [],
    o = 0;
  function d(e) {
    try {
      let t = s.dP[e.base_theme];
      return (
        e.colors.length > 0 &&
        "number" == typeof e.gradient_angle &&
        "number" == typeof e.base_mix &&
        null != t
      );
    } catch (e) {
      return (
        a.A.captureMessage("Invalid saved custom theme: " + e, {
          tags: { app_context: "SavedCustomThemeStore" },
        }),
        !1
      );
    }
  }
  class c extends i.Ay.PersistedStore {
    static displayName = "SavedCustomThemeStore";
    static persistKey = "SavedCustomThemeStore";
    initialize(e) {
      (null != e && (l = e.savedCustomThemes), (o = 0));
    }
    getState() {
      return { savedCustomThemes: l ?? [] };
    }
    getSavedCustomTheme() {
      return l?.length > 0 && l[0].colors.length > 0 ? l[0] : null;
    }
    getFetchState() {
      return o;
    }
    hasSavedCustomThemes() {
      return l?.length > 0;
    }
    isFetching() {
      return 1 === o;
    }
    hasFetched() {
      return 2 === o;
    }
    hasError() {
      return 3 === o;
    }
  }
  let u = new c(r.h, {
    SAVED_CUSTOM_THEMES_FETCH_START: function () {
      o = 1;
    },
    SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function (e) {
      let { themes: t } = e;
      ((o = 2),
        (l = t.filter(d).map((e) => {
          let t = s.dP;
          return {
            colors: e.colors,
            gradient_angle: e.gradient_angle,
            base_mix: e.base_mix,
            base_theme: t[e.base_theme],
          };
        })));
    },
    SAVED_CUSTOM_THEMES_FETCH_FAILURE: function (e) {
      let { error: t } = e;
      ((o = 3), a.A.captureException(t, { tags: { app_context: "SavedCustomThemeStore" } }));
    },
  });
}
