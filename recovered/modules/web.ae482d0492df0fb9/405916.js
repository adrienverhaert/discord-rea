/* Recovered shipped factory. Module 405916.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3192210..3197071
 * Raw property SHA-256: b66ed71ebe71be3e69427c2babd45c20d6e095b9d86212396fc8c8d13ae6dcc1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E: () => M });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(477782),
    l = n(183623),
    o = n(959988),
    d = n(827343),
    c = n(401843),
    u = n(725792),
    _ = n(338771),
    E = n(929921),
    A = n(192820),
    h = n(723702),
    f = n(74329),
    I = n(192308),
    p = n(231723),
    T = n(212245),
    m = n(327649),
    g = n(248174),
    S = n(375742),
    N = n(734057),
    C = n(71393),
    O = n(309010),
    R = n(287809),
    L = n(652215),
    y = n(753070),
    D = n(731854),
    v = n(660183),
    b = n(818348);
  function M(e) {
    let {
        stream: t,
        handleGoLive: M,
        showReportOption: P = !1,
        disableChangeWindows: U = !1,
        minimal: w = !1,
        appContext: G = L.BRT.APP,
      } = e,
      { desktopSourceId: x, lastPickedContent: k } = (0, a.cf)([u.Ay, A.Ay], () => {
        let { desktopSource: e } = A.Ay.getGoLiveSource() ?? {},
          t = u.Ay.getLastPickedContent();
        return { desktopSourceId: e?.id, lastPickedContent: t };
      }),
      F = (0, a.bG)([E.A], () => E.A.getState().soundshareEnabled),
      B = A.Ay.supports(D.O5.DESKTOP_CAPTURE_APPLICATIONS),
      V = (0, a.bG)([A.Ay], () => A.Ay.supports(D.O5.SOUNDSHARE)),
      H = (0, a.bG)([A.Ay], () => A.Ay.supportsScreenSoundshare()),
      j = (function (e, t) {
        let {
            preset: l,
            resolution: o,
            fps: c,
            soundshareEnabled: u,
          } = (0, a.cf)([E.A], () => E.A.getState()),
          _ = (0, a.bG)([A.Ay], () => A.Ay.getGoLiveSource()),
          h = (0, a.bG)([R.default], () => R.default.getCurrentUser()),
          f = (0, a.bG)([C.A], () => C.A.getGuild(e?.guildId)?.premiumTier),
          { location: b } = (0, T.p)(),
          M = (0, a.bG)([O.Ay, N.A], () => N.A.getChannel(O.Ay.getVoiceChannelId())),
          P = r.useCallback(
            (e, r, a, s) => {
              if (e) {
                if (null != _) {
                  let e = {
                    qualityOptions: { preset: y.jQ.PRESET_CUSTOM, resolution: r, frameRate: a },
                    context: D.x.STREAM,
                  };
                  (null != _.desktopSource
                    ? (e.desktopSettings = { sourceId: _.desktopSource.id, sound: u })
                    : null != _.cameraSource &&
                      (e.cameraSettings = {
                        videoDeviceGuid: _.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: _.cameraSource.audioDeviceGuid,
                        sound: u,
                      }),
                    d.default.setGoLiveSource(e));
                }
              } else {
                var l;
                ((l = { ...b, object: L.ZSU.RADIO_ITEM, objectType: s }),
                  (0, I.openModalLazy)(
                    async () => {
                      let { default: e } = await Promise.all([
                        n.e("629972"),
                        n.e("334168"),
                        n.e("454048"),
                        n.e("300699"),
                        n.e("349619"),
                        n.e("599666"),
                        n.e("244560"),
                        n.e("398125"),
                        n.e("221825"),
                        n.e("930758"),
                        n.e("593600"),
                        n.e("707826"),
                        n.e("776195"),
                        n.e("799657"),
                        n.e("400954"),
                        n.e("493475"),
                        n.e("18630"),
                      ]).then(n.bind(n, 826789));
                      return (t) => (0, i.jsx)(e, { ...t, analyticsSource: l });
                    },
                    { contextKey: t === L.BRT.POPOUT ? p.KX : p.SY },
                  ));
              }
            },
            [t, b, u, _],
          );
        if (null == e) return null;
        let U = l === y.jQ.PRESET_DOCUMENTS ? y.kn.FPS_30 : c,
          w = (0, g.A)("useStreamSettingsItems", h, e.guildId),
          G = o === w?.maxResolution && c === w?.maxFPS;
        function x(e) {
          return G ? ((0, S.A)(e, h, f, M) ?? o) : o;
        }
        let k = x(c),
          F = y.ce.map((e) => {
            let { value: t, label: n, subtext: r } = e,
              a = x(t),
              l = (0, m.A)(y.jQ.PRESET_CUSTOM, a, t, h, f, M);
            return (0, i.jsx)(
              s.iD,
              {
                group: "stream-settings-fps",
                id: `stream-settings-fps-${t}`,
                label: n,
                subtext: r,
                checked: t === c,
                action: () => {
                  (G && t === c) || P(l, a, t, L.AnalyticsObjectTypes.RESOLUTION);
                },
              },
              `stream-settings-fps-${t}`,
            );
          }),
          B = y.Jk.map((e) => {
            let { value: t, label: n, subtext: r } = e,
              a = (0, m.A)(y.jQ.PRESET_CUSTOM, t, U, h, f, M);
            return (0, i.jsx)(
              s.iD,
              {
                group: "stream-settings-resolution",
                id: `stream-settings-resolution-${t}`,
                label: n,
                subtext: r,
                checked: t === k,
                action: () => {
                  (G && t === k) || P(a, t, U, L.AnalyticsObjectTypes.RESOLUTION);
                },
              },
              `stream-settings-resolution-${t}`,
            );
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.rX, { label: v.intl.string(v.t.SkkeIt), children: F }),
            (0, i.jsx)(s.rX, { label: v.intl.string(v.t.rHyPXg), children: B }),
          ],
        });
      })(t, G),
      W = (0, f.A)(t, G, b.FX),
      Y = null != x && V && (!x.startsWith("screen") || H),
      K = (0, a.bG)([A.Ay], () => A.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)()),
      $ = r.useCallback(() => {
        x?.startsWith("prepicked:")
          ? A.Ay.getMediaEngine().eachConnection((e) => {
              e.context === D.x.STREAM && e.presentDesktopSourcePicker("window");
            })
          : M();
      }, [x, M]),
      z = x?.startsWith("prepicked:") ?? !1,
      X = (0, h.isMac)() && h.isPlatformEmbedded && z && (k?.windows.length ?? 0) > 0,
      Z = (0, h.isMac)() && h.isPlatformEmbedded && z && (k?.applications.length ?? 0) > 0,
      q = X
        ? v.intl.string(v.t.qDK8gQ)
        : Z
          ? v.intl.string(v.t["3m8w+Q"])
          : w
            ? v.intl.string(v.t.eAktHv)
            : v.intl.string(v.t.qntSal),
      Q = r.useCallback(() => {
        let { preset: e, resolution: t, fps: n } = E.A.getState(),
          i = { qualityOptions: { preset: e, resolution: t, frameRate: n }, context: D.x.STREAM };
        (null != x && (i.desktopSettings = { sourceId: x, sound: !F }),
          (0, c.Xd)({ preset: e, resolution: t, frameRate: n, soundshareEnabled: !F }),
          d.default.setGoLiveSource(i));
      }, [x, F]);
    if (null == t)
      return (0, i.jsx)(s.Dr, {
        id: "share-your-screen",
        label: v.intl.string(v.t.fjBNo1),
        icon: l.F,
        leadingAccessory: { type: "icon", icon: l.F },
        action: M,
      });
    let J = h.isPlatformEmbedded
        ? (0, i.jsx)(s.Dr, { id: "stream-settings", label: v.intl.string(v.t.ytAD9d), children: j })
        : null,
      ee = Y
        ? (0, i.jsx)(s.sL, {
            id: "stream-settings-audio-enable",
            label: w ? v.intl.string(v.t.af2Tw1) : v.intl.string(v.t.ZJEHt7),
            checked: F,
            action: Q,
          })
        : null,
      et =
        !B || U || K
          ? null
          : (0, i.jsx)(s.Dr, {
              id: "change-windows",
              label: q,
              icon: l.F,
              leadingAccessory: { type: "icon", icon: l.F },
              action: $,
            }),
      en = (0, i.jsx)(s.Dr, {
        id: "stop-streaming",
        color: "danger",
        label: v.intl.string(v.t.S5anIc),
        icon: o.G,
        leadingAccessory: { type: "icon", icon: o.G },
        action: () => (0, _.A)(t),
      });
    return w
      ? (0, i.jsxs)(i.Fragment, { children: [en, et, J, ee] })
      : (0, i.jsxs)(i.Fragment, { children: [J, P ? W : null, ee, et, en] });
  }
}
