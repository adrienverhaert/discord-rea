/* Recovered shipped factory. Module 687988.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 41576..43662
 * Raw property SHA-256: 7420706c76ede8ac7507336bc4a39391768c32a0bd3ffc7150e0ec40d25b51c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g });
  var r = n(683706),
    o = n(410530),
    a = n(228378),
    i = n(29583),
    u = n(618027),
    l = n(998280);
  function s(e) {
    return (s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function c(e, t) {
    if (((0, u.A)(2, arguments), !t || "object" !== s(t))) return new Date(NaN);
    var n = t.years ? (0, l.A)(t.years) : 0,
      r = t.months ? (0, l.A)(t.months) : 0,
      c = t.weeks ? (0, l.A)(t.weeks) : 0,
      f = t.days ? (0, l.A)(t.days) : 0,
      d = t.hours ? (0, l.A)(t.hours) : 0,
      h = t.minutes ? (0, l.A)(t.minutes) : 0,
      p = t.seconds ? (0, l.A)(t.seconds) : 0,
      y = (0, i.default)(e),
      m = r || n ? (0, a.default)(y, r + 12 * n) : y;
    return new Date(
      (f || c ? (0, o.default)(m, f + 7 * c) : m).getTime() + 1e3 * (p + 60 * (h + 60 * d)),
    );
  }
  var f = n(194537),
    d = n(575223),
    h = n(582972),
    p = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      },
    };
  function y(e) {
    return e ? p[e] : p.trunc;
  }
  var m = n(721441),
    v = n(918494);
  function g(e) {
    (0, u.A)(1, arguments);
    var t = (0, i.default)(e.start),
      n = (0, i.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
    var o = {};
    o.years = Math.abs(
      (function (e, t) {
        (0, u.A)(2, arguments);
        var n = (0, i.default)(e),
          o = (0, i.default)(t),
          a = (0, r.A)(n, o),
          l = Math.abs((0, v.default)(n, o));
        (n.setFullYear(1584), o.setFullYear(1584));
        var s = (0, r.A)(n, o) === -a,
          c = a * (l - Number(s));
        return 0 === c ? 0 : c;
      })(n, t),
    );
    var a = (0, r.A)(n, t),
      l = c(t, { years: a * o.years });
    o.months = Math.abs((0, m.A)(n, l));
    var s = c(l, { months: a * o.months });
    o.days = Math.abs((0, f.A)(n, s));
    var p = c(s, { days: a * o.days });
    o.hours = Math.abs(
      (function (e, t, n) {
        (0, u.A)(2, arguments);
        var r = (0, h.A)(e, t) / d.s0;
        return y(null == n ? void 0 : n.roundingMethod)(r);
      })(n, p),
    );
    var g = c(p, { hours: a * o.hours });
    o.minutes = Math.abs(
      (function (e, t, n) {
        (0, u.A)(2, arguments);
        var r = (0, h.A)(e, t) / d.Cg;
        return y(null == n ? void 0 : n.roundingMethod)(r);
      })(n, g),
    );
    var b = c(g, { minutes: a * o.minutes });
    return (
      (o.seconds = Math.abs(
        (function (e, t, n) {
          (0, u.A)(2, arguments);
          var r = (0, h.A)(e, t) / 1e3;
          return y(null == n ? void 0 : n.roundingMethod)(r);
        })(n, b),
      )),
      o
    );
  }
}
