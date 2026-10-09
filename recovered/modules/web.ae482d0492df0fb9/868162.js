/* Recovered shipped factory. Module 868162.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3950670..3953301
 * Raw property SHA-256: 819fe60c8c1a7c4c9f8a83a7d25b1bb6a0f190679642c2a436884697d464f867
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => L, x: () => N });
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(827343),
    o = n(617617),
    d = n(192820),
    c = n(763827),
    u = n(723702),
    _ = n(792205),
    E = n(731854);
  let A = { ignoredDevices: {} },
    h = A,
    f = !1,
    I = {},
    p = {},
    T = {},
    m = { id: null, justChanged: !1 },
    g = { id: null, justChanged: !1 },
    S = /\((.+)\)\s*$/;
  function N(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
      let t = e.name.match(S);
      if (null != t) return t[1];
    }
    return e.name;
  }
  function C(e, t, n) {
    return null == e || e.displayName !== t
      ? { displayName: t, type: n }
      : (e.type === _.E.INPUT && n === _.E.OUTPUT) || (e.type === _.E.OUTPUT && n === _.E.INPUT)
        ? { displayName: t, type: _.E.INPUT_AND_OUTPUT }
        : e;
  }
  function O() {
    let e = !r().isEmpty(T);
    return (e && (T = {}), e);
  }
  class R extends a.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
      (this.waitFor(d.Ay, o.A, c.A), (h = e ?? A));
    }
    getUserAgnosticState() {
      return h;
    }
    get initialized() {
      return f;
    }
    get lastDeviceConnected() {
      return T;
    }
    get inputDevices() {
      return I;
    }
    get lastInputSystemDevice() {
      return m;
    }
    get outputDevices() {
      return p;
    }
    get lastOutputSystemDevice() {
      return g;
    }
  }
  let L = new R(s.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
      let { inputDevices: t, outputDevices: n } = e,
        i = {};
      ((m.justChanged = !1),
        t.forEach((e) => {
          if (e.id === E.dx) {
            let t = e.originalId ?? e.originalName;
            (t !== m.id && (m.justChanged = !0), (m.id = t));
            return;
          }
          i[N(e)] = e.id;
        }));
      let a = {};
      if (
        ((g.justChanged = !1),
        n.forEach((e) => {
          if (e.id === E.dx) {
            let t = e.originalId ?? e.originalName;
            (t !== g.id && (g.justChanged = !0), (g.id = t));
            return;
          }
          a[N(e)] = e.id;
        }),
        !f)
      ) {
        ((I = i), (p = a), (f = !0));
        return;
      }
      let s = Object.keys(I),
        l = Object.keys(i),
        o = Object.keys(p),
        d = Object.keys(a),
        u = r().difference(s, l),
        A = r().difference(o, d),
        h = r().difference(l, s),
        S = r().difference(d, o);
      return (
        (u.length > 0 || A.length > 0) && (T = {}),
        c.A.isConnected() &&
          (h.forEach((e) => {
            T[e] = C(T[e], e, _.E.INPUT);
          }),
          S.forEach((e) => {
            T[e] = C(T[e], e, _.E.OUTPUT);
          })),
        !(r().isEqual(s, l) && r().isEqual(o, d)) && ((I = i), (p = a), !0)
      );
    },
    RTC_CONNECTION_STATE: function () {
      let e = c.A.isDisconnected() && !r().isEmpty(T);
      return (e && (T = {}), e);
    },
    AUDIO_SET_INPUT_DEVICE: O,
    AUDIO_SET_OUTPUT_DEVICE: O,
    CONNECTED_DEVICE_SWITCH: function (e) {
      let { displayName: t, connectedDevicePreference: n, location: i } = e;
      if (n === _.f.INPUT || n === _.f.INPUT_AND_OUTPUT) {
        let e = I[t];
        null != e && s.h.wait(() => l.default.setInputDevice(e, { location: i }));
      }
      if (n === _.f.OUTPUT || n === _.f.INPUT_AND_OUTPUT) {
        let e = p[t];
        null != e && s.h.wait(() => l.default.setOutputDevice(e, { location: i }));
      }
      T = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
      T = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
      let { displayName: t } = e;
      ((h.ignoredDevices[t] = !0), (T = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
      let { neverShowModal: t } = e;
      (t && (T = {}), (h.neverShowModal = t));
    },
  });
}
