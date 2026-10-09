/* Recovered shipped factory. Module 415171.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 1404..2557
 * Raw property SHA-256: 1bb0fdcbfad02befb44a58540cc7d64d0f6adb84249c2d97ef9220690442df37
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { tb: () => u });
  var a = t(234097),
    r = t(916784),
    u = (function () {
      function e(e) {
        if (0 == arguments.length)
          throw TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
          );
        if ("function" != typeof e)
          throw TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
          );
        a.J.connect(this, e);
      }
      return (
        (e.prototype.observe = function (e, n) {
          if (0 == arguments.length)
            throw TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
            );
          if (!(0, r.vq)(e))
            throw TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
            );
          a.J.observe(this, e, n);
        }),
        (e.prototype.unobserve = function (e) {
          if (0 == arguments.length)
            throw TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
            );
          if (!(0, r.vq)(e))
            throw TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
            );
          a.J.unobserve(this, e);
        }),
        (e.prototype.disconnect = function () {
          a.J.disconnect(this);
        }),
        (e.toString = function () {
          return "function ResizeObserver () { [polyfill code] }";
        }),
        e
      );
    })();
  (t(522816), t(162563));
}
