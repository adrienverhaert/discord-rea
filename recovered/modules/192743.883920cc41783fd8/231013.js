/* Recovered shipped factory. Module 231013.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 587597..591053
 * Raw property SHA-256: 8b479f606ccf2b44907c1bf814222c56494a365c53f71305a4604c61ff602a56
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  function n(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n;) {
      var r = (n - 1) >>> 1,
        o = e[r];
      if (0 < a(o, t)) ((e[r] = t), (e[n] = o), (n = r));
      else break;
    }
  }
  function r(e) {
    return 0 === e.length ? null : e[0];
  }
  function o(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
        var u = 2 * (r + 1) - 1,
          l = e[u],
          s = u + 1,
          c = e[s];
        if (0 > a(l, n))
          s < o && 0 > a(c, l)
            ? ((e[r] = c), (e[s] = n), (r = s))
            : ((e[r] = l), (e[u] = n), (r = u));
        else if (s < o && 0 > a(c, n)) ((e[r] = c), (e[s] = n), (r = s));
        else break;
      }
    }
    return t;
  }
  function a(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if (
    ((t.unstable_now = void 0),
    "object" == typeof performance && "function" == typeof performance.now)
  ) {
    var i,
      u = performance;
    t.unstable_now = function () {
      return u.now();
    };
  } else {
    var l = Date,
      s = l.now();
    t.unstable_now = function () {
      return l.now() - s;
    };
  }
  var c = [],
    f = [],
    d = 1,
    h = null,
    p = 3,
    y = !1,
    m = !1,
    v = !1,
    g = !1,
    b = "function" == typeof setTimeout ? setTimeout : null,
    w = "function" == typeof clearTimeout ? clearTimeout : null,
    _ = "u" > typeof setImmediate ? setImmediate : null;
  function k(e) {
    for (var t = r(f); null !== t;) {
      if (null === t.callback) o(f);
      else if (t.startTime <= e) (o(f), (t.sortIndex = t.expirationTime), n(c, t));
      else break;
      t = r(f);
    }
  }
  function x(e) {
    if (((v = !1), k(e), !m))
      if (null !== r(c)) ((m = !0), S || ((S = !0), i()));
      else {
        var t = r(f);
        null !== t && D(x, t.startTime - e);
      }
  }
  var S = !1,
    E = -1,
    O = 5,
    T = -1;
  function R() {
    return !!g || !(t.unstable_now() - T < O);
  }
  function A() {
    if (((g = !1), S)) {
      var e = t.unstable_now();
      T = e;
      var n = !0;
      try {
        r: {
          ((m = !1), v && ((v = !1), w(E), (E = -1)), (y = !0));
          var a = p;
          try {
            o: {
              for (k(e), h = r(c); null !== h && !(h.expirationTime > e && R());) {
                var u = h.callback;
                if ("function" == typeof u) {
                  ((h.callback = null), (p = h.priorityLevel));
                  var l = u(h.expirationTime <= e);
                  if (((e = t.unstable_now()), "function" == typeof l)) {
                    ((h.callback = l), k(e), (n = !0));
                    break o;
                  }
                  (h === r(c) && o(c), k(e));
                } else o(c);
                h = r(c);
              }
              if (null !== h) n = !0;
              else {
                var s = r(f);
                (null !== s && D(x, s.startTime - e), (n = !1));
              }
            }
            break r;
          } finally {
            ((h = null), (p = a), (y = !1));
          }
        }
      } finally {
        n ? i() : (S = !1);
      }
    }
  }
  if ("function" == typeof _)
    i = function () {
      _(A);
    };
  else if ("u" > typeof MessageChannel) {
    var C = new MessageChannel(),
      M = C.port2;
    ((C.port1.onmessage = A),
      (i = function () {
        M.postMessage(null);
      }));
  } else
    i = function () {
      b(A, 0);
    };
  function D(e, n) {
    E = b(function () {
      e(t.unstable_now());
    }, n);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (t.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < e ? Math.floor(1e3 / e) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (t.unstable_next = function (e) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = p;
      }
      var n = p;
      p = t;
      try {
        return e();
      } finally {
        p = n;
      }
    }),
    (t.unstable_requestPaint = function () {
      g = !0;
    }),
    (t.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = p;
      p = e;
      try {
        return t();
      } finally {
        p = n;
      }
    }),
    (t.unstable_scheduleCallback = function (e, o, a) {
      var u = t.unstable_now();
      switch (
        ((a =
          "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a
            ? u + a
            : u),
        e)
      ) {
        case 1:
          var l = -1;
          break;
        case 2:
          l = 250;
          break;
        case 5:
          l = 0x3fffffff;
          break;
        case 4:
          l = 1e4;
          break;
        default:
          l = 5e3;
      }
      return (
        (l = a + l),
        (e = {
          id: d++,
          callback: o,
          priorityLevel: e,
          startTime: a,
          expirationTime: l,
          sortIndex: -1,
        }),
        a > u
          ? ((e.sortIndex = a),
            n(f, e),
            null === r(c) && e === r(f) && (v ? (w(E), (E = -1)) : (v = !0), D(x, a - u)))
          : ((e.sortIndex = l), n(c, e), m || y || ((m = !0), S || ((S = !0), i()))),
        e
      );
    }),
    (t.unstable_shouldYield = R),
    (t.unstable_wrapCallback = function (e) {
      var t = p;
      return function () {
        var n = p;
        p = t;
        try {
          return e.apply(this, arguments);
        } finally {
          p = n;
        }
      };
    }));
}
