/* Recovered shipped factory. Module 572487.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9307492..9308749
 * Raw property SHA-256: a4d24693c7c55687d216f2b66875e118670d13eb658a3dfbb85fd227661cb3d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(652215);
  let s = {};
  function l(e) {
    let t = s[(e = e ?? "null")];
    return (
      null == t &&
        (t = s[e] =
          {
            state: a.S7L.DISCONNECTED,
            quality: a.bFR.UNKNOWN,
            pings: [],
            hostname: null,
            lossRate: null,
          }),
      t
    );
  }
  function o(e, t, n) {
    let i = s[(e = e ?? "null")];
    return null != i ? t(i) : n;
  }
  class d extends i.Ay.Store {
    static displayName = "OverlayRTCConnectionStore";
    getConnectionState(e) {
      return o(
        e,
        (e) => {
          let { state: t } = e;
          return t;
        },
        a.S7L.DISCONNECTED,
      );
    }
    getQuality(e) {
      return o(
        e,
        (e) => {
          let { quality: t } = e;
          return t;
        },
        a.bFR.UNKNOWN,
      );
    }
    getHostname(e) {
      return o(
        e,
        (e) => {
          let { hostname: t } = e;
          return t;
        },
        null,
      );
    }
    getPings(e) {
      return o(
        e,
        (e) => {
          let { pings: t } = e;
          return t;
        },
        [],
      );
    }
    getAveragePing(e) {
      let t = this.getPings(e);
      return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length;
    }
    getLastPing(e) {
      let t = this.getPings(e);
      return 0 === t.length ? 0 : t[t.length - 1]?.value;
    }
    getOutboundLossRate(e) {
      return o(
        e,
        (e) => {
          let { lossRate: t } = e;
          return t;
        },
        null,
      );
    }
  }
  let c = new d(r.h, {
    OVERLAY_INITIALIZE: function (e) {
      s = e.rtcConnectionStates;
    },
    RTC_CONNECTION_STATE: function (e) {
      if (null != e.streamKey) return !1;
      let t = l(e.lobbyId);
      ((t.state = e.state), (t.hostname = e.hostname));
    },
    RTC_CONNECTION_PING: function (e) {
      let t = l(e.lobbyId);
      ((t.pings = e.pings), (t.quality = e.quality));
    },
    RTC_CONNECTION_LOSS_RATE: function (e) {
      l(e.lobbyId).lossRate = e.lossRate;
    },
  });
}
