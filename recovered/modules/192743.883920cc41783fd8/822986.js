/* Recovered shipped factory. Module 822986.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 29740..39486
 * Raw property SHA-256: 7f7c1d13094c36078bb22ba39ca9df6c1f5dc50ca3f30a5a22cc7374b39c2de9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => C }));
  var r = n(804552),
    o = n(128170),
    a = n(29583),
    i = n(618027),
    u = n(749805),
    l = n(216803),
    s = n(789316),
    c = n(564804);
  function f(e, t) {
    for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
    return (e < 0 ? "-" : "") + n;
  }
  let d = function (e, t) {
      var n = e.getUTCFullYear(),
        r = n > 0 ? n : 1 - n;
      return f("yy" === t ? r % 100 : r, t.length);
    },
    h = function (e, t) {
      var n = e.getUTCMonth();
      return "M" === t ? String(n + 1) : f(n + 1, 2);
    },
    p = function (e, t) {
      var n = t.length;
      return f(Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3)), t.length);
    };
  function y(e, t) {
    var n = e > 0 ? "-" : "+",
      r = Math.abs(e),
      o = Math.floor(r / 60),
      a = r % 60;
    return 0 === a ? n + String(o) : n + String(o) + (t || "") + f(a, 2);
  }
  function m(e, t) {
    return e % 60 == 0 ? (e > 0 ? "-" : "+") + f(Math.abs(e) / 60, 2) : v(e, t);
  }
  function v(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + f(Math.floor(n / 60), 2) + (t || "") + f(n % 60, 2);
  }
  let g = {
    G: function (e, t, n) {
      var r = +(e.getUTCFullYear() > 0);
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if ("yo" === t) {
        var r = e.getUTCFullYear();
        return n.ordinalNumber(r > 0 ? r : 1 - r, { unit: "year" });
      }
      return d(e, t);
    },
    Y: function (e, t, n, r) {
      var o = (0, c.A)(e, r),
        a = o > 0 ? o : 1 - o;
      return "YY" === t
        ? f(a % 100, 2)
        : "Yo" === t
          ? n.ordinalNumber(a, { unit: "year" })
          : f(a, t.length);
    },
    R: function (e, t) {
      return f((0, l.A)(e), t.length);
    },
    u: function (e, t) {
      return f(e.getUTCFullYear(), t.length);
    },
    Q: function (e, t, n) {
      var r = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return f(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      var r = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return f(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      var r = e.getUTCMonth();
      switch (t) {
        case "M":
        case "MM":
          return h(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      var r = e.getUTCMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return f(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      var o = (0, s.A)(e, r);
      return "wo" === t ? n.ordinalNumber(o, { unit: "week" }) : f(o, t.length);
    },
    I: function (e, t, n) {
      var r = (0, u.A)(e);
      return "Io" === t ? n.ordinalNumber(r, { unit: "week" }) : f(r, t.length);
    },
    d: function (e, t, n) {
      var r, o;
      return "do" === t
        ? n.ordinalNumber(e.getUTCDate(), { unit: "date" })
        : ((r = e), (o = t), f(r.getUTCDate(), o.length));
    },
    D: function (e, t, n) {
      var r = (function (e) {
        (0, i.A)(1, arguments);
        var t = (0, a.default)(e),
          n = t.getTime();
        return (
          t.setUTCMonth(0, 1),
          t.setUTCHours(0, 0, 0, 0),
          Math.floor((n - t.getTime()) / 864e5) + 1
        );
      })(e);
      return "Do" === t ? n.ordinalNumber(r, { unit: "dayOfYear" }) : f(r, t.length);
    },
    E: function (e, t, n) {
      var r = e.getUTCDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      var o = e.getUTCDay(),
        a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(a);
        case "ee":
          return f(a, 2);
        case "eo":
          return n.ordinalNumber(a, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      var o = e.getUTCDay(),
        a = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(a);
        case "cc":
          return f(a, t.length);
        case "co":
          return n.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      var r = e.getUTCDay(),
        o = 0 === r ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return f(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "aaa":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      var r,
        o = e.getUTCHours();
      switch (((r = 12 === o ? "noon" : 0 === o ? "midnight" : o / 12 >= 1 ? "pm" : "am"), t)) {
        case "b":
        case "bb":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "bbb":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      var r,
        o = e.getUTCHours();
      switch (
        ((r = o >= 17 ? "evening" : o >= 12 ? "afternoon" : o >= 4 ? "morning" : "night"), t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(r, { width: "abbreviated", context: "formatting" });
        case "BBBBB":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if ("ho" === t) {
        var r,
          o,
          a = e.getUTCHours() % 12;
        return (0 === a && (a = 12), n.ordinalNumber(a, { unit: "hour" }));
      }
      return ((r = e), (o = t), f(r.getUTCHours() % 12 || 12, o.length));
    },
    H: function (e, t, n) {
      var r, o;
      return "Ho" === t
        ? n.ordinalNumber(e.getUTCHours(), { unit: "hour" })
        : ((r = e), (o = t), f(r.getUTCHours(), o.length));
    },
    K: function (e, t, n) {
      var r = e.getUTCHours() % 12;
      return "Ko" === t ? n.ordinalNumber(r, { unit: "hour" }) : f(r, t.length);
    },
    k: function (e, t, n) {
      var r = e.getUTCHours();
      return (0 === r && (r = 24), "ko" === t)
        ? n.ordinalNumber(r, { unit: "hour" })
        : f(r, t.length);
    },
    m: function (e, t, n) {
      var r, o;
      return "mo" === t
        ? n.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
        : ((r = e), (o = t), f(r.getUTCMinutes(), o.length));
    },
    s: function (e, t, n) {
      var r, o;
      return "so" === t
        ? n.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
        : ((r = e), (o = t), f(r.getUTCSeconds(), o.length));
    },
    S: function (e, t) {
      return p(e, t);
    },
    X: function (e, t, n, r) {
      var o = (r._originalDate || e).getTimezoneOffset();
      if (0 === o) return "Z";
      switch (t) {
        case "X":
          return m(o);
        case "XXXX":
        case "XX":
          return v(o);
        default:
          return v(o, ":");
      }
    },
    x: function (e, t, n, r) {
      var o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "x":
          return m(o);
        case "xxxx":
        case "xx":
          return v(o);
        default:
          return v(o, ":");
      }
    },
    O: function (e, t, n, r) {
      var o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + y(o, ":");
        default:
          return "GMT" + v(o, ":");
      }
    },
    z: function (e, t, n, r) {
      var o = (r._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + y(o, ":");
        default:
          return "GMT" + v(o, ":");
      }
    },
    t: function (e, t, n, r) {
      return f(Math.floor((r._originalDate || e).getTime() / 1e3), t.length);
    },
    T: function (e, t, n, r) {
      return f((r._originalDate || e).getTime(), t.length);
    },
  };
  var b = n(291048),
    w = n(84776),
    _ = n(368617),
    k = n(998280),
    x = n(98430),
    S = n(728898),
    E = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    O = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    T = /^'([^]*?)'?$/,
    R = /''/g,
    A = /[a-zA-Z]/;
  function C(e, t, n) {
    (0, i.A)(2, arguments);
    var u,
      l,
      s,
      c,
      f,
      d,
      h,
      p,
      y,
      m,
      v,
      C,
      M,
      D,
      P,
      N,
      j,
      L,
      z = String(t),
      U = (0, x.q)(),
      Y = null != (u = null != (l = null == n ? void 0 : n.locale) ? l : U.locale) ? u : S.A,
      I = (0, k.A)(
        null !=
          (s =
            null !=
            (c =
              null !=
              (f =
                null != (d = null == n ? void 0 : n.firstWeekContainsDate)
                  ? d
                  : null == n || null == (h = n.locale) || null == (p = h.options)
                    ? void 0
                    : p.firstWeekContainsDate)
                ? f
                : U.firstWeekContainsDate)
              ? c
              : null == (y = U.locale) || null == (m = y.options)
                ? void 0
                : m.firstWeekContainsDate)
          ? s
          : 1,
      );
    if (!(I >= 1 && I <= 7))
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var F = (0, k.A)(
      null !=
        (v =
          null !=
          (C =
            null !=
            (M =
              null != (D = null == n ? void 0 : n.weekStartsOn)
                ? D
                : null == n || null == (P = n.locale) || null == (N = P.options)
                  ? void 0
                  : N.weekStartsOn)
              ? M
              : U.weekStartsOn)
            ? C
            : null == (j = U.locale) || null == (L = j.options)
              ? void 0
              : L.weekStartsOn)
        ? v
        : 0,
    );
    if (!(F >= 0 && F <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!Y.localize) throw RangeError("locale must contain localize property");
    if (!Y.formatLong) throw RangeError("locale must contain formatLong property");
    var W = (0, a.default)(e);
    if (!(0, r.default)(W)) throw RangeError("Invalid time value");
    var H = (0, w.A)(W),
      B = (0, o.A)(W, H),
      q = { firstWeekContainsDate: I, weekStartsOn: F, locale: Y, _originalDate: W };
    return z
      .match(O)
      .map(function (e) {
        var t = e[0];
        return "p" === t || "P" === t ? (0, b.A[t])(e, Y.formatLong) : e;
      })
      .join("")
      .match(E)
      .map(function (r) {
        if ("''" === r) return "'";
        var o,
          a,
          i = r[0];
        if ("'" === i) {
          return (a = (o = r).match(T)) ? a[1].replace(R, "'") : o;
        }
        var u = g[i];
        if (u)
          return (
            !(null != n && n.useAdditionalWeekYearTokens) &&
              (0, _.xM)(r) &&
              (0, _.lJ)(r, t, String(e)),
            !(null != n && n.useAdditionalDayOfYearTokens) &&
              (0, _.ef)(r) &&
              (0, _.lJ)(r, t, String(e)),
            u(B, r, Y.localize, q)
          );
        if (i.match(A))
          throw RangeError(
            "Format string contains an unescaped latin alphabet character `" + i + "`",
          );
        return r;
      })
      .join("");
  }
}
