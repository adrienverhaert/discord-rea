/* Recovered shipped factory. Module 891540.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5591656..5592653
 * Raw property SHA-256: d7c1835eff9fe133e421bf54674726d5edbb3307ad45cd75293a34c81afdab02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(536194);
  n(436317);
  let s = new Set(),
    l = {};
  class o extends i.Ay.PersistedStore {
    static displayName = "HotspotStore";
    static persistKey = "hotspots";
    static migrations = [(e) => ({ hiddenHotspots: e ?? [], hotspotOverrides: {} })];
    initialize(e) {
      null != e &&
        (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)),
        null != e.hotspotOverrides && (l = e.hotspotOverrides));
    }
    hasHotspot(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !t && l[e];
      return !a.P.isDisallowPopupsSet() && (n || !s.has(e));
    }
    hasHiddenHotspot(e) {
      return s.has(e);
    }
    getHotspotOverride(e) {
      return l[e];
    }
    getState() {
      return { hiddenHotspots: s, hotspotOverrides: l };
    }
  }
  let d = new o(r.h, {
    OVERLAY_INITIALIZE: function (e) {
      let { hiddenHotspots: t } = e;
      s = new Set(t);
    },
    HOTSPOT_HIDE: function (e) {
      let { location: t } = e;
      if (s.has(t)) return !1;
      s.add(t);
    },
    HOTSPOT_OVERRIDE_SET: function (e) {
      let { location: t, enabled: n } = e;
      l[t] = n;
    },
    HOTSPOT_OVERRIDE_CLEAR: function (e) {
      let { location: t } = e;
      if (null == l[t]) return !1;
      delete l[t];
    },
  });
}
