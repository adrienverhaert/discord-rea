/* Recovered shipped factory. Module 410694.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5865528..5870291
 * Raw property SHA-256: f04f7aa88fbc5ad036afa88a8af3274d513361db4296b1795d4dc5ab3bca3634
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { VideoStatsOverlay: () => f }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(834730),
    s = n(866665),
    l = n(939249),
    o = n(624479),
    d = n(789645),
    c = n(957565),
    u = n(265486),
    _ = n(183714);
  let E = "Close",
    A = "Copy to JSON",
    h = "Copied!";
  function f(e) {
    var t, n, f, I;
    let p,
      { stats: T, onClose: m } = e,
      [g, S] = r.useState(!1),
      N = r.useRef(null);
    r.useEffect(
      () => () => {
        null != N.current && clearTimeout(N.current);
      },
      [],
    );
    let C = r.useCallback(() => {
      let e = JSON.stringify(
        {
          media: {
            video: {
              codec: T.codecInfo?.videoCodecDescription ?? T.codecInfo?.videoCodec,
              codecRaw: T.codecInfo?.videoCodec,
              bitRate:
                T.codecInfo?.videoBitrate != null ? Math.round(T.codecInfo.videoBitrate) : null,
              frameRate: T.frameRate,
              width: T.videoWidth,
              height: T.videoHeight,
            },
            audio: {
              codec: T.codecInfo?.audioCodecDescription ?? T.codecInfo?.audioCodec,
              codecRaw: T.codecInfo?.audioCodec,
              bitRate:
                T.codecInfo?.audioBitrate != null ? Math.round(T.codecInfo.audioBitrate) : null,
              channels: T.codecInfo?.audioChannels,
              sampleRate: T.codecInfo?.audioSampleRate,
            },
            fileSizeBytes: T.fileSizeBytes,
            durationSeconds: T.duration,
            containerFormat: T.codecInfo?.containerFormat,
            isProgressive: T.codecInfo?.isProgressive,
            isFragmented: T.codecInfo?.isFragmented,
          },
          playback: {
            viewportWidth: T.viewportWidth,
            viewportHeight: T.viewportHeight,
            currentTimeSeconds: T.currentTime,
            bufferedSeconds: T.bufferedSeconds,
            droppedFrames: T.droppedFrames,
            totalDecodedFrames: T.totalFrames,
            droppedFramesPercent:
              null != T.droppedFramesPercent ? parseFloat(T.droppedFramesPercent.toFixed(2)) : null,
            errorCode: T.errorCode,
            errorMessage: T.errorMessage,
          },
        },
        null,
        2,
      );
      (0, c.C)(
        e,
        () => {
          (S(!0),
            null != N.current && clearTimeout(N.current),
            (N.current = window.setTimeout(() => {
              (S(!1), (N.current = null));
            }, 2e3)));
        },
        () => {},
      );
    }, [T]);
    return (0, i.jsxs)("div", {
      className: _.gP,
      children: [
        (0, i.jsxs)("div", {
          className: _.wx,
          children: [
            (0, i.jsx)(a.E, {
              variant: "text-md/bold",
              color: "none",
              children: "Stats for Nerds",
            }),
            (0, i.jsxs)("div", {
              className: _.Pz,
              children: [
                (0, i.jsx)(s.m, {
                  text: g ? h : A,
                  children: (0, i.jsx)(l.D, {
                    className: _.cL,
                    onClick: C,
                    "aria-label": g ? h : A,
                    focusProps: { offset: 2 },
                    children: (0, i.jsx)(o.CopyIcon, { size: "md", color: "currentColor" }),
                  }),
                }),
                (0, i.jsx)(s.m, {
                  text: E,
                  children: (0, i.jsx)(l.D, {
                    className: _.b,
                    onClick: m,
                    "aria-label": E,
                    focusProps: { offset: 2 },
                    children: (0, i.jsx)(d.P, { size: "md", color: "currentColor" }),
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, i.jsxs)("div", {
          className: _.Qs,
          children: [
            T.codecInfo?.containerFormat != null &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Container" }),
                  (0, i.jsx)("span", { className: _.cR, children: T.codecInfo.containerFormat }),
                ],
              }),
            (T.codecInfo?.isProgressive != null || T.codecInfo?.isFragmented != null) &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Format" }),
                  (0, i.jsx)("span", {
                    className: _.cR,
                    children:
                      ((t = T.codecInfo.isProgressive ?? null),
                      (n = T.codecInfo.isFragmented ?? null),
                      (p = []),
                      (!0 === t && p.push("Progressive"),
                      !0 === n && p.push("Fragmented"),
                      0 === p.length)
                        ? "Standard"
                        : p.join(", ")),
                  }),
                ],
              }),
            null != T.codecInfo &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Resolution" }),
                  (0, i.jsxs)("span", {
                    className: _.cR,
                    children: [
                      T.resolution,
                      " @ ",
                      null === (f = T.frameRate) ? "N/A" : `${f} fps`,
                      T.droppedFrames > 0 && ` (${T.droppedFrames} dropped)`,
                    ],
                  }),
                ],
              }),
            null != T.codecInfo &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Viewport" }),
                  (0, i.jsxs)("span", {
                    className: _.cR,
                    children: [T.viewportWidth, "x", T.viewportHeight],
                  }),
                ],
              }),
            T.codecInfo?.videoCodec != null &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Video" }),
                  (0, i.jsxs)("span", {
                    className: _.cR,
                    children: [
                      T.codecInfo.videoCodecDescription ?? T.codecInfo.videoCodec ?? "Unknown",
                      null != T.codecInfo.videoBitrate &&
                        ` @ ${(0, u.BZ)(T.codecInfo.videoBitrate)}`,
                    ],
                  }),
                ],
              }),
            T.codecInfo?.audioCodec != null &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Audio" }),
                  (0, i.jsxs)("span", {
                    className: _.cR,
                    children: [
                      T.codecInfo.audioCodecDescription ?? T.codecInfo.audioCodec ?? "Unknown",
                      null != T.codecInfo.audioBitrate &&
                        ` @ ${(0, u.BZ)(T.codecInfo.audioBitrate)}`,
                    ],
                  }),
                ],
              }),
            T.codecInfo?.audioChannels != null &&
              (0, i.jsxs)("div", {
                className: _.N8,
                children: [
                  (0, i.jsx)("span", { className: _.Zh, children: "Audio Channels" }),
                  (0, i.jsxs)("span", {
                    className: _.cR,
                    children: [
                      (0, u.At)(T.codecInfo.audioChannels),
                      null != T.codecInfo.audioSampleRate &&
                        ` @ ${(0, u.YQ)(T.codecInfo.audioSampleRate)}`,
                    ],
                  }),
                ],
              }),
            (0, i.jsxs)("div", {
              className: _.N8,
              children: [
                (0, i.jsx)("span", { className: _.Zh, children: "Buffer Health" }),
                (0, i.jsx)("span", {
                  className: _.cR,
                  children: isFinite((I = T.bufferedSeconds)) ? I.toFixed(1) + "s" : "Live",
                }),
              ],
            }),
            null !== T.errorCode &&
              (0, i.jsx)("div", {
                className: _.K6,
                children: (0, i.jsxs)("div", {
                  className: _.N8,
                  children: [
                    (0, i.jsx)("span", { className: _.Zh, children: "Error" }),
                    (0, i.jsxs)("span", {
                      className: _.cR,
                      children: [T.errorCode, null !== T.errorMessage && `: ${T.errorMessage}`],
                    }),
                  ],
                }),
              }),
          ],
        }),
      ],
    });
  }
}
