/* Recovered shipped factory. Module 310784.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 591102..633043
 * Raw property SHA-256: 4a71596afc324242b793a1d0b043ea91874bd4aba755d5526c53575702a6ee21
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = (function () {
    "use strict";
    for (
      var e = function (e, t, n) {
          return (void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e);
        },
        t = {},
        n = 0,
        r = [
          "Boolean",
          "Number",
          "String",
          "Function",
          "Array",
          "Date",
          "RegExp",
          "Undefined",
          "Null",
        ];
      n < r.length;
      n += 1
    ) {
      var o = r[n];
      t["[object " + o + "]"] = o.toLowerCase();
    }
    var a = function (e) {
        return t[Object.prototype.toString.call(e)] || "object";
      },
      i = Math.PI,
      u = {
        clip_rgb: function (t) {
          ((t._clipped = !1), (t._unclipped = t.slice(0)));
          for (var n = 0; n <= 3; n++)
            n < 3
              ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0), (t[n] = e(t[n], 0, 255)))
              : 3 === n && (t[n] = e(t[n], 0, 1));
          return t;
        },
        limit: e,
        type: a,
        unpack: function (e, t) {
          return (void 0 === t && (t = null), e.length >= 3)
            ? Array.prototype.slice.call(e)
            : "object" == a(e[0]) && t
              ? t
                  .split("")
                  .filter(function (t) {
                    return void 0 !== e[0][t];
                  })
                  .map(function (t) {
                    return e[0][t];
                  })
              : e[0];
        },
        last: function (e) {
          if (e.length < 2) return null;
          var t = e.length - 1;
          return "string" == a(e[t]) ? e[t].toLowerCase() : null;
        },
        TWOPI: 2 * i,
        PITHIRD: i / 3,
        DEG2RAD: i / 180,
        RAD2DEG: 180 / i,
      },
      l = { format: {}, autodetect: [] },
      s = u.last,
      c = u.clip_rgb,
      f = u.type,
      d = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        if ("object" === f(e[0]) && e[0].constructor && e[0].constructor === this.constructor)
          return e[0];
        var n = s(e),
          r = !1;
        if (!n) {
          ((r = !0),
            l.sorted ||
              ((l.autodetect = l.autodetect.sort(function (e, t) {
                return t.p - e.p;
              })),
              (l.sorted = !0)));
          for (var o = 0, a = l.autodetect; o < a.length; o += 1) {
            var i = a[o];
            if ((n = i.test.apply(i, e))) break;
          }
        }
        if (l.format[n]) {
          var u = l.format[n].apply(null, r ? e : e.slice(0, -1));
          this._rgb = c(u);
        } else throw Error("unknown format: " + e);
        3 === this._rgb.length && this._rgb.push(1);
      };
    d.prototype.toString = function () {
      return "function" == f(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var h = function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      return new (Function.prototype.bind.apply(h.Color, [null].concat(e)))();
    };
    ((h.Color = d), (h.version = "2.4.2"));
    var p = u.unpack,
      y = Math.max,
      m = u.unpack,
      v = u.unpack,
      g = u.type,
      b = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = p(e, "rgb"),
          r = n[0],
          o = n[1],
          a = n[2],
          i = 1 - y((r /= 255), y((o /= 255), (a /= 255))),
          u = i < 1 ? 1 / (1 - i) : 0;
        return [(1 - r - i) * u, (1 - o - i) * u, (1 - a - i) * u, i];
      };
    ((d.prototype.cmyk = function () {
      return b(this._rgb);
    }),
      (h.cmyk = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["cmyk"])))();
      }),
      (l.format.cmyk = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = (e = m(e, "cmyk"))[0],
          r = e[1],
          o = e[2],
          a = e[3],
          i = e.length > 4 ? e[4] : 1;
        return 1 === a
          ? [0, 0, 0, i]
          : [
              n >= 1 ? 0 : 255 * (1 - n) * (1 - a),
              r >= 1 ? 0 : 255 * (1 - r) * (1 - a),
              o >= 1 ? 0 : 255 * (1 - o) * (1 - a),
              i,
            ];
      }),
      l.autodetect.push({
        p: 2,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === g((e = v(e, "cmyk"))) && 4 === e.length) return "cmyk";
        },
      }));
    var w = u.unpack,
      _ = u.last,
      k = function (e) {
        return Math.round(100 * e) / 100;
      },
      x = u.unpack,
      S = function () {
        for (var e, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
        var o = (n = x(n, "rgba"))[0],
          a = n[1],
          i = n[2],
          u = Math.min((o /= 255), (a /= 255), (i /= 255)),
          l = Math.max(o, a, i),
          s = (l + u) / 2;
        return (l === u
          ? ((e = 0), (t = NaN))
          : (e = s < 0.5 ? (l - u) / (l + u) : (l - u) / (2 - l - u)),
        o == l
          ? (t = (a - i) / (l - u))
          : a == l
            ? (t = 2 + (i - o) / (l - u))
            : i == l && (t = 4 + (o - a) / (l - u)),
        (t *= 60) < 0 && (t += 360),
        n.length > 3 && void 0 !== n[3])
          ? [t, e, s, n[3]]
          : [t, e, s];
      },
      E = u.unpack,
      O = u.last,
      T = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = w(e, "hsla"),
          r = _(e) || "lsa";
        return (
          (n[0] = k(n[0] || 0)),
          (n[1] = k(100 * n[1]) + "%"),
          (n[2] = k(100 * n[2]) + "%"),
          "hsla" === r || (n.length > 3 && n[3] < 1)
            ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
            : (n.length = 3),
          r + "(" + n.join(",") + ")"
        );
      },
      R = Math.round,
      A = u.unpack,
      C = Math.round,
      M = function () {
        for (var e, t, n, r, o = [], a = arguments.length; a--;) o[a] = arguments[a];
        var i = (o = A(o, "hsl"))[0],
          u = o[1],
          l = o[2];
        if (0 === u) t = n = r = 255 * l;
        else {
          var s = [0, 0, 0],
            c = [0, 0, 0],
            f = l < 0.5 ? l * (1 + u) : l + u - l * u,
            d = 2 * l - f,
            h = i / 360;
          ((s[0] = h + 1 / 3), (s[1] = h), (s[2] = h - 1 / 3));
          for (var p = 0; p < 3; p++)
            (s[p] < 0 && (s[p] += 1),
              s[p] > 1 && (s[p] -= 1),
              6 * s[p] < 1
                ? (c[p] = d + (f - d) * 6 * s[p])
                : 2 * s[p] < 1
                  ? (c[p] = f)
                  : 3 * s[p] < 2
                    ? (c[p] = d + (f - d) * (2 / 3 - s[p]) * 6)
                    : (c[p] = d));
          ((t = (e = [C(255 * c[0]), C(255 * c[1]), C(255 * c[2])])[0]), (n = e[1]), (r = e[2]));
        }
        return o.length > 3 ? [t, n, r, o[3]] : [t, n, r, 1];
      },
      D = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      P = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      N = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      j =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      L = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      z =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      U = Math.round,
      Y = function (e) {
        if (((e = e.toLowerCase().trim()), l.format.named))
          try {
            return l.format.named(e);
          } catch (e) {}
        if ((t = e.match(D))) {
          for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
          return ((n[3] = 1), n);
        }
        if ((t = e.match(P))) {
          for (var o = t.slice(1, 5), a = 0; a < 4; a++) o[a] = +o[a];
          return o;
        }
        if ((t = e.match(N))) {
          for (var i = t.slice(1, 4), u = 0; u < 3; u++) i[u] = U(2.55 * i[u]);
          return ((i[3] = 1), i);
        }
        if ((t = e.match(j))) {
          for (var s = t.slice(1, 5), c = 0; c < 3; c++) s[c] = U(2.55 * s[c]);
          return ((s[3] = +s[3]), s);
        }
        if ((t = e.match(L))) {
          var f = t.slice(1, 4);
          ((f[1] *= 0.01), (f[2] *= 0.01));
          var d = M(f);
          return ((d[3] = 1), d);
        }
        if ((t = e.match(z))) {
          var h = t.slice(1, 4);
          ((h[1] *= 0.01), (h[2] *= 0.01));
          var p = M(h);
          return ((p[3] = +t[4]), p);
        }
      };
    Y.test = function (e) {
      return D.test(e) || P.test(e) || N.test(e) || j.test(e) || L.test(e) || z.test(e);
    };
    var I = u.type,
      F = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = E(e, "rgba"),
          r = O(e) || "rgb";
        return "hsl" == r.substr(0, 3)
          ? T(S(n), r)
          : ((n[0] = R(n[0])),
            (n[1] = R(n[1])),
            (n[2] = R(n[2])),
            ("rgba" === r || (n.length > 3 && n[3] < 1)) &&
              ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
            r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
      };
    ((d.prototype.css = function (e) {
      return F(this._rgb, e);
    }),
      (h.css = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["css"])))();
      }),
      (l.format.css = Y),
      l.autodetect.push({
        p: 5,
        test: function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
          if (!t.length && "string" === I(e) && Y.test(e)) return "css";
        },
      }));
    var W = u.unpack;
    ((l.format.gl = function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = W(e, "rgba");
      return ((n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n);
    }),
      (h.gl = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["gl"])))();
      }),
      (d.prototype.gl = function () {
        var e = this._rgb;
        return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
      }));
    var H = u.unpack,
      B = u.unpack,
      q = Math.floor,
      V = u.unpack,
      $ = u.type,
      G = function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        var r = H(t, "rgb"),
          o = r[0],
          a = r[1],
          i = r[2],
          u = Math.min(o, a, i),
          l = Math.max(o, a, i),
          s = l - u;
        return (
          0 === s
            ? (e = NaN)
            : (o === l && (e = (a - i) / s),
              a === l && (e = 2 + (i - o) / s),
              i === l && (e = 4 + (o - a) / s),
              (e *= 60) < 0 && (e += 360)),
          [e, (100 * s) / 255, (u / (255 - s)) * 100]
        );
      };
    ((d.prototype.hcg = function () {
      return G(this._rgb);
    }),
      (h.hcg = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hcg"])))();
      }),
      (l.format.hcg = function () {
        for (var e, t, n, r, o, a, i, u, l, s = [], c = arguments.length; c--;) s[c] = arguments[c];
        var f = (s = B(s, "hcg"))[0],
          d = s[1],
          h = s[2];
        h *= 255;
        var p = 255 * d;
        if (0 === d) i = u = l = h;
        else {
          (360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360));
          var y = q((f /= 60)),
            m = f - y,
            v = h * (1 - d),
            g = v + p * (1 - m),
            b = v + p * m,
            w = v + p;
          switch (y) {
            case 0:
              ((i = (e = [w, b, v])[0]), (u = e[1]), (l = e[2]));
              break;
            case 1:
              ((i = (t = [g, w, v])[0]), (u = t[1]), (l = t[2]));
              break;
            case 2:
              ((i = (n = [v, w, b])[0]), (u = n[1]), (l = n[2]));
              break;
            case 3:
              ((i = (r = [v, g, w])[0]), (u = r[1]), (l = r[2]));
              break;
            case 4:
              ((i = (o = [b, v, w])[0]), (u = o[1]), (l = o[2]));
              break;
            case 5:
              ((i = (a = [w, v, g])[0]), (u = a[1]), (l = a[2]));
          }
        }
        return [i, u, l, s.length > 3 ? s[3] : 1];
      }),
      l.autodetect.push({
        p: 1,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === $((e = V(e, "hcg"))) && 3 === e.length) return "hcg";
        },
      }));
    var X = u.unpack,
      Q = u.last,
      Z = Math.round,
      K = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = X(e, "rgba"),
          r = n[0],
          o = n[1],
          a = n[2],
          i = n[3],
          u = Q(e) || "auto";
        (void 0 === i && (i = 1), "auto" === u && (u = i < 1 ? "rgba" : "rgb"), (r = Z(r)));
        var l = "000000" + ((r << 16) | ((o = Z(o)) << 8) | (a = Z(a))).toString(16);
        l = l.substr(l.length - 6);
        var s = "0" + Z(255 * i).toString(16);
        switch (((s = s.substr(s.length - 2)), u.toLowerCase())) {
          case "rgba":
            return "#" + l + s;
          case "argb":
            return "#" + s + l;
          default:
            return "#" + l;
        }
      },
      J = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      et = function (e) {
        if (e.match(J)) {
          ((4 === e.length || 7 === e.length) && (e = e.substr(1)),
            3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]));
          var t = parseInt(e, 16);
          return [t >> 16, (t >> 8) & 255, 255 & t, 1];
        }
        if (e.match(ee)) {
          ((5 === e.length || 9 === e.length) && (e = e.substr(1)),
            4 === e.length &&
              (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]));
          var n = parseInt(e, 16),
            r = Math.round(((255 & n) / 255) * 100) / 100;
          return [(n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, r];
        }
        throw Error("unknown hex color: " + e);
      },
      en = u.type;
    ((d.prototype.hex = function (e) {
      return K(this._rgb, e);
    }),
      (h.hex = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hex"])))();
      }),
      (l.format.hex = et),
      l.autodetect.push({
        p: 4,
        test: function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
          if (!t.length && "string" === en(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
            return "hex";
        },
      }));
    var er = u.unpack,
      eo = u.TWOPI,
      ea = Math.min,
      ei = Math.sqrt,
      eu = Math.acos,
      el = u.unpack,
      es = u.limit,
      ec = u.TWOPI,
      ef = u.PITHIRD,
      ed = Math.cos,
      eh = u.unpack,
      ep = u.type,
      ey = function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        var r = er(t, "rgb"),
          o = r[0],
          a = r[1],
          i = r[2],
          u = ea((o /= 255), (a /= 255), (i /= 255)),
          l = (o + a + i) / 3,
          s = l > 0 ? 1 - u / l : 0;
        return (
          0 === s
            ? (e = NaN)
            : ((e = eu((e = (o - a + (o - i)) / 2 / ei((o - a) * (o - a) + (o - i) * (a - i))))),
              i > a && (e = eo - e),
              (e /= eo)),
          [360 * e, s, l]
        );
      };
    ((d.prototype.hsi = function () {
      return ey(this._rgb);
    }),
      (h.hsi = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsi"])))();
      }),
      (l.format.hsi = function () {
        for (var e, t, n, r = [], o = arguments.length; o--;) r[o] = arguments[o];
        var a = (r = el(r, "hsi"))[0],
          i = r[1],
          u = r[2];
        return (
          isNaN(a) && (a = 0),
          isNaN(i) && (i = 0),
          a > 360 && (a -= 360),
          a < 0 && (a += 360),
          (a /= 360) < 1 / 3
            ? (t = 1 - ((n = (1 - i) / 3) + (e = (1 + (i * ed(ec * a)) / ed(ef - ec * a)) / 3)))
            : a < 2 / 3
              ? ((a -= 1 / 3),
                (n = 1 - ((e = (1 - i) / 3) + (t = (1 + (i * ed(ec * a)) / ed(ef - ec * a)) / 3))))
              : ((a -= 2 / 3),
                (e = 1 - ((t = (1 - i) / 3) + (n = (1 + (i * ed(ec * a)) / ed(ef - ec * a)) / 3)))),
          (e = es(u * e * 3)),
          [255 * e, 255 * (t = es(u * t * 3)), 255 * (n = es(u * n * 3)), r.length > 3 ? r[3] : 1]
        );
      }),
      l.autodetect.push({
        p: 2,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === ep((e = eh(e, "hsi"))) && 3 === e.length) return "hsi";
        },
      }));
    var em = u.unpack,
      ev = u.type;
    ((d.prototype.hsl = function () {
      return S(this._rgb);
    }),
      (h.hsl = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsl"])))();
      }),
      (l.format.hsl = M),
      l.autodetect.push({
        p: 2,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === ev((e = em(e, "hsl"))) && 3 === e.length) return "hsl";
        },
      }));
    var eg = u.unpack,
      eb = Math.min,
      ew = Math.max,
      e_ = u.unpack,
      ek = Math.floor,
      ex = u.unpack,
      eS = u.type,
      eE = function () {
        for (var e, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
        var o = (n = eg(n, "rgb"))[0],
          a = n[1],
          i = n[2],
          u = eb(o, a, i),
          l = ew(o, a, i),
          s = l - u;
        return (
          0 === l
            ? ((e = NaN), (t = 0))
            : ((t = s / l),
              o === l && (e = (a - i) / s),
              a === l && (e = 2 + (i - o) / s),
              i === l && (e = 4 + (o - a) / s),
              (e *= 60) < 0 && (e += 360)),
          [e, t, l / 255]
        );
      };
    ((d.prototype.hsv = function () {
      return eE(this._rgb);
    }),
      (h.hsv = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hsv"])))();
      }),
      (l.format.hsv = function () {
        for (var e, t, n, r, o, a, i, u, l, s = [], c = arguments.length; c--;) s[c] = arguments[c];
        var f = (s = e_(s, "hsv"))[0],
          d = s[1],
          h = s[2];
        if (((h *= 255), 0 === d)) i = u = l = h;
        else {
          (360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360));
          var p = ek((f /= 60)),
            y = f - p,
            m = h * (1 - d),
            v = h * (1 - d * y),
            g = h * (1 - d * (1 - y));
          switch (p) {
            case 0:
              ((i = (e = [h, g, m])[0]), (u = e[1]), (l = e[2]));
              break;
            case 1:
              ((i = (t = [v, h, m])[0]), (u = t[1]), (l = t[2]));
              break;
            case 2:
              ((i = (n = [m, h, g])[0]), (u = n[1]), (l = n[2]));
              break;
            case 3:
              ((i = (r = [m, v, h])[0]), (u = r[1]), (l = r[2]));
              break;
            case 4:
              ((i = (o = [g, m, h])[0]), (u = o[1]), (l = o[2]));
              break;
            case 5:
              ((i = (a = [h, m, v])[0]), (u = a[1]), (l = a[2]));
          }
        }
        return [i, u, l, s.length > 3 ? s[3] : 1];
      }),
      l.autodetect.push({
        p: 2,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === eS((e = ex(e, "hsv"))) && 3 === e.length) return "hsv";
        },
      }));
    var eO = 18,
      eT = 0.95047,
      eR = 1,
      eA = 1.08883,
      eC = 0.137931034,
      eM = 0.206896552,
      eD = 0.12841855,
      eP = 0.008856452,
      eN = u.unpack,
      ej = Math.pow,
      eL = function (e) {
        return (e /= 255) <= 0.04045 ? e / 12.92 : ej((e + 0.055) / 1.055, 2.4);
      },
      ez = function (e) {
        return e > eP ? ej(e, 1 / 3) : e / eD + eC;
      },
      eU = function () {
        for (var e, t, n, r = [], o = arguments.length; o--;) r[o] = arguments[o];
        var a = eN(r, "rgb"),
          i =
            ((e = a[0]),
            (t = a[1]),
            (n = a[2]),
            [
              ez(
                (0.4124564 * (e = eL(e)) + 0.3575761 * (t = eL(t)) + 0.1804375 * (n = eL(n))) / eT,
              ),
              ez((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / eR),
              ez((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / eA),
            ]),
          u = i[0],
          l = i[1],
          s = i[2],
          c = 116 * l - 16;
        return [c < 0 ? 0 : c, 500 * (u - l), 200 * (l - s)];
      },
      eY = u.unpack,
      eI = Math.pow,
      eF = function (e) {
        return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * eI(e, 1 / 2.4) - 0.055);
      },
      eW = function (e) {
        return e > eM ? e * e * e : eD * (e - eC);
      },
      eH = function () {
        for (var e, t, n, r, o = [], a = arguments.length; a--;) o[a] = arguments[a];
        var i = (o = eY(o, "lab"))[0],
          u = o[1],
          l = o[2];
        return (
          (t = (i + 16) / 116),
          (e = isNaN(u) ? t : t + u / 500),
          (n = isNaN(l) ? t : t - l / 200),
          (t = eR * eW(t)),
          (r = eF(3.2404542 * (e = eT * eW(e)) - 1.5371385 * t - 0.4985314 * (n = eA * eW(n)))),
          [
            r,
            eF(-0.969266 * e + 1.8760108 * t + 0.041556 * n),
            eF(0.0556434 * e - 0.2040259 * t + 1.0572252 * n),
            o.length > 3 ? o[3] : 1,
          ]
        );
      },
      eB = u.unpack,
      eq = u.type;
    ((d.prototype.lab = function () {
      return eU(this._rgb);
    }),
      (h.lab = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["lab"])))();
      }),
      (l.format.lab = eH),
      l.autodetect.push({
        p: 2,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === eq((e = eB(e, "lab"))) && 3 === e.length) return "lab";
        },
      }));
    var eV = u.unpack,
      e$ = u.RAD2DEG,
      eG = Math.sqrt,
      eX = Math.atan2,
      eQ = Math.round,
      eZ = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = eV(e, "lab"),
          r = n[0],
          o = n[1],
          a = n[2],
          i = eG(o * o + a * a),
          u = (eX(a, o) * e$ + 360) % 360;
        return (0 === eQ(1e4 * i) && (u = NaN), [r, i, u]);
      },
      eK = u.unpack,
      eJ = u.unpack,
      e0 = u.DEG2RAD,
      e1 = Math.sin,
      e2 = Math.cos,
      e3 = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = eJ(e, "lch"),
          r = n[0],
          o = n[1],
          a = n[2];
        return (isNaN(a) && (a = 0), [r, e2((a *= e0)) * o, e1(a) * o]);
      },
      e5 = u.unpack,
      e6 = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = e3((e = e5(e, "lch"))[0], e[1], e[2]),
          r = eH(n[0], n[1], n[2]);
        return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
      },
      e4 = u.unpack,
      e8 = u.unpack,
      e9 = u.type,
      e7 = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = eK(e, "rgb"),
          r = eU(n[0], n[1], n[2]);
        return eZ(r[0], r[1], r[2]);
      };
    ((d.prototype.lch = function () {
      return e7(this._rgb);
    }),
      (d.prototype.hcl = function () {
        return e7(this._rgb).reverse();
      }),
      (h.lch = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["lch"])))();
      }),
      (h.hcl = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["hcl"])))();
      }),
      (l.format.lch = e6),
      (l.format.hcl = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = e4(e, "hcl").reverse();
        return e6.apply(void 0, n);
      }),
      ["lch", "hcl"].forEach(function (e) {
        return l.autodetect.push({
          p: 2,
          test: function () {
            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
            if ("array" === e9((t = e8(t, e))) && 3 === t.length) return e;
          },
        });
      }));
    var te = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      },
      tt = u.type;
    ((d.prototype.name = function () {
      for (var e = K(this._rgb, "rgb"), t = 0, n = Object.keys(te); t < n.length; t += 1) {
        var r = n[t];
        if (te[r] === e) return r.toLowerCase();
      }
      return e;
    }),
      (l.format.named = function (e) {
        if (te[(e = e.toLowerCase())]) return et(te[e]);
        throw Error("unknown color name: " + e);
      }),
      l.autodetect.push({
        p: 5,
        test: function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
          if (!t.length && "string" === tt(e) && te[e.toLowerCase()]) return "named";
        },
      }));
    var tn = u.unpack,
      tr = u.type,
      to = u.type,
      ta = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = tn(e, "rgb");
        return (n[0] << 16) + (n[1] << 8) + n[2];
      };
    ((d.prototype.num = function () {
      return ta(this._rgb);
    }),
      (h.num = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["num"])))();
      }),
      (l.format.num = function (e) {
        if ("number" == tr(e) && e >= 0 && e <= 0xffffff)
          return [e >> 16, (e >> 8) & 255, 255 & e, 1];
        throw Error("unknown num color: " + e);
      }),
      l.autodetect.push({
        p: 5,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if (1 === e.length && "number" === to(e[0]) && e[0] >= 0 && e[0] <= 0xffffff)
            return "num";
        },
      }));
    var ti = u.unpack,
      tu = u.type,
      tl = Math.round;
    ((d.prototype.rgb = function (e) {
      return (void 0 === e && (e = !0), !1 === e)
        ? this._rgb.slice(0, 3)
        : this._rgb.slice(0, 3).map(tl);
    }),
      (d.prototype.rgba = function (e) {
        return (
          void 0 === e && (e = !0),
          this._rgb.slice(0, 4).map(function (t, n) {
            return n < 3 ? (!1 === e ? t : tl(t)) : t;
          })
        );
      }),
      (h.rgb = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["rgb"])))();
      }),
      (l.format.rgb = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = ti(e, "rgba");
        return (void 0 === n[3] && (n[3] = 1), n);
      }),
      l.autodetect.push({
        p: 3,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if (
            "array" === tu((e = ti(e, "rgba"))) &&
            (3 === e.length || (4 === e.length && "number" == tu(e[3]) && e[3] >= 0 && e[3] <= 1))
          )
            return "rgb";
        },
      }));
    var ts = Math.log,
      tc = function (e) {
        var t,
          n,
          r,
          o = e / 100;
        return (
          o < 66
            ? ((t = 255),
              (n =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (n = o - 2) +
                    104.49216199393888 * ts(n)),
              (r =
                o < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (r = o - 10) +
                    115.67994401066147 * ts(r)))
            : ((t =
                351.97690566805693 + 0.114206453784165 * (t = o - 55) - 40.25366309332127 * ts(t)),
              (n =
                325.4494125711974 + 0.07943456536662342 * (n = o - 50) - 28.0852963507957 * ts(n)),
              (r = 255)),
          [t, n, r, 1]
        );
      },
      tf = u.unpack,
      td = Math.round,
      th = function () {
        for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
        for (var r = tf(t, "rgb"), o = r[0], a = r[2], i = 1e3, u = 4e4; u - i > 0.4;) {
          var l = tc((e = (u + i) * 0.5));
          l[2] / l[0] >= a / o ? (u = e) : (i = e);
        }
        return td(e);
      };
    ((d.prototype.temp =
      d.prototype.kelvin =
      d.prototype.temperature =
        function () {
          return th(this._rgb);
        }),
      (h.temp =
        h.kelvin =
        h.temperature =
          function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(d, [null].concat(e, ["temp"])))();
          }),
      (l.format.temp = l.format.kelvin = l.format.temperature = tc));
    var tp = u.unpack,
      ty = Math.cbrt,
      tm = Math.pow,
      tv = Math.sign,
      tg = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = tp(e, "rgb"),
          r = n[0],
          o = n[1],
          a = n[2],
          i = [tb(r / 255), tb(o / 255), tb(a / 255)],
          u = i[0],
          l = i[1],
          s = i[2],
          c = ty(0.4122214708 * u + 0.5363325363 * l + 0.0514459929 * s),
          f = ty(0.2119034982 * u + 0.6806995451 * l + 0.1073969566 * s),
          d = ty(0.0883024619 * u + 0.2817188376 * l + 0.6299787005 * s);
        return [
          0.2104542553 * c + 0.793617785 * f - 0.0040720468 * d,
          1.9779984951 * c - 2.428592205 * f + 0.4505937099 * d,
          0.0259040371 * c + 0.7827717662 * f - 0.808675766 * d,
        ];
      };
    function tb(e) {
      var t = Math.abs(e);
      return t < 0.04045 ? e / 12.92 : (tv(e) || 1) * tm((t + 0.055) / 1.055, 2.4);
    }
    var tw = u.unpack,
      t_ = Math.pow,
      tk = Math.sign,
      tx = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = (e = tw(e, "lab"))[0],
          r = e[1],
          o = e[2],
          a = t_(n + 0.3963377774 * r + 0.2158037573 * o, 3),
          i = t_(n - 0.1055613458 * r - 0.0638541728 * o, 3),
          u = t_(n - 0.0894841775 * r - 1.291485548 * o, 3);
        return [
          255 * tS(4.0767416621 * a - 3.3077115913 * i + 0.2309699292 * u),
          255 * tS(-1.2684380046 * a + 2.6097574011 * i - 0.3413193965 * u),
          255 * tS(-0.0041960863 * a - 0.7034186147 * i + 1.707614701 * u),
          e.length > 3 ? e[3] : 1,
        ];
      };
    function tS(e) {
      var t = Math.abs(e);
      return t > 0.0031308 ? (tk(e) || 1) * (1.055 * t_(t, 1 / 2.4) - 0.055) : 12.92 * e;
    }
    var tE = u.unpack,
      tO = u.type;
    ((d.prototype.oklab = function () {
      return tg(this._rgb);
    }),
      (h.oklab = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["oklab"])))();
      }),
      (l.format.oklab = tx),
      l.autodetect.push({
        p: 3,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === tO((e = tE(e, "oklab"))) && 3 === e.length) return "oklab";
        },
      }));
    var tT = u.unpack,
      tR = u.unpack,
      tA = u.unpack,
      tC = u.type,
      tM = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = tT(e, "rgb"),
          r = tg(n[0], n[1], n[2]);
        return eZ(r[0], r[1], r[2]);
      };
    ((d.prototype.oklch = function () {
      return tM(this._rgb);
    }),
      (h.oklch = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return new (Function.prototype.bind.apply(d, [null].concat(e, ["oklch"])))();
      }),
      (l.format.oklch = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = e3((e = tR(e, "lch"))[0], e[1], e[2]),
          r = tx(n[0], n[1], n[2]);
        return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1];
      }),
      l.autodetect.push({
        p: 3,
        test: function () {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          if ("array" === tC((e = tA(e, "oklch"))) && 3 === e.length) return "oklch";
        },
      }));
    var tD = u.type;
    ((d.prototype.alpha = function (e, t) {
      return (void 0 === t && (t = !1), void 0 !== e && "number" === tD(e))
        ? t
          ? ((this._rgb[3] = e), this)
          : new d([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
        : this._rgb[3];
    }),
      (d.prototype.clipped = function () {
        return this._rgb._clipped || !1;
      }),
      (d.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this.lab();
        return ((t[0] -= eO * e), new d(t, "lab").alpha(this.alpha(), !0));
      }),
      (d.prototype.brighten = function (e) {
        return (void 0 === e && (e = 1), this.darken(-e));
      }),
      (d.prototype.darker = d.prototype.darken),
      (d.prototype.brighter = d.prototype.brighten),
      (d.prototype.get = function (e) {
        var t = e.split("."),
          n = t[0],
          r = t[1],
          o = this[n]();
        if (!r) return o;
        var a = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
        if (a > -1) return o[a];
        throw Error("unknown channel " + r + " in mode " + n);
      }));
    var tP = u.type,
      tN = Math.pow;
    d.prototype.luminance = function (e) {
      if (void 0 !== e && "number" === tP(e)) {
        if (0 === e) return new d([0, 0, 0, this._rgb[3]], "rgb");
        if (1 === e) return new d([255, 255, 255, this._rgb[3]], "rgb");
        var t = this.luminance(),
          n = 20,
          r = function (t, o) {
            var a = t.interpolate(o, 0.5, "rgb"),
              i = a.luminance();
            return !(1e-7 > Math.abs(e - i)) && n-- ? (i > e ? r(t, a) : r(a, o)) : a;
          },
          o = (t > e ? r(new d([0, 0, 0]), this) : r(this, new d([255, 255, 255]))).rgb();
        return new d(o.concat([this._rgb[3]]));
      }
      return tj.apply(void 0, this._rgb.slice(0, 3));
    };
    var tj = function (e, t, n) {
        return ((e = tL(e)), 0.2126 * e + 0.7152 * (t = tL(t)) + 0.0722 * (n = tL(n)));
      },
      tL = function (e) {
        return (e /= 255) <= 0.03928 ? e / 12.92 : tN((e + 0.055) / 1.055, 2.4);
      },
      tz = {},
      tU = u.type,
      tY = function (e, t, n) {
        void 0 === n && (n = 0.5);
        for (var r = [], o = arguments.length - 3; o-- > 0;) r[o] = arguments[o + 3];
        var a = r[0] || "lrgb";
        if ((tz[a] || r.length || (a = Object.keys(tz)[0]), !tz[a]))
          throw Error("interpolation mode " + a + " is not defined");
        return (
          "object" !== tU(e) && (e = new d(e)),
          "object" !== tU(t) && (t = new d(t)),
          tz[a](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
        );
      };
    ((d.prototype.mix = d.prototype.interpolate =
      function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
        return tY.apply(void 0, [this, e, t].concat(n));
      }),
      (d.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
          n = t[3];
        return e
          ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
          : new d([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
      }),
      (d.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this.lch();
        return ((t[1] += eO * e), t[1] < 0 && (t[1] = 0), new d(t, "lch").alpha(this.alpha(), !0));
      }),
      (d.prototype.desaturate = function (e) {
        return (void 0 === e && (e = 1), this.saturate(-e));
      }));
    var tI = u.type;
    ((d.prototype.set = function (e, t, n) {
      void 0 === n && (n = !1);
      var r = e.split("."),
        o = r[0],
        a = r[1],
        i = this[o]();
      if (!a) return i;
      var u = o.indexOf(a) - 2 * ("ok" === o.substr(0, 2));
      if (u > -1) {
        if ("string" == tI(t))
          switch (t.charAt(0)) {
            case "+":
            case "-":
              i[u] += +t;
              break;
            case "*":
              i[u] *= t.substr(1);
              break;
            case "/":
              i[u] /= t.substr(1);
              break;
            default:
              i[u] = +t;
          }
        else if ("number" === tI(t)) i[u] = t;
        else throw Error("unsupported value for Color.set");
        var l = new d(i, o);
        return n ? ((this._rgb = l._rgb), this) : l;
      }
      throw Error("unknown channel " + a + " in mode " + o);
    }),
      (tz.rgb = function (e, t, n) {
        var r = e._rgb,
          o = t._rgb;
        return new d(
          r[0] + n * (o[0] - r[0]),
          r[1] + n * (o[1] - r[1]),
          r[2] + n * (o[2] - r[2]),
          "rgb",
        );
      }));
    var tF = Math.sqrt,
      tW = Math.pow;
    ((tz.lrgb = function (e, t, n) {
      var r = e._rgb,
        o = r[0],
        a = r[1],
        i = r[2],
        u = t._rgb,
        l = u[0],
        s = u[1],
        c = u[2];
      return new d(
        tF(tW(o, 2) * (1 - n) + tW(l, 2) * n),
        tF(tW(a, 2) * (1 - n) + tW(s, 2) * n),
        tF(tW(i, 2) * (1 - n) + tW(c, 2) * n),
        "rgb",
      );
    }),
      (tz.lab = function (e, t, n) {
        var r = e.lab(),
          o = t.lab();
        return new d(
          r[0] + n * (o[0] - r[0]),
          r[1] + n * (o[1] - r[1]),
          r[2] + n * (o[2] - r[2]),
          "lab",
        );
      }));
    var tH = function (e, t, n, r) {
        var o, a, i, u, l, s, c, f, h, p, y, m, v, g;
        return (
          "hsl" === r
            ? ((i = e.hsl()), (u = t.hsl()))
            : "hsv" === r
              ? ((i = e.hsv()), (u = t.hsv()))
              : "hcg" === r
                ? ((i = e.hcg()), (u = t.hcg()))
                : "hsi" === r
                  ? ((i = e.hsi()), (u = t.hsi()))
                  : "lch" === r || "hcl" === r
                    ? ((r = "hcl"), (i = e.hcl()), (u = t.hcl()))
                    : "oklch" === r && ((i = e.oklch().reverse()), (u = t.oklch().reverse())),
          ("h" === r.substr(0, 1) || "oklch" === r) &&
            ((l = (o = i)[0]), (c = o[1]), (h = o[2]), (s = (a = u)[0]), (f = a[1]), (p = a[2])),
          isNaN(l) || isNaN(s)
            ? isNaN(l)
              ? isNaN(s)
                ? (m = NaN)
                : ((m = s), (1 == h || 0 == h) && "hsv" != r && (y = f))
              : ((m = l), (1 == p || 0 == p) && "hsv" != r && (y = c))
            : ((g =
                s > l && s - l > 180 ? s - (l + 360) : s < l && l - s > 180 ? s + 360 - l : s - l),
              (m = l + n * g)),
          void 0 === y && (y = c + n * (f - c)),
          (v = h + n * (p - h)),
          "oklch" === r ? new d([v, y, m], r) : new d([m, y, v], r)
        );
      },
      tB = function (e, t, n) {
        return tH(e, t, n, "lch");
      };
    ((tz.lch = tB),
      (tz.hcl = tB),
      (tz.num = function (e, t, n) {
        var r = e.num();
        return new d(r + n * (t.num() - r), "num");
      }),
      (tz.hcg = function (e, t, n) {
        return tH(e, t, n, "hcg");
      }),
      (tz.hsi = function (e, t, n) {
        return tH(e, t, n, "hsi");
      }),
      (tz.hsl = function (e, t, n) {
        return tH(e, t, n, "hsl");
      }),
      (tz.hsv = function (e, t, n) {
        return tH(e, t, n, "hsv");
      }),
      (tz.oklab = function (e, t, n) {
        var r = e.oklab(),
          o = t.oklab();
        return new d(
          r[0] + n * (o[0] - r[0]),
          r[1] + n * (o[1] - r[1]),
          r[2] + n * (o[2] - r[2]),
          "oklab",
        );
      }),
      (tz.oklch = function (e, t, n) {
        return tH(e, t, n, "oklch");
      }));
    var tq = u.clip_rgb,
      tV = Math.pow,
      t$ = Math.sqrt,
      tG = Math.PI,
      tX = Math.cos,
      tQ = Math.sin,
      tZ = Math.atan2,
      tK = function (e, t) {
        for (var n = e.length, r = [0, 0, 0, 0], o = 0; o < e.length; o++) {
          var a = e[o],
            i = t[o] / n,
            u = a._rgb;
          ((r[0] += tV(u[0], 2) * i),
            (r[1] += tV(u[1], 2) * i),
            (r[2] += tV(u[2], 2) * i),
            (r[3] += u[3] * i));
        }
        return (
          (r[0] = t$(r[0])),
          (r[1] = t$(r[1])),
          (r[2] = t$(r[2])),
          r[3] > 0.9999999 && (r[3] = 1),
          new d(tq(r))
        );
      },
      tJ = u.type,
      t0 = Math.pow,
      t1 = function (e) {
        var t = "rgb",
          n = h("#ccc"),
          r = 0,
          o = [0, 1],
          a = [],
          i = [0, 0],
          u = !1,
          l = [],
          s = !1,
          c = 0,
          f = 1,
          d = !1,
          p = {},
          y = !0,
          m = 1,
          v = function (e) {
            if (
              ("string" === tJ((e = e || ["#fff", "#000"])) &&
                h.brewer &&
                h.brewer[e.toLowerCase()] &&
                (e = h.brewer[e.toLowerCase()]),
              "array" === tJ(e))
            ) {
              (1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0)));
              for (var t = 0; t < e.length; t++) e[t] = h(e[t]);
              a.length = 0;
              for (var n = 0; n < e.length; n++) a.push(n / (e.length - 1));
            }
            return (k(), (l = e));
          },
          g = function (e) {
            if (null != u) {
              for (var t = u.length - 1, n = 0; n < t && e >= u[n];) n++;
              return n - 1;
            }
            return 0;
          },
          b = function (e) {
            return e;
          },
          w = function (e) {
            return e;
          },
          _ = function (e, r) {
            if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
            if (r) s = e;
            else if (u && u.length > 2) {
              var o, s;
              s = g(e) / (u.length - 2);
            } else s = f !== c ? (e - c) / (f - c) : 1;
            ((s = w(s)), r || (s = b(s)), 1 !== m && (s = t0(s, m)));
            var d = Math.floor(
              1e4 * (s = Math.min(1, Math.max(0, (s = i[0] + s * (1 - i[0] - i[1]))))),
            );
            if (y && p[d]) o = p[d];
            else {
              if ("array" === tJ(l))
                for (var v = 0; v < a.length; v++) {
                  var _ = a[v];
                  if (s <= _ || (s >= _ && v === a.length - 1)) {
                    o = l[v];
                    break;
                  }
                  if (s > _ && s < a[v + 1]) {
                    ((s = (s - _) / (a[v + 1] - _)), (o = h.interpolate(l[v], l[v + 1], s, t)));
                    break;
                  }
                }
              else "function" === tJ(l) && (o = l(s));
              y && (p[d] = o);
            }
            return o;
          },
          k = function () {
            return (p = {});
          };
        v(e);
        var x = function (e) {
          var t = h(_(e));
          return s && t[s] ? t[s]() : t;
        };
        return (
          (x.classes = function (e) {
            if (null != e) {
              if ("array" === tJ(e)) ((u = e), (o = [e[0], e[e.length - 1]]));
              else {
                var t = h.analyze(o);
                u = 0 === e ? [t.min, t.max] : h.limits(t, "e", e);
              }
              return x;
            }
            return u;
          }),
          (x.domain = function (e) {
            if (!arguments.length) return o;
            ((c = e[0]), (f = e[e.length - 1]), (a = []));
            var t = l.length;
            if (e.length === t && c !== f)
              for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                var i = r[n];
                a.push((i - c) / (f - c));
              }
            else {
              for (var u = 0; u < t; u++) a.push(u / (t - 1));
              if (e.length > 2) {
                var s = e.map(function (t, n) {
                    return n / (e.length - 1);
                  }),
                  d = e.map(function (e) {
                    return (e - c) / (f - c);
                  });
                d.every(function (e, t) {
                  return s[t] === e;
                }) ||
                  (w = function (e) {
                    if (e <= 0 || e >= 1) return e;
                    for (var t = 0; e >= d[t + 1];) t++;
                    var n = (e - d[t]) / (d[t + 1] - d[t]);
                    return s[t] + n * (s[t + 1] - s[t]);
                  });
              }
            }
            return ((o = [c, f]), x);
          }),
          (x.mode = function (e) {
            return arguments.length ? ((t = e), k(), x) : t;
          }),
          (x.range = function (e, t) {
            return (v(e), x);
          }),
          (x.out = function (e) {
            return ((s = e), x);
          }),
          (x.spread = function (e) {
            return arguments.length ? ((r = e), x) : r;
          }),
          (x.correctLightness = function (e) {
            return (
              null == e && (e = !0),
              (d = e),
              k(),
              (b = d
                ? function (e) {
                    for (
                      var t = _(0, !0).lab()[0],
                        n = _(1, !0).lab()[0],
                        r = t > n,
                        o = _(e, !0).lab()[0],
                        a = t + (n - t) * e,
                        i = o - a,
                        u = 0,
                        l = 1,
                        s = 20;
                      Math.abs(i) > 0.01 && s-- > 0;
                    )
                      (r && (i *= -1),
                        i < 0 ? ((u = e), (e += (l - e) * 0.5)) : ((l = e), (e += (u - e) * 0.5)),
                        (i = (o = _(e, !0).lab()[0]) - a));
                    return e;
                  }
                : function (e) {
                    return e;
                  }),
              x
            );
          }),
          (x.padding = function (e) {
            return null != e ? ("number" === tJ(e) && (e = [e, e]), (i = e), x) : i;
          }),
          (x.colors = function (t, n) {
            arguments.length < 2 && (n = "hex");
            var r = [];
            if (0 == arguments.length) r = l.slice(0);
            else if (1 === t) r = [x(0.5)];
            else if (t > 1) {
              var a = o[0],
                i = o[1] - a;
              r = (function (e, t) {
                for (
                  var n = [], r = 0 < e, o = t ? (r ? e + 1 : e - 1) : e, a = 0;
                  r ? a < o : a > o;
                  r ? a++ : a--
                )
                  n.push(a);
                return n;
              })(t, !1).map(function (e) {
                return x(a + (e / (t - 1)) * i);
              });
            } else {
              e = [];
              var s = [];
              if (u && u.length > 2)
                for (var c = 1, f = u.length, d = 1 <= f; d ? c < f : c > f; d ? c++ : c--)
                  s.push((u[c - 1] + u[c]) * 0.5);
              else s = o;
              r = s.map(function (e) {
                return x(e);
              });
            }
            return (
              h[n] &&
                (r = r.map(function (e) {
                  return e[n]();
                })),
              r
            );
          }),
          (x.cache = function (e) {
            return null != e ? ((y = e), x) : y;
          }),
          (x.gamma = function (e) {
            return null != e ? ((m = e), x) : m;
          }),
          (x.nodata = function (e) {
            return null != e ? ((n = h(e)), x) : n;
          }),
          x
        );
      },
      t2 = function (e) {
        for (var t = [1, 1], n = 1; n < e; n++) {
          for (var r = [1], o = 1; o <= t.length; o++) r[o] = (t[o] || 0) + t[o - 1];
          t = r;
        }
        return t;
      },
      t3 = function (e) {
        var t, n, r, o, a, i, u, l, s, c, f;
        if (
          2 ===
          (e = e.map(function (e) {
            return new d(e);
          })).length
        )
          ((a = (t = e.map(function (e) {
            return e.lab();
          }))[0]),
            (i = t[1]),
            (o = function (e) {
              return new d(
                [0, 1, 2].map(function (t) {
                  return a[t] + e * (i[t] - a[t]);
                }),
                "lab",
              );
            }));
        else if (3 === e.length)
          ((a = (n = e.map(function (e) {
            return e.lab();
          }))[0]),
            (i = n[1]),
            (u = n[2]),
            (o = function (e) {
              return new d(
                [0, 1, 2].map(function (t) {
                  return (1 - e) * (1 - e) * a[t] + 2 * (1 - e) * e * i[t] + e * e * u[t];
                }),
                "lab",
              );
            }));
        else if (4 === e.length)
          ((a = (r = e.map(function (e) {
            return e.lab();
          }))[0]),
            (i = r[1]),
            (u = r[2]),
            (l = r[3]),
            (o = function (e) {
              return new d(
                [0, 1, 2].map(function (t) {
                  return (
                    (1 - e) * (1 - e) * (1 - e) * a[t] +
                    3 * (1 - e) * (1 - e) * e * i[t] +
                    3 * (1 - e) * e * e * u[t] +
                    e * e * e * l[t]
                  );
                }),
                "lab",
              );
            }));
        else if (e.length >= 5)
          ((s = e.map(function (e) {
            return e.lab();
          })),
            (c = t2((f = e.length - 1))),
            (o = function (e) {
              var t = 1 - e;
              return new d(
                [0, 1, 2].map(function (n) {
                  return s.reduce(function (r, o, a) {
                    return r + c[a] * Math.pow(t, f - a) * Math.pow(e, a) * o[n];
                  }, 0);
                }),
                "lab",
              );
            }));
        else throw RangeError("No point in running bezier with only one color.");
        return o;
      },
      t5 = function (e, t, n) {
        if (!t5[n]) throw Error("unknown blend mode " + n);
        return t5[n](e, t);
      },
      t6 = function (e) {
        return function (t, n) {
          var r = h(n).rgb(),
            o = h(t).rgb();
          return h.rgb(e(r, o));
        };
      },
      t4 = function (e) {
        return function (t, n) {
          var r = [];
          return ((r[0] = e(t[0], n[0])), (r[1] = e(t[1], n[1])), (r[2] = e(t[2], n[2])), r);
        };
      };
    ((t5.normal = t6(
      t4(function (e) {
        return e;
      }),
    )),
      (t5.multiply = t6(
        t4(function (e, t) {
          return (e * t) / 255;
        }),
      )),
      (t5.screen = t6(
        t4(function (e, t) {
          return 255 * (1 - (1 - e / 255) * (1 - t / 255));
        }),
      )),
      (t5.overlay = t6(
        t4(function (e, t) {
          return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
        }),
      )),
      (t5.darken = t6(
        t4(function (e, t) {
          return e > t ? t : e;
        }),
      )),
      (t5.lighten = t6(
        t4(function (e, t) {
          return e > t ? e : t;
        }),
      )),
      (t5.dodge = t6(
        t4(function (e, t) {
          return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
        }),
      )),
      (t5.burn = t6(
        t4(function (e, t) {
          return 255 * (1 - (1 - t / 255) / (e / 255));
        }),
      )));
    for (
      var t8 = u.type,
        t9 = u.clip_rgb,
        t7 = u.TWOPI,
        ne = Math.pow,
        nt = Math.sin,
        nn = Math.cos,
        nr = Math.floor,
        no = Math.random,
        na = Math.log,
        ni = Math.pow,
        nu = Math.floor,
        nl = Math.abs,
        ns = function (e, t) {
          void 0 === t && (t = null);
          var n = {
            min: Number.MAX_VALUE,
            max: -1 * Number.MAX_VALUE,
            sum: 0,
            values: [],
            count: 0,
          };
          return (
            "object" === a(e) && (e = Object.values(e)),
            e.forEach(function (e) {
              (t && "object" === a(e) && (e = e[t]),
                null == e ||
                  isNaN(e) ||
                  (n.values.push(e),
                  (n.sum += e),
                  e < n.min && (n.min = e),
                  e > n.max && (n.max = e),
                  (n.count += 1)));
            }),
            (n.domain = [n.min, n.max]),
            (n.limits = function (e, t) {
              return nc(n, e, t);
            }),
            n
          );
        },
        nc = function (e, t, n) {
          (void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == a(e) && (e = ns(e)));
          var r = e.min,
            o = e.max,
            i = e.values.sort(function (e, t) {
              return e - t;
            });
          if (1 === n) return [r, o];
          var u = [];
          if (("c" === t.substr(0, 1) && (u.push(r), u.push(o)), "e" === t.substr(0, 1))) {
            u.push(r);
            for (var l = 1; l < n; l++) u.push(r + (l / n) * (o - r));
            u.push(o);
          } else if ("l" === t.substr(0, 1)) {
            if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
            var s = Math.LOG10E * na(r),
              c = Math.LOG10E * na(o);
            u.push(r);
            for (var f = 1; f < n; f++) u.push(ni(10, s + (f / n) * (c - s)));
            u.push(o);
          } else if ("q" === t.substr(0, 1)) {
            u.push(r);
            for (var d = 1; d < n; d++) {
              var h = ((i.length - 1) * d) / n,
                p = nu(h);
              if (p === h) u.push(i[p]);
              else {
                var y = h - p;
                u.push(i[p] * (1 - y) + i[p + 1] * y);
              }
            }
            u.push(o);
          } else if ("k" === t.substr(0, 1)) {
            var m,
              v = i.length,
              g = Array(v),
              b = Array(n),
              w = !0,
              _ = 0,
              k = null;
            (k = []).push(r);
            for (var x = 1; x < n; x++) k.push(r + (x / n) * (o - r));
            for (k.push(o); w;) {
              for (var S = 0; S < n; S++) b[S] = 0;
              for (var E = 0; E < v; E++)
                for (var O = i[E], T = Number.MAX_VALUE, R = void 0, A = 0; A < n; A++) {
                  var C = nl(k[A] - O);
                  (C < T && ((T = C), (R = A)), b[R]++, (g[E] = R));
                }
              for (var M = Array(n), D = 0; D < n; D++) M[D] = null;
              for (var P = 0; P < v; P++) null === M[(m = g[P])] ? (M[m] = i[P]) : (M[m] += i[P]);
              for (var N = 0; N < n; N++) M[N] *= 1 / b[N];
              w = !1;
              for (var j = 0; j < n; j++)
                if (M[j] !== k[j]) {
                  w = !0;
                  break;
                }
              ((k = M), ++_ > 200 && (w = !1));
            }
            for (var L = {}, z = 0; z < n; z++) L[z] = [];
            for (var U = 0; U < v; U++) L[(m = g[U])].push(i[U]);
            for (var Y = [], I = 0; I < n; I++) (Y.push(L[I][0]), Y.push(L[I][L[I].length - 1]));
            ((Y = Y.sort(function (e, t) {
              return e - t;
            })),
              u.push(Y[0]));
            for (var F = 1; F < Y.length; F += 2) {
              var W = Y[F];
              isNaN(W) || -1 !== u.indexOf(W) || u.push(W);
            }
          }
          return u;
        },
        nf = Math.sqrt,
        nd = Math.pow,
        nh = Math.min,
        np = Math.max,
        ny = Math.atan2,
        nm = Math.abs,
        nv = Math.cos,
        ng = Math.sin,
        nb = Math.exp,
        nw = Math.PI,
        n_ = {
          OrRd: [
            "#fff7ec",
            "#fee8c8",
            "#fdd49e",
            "#fdbb84",
            "#fc8d59",
            "#ef6548",
            "#d7301f",
            "#b30000",
            "#7f0000",
          ],
          PuBu: [
            "#fff7fb",
            "#ece7f2",
            "#d0d1e6",
            "#a6bddb",
            "#74a9cf",
            "#3690c0",
            "#0570b0",
            "#045a8d",
            "#023858",
          ],
          BuPu: [
            "#f7fcfd",
            "#e0ecf4",
            "#bfd3e6",
            "#9ebcda",
            "#8c96c6",
            "#8c6bb1",
            "#88419d",
            "#810f7c",
            "#4d004b",
          ],
          Oranges: [
            "#fff5eb",
            "#fee6ce",
            "#fdd0a2",
            "#fdae6b",
            "#fd8d3c",
            "#f16913",
            "#d94801",
            "#a63603",
            "#7f2704",
          ],
          BuGn: [
            "#f7fcfd",
            "#e5f5f9",
            "#ccece6",
            "#99d8c9",
            "#66c2a4",
            "#41ae76",
            "#238b45",
            "#006d2c",
            "#00441b",
          ],
          YlOrBr: [
            "#ffffe5",
            "#fff7bc",
            "#fee391",
            "#fec44f",
            "#fe9929",
            "#ec7014",
            "#cc4c02",
            "#993404",
            "#662506",
          ],
          YlGn: [
            "#ffffe5",
            "#f7fcb9",
            "#d9f0a3",
            "#addd8e",
            "#78c679",
            "#41ab5d",
            "#238443",
            "#006837",
            "#004529",
          ],
          Reds: [
            "#fff5f0",
            "#fee0d2",
            "#fcbba1",
            "#fc9272",
            "#fb6a4a",
            "#ef3b2c",
            "#cb181d",
            "#a50f15",
            "#67000d",
          ],
          RdPu: [
            "#fff7f3",
            "#fde0dd",
            "#fcc5c0",
            "#fa9fb5",
            "#f768a1",
            "#dd3497",
            "#ae017e",
            "#7a0177",
            "#49006a",
          ],
          Greens: [
            "#f7fcf5",
            "#e5f5e0",
            "#c7e9c0",
            "#a1d99b",
            "#74c476",
            "#41ab5d",
            "#238b45",
            "#006d2c",
            "#00441b",
          ],
          YlGnBu: [
            "#ffffd9",
            "#edf8b1",
            "#c7e9b4",
            "#7fcdbb",
            "#41b6c4",
            "#1d91c0",
            "#225ea8",
            "#253494",
            "#081d58",
          ],
          Purples: [
            "#fcfbfd",
            "#efedf5",
            "#dadaeb",
            "#bcbddc",
            "#9e9ac8",
            "#807dba",
            "#6a51a3",
            "#54278f",
            "#3f007d",
          ],
          GnBu: [
            "#f7fcf0",
            "#e0f3db",
            "#ccebc5",
            "#a8ddb5",
            "#7bccc4",
            "#4eb3d3",
            "#2b8cbe",
            "#0868ac",
            "#084081",
          ],
          Greys: [
            "#ffffff",
            "#f0f0f0",
            "#d9d9d9",
            "#bdbdbd",
            "#969696",
            "#737373",
            "#525252",
            "#252525",
            "#000000",
          ],
          YlOrRd: [
            "#ffffcc",
            "#ffeda0",
            "#fed976",
            "#feb24c",
            "#fd8d3c",
            "#fc4e2a",
            "#e31a1c",
            "#bd0026",
            "#800026",
          ],
          PuRd: [
            "#f7f4f9",
            "#e7e1ef",
            "#d4b9da",
            "#c994c7",
            "#df65b0",
            "#e7298a",
            "#ce1256",
            "#980043",
            "#67001f",
          ],
          Blues: [
            "#f7fbff",
            "#deebf7",
            "#c6dbef",
            "#9ecae1",
            "#6baed6",
            "#4292c6",
            "#2171b5",
            "#08519c",
            "#08306b",
          ],
          PuBuGn: [
            "#fff7fb",
            "#ece2f0",
            "#d0d1e6",
            "#a6bddb",
            "#67a9cf",
            "#3690c0",
            "#02818a",
            "#016c59",
            "#014636",
          ],
          Viridis: [
            "#440154",
            "#482777",
            "#3f4a8a",
            "#31678e",
            "#26838f",
            "#1f9d8a",
            "#6cce5a",
            "#b6de2b",
            "#fee825",
          ],
          Spectral: [
            "#9e0142",
            "#d53e4f",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#e6f598",
            "#abdda4",
            "#66c2a5",
            "#3288bd",
            "#5e4fa2",
          ],
          RdYlGn: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#d9ef8b",
            "#a6d96a",
            "#66bd63",
            "#1a9850",
            "#006837",
          ],
          RdBu: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#f7f7f7",
            "#d1e5f0",
            "#92c5de",
            "#4393c3",
            "#2166ac",
            "#053061",
          ],
          PiYG: [
            "#8e0152",
            "#c51b7d",
            "#de77ae",
            "#f1b6da",
            "#fde0ef",
            "#f7f7f7",
            "#e6f5d0",
            "#b8e186",
            "#7fbc41",
            "#4d9221",
            "#276419",
          ],
          PRGn: [
            "#40004b",
            "#762a83",
            "#9970ab",
            "#c2a5cf",
            "#e7d4e8",
            "#f7f7f7",
            "#d9f0d3",
            "#a6dba0",
            "#5aae61",
            "#1b7837",
            "#00441b",
          ],
          RdYlBu: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee090",
            "#ffffbf",
            "#e0f3f8",
            "#abd9e9",
            "#74add1",
            "#4575b4",
            "#313695",
          ],
          BrBG: [
            "#543005",
            "#8c510a",
            "#bf812d",
            "#dfc27d",
            "#f6e8c3",
            "#f5f5f5",
            "#c7eae5",
            "#80cdc1",
            "#35978f",
            "#01665e",
            "#003c30",
          ],
          RdGy: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#ffffff",
            "#e0e0e0",
            "#bababa",
            "#878787",
            "#4d4d4d",
            "#1a1a1a",
          ],
          PuOr: [
            "#7f3b08",
            "#b35806",
            "#e08214",
            "#fdb863",
            "#fee0b6",
            "#f7f7f7",
            "#d8daeb",
            "#b2abd2",
            "#8073ac",
            "#542788",
            "#2d004b",
          ],
          Set2: [
            "#66c2a5",
            "#fc8d62",
            "#8da0cb",
            "#e78ac3",
            "#a6d854",
            "#ffd92f",
            "#e5c494",
            "#b3b3b3",
          ],
          Accent: [
            "#7fc97f",
            "#beaed4",
            "#fdc086",
            "#ffff99",
            "#386cb0",
            "#f0027f",
            "#bf5b17",
            "#666666",
          ],
          Set1: [
            "#e41a1c",
            "#377eb8",
            "#4daf4a",
            "#984ea3",
            "#ff7f00",
            "#ffff33",
            "#a65628",
            "#f781bf",
            "#999999",
          ],
          Set3: [
            "#8dd3c7",
            "#ffffb3",
            "#bebada",
            "#fb8072",
            "#80b1d3",
            "#fdb462",
            "#b3de69",
            "#fccde5",
            "#d9d9d9",
            "#bc80bd",
            "#ccebc5",
            "#ffed6f",
          ],
          Dark2: [
            "#1b9e77",
            "#d95f02",
            "#7570b3",
            "#e7298a",
            "#66a61e",
            "#e6ab02",
            "#a6761d",
            "#666666",
          ],
          Paired: [
            "#a6cee3",
            "#1f78b4",
            "#b2df8a",
            "#33a02c",
            "#fb9a99",
            "#e31a1c",
            "#fdbf6f",
            "#ff7f00",
            "#cab2d6",
            "#6a3d9a",
            "#ffff99",
            "#b15928",
          ],
          Pastel2: [
            "#b3e2cd",
            "#fdcdac",
            "#cbd5e8",
            "#f4cae4",
            "#e6f5c9",
            "#fff2ae",
            "#f1e2cc",
            "#cccccc",
          ],
          Pastel1: [
            "#fbb4ae",
            "#b3cde3",
            "#ccebc5",
            "#decbe4",
            "#fed9a6",
            "#ffffcc",
            "#e5d8bd",
            "#fddaec",
            "#f2f2f2",
          ],
        },
        nk = 0,
        nx = Object.keys(n_);
      nk < nx.length;
      nk += 1
    ) {
      var nS = nx[nk];
      n_[nS.toLowerCase()] = n_[nS];
    }
    return (
      (h.average = function (e, t, n) {
        (void 0 === t && (t = "lrgb"), void 0 === n && (n = null));
        var r = e.length;
        n ||
          (n = Array.from(Array(r)).map(function () {
            return 1;
          }));
        var o =
          r /
          n.reduce(function (e, t) {
            return e + t;
          });
        if (
          (n.forEach(function (e, t) {
            n[t] *= o;
          }),
          (e = e.map(function (e) {
            return new d(e);
          })),
          "lrgb" === t)
        )
          return tK(e, n);
        for (var a = e.shift(), i = a.get(t), u = [], l = 0, s = 0, c = 0; c < i.length; c++)
          if (
            ((i[c] = (i[c] || 0) * n[0]),
            u.push(isNaN(i[c]) ? 0 : n[0]),
            "h" === t.charAt(c) && !isNaN(i[c]))
          ) {
            var f = (i[c] / 180) * tG;
            ((l += tX(f) * n[0]), (s += tQ(f) * n[0]));
          }
        var h = a.alpha() * n[0];
        e.forEach(function (e, r) {
          var o = e.get(t);
          h += e.alpha() * n[r + 1];
          for (var a = 0; a < i.length; a++)
            if (!isNaN(o[a]))
              if (((u[a] += n[r + 1]), "h" === t.charAt(a))) {
                var c = (o[a] / 180) * tG;
                ((l += tX(c) * n[r + 1]), (s += tQ(c) * n[r + 1]));
              } else i[a] += o[a] * n[r + 1];
        });
        for (var p = 0; p < i.length; p++)
          if ("h" === t.charAt(p)) {
            for (var y = (tZ(s / u[p], l / u[p]) / tG) * 180; y < 0;) y += 360;
            for (; y >= 360;) y -= 360;
            i[p] = y;
          } else i[p] = i[p] / u[p];
        return ((h /= r), new d(i, t).alpha(h > 0.99999 ? 1 : h, !0));
      }),
      (h.bezier = function (e) {
        var t = t3(e);
        return (
          (t.scale = function () {
            return t1(t);
          }),
          t
        );
      }),
      (h.blend = t5),
      (h.cubehelix = function (e, t, n, r, o) {
        (void 0 === e && (e = 300),
          void 0 === t && (t = -1.5),
          void 0 === n && (n = 1),
          void 0 === r && (r = 1),
          void 0 === o && (o = [0, 1]));
        var a,
          i = 0;
        "array" === t8(o) ? (a = o[1] - o[0]) : ((a = 0), (o = [o, o]));
        var u = function (u) {
          var l = t7 * ((e + 120) / 360 + t * u),
            s = ne(o[0] + a * u, r),
            c = ((0 !== i ? n[0] + u * i : n) * s * (1 - s)) / 2,
            f = nn(l),
            d = nt(l);
          return h(
            t9([
              255 * (s + c * (-0.14861 * f + 1.78277 * d)),
              255 * (s + c * (-0.29227 * f - 0.90649 * d)),
              255 * (s + 1.97294 * f * c),
              1,
            ]),
          );
        };
        return (
          (u.start = function (t) {
            return null == t ? e : ((e = t), u);
          }),
          (u.rotations = function (e) {
            return null == e ? t : ((t = e), u);
          }),
          (u.gamma = function (e) {
            return null == e ? r : ((r = e), u);
          }),
          (u.hue = function (e) {
            return null == e
              ? n
              : ("array" === t8((n = e)) ? 0 == (i = n[1] - n[0]) && (n = n[1]) : (i = 0), u);
          }),
          (u.lightness = function (e) {
            return null == e
              ? o
              : ("array" === t8(e) ? ((o = e), (a = e[1] - e[0])) : ((o = [e, e]), (a = 0)), u);
          }),
          (u.scale = function () {
            return h.scale(u);
          }),
          u.hue(n),
          u
        );
      }),
      (h.mix = h.interpolate = tY),
      (h.random = function () {
        for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(nr(16 * no()));
        return new d(e, "hex");
      }),
      (h.scale = t1),
      (h.analyze = ns),
      (h.contrast = function (e, t) {
        ((e = new d(e)), (t = new d(t)));
        var n = e.luminance(),
          r = t.luminance();
        return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
      }),
      (h.deltaE = function (e, t, n, r, o) {
        (void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === o && (o = 1));
        var a = function (e) {
            return (360 * e) / (2 * nw);
          },
          i = function (e) {
            return (2 * nw * e) / 360;
          };
        ((e = new d(e)), (t = new d(t)));
        var u = Array.from(e.lab()),
          l = u[0],
          s = u[1],
          c = u[2],
          f = Array.from(t.lab()),
          h = f[0],
          p = f[1],
          y = f[2],
          m = (l + h) / 2,
          v = (nf(nd(s, 2) + nd(c, 2)) + nf(nd(p, 2) + nd(y, 2))) / 2,
          g = 0.5 * (1 - nf(nd(v, 7) / (nd(v, 7) + nd(25, 7)))),
          b = s * (1 + g),
          w = p * (1 + g),
          _ = nf(nd(b, 2) + nd(c, 2)),
          k = nf(nd(w, 2) + nd(y, 2)),
          x = (_ + k) / 2,
          S = a(ny(c, b)),
          E = a(ny(y, w)),
          O = S >= 0 ? S : S + 360,
          T = E >= 0 ? E : E + 360,
          R = nm(O - T) > 180 ? (O + T + 360) / 2 : (O + T) / 2,
          A =
            1 -
            0.17 * nv(i(R - 30)) +
            0.24 * nv(i(2 * R)) +
            0.32 * nv(i(3 * R + 6)) -
            0.2 * nv(i(4 * R - 63)),
          C = T - O;
        ((C = 180 >= nm(C) ? C : T <= O ? C + 360 : C - 360), (C = 2 * nf(_ * k) * ng(i(C) / 2)));
        var M = k - _,
          D = 1 + (0.015 * nd(m - 50, 2)) / nf(20 + nd(m - 50, 2)),
          P = 1 + 0.045 * x,
          N = 1 + 0.015 * x * A,
          j = 30 * nb(-nd((R - 275) / 25, 2)),
          L = -(2 * nf(nd(x, 7) / (nd(x, 7) + nd(25, 7)))) * ng(2 * i(j));
        return np(
          0,
          nh(
            100,
            nf(
              nd((h - l) / (n * D), 2) +
                nd(M / (r * P), 2) +
                nd(C / (o * N), 2) +
                (M / (r * P)) * L * (C / (o * N)),
            ),
          ),
        );
      }),
      (h.distance = function (e, t, n) {
        (void 0 === n && (n = "lab"), (e = new d(e)), (t = new d(t)));
        var r = e.get(n),
          o = t.get(n),
          a = 0;
        for (var i in r) {
          var u = (r[i] || 0) - (o[i] || 0);
          a += u * u;
        }
        return Math.sqrt(a);
      }),
      (h.limits = nc),
      (h.valid = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        try {
          return (new (Function.prototype.bind.apply(d, [null].concat(e)))(), !0);
        } catch (e) {
          return !1;
        }
      }),
      (h.scales = {
        cool: function () {
          return t1([h.hsl(180, 1, 0.9), h.hsl(250, 0.7, 0.4)]);
        },
        hot: function () {
          return t1(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
        },
      }),
      (h.colors = te),
      (h.brewer = n_),
      h
    );
  })();
}
