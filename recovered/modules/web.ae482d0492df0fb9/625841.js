/* Recovered shipped factory. Module 625841.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5887760..5891070
 * Raw property SHA-256: a9db7d2c4fc848a3ab32110e76845a5816d156c89cf0fba5426810db5353131e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => D, U: () => y });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(843282),
    d = n(462887),
    c = n(831544),
    u = n(597601),
    _ = n(332461),
    E = n(512950),
    A = n(834730),
    h = n(827343),
    f = n(688810),
    I = n(363195),
    p = n(934729),
    T = n(347481),
    m = n(192820),
    g = n(74848),
    S = n(106713),
    N = n(731854),
    C = n(660183),
    O = n(534283);
  function R(e) {
    return {
      [N.oh.AUDIO_INPUT]: {
        setDevice: h.default.setInputDevice,
        IconComponent: c.MicrophoneIcon,
        getCanSetDevice: (e) => e.supports(N.O5.AUDIO_INPUT_DEVICE),
        getWarningMessage: () =>
          C.intl.format(C.t["1iK6UW"], {
            onDownloadClick: () => (0, p._)("Help Text Input Devices"),
          }),
        getLocation: (e) => `${e}.SingleSelectInputDevices`,
      },
      [N.oh.AUDIO_OUTPUT]: {
        setDevice: h.default.setOutputDevice,
        IconComponent: u.L,
        getCanSetDevice: (e) => e.supports(N.O5.AUDIO_OUTPUT_DEVICE),
        getWarningMessage: () =>
          C.intl.format(C.t.Ow0dbF, {
            onDownloadClick: () => (0, p._)("Help Text Output Devices"),
          }),
        getLocation: (e) => `${e}.SingleSelectOutputDevices`,
      },
      [N.oh.VIDEO_INPUT]: {
        setDevice: h.default.setVideoDevice,
        IconComponent: _.x,
        getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
        getWarningMessage: () =>
          C.intl.format(C.t["1iK6UW"], {
            onDownloadClick: () => (0, p._)("Help Text Video Devices"),
          }),
        getLocation: (e) => `${e}.SingleSelectVideoDevices`,
      },
    }[e];
  }
  function L(e) {
    let {
        devices: t,
        location: a,
        selectedDeviceId: c,
        onSelectDevice: u,
        hideDeviceTypeIcon: _ = !1,
        label: h,
        textVariant: p,
        ...N
      } = e,
      { analyticsLocations: L } = (0, f.Ay)(),
      y = (0, l.bG)([I.A], () => I.A.theme),
      D = r.useMemo(() => t.reduce((e, t) => ({ ...e, [t.id]: t }), {}), [t]),
      v = D[c]?.deviceType ?? null,
      b = (0, l.bG)([m.Ay], () => null == v || R(v).getCanSetDevice(m.Ay)),
      { showDeviceFormFactorIndicators: M } = S.A.useConfig({ location: "SingleSelectDevices" }),
      P =
        null != v
          ? (0, i.jsx)(E.p, { messageType: E.Y.WARNING, children: R(v).getWarningMessage() })
          : null,
      U = r.useCallback(
        (e) => {
          if (!(u?.(e) ?? !0)) return;
          let t = D[e]?.deviceType;
          if (null == t) return;
          let { setDevice: n, getLocation: i } = R(t);
          n(e, { location: i(a), analyticsLocations: L });
        },
        [D, a, L, u],
      );
    function w(e) {
      let t,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { prefix: a, subName: l } = (0, g.d)(e),
        o = T.A.getCertifiedDeviceName(e.id, a);
      if (T.A.isCertified(e.id)) {
        let e = (0, d.q)(y) ? n(961392) : n(848672);
        t = (0, i.jsx)("img", { src: e, alt: C.intl.string(C.t.smSKsj) });
      }
      let c = null == e ? null : M ? (0, g.d4)(e) : R(e.deviceType).IconComponent;
      return (0, i.jsxs)("div", {
        className: s()(O.Mg, { [O.S2]: r && null != l, [O.Sy]: !_ }),
        children: [
          !_ &&
            null != c &&
            (0, i.jsx)("div", {
              className: O.Kt,
              children: (0, i.jsx)(c, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
              }),
            }),
          (0, i.jsx)(A.E, {
            lineClamp: 2,
            variant: p ?? "text-md/medium",
            color: r ? "text-subtle" : "text-default",
            className: O.hV,
            children: o,
          }),
          null != l &&
            (0, i.jsx)(A.E, {
              lineClamp: 2,
              variant: p ?? (r ? "text-xs/medium" : "text-md/medium"),
              color: "text-muted",
              className: O.VT,
              children: l,
            }),
          null != t && (0, i.jsx)("div", { className: O.pN, children: t }),
        ],
      });
    }
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(o.Te, {
          label: h,
          value: c,
          onChange: U,
          options: t.map((e) => {
            let { id: t, name: n } = e;
            return { value: t, label: n };
          }),
          isDisabled: !b,
          popoutPosition: "bottom",
          renderOptionLabel: (e) => {
            let { value: t } = e;
            return w(D[t], !0);
          },
          renderOptionValue: (e) => {
            let [{ value: t }] = e;
            return w(D[t]);
          },
          optionClassName: O.OS,
          ...N,
          "data-migration-pending": !0,
        }),
        !b && P,
      ],
    });
  }
  function y(e) {
    let { deviceType: t, selectedDeviceId: n, ...r } = e,
      a = (0, g.tR)(t),
      { id: s } = (0, g.x5)(t);
    return (0, i.jsx)(L, { ...r, devices: a, selectedDeviceId: n ?? s });
  }
  function D(e) {
    return (0, i.jsx)(L, { ...e });
  }
}
