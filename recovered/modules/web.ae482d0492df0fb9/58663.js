/* Recovered shipped factory. Module 58663.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7327114..7327348
 * Raw property SHA-256: b98729a815496eef27c8d7e47974f100ed54ea90fc5c911275ce683378153b2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(73153),
    r = n(855302),
    a = n(412780);
  function s(e) {
    ((0, r.A)("connection_replay_log_enabled", e, a.Ay.shouldRecordNextConnection()),
      i.h.dispatch({ type: "RTC_DEBUG_SET_RECORDING_FLAG", value: e }));
  }
}
