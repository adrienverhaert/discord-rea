/* Recovered shipped factory. Module 873985.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9119956..9121034
 * Raw property SHA-256: e709799da8cf60f52a6e77b6150cb79760cfa7173c4fe123be901a0772d3108b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(927813);
  let o = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null },
    d = o,
    c = +l.A.Millis.HOUR;
  class u extends a.Ay.DeviceSettingsStore {
    static displayName = "RTCRegionStore";
    static persistKey = "RTCRegionStore";
    static migrations = [
      (e) => (
        e.preferredRegion
          ? (e.preferredRegions = [e.preferredRegion])
          : (e.preferredRegions = null),
        delete e.preferredRegion,
        e
      ),
    ];
    initialize(e) {
      d = e ?? o;
    }
    shouldIncludePreferredRegion() {
      return null != d.preferredRegions;
    }
    getPreferredRegion() {
      return d.preferredRegions?.[0] ?? null;
    }
    getPreferredRegions() {
      return d.preferredRegions;
    }
    getRegion(e) {
      if (null != e) return e.substr(0, e.search(/\d/));
    }
    getUserAgnosticState() {
      return d;
    }
    shouldPerformLatencyTest(e) {
      return (
        null === d.preferredRegions ||
        !r().isEqual(e, d.lastGeoRankedOrder ?? []) ||
        Date.now() - (d.lastTestTimestamp ?? 0) >= c
      );
    }
  }
  let _ = new u(s.h, {
    RTC_LATENCY_TEST_COMPLETE: function (e) {
      (e.latencyRankedRegions.length > 0 &&
        ((d.lastGeoRankedOrder = e.geoRankedRegions),
        (d.preferredRegions = e.latencyRankedRegions)),
        (d.lastTestTimestamp = Date.now()));
    },
  });
}
