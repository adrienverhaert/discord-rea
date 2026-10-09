/* Recovered shipped factory. Module 753386.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7102373..7103753
 * Raw property SHA-256: 50357e7b335751be59df1cc308733fe693a6154b6b198b804315ddd0ad7f4908
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    J$: () => p,
    WM: () => o.WM,
    cZ: () => f,
    eG: () => E,
    vd: () => I,
    vm: () => h,
    zh: () => A,
    zv: () => _,
  });
  var i = n(544180),
    r = n(396813),
    a = n(859703),
    s = n(405670),
    l = n(561844),
    o = n(546121),
    d = n(977416),
    c = n(792620),
    u = n(652215);
  function _(e, t) {
    (0, d.Ic)(e) ||
      e.userStatus?.enrolledAt == null ||
      e.userStatus?.completedAt != null ||
      (0, r.uI)(e.id, t);
  }
  n(660183);
  function E(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height
      ? "landscape"
      : "portrait";
  }
  function A(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
  }
  function h(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: r } = e;
    s.Ay.getState().setTranscriptEnabled(!1);
    let o = s.Ay.getState().getVideoProgress(t);
    if (null == o) return;
    let d = a.A.getQuest(t);
    null != d &&
      d.userStatus?.enrolledAt != null &&
      d.userStatus?.completedAt == null &&
      _(d, o.maxTimestampSec);
    let c = A(o.maxTimestampSec, o.duration);
    ((0, l.av)({
      questId: t,
      event: u.HAw.QUEST_VIDEO_PROGRESSED,
      properties: { progress: c, video_timestamp_seconds: o.maxTimestampSec, video_session_id: r },
      sourceQuestContent: n,
    }),
      (0, l.av)({
        questId: t,
        event: u.HAw.QUEST_VIDEO_MODAL_CLOSED,
        properties: {
          video_progress: c,
          video_session_id: r,
          network_connection_speed: i.A.getEffectiveConnectionSpeed(),
        },
        sourceQuestContent: n,
      }));
  }
  function f(e) {
    return `VIDEO-QUEST-${e}`;
  }
  function I(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
  }
  function p(e) {
    return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(f(e.id));
  }
}
