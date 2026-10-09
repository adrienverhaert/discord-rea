/* Recovered shipped factory. Module 682176.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3723607..3727941
 * Raw property SHA-256: 382d55008e2acbfed9ae045448c50b9f3e10dc7c77c6e8528d22b731a9d0f5c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => D, v: () => y }), n(938796), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(665260),
    o = n(17928),
    d = n(876230),
    c = n(26137),
    u = n(534890),
    _ = n(268218),
    E = n(776231),
    A = n(614269),
    h = n(829097),
    f = n(734057),
    I = n(53774),
    p = n(560149),
    T = n(349897),
    m = n(215655),
    g = n(802976),
    S = n(696016),
    N = n(652215),
    C = n(704796),
    O = n(660183),
    R = n(324973);
  let L = (0, _.qT)({
    createPromise: () =>
      Promise.all([n.e("216870"), n.e("390098"), n.e("334127")]).then(n.bind(n, 266546)),
    webpackId: 266546,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: R.Lq }),
  });
  function y() {
    L.preload();
  }
  function D(e) {
    let {
        attachment: t,
        posterUrl: n,
        className: a,
        autoPlay: _,
        src: y,
        fillContainer: D = !1,
        minWidth: v = 500,
        maxWidth: b = 1 / 0,
        maxHeight: M = 1 / 0,
        channelId: P,
        messageId: U,
        showTextContent: w = b >= 250,
        showParticipants: G = !0,
        volume: x,
        autoMute: k,
        onVolumeChange: F,
        onMutedChange: B,
        onClick: V,
        onContextMenu: H,
        onPlay: j,
        onSeekRequest: W,
        initialTimeSec: Y,
        onEnded: K,
        allowFullScreen: $ = !0,
      } = e,
      z = t.width ?? 0,
      X = t.height ?? 0,
      Z = (0, o.bG)([f.A], () => f.A.getBasicChannel(P)?.guild_id, [P]),
      q = z > 0 && X > 0 ? z / X : 16 / 9;
    (q > 2 || q < 1) && (q = 16 / 9);
    let Q = r.useRef(null);
    (0, m.A)(t.id, Q, W);
    let J = Math.min(z > 0 ? z : v, b),
      ee = J / q;
    (ee > M && (J = (ee = M) * q), J < v && (ee = (J = v) / q));
    let et = Math.round(Math.min(J, b)),
      en = Math.round(Math.min(ee, M)),
      ei = z > 0 && X > 0 ? Math.min(et / z, en / X, 1) : 1,
      er = (0, E.AE)({ src: n, width: Math.round(z * ei), height: Math.round(X * ei) }),
      [ea, es] = r.useState(!1),
      [el, eo] = r.useState(!0),
      [ed, ec] = r.useState(!0),
      [eu, e_] = r.useState(0),
      eE = r.useRef(0),
      eA = r.useCallback(
        (e, t) => {
          t !== d.KB.BUFFERING_RECOVERY &&
            e === d.Q6.PLAYING &&
            j?.(t !== d.KB.USER, 1e3 * eE.current, 1e3 * eu);
        },
        [eu, j],
      ),
      eh = r.useCallback((e, t) => {
        ((eE.current = e), Number.isFinite(t) && t > 0 && e_((e) => (e === t ? e : t)));
      }, []),
      ef = r.useMemo(
        () => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1,
        [t.clip_events_timeline],
      ),
      eI = (0, l.Lt)(t.flags ?? 0, N.sbO.HAS_TIMELINE_COMMENTS),
      ep = r.useMemo(() => {
        let e = [];
        return (
          ef &&
            e.push({
              id: "speaking-indicators",
              iconComponent: c.r,
              label: O.intl.string(C.default.hFWVZQ),
              active: el,
              onClick: () => eo((e) => !e),
              "data-testid": "clips-player-speaking-indicators-toggle",
            }),
          eI &&
            e.push({
              id: "timeline-comments",
              iconComponent: u.ChatIcon,
              label: O.intl.string(C.default.XfP4bO),
              active: ed,
              onClick: () => ec((e) => !e),
              "data-testid": "clips-player-timeline-comments-toggle",
            }),
          e
        );
      }, [ef, el, eI, ed]),
      eT = (0, h._)({ location: S.Mu }).externalAnalyticsEnabled,
      em = r.useMemo(
        () =>
          eT
            ? {
                contentId: y.split("?")[0],
                videoStreamType: A.u.isHlsUrl(y) ? "hls" : "mp4",
                contentType: "clips",
                title: t.title,
              }
            : void 0,
        [eT, y, t.title],
      ),
      eg = r.useMemo(
        () =>
          t.clip_participants?.map((e) => {
            let { id: t } = e;
            return t;
          }) ?? [],
        [t.clip_participants],
      ),
      [eS, eN] = r.useState(!1),
      eC = r.useCallback(
        (e) => {
          let {
            playerState: n,
            isControlBarExpanded: r,
            videoRef: a,
            isActive: s,
            isVolumeExpanded: l,
            controlBarAnimationSpring: o,
          } = e;
          return (0, i.jsx)(p.A, {
            attachment: t,
            controlBarAnimationSpring: o,
            guildId: Z,
            isFullScreen: ea,
            showParticipants: G,
            showTextContent: w,
            channelId: P,
            messageId: U,
            showSpeakingIndicators: el,
            clipUserIds: eg,
            durationSeconds: eu,
            playerState: n,
            isControlBarExpanded: r,
            videoRef: a,
            isActive: s,
            isVolumeExpanded: l,
            showTimelineComments: ed,
            isGridView: eS,
            setIsGridView: eN,
          });
        },
        [t, Z, ea, G, w, P, U, el, eg, eu, ed, eS],
      ),
      eO = (0, T.T)(t.clip_events_timeline ?? []),
      eR = (0, g.A)({ attachment: t, channelId: P, guildId: Z, messageId: U }),
      eL = r.useCallback(
        (e) =>
          null == eR
            ? null
            : (0, i.jsx)(I.A, {
                ...e,
                original: eR.original,
                subSources: eR.subSources,
                isGridView: eS,
                setIsGridView: eN,
                suppressSourceSelection: eS,
              }),
        [eR, eS],
      );
    return (0, i.jsx)("div", {
      className: s()(R.kL, { [R.HA]: D }, a),
      onClick: (e) => e.stopPropagation(),
      onContextMenu: H,
      style: D ? void 0 : { width: et, height: en },
      children: (0, i.jsx)(L, {
        src: y,
        downloadUrl: t.url,
        renderVideo: null != eR ? eL : void 0,
        downloadContentType: t.content_type,
        extraButtons: ep,
        poster: er,
        posterPlaceholder: t.placeholder,
        posterPlaceholderVersion: t.placeholder_version,
        autoplay: _,
        initialActive: !1,
        initialTimeSec: Y,
        initialVolume: x,
        initialMuted: k,
        onVolumeChange: F,
        onMutedChange: B,
        onProgressUpdate: eh,
        orientation: "landscape",
        timelineIndicatorConfig: eO,
        minWidth: 0,
        minHeight: 0,
        loadingSpinnerPosition: "center",
        renderPersistentOverlay: eC,
        parentTransitionState: null,
        onFullscreenChange: es,
        onClick: V,
        onPlayerStateChange: eA,
        onEnded: K,
        withVideoHalo: !eS,
        objectFit: D ? "cover" : void 0,
        muxContentMetadata: em,
        hideFullScreenBtn: !$,
        hideSkipButtons: !0,
        compactTimeDisplay: !0,
        autoHideVolumeSlider: !0,
        hidePlaybackSpeedBtn: !0,
        playerRef: Q,
        scrubPreviewVttUrl: t.spritesheet_vtt_url,
        scrubPreviewImageUrl: t.spritesheet_image_url,
      }),
    });
  }
}
