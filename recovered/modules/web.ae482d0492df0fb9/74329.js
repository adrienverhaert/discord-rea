/* Recovered shipped factory. Module 74329.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3191318..3192209
 * Raw property SHA-256: 23b4c61b8841eae2d1aefbd0560e2b61a02a823df8a687c6005f5fd53ec5f46d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(192308),
    s = n(477782),
    l = n(695366),
    o = n(652896),
    d = n(834757),
    c = n(280450),
    u = n(116956),
    _ = n(660183);
  function E(e, t, E) {
    let A = (0, d.AO)(e),
      h = (0, r.bG)([c.default], () => c.default.getId());
    if (null == e) return null;
    let f = (0, o._z)(e),
      I = u.A.getVideoStats(f) ?? {},
      p = {
        media_session_id: u.A.getMediaSessionId(f),
        rtc_connection_id: u.A.getRtcConnectionId(f),
        stream_region: u.A.getRegion(f),
        max_viewers: u.A.getMaxViewers(f),
        ...I,
      };
    return (0, i.jsx)(s.Dr, {
      id: "report-stream-problem",
      color: "danger",
      label: _.intl.string(_.t.sdnCxV),
      action: function () {
        (E?.(),
          null != e &&
            (0, a.openModalLazy)(async () => {
              let { default: t } = await Promise.all([n.e("617171"), n.e("186889")]).then(
                n.bind(n, 292208),
              );
              return (n) =>
                (0, i.jsx)(t, {
                  stream: e,
                  streamApplication: A,
                  isStreamer: h === e?.ownerId,
                  analyticsData: p,
                  ...n,
                });
            }));
      },
      icon: l.E,
      leadingAccessory: { type: "icon", icon: l.E },
    });
  }
}
