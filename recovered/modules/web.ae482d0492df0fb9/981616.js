/* Recovered shipped factory. Module 981616.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7622421..7624389
 * Raw property SHA-256: 03649d3947a0d7631fb145870a3d73d51a364f80f9d43382e4a0c8e5829c735d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, {
    G8: () => f,
    d3: () => E,
    dM: () => A,
    getSpotifyMetadataFromActivity: () => p,
    mD: () => h,
  }),
    n(142703));
  var i = n(729937),
    r = n(573648),
    a = n(952818),
    s = n(927813),
    l = n(107750),
    o = n(210528),
    d = n(655116),
    c = n(272984),
    u = n(652215);
  let _ = 30 * s.A.Millis.SECOND;
  function E(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
  }
  function A() {
    let e = d.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = d.A.getPlayableComputerDevices();
    if (a.Ay.isObservedAppRunning(r.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
      let { socket: e, device: n } = t[0];
      return ((0, l.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n }));
    }
    return new Promise((e, n) => {
      let i = setTimeout(() => {
        (d.A.removeChangeListener(r), n(Error("timeout launching spotify")));
      }, _);
      function r() {
        for (let { socket: n, device: a } of d.A.getPlayableComputerDevices())
          null == t.find((e) => e.device.id === a.id) &&
            (clearTimeout(i),
            d.A.removeChangeListener(r),
            setImmediate(() => {
              ((0, l.VR)(n.accountId, a.id), e({ socket: n, device: a }));
            }));
      }
      (d.A.addChangeListener(r), window.open(`${c.gY}:`));
    });
  }
  function h() {
    let e = d.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
  }
  function f() {
    let e = d.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
      ? Promise.resolve()
      : (0, l.E$)(t.accountId, t.accessToken).then(() => {
          if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
        });
  }
  function I(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
  }
  async function p(e, t) {
    let n = await (0, i.yb)(e, t),
      r = (0, c.NJ)(I(n.type ?? c.M0.TRACK));
    if (null === r) throw Error(`invalid type ${n.type}`);
    return {
      context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
      album_id: I(n.album_id),
      artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(I) : [],
      type: r,
      button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(I) : [],
    };
  }
}
