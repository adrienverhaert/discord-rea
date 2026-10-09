/* Recovered shipped factory. Module 352527.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3742672..3743175
 * Raw property SHA-256: 9819ca6862cd4aa318bcfa84a36568550456633f695928fc636e0134a22d51bc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(688810),
    a = n(614584),
    s = n(74847),
    l = n(406980);
  let o = function (e) {
    let { analyticsLocations: t } = (0, r.Ay)();
    return {
      onShareClick: i.useCallback(
        async (n) => {
          let { clips: i, onShareComplete: r, messageReference: o, povTargetInformation: d } = n;
          if (0 === i.length) return;
          let c = (0, s.t)(e);
          (0, a.H1)(i.map((e) => e.id));
          try {
            await (0, l.K)(i, {
              channelId: c ? e : void 0,
              analyticsLocations: t,
              messageReference: o,
              povTargetInformation: d,
            });
          } catch (e) {
          } finally {
            ((0, a.H1)(null), r?.());
          }
        },
        [e, t],
      ),
    };
  };
}
