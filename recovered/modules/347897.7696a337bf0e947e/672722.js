/* Recovered shipped factory. Module 672722.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 154798..155632
 * Raw property SHA-256: 0d21202a3f87d11b953669dd1e2eeeeba6283a0277c44e1f2c2158ffa848507a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  (r.r(t),
    r.d(t, {
      assign: () => h,
      batchedUpdates: () => p,
      colorNames: () => u,
      createStringInterpolator: () => n,
      frameLoop: () => s,
      now: () => l,
      requestAnimationFrame: () => f,
      skipAnimation: () => c,
      to: () => i,
      willAdvance: () => d,
    }));
  var n,
    i,
    o = r(572377),
    a = r(132803),
    s = new o.c(),
    l = function () {
      return performance.now();
    },
    u = null,
    c = !1,
    f =
      "u" > typeof window
        ? window.requestAnimationFrame
        : function () {
            return -1;
          },
    p = function (e) {
      return e();
    },
    d = a.lQ,
    h = function (e) {
      var t;
      return (
        (i = (t = Object.assign(
          {
            to: i,
            now: l,
            frameLoop: s,
            colorNames: u,
            skipAnimation: c,
            createStringInterpolator: n,
            requestAnimationFrame: f,
            batchedUpdates: p,
            willAdvance: d,
          },
          (function (e) {
            var t = {};
            for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
            return t;
          })(e),
        )).to),
        (l = t.now),
        (s = t.frameLoop),
        (u = t.colorNames),
        (c = t.skipAnimation),
        (n = t.createStringInterpolator),
        (f = t.requestAnimationFrame),
        (p = t.batchedUpdates),
        (d = t.willAdvance),
        t
      );
    };
}
