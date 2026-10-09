/* Recovered shipped factory. Module 32090.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5423940..5424340
 * Raw property SHA-256: be8b669635a976b53c5727e530ab8595cb49fee5fcd030664a1fb2a1ca299254
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(696451);
  let a = 14 * n(927813).A.Millis.DAY;
  function s(e, t) {
    return (0, i.bG)(
      [r.Ay],
      () =>
        null != e
          ? (function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
              if (null == e || null == e.winningWeek) return null;
              let n = Date.parse(e.winningWeek);
              return isNaN(n) || t - n > a ? null : e;
            })(r.Ay.getMember(e, t)?.gamingLeaderboardData)
          : null,
      [e, t],
    );
  }
}
