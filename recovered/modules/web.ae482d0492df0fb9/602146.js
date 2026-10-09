/* Recovered shipped factory. Module 602146.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7654559..7655092
 * Raw property SHA-256: 41114e9b52b05f4303614acab91d31abcf97e9e6a481828690ddc0fb32ee0eb0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { RR: () => l, RY: () => s, yG: () => a });
  var i = n(636537),
    r = n(652215);
  async function a(e, t, n, a, s) {
    return (
      await i.Bo.post({
        url: r.Rsh.STAGE_INSTANCES,
        body: {
          channel_id: e,
          topic: t,
          privacy_level: n,
          guild_scheduled_event_id: s,
          send_start_notification: a,
        },
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
  async function s(e, t, n) {
    return (
      await i.Bo.patch({
        url: r.Rsh.STAGE_INSTANCE(e),
        body: { topic: t, privacy_level: n },
        rejectWithError: (0, i.fT)(),
      })
    ).body;
  }
  function l(e) {
    return i.Bo.del({ url: r.Rsh.STAGE_INSTANCE(e), rejectWithError: (0, i.fT)() });
  }
}
