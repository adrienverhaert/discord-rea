/* Recovered shipped factory. Module 74848.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5892974..5895726
 * Raw property SHA-256: 718b9758bd2799b00af978d54e45dbea384d5b454666238dc5c5d18c13db5c1c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Py: () => L, d: () => S, d4: () => N, tR: () => R, x5: () => O });
  var i = n(582128),
    r = n(435558),
    a = n(17928),
    s = n(82034),
    l = n(12054),
    o = n(31300),
    d = n(332461),
    c = n(831544),
    u = n(597601),
    _ = n(444927),
    E = n(475743),
    A = n(192820),
    h = n(403362),
    f = n(723702),
    I = n(835498),
    p = n(731854),
    T = n(660183);
  function m(e) {
    return {
      [p.oh.AUDIO_INPUT]: {
        getRawDevices: (e) => e.getInputDevices(),
        getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.AUDIO_INPUT),
        getCurrentDeviceId: (e) => e.getInputDeviceId(),
        getSelectedDeviceId: (e) => e.getSettings().inputDeviceId,
        getNoDevicesMessage: () => T.intl.string(T.t["/QIjDA"]),
      },
      [p.oh.AUDIO_OUTPUT]: {
        getRawDevices: (e) => e.getOutputDevices(),
        getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.AUDIO_OUTPUT),
        getCurrentDeviceId: (e) => e.getOutputDeviceId(),
        getSelectedDeviceId: (e) => e.getSettings().outputDeviceId,
        getNoDevicesMessage: () => T.intl.string(T.t.xlUg0v),
      },
      [p.oh.VIDEO_INPUT]: {
        getRawDevices: (e) => e.getVideoDevices(),
        getAllDeviceIdsSortedByFrecency: (e) => e.getDeviceIdsSortedByFrecency(p.oh.VIDEO_INPUT),
        getCurrentDeviceId: (e) => e.getVideoDeviceId(),
        getSelectedDeviceId: (e) => e.getSettings().videoDeviceId,
        getNoDevicesMessage: () => T.intl.string(T.t.WKWARY),
      },
    }[e];
  }
  function g() {
    return (0, f.isWindows)()
      ? T.intl.string(T.t.n4dQ2c)
      : (0, f.isMac)()
        ? T.intl.string(T.t.aYrsiB)
        : T.intl.string(T.t.Q3YKwS);
  }
  function S(e) {
    let t = RegExp(`^(?<prefix>${g()}) \\((?<subName>.+)\\)$`),
      n = t.exec(e.name)?.groups;
    return null == n
      ? {
          prefix: e.windowsDeviceInterfaceFriendlyName ?? e.name,
          subName: e.windowsDeviceDescription,
        }
      : { prefix: n.prefix, subName: e.windowsDeviceInterfaceFriendlyName ?? n.subName };
  }
  function N(e) {
    switch (e.formFactor) {
      case A.yz.AIRPLAY:
        return s.K;
      case A.yz.BLUETOOTH:
        return l.y;
      case A.yz.INTEGRATED:
        return o.k;
      case A.yz.WEBCAM:
        return d.x;
    }
    switch (e.deviceType) {
      case p.oh.AUDIO_INPUT:
        return c.MicrophoneIcon;
      case p.oh.AUDIO_OUTPUT:
        return u.L;
      case p.oh.VIDEO_INPUT:
        return d.x;
      default:
        return u.L;
    }
  }
  function C(e) {
    let { getRawDevices: t } = m(e),
      n = (0, a.bG)([A.Ay], () => t(A.Ay));
    return (0, i.useMemo)(() => {
      let t = { ...n },
        i = t[p.dx];
      return (
        null != i &&
          (t[p.dx] = {
            ...i,
            name: (function (e, t) {
              let { getNoDevicesMessage: n } = m(e);
              return t.disabled ? n() : t.name.replace(p.vt, g());
            })(e, i),
          }),
        t
      );
    }, [e, n]);
  }
  function O(e) {
    let t = C(e),
      { getCurrentDeviceId: n } = m(e);
    return t[(0, a.bG)([A.Ay], () => n(A.Ay))];
  }
  function R(e) {
    let t = C(e),
      { getAllDeviceIdsSortedByFrecency: n } = m(e),
      a = (0, _.A)(() => n(I.A));
    return (0, i.useMemo)(() => {
      let n = Object.keys(t),
        i = e !== p.oh.VIDEO_INPUT ? [p.dx] : [],
        s = (0, r.intersection)(a, n),
        l = (0, r.difference)(n, a);
      return (0, r.union)(i, s, l)
        .map((e) => t[e])
        .filter(h.Vq);
    }, [t, e, a]);
  }
  function L(e) {
    let { getCurrentDeviceId: t, getSelectedDeviceId: n } = m(e),
      { resolvedId: i, selectedId: r } = (0, a.cf)([A.Ay], () => ({
        resolvedId: t(A.Ay),
        selectedId: n(A.Ay),
      })),
      s = (0, E.Ay)(i) ?? i,
      l = i !== s,
      o = (0, E.Ay)(r) ?? r,
      d = r !== o;
    return l && !d;
  }
}
