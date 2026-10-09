/* Recovered shipped factory. Module 722260.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5326109..5326464
 * Raw property SHA-256: 604d0b705e40c6223faeed2406c4934ee7ba97244539cd9103b1ee008fbd910b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a, m: () => s });
  var i = n(17928),
    r = n(698441);
  function a(e, t) {
    return l(
      (0, i.yK)(
        [r.Ay],
        () => r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [],
      ),
      e,
    );
  }
  function s(e, t) {
    return l(r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [], e);
  }
  function l(e, t) {
    return e?.find((e) => e.event_exception_id === t);
  }
}
