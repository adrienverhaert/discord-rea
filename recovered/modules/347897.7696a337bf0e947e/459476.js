/* Recovered shipped factory. Module 459476.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 999772..1001009
 * Raw property SHA-256: a99ab0a2e8589de606fc4138d3684c55300333168115ecd6c7a9b6e7cc31adb9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(225063),
    i = r(37946),
    o = r(990672),
    a = r(937092),
    s = r(832282),
    l = r(12994),
    u = r(601300);
  function c() {
    "use strict";
    var t = i(),
      r = t.m(c),
      f = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__).constructor;
    function p(e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name));
    }
    var d = { throw: 1, return: 2, break: 3, continue: 3 };
    function h(e) {
      var t, r;
      return function (n) {
        (t ||
          ((t = {
            stop: function () {
              return r(n.a, 2);
            },
            catch: function () {
              return n.v;
            },
            abrupt: function (e, t) {
              return r(n.a, d[e], t);
            },
            delegateYield: function (e, i, o) {
              return ((t.resultName = i), r(n.d, u(e), o));
            },
            finish: function (e) {
              return r(n.f, e);
            },
          }),
          (r = function (e, r, i) {
            ((n.p = t.prev), (n.n = t.next));
            try {
              return e(r, i);
            } finally {
              t.next = n.n;
            }
          })),
          t.resultName && ((t[t.resultName] = n.v), (t.resultName = void 0)),
          (t.sent = n.v),
          (t.next = n.n));
        try {
          return e.call(this, t);
        } finally {
          ((n.p = t.prev), (n.n = t.next));
        }
      };
    }
    return ((e.exports = c =
      function () {
        return {
          wrap: function (e, r, n, i) {
            return t.w(h(e), r, n, i && i.reverse());
          },
          isGeneratorFunction: p,
          mark: t.m,
          awrap: function (e, t) {
            return new n(e, t);
          },
          AsyncIterator: s,
          async: function (e, t, r, n, i) {
            return (p(t) ? a : o)(h(e), t, r, n, i);
          },
          keys: l,
          values: u,
        };
      }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports))();
  }
  ((e.exports = c), (e.exports.__esModule = !0), (e.exports.default = e.exports));
}
