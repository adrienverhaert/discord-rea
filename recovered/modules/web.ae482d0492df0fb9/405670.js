/* Recovered shipped factory. Module 405670.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7004131..7005610
 * Raw property SHA-256: c32e71bd535cf4123968626f76164b3dbc9fdaaa975dc57d85668b3ee350cba8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => E, K2: () => c, Kr: () => _, Lx: () => u, yc: () => d });
  var i,
    r,
    a = n(537812),
    s = n(882035),
    l = n(121894);
  n(876230);
  var o = n(932607);
  let d = { timestampSec: 0, duration: 10, maxTimestampSec: 0 };
  var c =
      (((i = {}).UNKNOWN = "UNKNOWN"),
      (i.NOT_STARTED = "NOT_STARTED"),
      (i.IN_PROGRESS = "IN_PROGRESS"),
      (i.COMPLETED = "COMPLETED"),
      i),
    u =
      (((r = {}).NONE = "NONE"),
      (r.FETCHING = "FETCHING"),
      (r.SUCCESS = "SUCCESS"),
      (r.FAILURE = "FAILURE"),
      r);
  let _ = (0, s.h)()(
      (0, a.Zr)(
        (e, t) => ({
          volume: 0.3,
          muted: !1,
          transcriptEnabled: !1,
          captionEnabled: !1,
          videoProgress: {},
          transcript: null,
          setVolume: (t) => {
            (0, l.r)(() => e({ volume: t }));
          },
          setMuted: (t) => {
            (0, l.r)(() => e({ muted: t }));
          },
          setVideoProgress: (n, i, r) => {
            let a = Math.max(t().videoProgress[n]?.maxTimestampSec ?? 0, i);
            (0, l.r)(() =>
              e({
                videoProgress: {
                  ...t().videoProgress,
                  [n]: { timestampSec: i, duration: r, maxTimestampSec: a },
                },
              }),
            );
          },
          setTranscriptEnabled: (t) => {
            (0, l.r)(() => e({ transcriptEnabled: t }));
          },
          setCaptionEnabled: (t) => {
            (0, l.r)(() => e({ captionEnabled: t }));
          },
          getVideoProgress: (e) => t().videoProgress[e],
          getVideoProgressState: (e) => {
            let n = t().videoProgress[e];
            return null == n
              ? "UNKNOWN"
              : 0 === n.timestampSec
                ? "NOT_STARTED"
                : n.timestampSec >= n.duration
                  ? "COMPLETED"
                  : "IN_PROGRESS";
          },
          resetQuest: (n) => {
            (0, l.r)(() => {
              let { [n]: i, ...r } = t().videoProgress;
              e({ videoProgress: r });
            });
          },
          clearState: () => {
            (0, l.r)(() => {
              e({ videoProgress: {} });
            });
          },
          setTranscriptAsset: (t) => {
            (0, l.r)(() => {
              e({ transcript: t });
            });
          },
        }),
        {
          name: "videoQuestUIState",
          storage: (0, a.KU)(() => o.A),
          partialize: (e) => ({ volume: e.volume, muted: e.muted, videoProgress: e.videoProgress }),
          version: 0,
        },
      ),
    ),
    E = _;
}
