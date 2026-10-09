/* Recovered shipped factory. Module 412703.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11688557..11689383
 * Raw property SHA-256: f117a62002bb179c42edb37b46d7546fb1693b4d682b4b1fb9ca4455f34973f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { n: () => r, o: () => a });
  var i,
    r =
      (((i = {}).STREAM_ON_DESKTOP = "STREAM_ON_DESKTOP"),
      (i.PLAY_ON_DESKTOP = "PLAY_ON_DESKTOP"),
      (i.PLAY_ON_XBOX = "PLAY_ON_XBOX"),
      (i.PLAY_ON_PLAYSTATION = "PLAY_ON_PLAYSTATION"),
      (i.WATCH_VIDEO = "WATCH_VIDEO"),
      (i.WATCH_VIDEO_ON_MOBILE = "WATCH_VIDEO_ON_MOBILE"),
      (i.PLAY_ACTIVITY = "PLAY_ACTIVITY"),
      (i.ACHIEVEMENT_IN_GAME = "ACHIEVEMENT_IN_GAME"),
      (i.ACHIEVEMENT_IN_ACTIVITY = "ACHIEVEMENT_IN_ACTIVITY"),
      i);
  let a = {
    ALL: new Set([
      "PLAY_ACTIVITY",
      "PLAY_ON_DESKTOP",
      "PLAY_ON_PLAYSTATION",
      "PLAY_ON_XBOX",
      "STREAM_ON_DESKTOP",
      "WATCH_VIDEO",
      "WATCH_VIDEO_ON_MOBILE",
    ]),
    DESKTOP: new Set(["PLAY_ACTIVITY", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP"]),
    CONSOLE: new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"]),
    IN_GAME: new Set(["ACHIEVEMENT_IN_ACTIVITY", "ACHIEVEMENT_IN_GAME"]),
    VIDEO: new Set(["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]),
  };
}
