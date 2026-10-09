/* Recovered shipped factory. Module 530804.
 * Source: recovered/web/assets/abb4f309f9866fd6.js
 * UTF-16 property offsets: 405..2187
 * Raw property SHA-256: 54891297d2dbbc1386d4d68a9efbb67f40eae0eecb4fe95e2ee13d5a6fa619e2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  (t.d(n, { $n: () => f, b0: () => C, uy: () => g, vp: () => h }), t(321073));
  var u = t(582128),
    l = t(435558),
    r = t(17928),
    s = t(568598),
    c = t(280450),
    i = t(584569),
    a = t(763827),
    d = t(977997),
    A = t(955283),
    o = t(652215);
  function f(e, n) {
    let t = (0, r.bG)([i.A, a.A], () =>
      e === a.A.getChannelId() ? i.A.getDesyncedVoiceStates() : null,
    );
    return u.useMemo(
      () =>
        (function (e, n) {
          if (null == e || 0 === e.length) return n;
          let t = [],
            u = new Set();
          for (let e of n) (t.push(e), u.add(e.user.id));
          return (
            e?.forEach((e) => {
              t.splice(
                (0, l.sortedIndexBy)(t, e, (e) => {
                  let { comparator: n } = e;
                  return n;
                }),
                0,
                e,
              );
            }),
            t
          );
        })(t, n),
      [t, n],
    );
  }
  function h(e, n) {
    let t = (0, r.bG)([i.A, a.A], () =>
      e === a.A.getChannelId() ? i.A.getDesyncedParticipants() : null,
    );
    return u.useMemo(
      () =>
        (function (e, n) {
          if (null == e || 0 === e.length) return n;
          let t = [...n];
          return (
            e.forEach((e) => {
              t.splice(
                (0, l.sortedIndexBy)(t, e, (e) => (0, s.KU)(e)),
                0,
                e,
              );
            }),
            t
          );
        })(t, n),
      [t, n],
    );
  }
  function C(e) {
    let n = (0, r.bG)([c.default], () => c.default.getId() === e),
      { showSelfConnectingUI: t } = A.A.useConfig({ location: "useIsSelfDisconnectedUIVisible" }),
      u = (0, r.bG)([a.A], () => a.A.getState()),
      l = (0, r.bG)([a.A], () => a.A.getWasEverRtcConnected());
    return n && l && u !== o.S7L.RTC_CONNECTED && t;
  }
  function g(e, n) {
    let t = (0, r.bG)([c.default], () => c.default.getId() === n),
      l = (0, r.bG)([a.A], () => a.A.getChannelId()),
      s = u.useRef(null),
      [i, A] = u.useState(!1),
      [o, f] = u.useState(!1),
      h = (0, r.bG)(
        [a.A, d.A],
        () =>
          null != n &&
          null != e &&
          a.A.getChannelId() === e &&
          null != d.A.isInChannel(e, n) &&
          a.A.isUserConnected(n),
      ),
      C = (0, r.bG)(
        [a.A, d.A],
        () =>
          null != n &&
          null != e &&
          a.A.getChannelId() === e &&
          null != d.A.isInChannel(e, n) &&
          !a.A.isUserConnected(n),
      );
    return (
      u.useEffect(() => {
        h && f(!0);
      }, [h]),
      u.useEffect(() => {
        l !== e && f(!1);
      }, [e, l]),
      u.useEffect(
        () => (
          C && null == s.current
            ? (s.current = setTimeout(() => {
                ((s.current = null), A(!0));
              }, 250))
            : (clearTimeout(s.current), (s.current = null), A(!1)),
          () => {
            (clearTimeout(s.current), (s.current = null));
          }
        ),
        [C],
      ),
      !t && o && i
    );
  }
}
