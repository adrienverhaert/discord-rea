/* Recovered shipped factory. Module 501838.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7493175..7494791
 * Raw property SHA-256: fe96e302743e5b4eec2f443d01bd5a926fa0a031ba9a0c3af296fe54c8fa1aa6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { mn: () => E, px: () => p, qx: () => f, rY: () => I, tR: () => A, w: () => h }),
    n(321073));
  var i = n(582128),
    r = n(17928),
    a = n(517164),
    s = n(20805),
    l = n(952818),
    o = n(321191),
    d = n(71393),
    c = n(290863),
    u = n(832163),
    _ = n(533562);
  function E(e) {
    let { userIds: t } = e;
    return (0, r.yK)(
      [a.A, u.A],
      () => {
        let e = [];
        for (let n of t)
          for (let t of a.A.getUserOutbox(n)?.entries ?? [])
            if (null != t && (0, s.zD)(t)) {
              let n = u.A.getApplicationIdFromDetectableId(t.extra.application_id);
              null != n && e.push(n);
            }
        return e;
      },
      [t],
    );
  }
  function A(e) {
    return (0, r.yK)(
      [o.A, u.A],
      () => {
        let t = [];
        for (let n of e) {
          let e = o.A.getMutualGuilds(n);
          if (null != e) {
            for (let n of e)
              if (u.A.getStorefrontGuildIds().has(n.guild.id)) {
                let e = u.A.getApplicationIdFromGuildId(n.guild.id);
                null != e && t.push(e);
              }
          }
        }
        return t;
      },
      [e],
    );
  }
  function h(e) {
    let { userIds: t } = e,
      n = (0, r.yK)(
        [c.A, u.A],
        () => {
          let e = [];
          for (let n of t)
            for (let t of c.A.getActivities(n))
              if (null != t.application_id) {
                let n = u.A.getApplicationIdFromDetectableId(t.application_id);
                null != n && e.push(n);
              }
          return e;
        },
        [t],
      ),
      a = (0, _.W)();
    return i.useMemo(() => (null != a ? [...n, a] : n), [n, a]);
  }
  function f() {
    return (0, r.yK)([l.Ay, u.A], () => {
      let e = [];
      for (let t of l.Ay.getGamesSeen(!1, !1))
        if (null != t.id) {
          let n = u.A.getApplicationIdFromDetectableId(t.id);
          null != n && e.push(n);
        }
      return e;
    });
  }
  function I() {
    return (0, r.yK)(
      [l.Ay, u.A],
      () => {
        let e = [];
        for (let t of l.Ay.getRunningGames())
          if (null != t.id && l.Ay.isDetectionEnabled(t)) {
            let n = u.A.getApplicationIdFromDetectableId(t.id);
            null != n && e.push(n);
          }
        return e;
      },
      [],
    );
  }
  function p() {
    let e = (0, r.bG)([d.A], () => d.A.getGuildIds());
    return (0, r.yK)(
      [u.A],
      () => {
        let t = [];
        for (let n of e) {
          let e = u.A.getApplicationIdFromGuildId(n);
          null != e && t.push(e);
        }
        return t;
      },
      [e],
    );
  }
}
