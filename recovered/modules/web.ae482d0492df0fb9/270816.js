/* Recovered shipped factory. Module 270816.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5891071..5892394
 * Raw property SHA-256: 6e03a00191abfbc0fb88a1bb9c05f86e23f0e2539471acee57dfe02fcc64ea45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(477782),
    s = n(827343),
    l = n(74848),
    o = n(106713),
    d = n(731854),
    c = n(660183);
  function u(e) {
    let {
        deviceType: t,
        analyticsLocations: n,
        asSubmenu: u = !1,
        onDeviceSelect: _,
        selectedDeviceId: E,
        menuGroupOverrideProps: A,
        menuItemOverrideProps: h,
        computeMenuRadioItemOverrideProps: f,
      } = e,
      { setDevice: I, getLabel: p } = {
        [d.oh.AUDIO_INPUT]: {
          setDevice: s.default.setInputDevice,
          getLabel: () => c.intl.string(c.t.ElbIXN),
        },
        [d.oh.AUDIO_OUTPUT]: {
          setDevice: s.default.setOutputDevice,
          getLabel: () => c.intl.string(c.t["6Ww0iH"]),
        },
        [d.oh.VIDEO_INPUT]: {
          setDevice: s.default.setVideoDevice,
          getLabel: () => c.intl.string(c.t.F122Gz),
        },
      }[t],
      T = (0, l.tR)(t),
      m = (0, l.x5)(t),
      g = E ?? m.id,
      S = r.useMemo(
        () =>
          T.find((e) => {
            let { id: t } = e;
            return t === g;
          }),
        [T, g],
      ),
      { showDeviceFormFactorIndicators: N } = o.A.useConfig({ location: "useDeviceMenuItems" }),
      C = T.map((e) => {
        let { prefix: r, subName: s } = (0, l.d)(e),
          o = {};
        if (N) {
          let t = (0, l.d4)(e);
          o = { leadingAccessory: { type: "icon", icon: t }, leftIcon: t };
        }
        return (0, i.jsx)(
          a.iD,
          {
            id: `${t}-${e.id}`,
            group: `${t}-devices`,
            disabled: e.disabled,
            label: r,
            subtext: s,
            checked: e.id === g,
            action: () => {
              (_?.(e.id) ?? !0) && I(e.id, { analyticsLocations: n });
            },
            ...f?.(e.id),
            ...o,
          },
          `${t}-${e.id}`,
        );
      });
    return u
      ? (0, i.jsx)(a.Dr, {
          id: `${t}-devices`,
          label: p(),
          subtext: (0, l.d)(S ?? m).prefix,
          ...h,
          children: C,
        })
      : (0, i.jsx)(a.rX, { label: p(), ...A, children: C });
  }
}
