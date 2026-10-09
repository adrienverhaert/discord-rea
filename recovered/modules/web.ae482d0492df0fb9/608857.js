/* Recovered shipped factory. Module 608857.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8166384..8167008
 * Raw property SHA-256: f0c1f7ed043dd87adb0329f577a14bcb5f93f3581b7d2d953e4812bd0c936dc8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a, K: () => r });
  var i = n(582128);
  function r(e) {
    return "saved" === e.status && null != e.videoURL;
  }
  function a(e) {
    return i.useMemo(
      () =>
        e.clips.map((e) => {
          switch (e.status) {
            case "saved":
              return {
                status: "saved",
                key: e.id,
                gameId: e.gameId,
                videoURL: e.videoURL,
                thumbnailURL: e.thumbnailURL,
                spritesheetImageURL: e.spritesheetImageURL,
                spritesheetVttURL: e.spritesheetVttURL,
                title: e.title,
                tags: e.tags,
              };
            case "pending":
              return {
                status: "pending",
                key: e.id,
                gameId: e.gameId,
                thumbnail: e.thumbnail,
                title: e.title,
                tags: e.tags,
              };
            case "uploading":
              return { status: "uploading", key: e.id, gameId: e.gameId, thumbnail: e.thumbnail };
          }
        }),
      [e.clips],
    );
  }
}
