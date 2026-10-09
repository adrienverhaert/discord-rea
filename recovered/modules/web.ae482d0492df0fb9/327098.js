/* Recovered shipped factory. Module 327098.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4009042..4009479
 * Raw property SHA-256: 5d904bb4b361cb3160b7e4dabacdfc6a796da064ba5427d3fc1bbf945f7c4759
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(933958),
    a = n(429913),
    s = n(574520);
  function l(e) {
    let t = (0, i.bG)([s.A], () => s.A.getMatchingActivity(e)),
      [n, l] = (0, a.A)([
        t?.application_id,
        "application_id" in e.extra ? e.extra.application_id : void 0,
      ]);
    return {
      activity: t,
      embeddedActivity: (0, i.bG)([r.Ay], () =>
        r.Ay.getEmbeddedActivityForUserId(e.author_id, n?.id),
      ),
      anyMatchingApplication: n ?? l,
      activityApplication: n,
      fallbackApplication: l,
    };
  }
}
