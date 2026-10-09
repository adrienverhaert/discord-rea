/* Recovered shipped factory. Module 501984.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 993694..994079
 * Raw property SHA-256: 87acfc4e2f1f4a7420de7a23ad3d262e9cb927b599e52f034bb28d3e50353820
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  function t(e, t, r, n, i, o, a) {
    try {
      var s = e[o](a),
        l = s.value;
    } catch (e) {
      return void r(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(n, i);
  }
  ((e.exports = function (e) {
    return function () {
      var r = this,
        n = arguments;
      return new Promise(function (i, o) {
        var a = e.apply(r, n);
        function s(e) {
          t(a, i, o, s, l, "next", e);
        }
        function l(e) {
          t(a, i, o, s, l, "throw", e);
        }
        s(void 0);
      });
    };
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports));
}
