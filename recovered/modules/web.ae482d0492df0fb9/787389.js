/* Recovered shipped factory. Module 787389.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2669050..2669968
 * Raw property SHA-256: 41f8a4437c0b809b0c0084fa867853acad840e28096cb6b004f38d2cc3ff9fde
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(582128),
    r = n(17928),
    a = n(522305),
    s = n(627363),
    l = n(625180),
    o = n(91242),
    d = n(25451),
    c = n(933958),
    u = n(748975),
    _ = n(165610);
  function E(e) {
    let {
        applicationId: t,
        analyticsLocations: n,
        runBeforeLaunchAttempt: E,
        runAfterLaunchAttempt: A,
      } = e,
      { data: h } = (0, s.YY)(t),
      f = (0, r.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
      I = (0, r.bG)([o.A], () => o.A.getMainFrame()),
      p = (0, d.X)(h);
    return i.useCallback(async () => {
      if (null == t || null == h) return;
      let e = null != f && f.applicationId === t;
      if (null != I && I.applicationId === t)
        return void l.A.updateFrameLayoutMode({ frameId: I.id, layoutMode: _.y0.FOCUSED });
      if (e) {
        let e = f.location;
        (0, u.A)("guild_id" in e ? e.guild_id : null, e);
        return;
      }
      E?.();
      try {
        p
          ? await l.A.launchFrame({
              applicationId: t,
              surface: _.sd,
              analyticsContext: { isStart: !0, analyticsLocations: n },
            })
          : h?.bot?.id != null &&
            (await (0, a.Q)({ appId: t, botId: h?.bot?.id, analyticsLocations: n ?? [] }));
      } catch (e) {}
      A?.();
    }, [n, h, t, p, f, I, A, E]);
  }
}
