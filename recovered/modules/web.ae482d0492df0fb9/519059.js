/* Recovered shipped factory. Module 519059.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5611907..5613208
 * Raw property SHA-256: 0de29e20c8a245751ec9845f5ef00762b3e06770df78cc71dcf71da8ce2bc4c5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { HF: () => E, f8: () => h, c: () => _, Lg: () => A });
  var i = n(945810),
    r = n(17928),
    a = n(73153);
  let s = {
      hide_icymi_tab: { description: "Hide ICYMI tab" },
      go_back_to_regular_input: { description: "Go back to regular input" },
    },
    l = {};
  class o extends r.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
      return { toggleStates: l };
    }
    initialize(e) {
      for (var t in s) l[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
      return l[e] ?? !1;
    }
    set(e, t) {
      return ((l[e] = t), t);
    }
  }
  let d = new o(a.h, {
      LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: t, enabled: n } = e;
        l[t] = n;
      },
    }),
    c = "hide_icymi_tab",
    u = (0, i.mj)({
      name: "2026-04-icymi-staff-only",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
  function _(e) {
    let t = (0, r.bG)([d], () => d.get(c), [c]),
      { enabled: n } = u.useConfig({ location: e }),
      i = f.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
  }
  function E(e) {
    let t = d.get(c),
      { enabled: n } = u.getConfig({ location: e });
    {
      let { icymiDesktopEnabled: i } = f.getConfig({ location: e });
      return !t && n && i;
    }
  }
  function A(e) {
    return E(e);
  }
  let h = (0, i.mj)({
      name: "2026-03-icymi-staff-debugging-utility",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    f = (0, i.mj)({
      name: "2026-03-icymi-desktop",
      kind: "user",
      defaultConfig: { icymiDesktopEnabled: !1 },
      variations: { 1: { icymiDesktopEnabled: !0 } },
    });
}
