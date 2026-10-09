/* Recovered shipped factory. Module 864202.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 136744..139428
 * Raw property SHA-256: 383d26fcb5a50aa5bdf2a7f116a6b207be77cc860ff8b0f05ef3d692780f05fe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => i }));
  var r = n(575223),
    o = n(618027),
    a = n(998280);
  function i(e, t) {
    (0, o.A)(1, arguments);
    var n,
      i,
      v,
      g = (0, a.A)(null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2);
    if (2 !== g && 1 !== g && 0 !== g) throw RangeError("additionalDigits must be 0, 1 or 2");
    if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e))
      return new Date(NaN);
    var b = (function (e) {
      var t,
        n = {},
        r = e.split(u);
      if (r.length > 2) return n;
      if (
        (/:/.test(r[0])
          ? (t = r[0])
          : ((n.date = r[0]),
            (t = r[1]),
            l.test(n.date) && ((n.date = e.split(l)[0]), (t = e.substr(n.date.length, e.length)))),
        t)
      ) {
        var o = s.exec(t);
        o ? ((n.time = t.replace(o[1], "")), (n.timezone = o[1])) : (n.time = t);
      }
      return n;
    })(e);
    if (b.date) {
      var w = (function (e, t) {
        var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
          r = e.match(n);
        if (!r) return { year: NaN, restDateString: "" };
        var o = r[1] ? parseInt(r[1]) : null,
          a = r[2] ? parseInt(r[2]) : null;
        return { year: null === a ? o : 100 * a, restDateString: e.slice((r[1] || r[2]).length) };
      })(b.date, g);
      i = (function (e, t) {
        if (null === t) return new Date(NaN);
        var n,
          r,
          o,
          a,
          i,
          u,
          l,
          s,
          f,
          d,
          p,
          v,
          g = e.match(c);
        if (!g) return new Date(NaN);
        var b = !!g[4],
          w = h(g[1]),
          _ = h(g[2]) - 1,
          k = h(g[3]),
          x = h(g[4]),
          S = h(g[5]) - 1;
        if (b) {
          return ((n = x), (r = S), n >= 1 && n <= 53 && r >= 0 && r <= 6)
            ? ((o = t),
              (a = x),
              (i = S),
              (u = new Date(0)).setUTCFullYear(o, 0, 4),
              (l = u.getUTCDay() || 7),
              u.setUTCDate(u.getUTCDate() + ((a - 1) * 7 + i + 1 - l)),
              u)
            : new Date(NaN);
        }
        var E = new Date(0);
        return ((s = t),
        (f = _),
        (d = k),
        f >= 0 &&
          f <= 11 &&
          d >= 1 &&
          d <= (y[f] || (m(s) ? 29 : 28)) &&
          ((p = t), (v = w) >= 1 && v <= (m(p) ? 366 : 365)))
          ? (E.setUTCFullYear(t, _, Math.max(w, k)), E)
          : new Date(NaN);
      })(w.restDateString, w.year);
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var _ = i.getTime(),
      k = 0;
    if (
      b.time &&
      isNaN(
        (k = (function (e) {
          var t,
            n,
            o,
            a = e.match(f);
          if (!a) return NaN;
          var i = p(a[1]),
            u = p(a[2]),
            l = p(a[3]);
          return ((t = i),
          (n = u),
          (o = l),
          24 === t ? 0 === n && 0 === o : o >= 0 && o < 60 && n >= 0 && n < 60 && t >= 0 && t < 25)
            ? i * r.s0 + u * r.Cg + 1e3 * l
            : NaN;
        })(b.time)),
      )
    )
      return new Date(NaN);
    if (b.timezone) {
      if (
        isNaN(
          (v = (function (e) {
            if ("Z" === e) return 0;
            var t,
              n = e.match(d);
            if (!n) return 0;
            var o = "+" === n[1] ? -1 : 1,
              a = parseInt(n[2]),
              i = (n[3] && parseInt(n[3])) || 0;
            return (t = i) >= 0 && t <= 59 ? o * (a * r.s0 + i * r.Cg) : NaN;
          })(b.timezone)),
        )
      )
        return new Date(NaN);
    } else {
      var x = new Date(_ + k),
        S = new Date(0);
      return (
        S.setFullYear(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate()),
        S.setHours(x.getUTCHours(), x.getUTCMinutes(), x.getUTCSeconds(), x.getUTCMilliseconds()),
        S
      );
    }
    return new Date(_ + k + v);
  }
  var u = /[T ]/,
    l = /[Z ]/i,
    s = /([Z+-].*)$/,
    c = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    f = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    d = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function h(e) {
    return e ? parseInt(e) : 1;
  }
  function p(e) {
    return (e && parseFloat(e.replace(",", "."))) || 0;
  }
  var y = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function m(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
  }
}
