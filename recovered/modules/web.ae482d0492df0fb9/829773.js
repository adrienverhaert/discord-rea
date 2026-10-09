/* Recovered shipped factory. Module 829773.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3171649..3174967
 * Raw property SHA-256: 6d2ced65f540ee3e0b49f4fd2e043794ed6d13cf43867ede25d5818472fc1820
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => M });
  var i = n(477900),
    r = n(582128),
    a = n(562708),
    s = n(17928),
    l = n(205693),
    o = n(980707),
    d = n(477782),
    c = n(827343),
    u = n(820284),
    _ = n(688810),
    E = n(139286),
    A = n(270816),
    h = n(201242),
    f = n(844981),
    I = n(486487),
    p = n(110027),
    T = n(298242),
    m = n(192820),
    g = n(763827),
    S = n(532624),
    N = n(152567);
  function C(e) {
    let { ref: t, ...n } = e,
      { "aria-label": a, location: s, containerClassName: l, notchClassName: o } = n,
      d = r.useRef(null);
    return (
      r.useImperativeHandle(
        t,
        () => ({
          focus: () => d.current?.focus(),
          blur: () => d.current?.blur(),
          activate: () => !1,
        }),
        [],
      ),
      (0, i.jsx)("div", {
        ref: d,
        tabIndex: -1,
        role: "img",
        "aria-label": a,
        children: (0, i.jsx)(N.A, {
          notchBackground: N.V.BLACK,
          location: s,
          meterOnly: !0,
          containerClassName: l,
          notchClassName: o,
        }),
      })
    );
  }
  var O = n(819027),
    R = n(652215),
    L = n(621380),
    y = n(731854),
    D = n(660183),
    v = n(798705),
    b = n(788066);
  function M(e) {
    let {
        appContext: t,
        onInteraction: n,
        onSelect: r,
        onClose: N,
        maybeRenderPTTCheckbox: M = !1,
        renderDeafenCheckbox: P = !1,
        renderInputProfiles: U = !1,
        renderOutputDevices: w = !1,
        renderOutputVolume: G = !1,
        renderInputDevices: x = !1,
        renderInputVolume: k = !1,
        maybeRenderInputMeter: F = !1,
        renderSettingsButton: B = !1,
        maybeRenderSpatialAudioCheckbox: V = !1,
      } = e,
      { analyticsLocations: H } = (0, _.Ay)();
    (0, E.A)({
      type: a.ImpressionTypes.MENU,
      name: a.ImpressionNames.AUDIO_DEVICE_MENU,
      properties: { location_stack: H },
    });
    let j = (0, O.A)(t),
      W = (0, A.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: H, asSubmenu: !0 }),
      Y = (0, A.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: H, asSubmenu: !0 }),
      K = (0, s.bG)([m.Ay], () => m.Ay.getActiveInputProfile()),
      $ = (0, p.A)(H),
      z = (0, I.A)(H),
      X = (0, T.A)(H),
      Z = l.x.DEFAULT,
      q = m.Ay.isSelfDeaf(Z),
      Q = (0, f.Ay)("AudioDeviceMenu"),
      J = (0, s.bG)([h.A], () => h.A.isSpatialAudioEnabled()),
      ee = (0, s.bG)([m.Ay], () => m.Ay.getMode()),
      et = ee === R.TBI.VOICE_ACTIVITY ? R.TBI.PUSH_TO_TALK : R.TBI.VOICE_ACTIVITY,
      en = (0, s.bG)([m.Ay, S.Ay], () => {
        let e = m.Ay.getModeOptions().shortcut?.length > 0,
          t = null != S.Ay.getKeybindForAction(R.hCu.PUSH_TO_TALK, !1, !0),
          n = null != S.Ay.getKeybindForAction(R.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
        return e || t || n;
      }),
      ei = (0, s.bG)([g.A], () => null != g.A.getChannelId());
    return (0, i.jsx)(u.A, {
      object: R.ZSU.CONTEXT_MENU,
      children: (0, i.jsxs)(o.W, {
        "data-menu-migrated": !0,
        onSelect: r,
        onInteraction: n,
        onClose: N,
        navId: "audio-device-context",
        variant: "fixed",
        "aria-label": D.intl.string(D.t.ZR1Ss6),
        className: b.MK,
        children: [
          (0, i.jsxs)(d.rX, { children: [x && W, U && $, w && Y] }),
          (0, i.jsxs)(d.rX, {
            children: [
              k && z,
              F &&
                ei &&
                (0, i.jsx)(d.aK, {
                  id: "input-device-meter",
                  interactive: !1,
                  label: D.intl.string(D.t["ye+BAy"]),
                  control: (e, t) =>
                    (0, i.jsx)(C, {
                      ...e,
                      ref: t,
                      "aria-label": D.intl.string(D.t["ye+BAy"]),
                      location: { section: R.JJy.CONTEXT_MENU },
                      containerClassName: b.Eq,
                      notchClassName: b.CO,
                    }),
                }),
              G && X,
            ],
          }),
          (0, i.jsxs)(d.rX, {
            children: [
              M &&
                en &&
                (0, i.jsx)(d.sL, {
                  checked: ee === R.TBI.PUSH_TO_TALK,
                  id: "input-mode",
                  label: D.intl.string(D.t.Q8gkVL),
                  action: () => c.default.setMode(et, void 0, void 0, { analyticsLocations: H }),
                  disabled: K === L.m.STUDIO,
                }),
              P &&
                (0, i.jsx)(
                  d.sL,
                  {
                    id: "deafen",
                    label: D.intl.string(D.t.wjcRFX),
                    action: () =>
                      c.default.toggleSelfDeaf({ context: Z, location: "AudioDeviceMenu" }),
                    checked: q,
                  },
                  "self-deafen",
                ),
              V &&
                Q !== f.L3.HIDDEN &&
                (0, i.jsx)(d.sL, {
                  id: "spatial-audio",
                  label: D.intl.string(v.default.EWQJcc),
                  checked: J,
                  disabled: (0, f.Xt)(Q),
                  subtext: (function (e) {
                    if ((0, f.Xt)(e))
                      return D.intl.format(
                        e === f.L3.BLOCKED_MONO_OUTPUT ? v.default.rOXfEw : v.default.O7Aa3Y,
                        {},
                      );
                  })(Q),
                  action: () => c.default.setSpatialAudio(!J, H),
                }),
              B && j,
            ],
          }),
        ],
      }),
    });
  }
}
