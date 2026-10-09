/* Recovered shipped factory. Module 722872.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 2877..6135
 * Raw property SHA-256: 49926e746d1cffc6c75c16dceae0fb303c5024feec7b2d078e88632bf90ccd42
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var n = {
    linear: function (e, n, t, a) {
      return ((t - n) * e) / a + n;
    },
    easeInQuad: function (e, n, t, a) {
      return (t - n) * (e /= a) * e + n;
    },
    easeOutQuad: function (e, n, t, a) {
      return -(t - n) * (e /= a) * (e - 2) + n;
    },
    easeInOutQuad: function (e, n, t, a) {
      var r = t - n;
      return (e /= a / 2) < 1 ? (r / 2) * e * e + n : (-r / 2) * (--e * (e - 2) - 1) + n;
    },
    easeInCubic: function (e, n, t, a) {
      return (t - n) * (e /= a) * e * e + n;
    },
    easeOutCubic: function (e, n, t, a) {
      return (t - n) * ((e = e / a - 1) * e * e + 1) + n;
    },
    easeInOutCubic: function (e, n, t, a) {
      var r = t - n;
      return (e /= a / 2) < 1 ? (r / 2) * e * e * e + n : (r / 2) * ((e -= 2) * e * e + 2) + n;
    },
    easeInQuart: function (e, n, t, a) {
      return (t - n) * (e /= a) * e * e * e + n;
    },
    easeOutQuart: function (e, n, t, a) {
      return -(t - n) * ((e = e / a - 1) * e * e * e - 1) + n;
    },
    easeInOutQuart: function (e, n, t, a) {
      var r = t - n;
      return (e /= a / 2) < 1
        ? (r / 2) * e * e * e * e + n
        : (-r / 2) * ((e -= 2) * e * e * e - 2) + n;
    },
    easeInQuint: function (e, n, t, a) {
      return (t - n) * (e /= a) * e * e * e * e + n;
    },
    easeOutQuint: function (e, n, t, a) {
      return (t - n) * ((e = e / a - 1) * e * e * e * e + 1) + n;
    },
    easeInOutQuint: function (e, n, t, a) {
      var r = t - n;
      return (e /= a / 2) < 1
        ? (r / 2) * e * e * e * e * e + n
        : (r / 2) * ((e -= 2) * e * e * e * e + 2) + n;
    },
    easeInSine: function (e, n, t, a) {
      var r = t - n;
      return -r * Math.cos((e / a) * (Math.PI / 2)) + r + n;
    },
    easeOutSine: function (e, n, t, a) {
      return (t - n) * Math.sin((e / a) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (e, n, t, a) {
      return (-(t - n) / 2) * (Math.cos((Math.PI * e) / a) - 1) + n;
    },
    easeInExpo: function (e, n, t, a) {
      return 0 == e ? n : (t - n) * Math.pow(2, 10 * (e / a - 1)) + n;
    },
    easeOutExpo: function (e, n, t, a) {
      var r = t - n;
      return e == a ? n + r : r * (-Math.pow(2, (-10 * e) / a) + 1) + n;
    },
    easeInOutExpo: function (e, n, t, a) {
      var r = t - n;
      return 0 === e
        ? n
        : e === a
          ? n + r
          : (e /= a / 2) < 1
            ? (r / 2) * Math.pow(2, 10 * (e - 1)) + n
            : (r / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
    },
    easeInCirc: function (e, n, t, a) {
      return -(t - n) * (Math.sqrt(1 - (e /= a) * e) - 1) + n;
    },
    easeOutCirc: function (e, n, t, a) {
      return (t - n) * Math.sqrt(1 - (e = e / a - 1) * e) + n;
    },
    easeInOutCirc: function (e, n, t, a) {
      var r = t - n;
      return (e /= a / 2) < 1
        ? (-r / 2) * (Math.sqrt(1 - e * e) - 1) + n
        : (r / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
    },
    easeInElastic: function (e, n, t, a) {
      var r,
        u,
        s,
        i = t - n;
      return ((s = 1.70158), (u = 0), (r = i), 0 === e)
        ? n
        : 1 == (e /= a)
          ? n + i
          : (u || (u = 0.3 * a),
            r < Math.abs(i) ? ((r = i), (s = u / 4)) : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
            -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * a - s)) / u)) + n);
    },
    easeOutElastic: function (e, n, t, a) {
      var r,
        u,
        s,
        i = t - n;
      return ((s = 1.70158), (u = 0), (r = i), 0 === e)
        ? n
        : 1 == (e /= a)
          ? n + i
          : (u || (u = 0.3 * a),
            r < Math.abs(i) ? ((r = i), (s = u / 4)) : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
            r * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e * a - s)) / u) + i + n);
    },
    easeInOutElastic: function (e, n, t, a) {
      var r,
        u,
        s,
        i = t - n;
      return ((s = 1.70158), (u = 0), (r = i), 0 === e)
        ? n
        : 2 == (e /= a / 2)
          ? n + i
          : (u || (u = 0.3 * 1.5 * a),
              r < Math.abs(i)
                ? ((r = i), (s = u / 4))
                : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
              e < 1)
            ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * a - s)) / u)) +
              n
            : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((2 * Math.PI * (e * a - s)) / u) * 0.5 +
              i +
              n;
    },
    easeInBack: function (e, n, t, a, r) {
      return (void 0 === r && (r = 1.70158), (t - n) * (e /= a) * e * ((r + 1) * e - r) + n);
    },
    easeOutBack: function (e, n, t, a, r) {
      return (
        void 0 === r && (r = 1.70158),
        (t - n) * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + n
      );
    },
    easeInOutBack: function (e, n, t, a, r) {
      var u = t - n;
      return (void 0 === r && (r = 1.70158), (e /= a / 2) < 1)
        ? (u / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + n
        : (u / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n;
    },
    easeInBounce: function (e, t, a, r) {
      var u,
        s = a - t;
      return ((u = n.easeOutBounce(r - e, 0, s, r)), s - u + t);
    },
    easeOutBounce: function (e, n, t, a) {
      var r = t - n;
      return (e /= a) < 1 / 2.75
        ? 7.5625 * e * e * r + n
        : e < 2 / 2.75
          ? r * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
          : e < 2.5 / 2.75
            ? r * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
            : r * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
    },
    easeInOutBounce: function (e, t, a, r) {
      var u = a - t;
      return e < r / 2
        ? 0.5 * n.easeInBounce(2 * e, 0, u, r) + t
        : 0.5 * n.easeOutBounce(2 * e - r, 0, u, r) + 0.5 * u + t;
    },
  };
  e.exports = n;
}
