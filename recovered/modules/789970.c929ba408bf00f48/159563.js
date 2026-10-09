/* Recovered shipped factory. Module 159563.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 208575..216524
 * Raw property SHA-256: 9c8923eca0ec7a9a4cc928d6c7db6bf63c165e7de9ead1ff6f8f8a53fd665fc7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function i(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      r[i - 1] = arguments[i];
    throw Error(
      "[Immer] minified error nr: " +
        e +
        (r.length
          ? " " +
            r
              .map(function (e) {
                return "'" + e + "'";
              })
              .join(",")
          : "") +
        ". Find the full error at: https://bit.ly/3cXEKWf",
    );
  }
  function n(e) {
    return !!e && !!e[N];
  }
  function o(e) {
    var t;
    return (
      !!e &&
      ((function (e) {
        if (!e || "object" != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return r === Object || ("function" == typeof r && Function.toString.call(r) === W);
      })(e) ||
        Array.isArray(e) ||
        !!e[B] ||
        !!(null == (t = e.constructor) ? void 0 : t[B]) ||
        d(e) ||
        l(e))
    );
  }
  function s(e, t, r) {
    (void 0 === r && (r = !1),
      0 === a(e)
        ? (r ? Object.keys : H)(e).forEach(function (i) {
            (r && "symbol" == typeof i) || t(i, e[i], e);
          })
        : e.forEach(function (r, i) {
            return t(i, r, e);
          }));
  }
  function a(e) {
    var t = e[N];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : d(e) ? 2 : 3 * !!l(e);
  }
  function u(e, t) {
    return 2 === a(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function c(e, t, r) {
    var i = a(e);
    2 === i ? e.set(t, r) : 3 === i ? e.add(r) : (e[t] = r);
  }
  function d(e) {
    return D && e instanceof Map;
  }
  function l(e) {
    return F && e instanceof Set;
  }
  function h(e) {
    return e.o || e.t;
  }
  function f(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = G(e);
    delete t[N];
    for (var r = H(t), i = 0; i < r.length; i++) {
      var n = r[i],
        o = t[n];
      (!1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
        (o.get || o.set) &&
          (t[n] = { configurable: !0, writable: !0, enumerable: o.enumerable, value: e[n] }));
    }
    return Object.create(Object.getPrototypeOf(e), t);
  }
  function p(e, t) {
    return (
      void 0 === t && (t = !1),
      g(e) ||
        n(e) ||
        !o(e) ||
        (a(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
        Object.freeze(e),
        t &&
          s(
            e,
            function (e, t) {
              return p(t, !0);
            },
            !0,
          )),
      e
    );
  }
  function m() {
    i(2);
  }
  function g(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
  }
  function _(e) {
    var t = X[e];
    return (t || i(18, e), t);
  }
  r.d(t, { Qx: () => n, jM: () => Q, mq: () => K, vD: () => Z });
  function b(e, t) {
    t && (_("Patches"), (e.u = []), (e.s = []), (e.v = t));
  }
  function v(e) {
    (y(e), e.p.forEach(V), (e.p = null));
  }
  function y(e) {
    e === U && (U = e.l);
  }
  function w(e) {
    return (U = { p: [], l: U, h: e, m: !0, _: 0 });
  }
  function V(e) {
    var t = e[N];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
  }
  function x(e, t) {
    t._ = t.p.length;
    var r = t.p[0],
      n = void 0 !== e && e !== r;
    return (
      t.h.O || _("ES5").S(t, e, n),
      n
        ? (r[N].P && (v(t), i(4)),
          o(e) && ((e = T(t, e)), t.l || E(t, e)),
          t.u && _("Patches").M(r[N].t, e, t.u, t.s))
        : (e = T(t, r, [])),
      v(t),
      t.u && t.v(t.u, t.s),
      e !== j ? e : void 0
    );
  }
  function T(e, t, r) {
    if (g(t)) return t;
    var i = t[N];
    if (!i)
      return (
        s(
          t,
          function (n, o) {
            return k(e, i, t, n, o, r);
          },
          !0,
        ),
        t
      );
    if (i.A !== e) return t;
    if (!i.P) return (E(e, i.t, !0), i.t);
    if (!i.I) {
      ((i.I = !0), i.A._--);
      var n = 4 === i.i || 5 === i.i ? (i.o = f(i.k)) : i.o,
        o = n,
        a = !1;
      (3 === i.i && ((o = new Set(n)), n.clear(), (a = !0)),
        s(o, function (t, o) {
          return k(e, i, n, t, o, r, a);
        }),
        E(e, n, !1),
        r && e.u && _("Patches").N(i, r, e.u, e.s));
    }
    return i.o;
  }
  function k(e, t, r, i, s, a, d) {
    if (n(s)) {
      var l = T(e, s, a && t && 3 !== t.i && !u(t.R, i) ? a.concat(i) : void 0);
      if ((c(r, i, l), !n(l))) return;
      e.m = !1;
    } else d && r.add(s);
    if (o(s) && !g(s)) {
      if (!e.h.D && e._ < 1) return;
      (T(e, s), (t && t.A.l) || E(e, s));
    }
  }
  function E(e, t, r) {
    (void 0 === r && (r = !1), !e.l && e.h.D && e.m && p(t, r));
  }
  function A(e, t) {
    var r = e[N];
    return (r ? h(r) : e)[t];
  }
  function R(e, t) {
    if (t in e)
      for (var r = Object.getPrototypeOf(e); r;) {
        var i = Object.getOwnPropertyDescriptor(r, t);
        if (i) return i;
        r = Object.getPrototypeOf(r);
      }
  }
  function P(e) {
    e.P || ((e.P = !0), e.l && P(e.l));
  }
  function O(e) {
    e.o || (e.o = f(e.t));
  }
  function I(e, t, r) {
    var i,
      n,
      o,
      s,
      a,
      u,
      c,
      h = d(t)
        ? _("MapSet").F(t, r)
        : l(t)
          ? _("MapSet").T(t, r)
          : e.O
            ? ((o = n =
                {
                  i: +!!(i = Array.isArray(t)),
                  A: r ? r.A : U,
                  P: !1,
                  I: !1,
                  R: {},
                  l: r,
                  t: t,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                }),
              (s = z),
              i && ((o = [n]), (s = q)),
              (u = (a = Proxy.revocable(o, s)).revoke),
              (n.k = c = a.proxy),
              (n.j = u),
              c)
            : _("ES5").J(t, r);
    return ((r ? r.A : U).p.push(h), h);
  }
  function S(e, t) {
    switch (t) {
      case 2:
        return new Map(e);
      case 3:
        return Array.from(e);
    }
    return f(e);
  }
  var L,
    U,
    C = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    D = "u" > typeof Map,
    F = "u" > typeof Set,
    M = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    j = C ? Symbol.for("immer-nothing") : (((L = {})["immer-nothing"] = !0), L),
    B = C ? Symbol.for("immer-draftable") : "__$immer_draftable",
    N = C ? Symbol.for("immer-state") : "__$immer_state",
    W = "" + Object.prototype.constructor,
    H =
      "u" > typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames,
    G =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {};
        return (
          H(e).forEach(function (r) {
            t[r] = Object.getOwnPropertyDescriptor(e, r);
          }),
          t
        );
      },
    X = {},
    z = {
      get: function (e, t) {
        if (t === N) return e;
        var r,
          i,
          n = h(e);
        if (!u(n, t))
          return (i = R(n, t))
            ? "value" in i
              ? i.value
              : null == (r = i.get)
                ? void 0
                : r.call(e.k)
            : void 0;
        var s = n[t];
        return e.I || !o(s) ? s : s === A(e.t, t) ? (O(e), (e.o[t] = I(e.A.h, s, e))) : s;
      },
      has: function (e, t) {
        return t in h(e);
      },
      ownKeys: function (e) {
        return Reflect.ownKeys(h(e));
      },
      set: function (e, t, r) {
        var i = R(h(e), t);
        if (null == i ? void 0 : i.set) return (i.set.call(e.k, r), !0);
        if (!e.P) {
          var n = A(h(e), t),
            o = null == n ? void 0 : n[N];
          if (o && o.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
          if (
            (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
            (void 0 !== r || u(e.t, t))
          )
            return !0;
          (O(e), P(e));
        }
        return (
          (e.o[t] === r && (void 0 !== r || t in e.o)) ||
            (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
            ((e.o[t] = r), (e.R[t] = !0)),
          !0
        );
      },
      deleteProperty: function (e, t) {
        return (
          void 0 !== A(e.t, t) || t in e.t ? ((e.R[t] = !1), O(e), P(e)) : delete e.R[t],
          e.o && delete e.o[t],
          !0
        );
      },
      getOwnPropertyDescriptor: function (e, t) {
        var r = h(e),
          i = Reflect.getOwnPropertyDescriptor(r, t);
        return i
          ? {
              writable: !0,
              configurable: 1 !== e.i || "length" !== t,
              enumerable: i.enumerable,
              value: r[t],
            }
          : i;
      },
      defineProperty: function () {
        i(11);
      },
      getPrototypeOf: function (e) {
        return Object.getPrototypeOf(e.t);
      },
      setPrototypeOf: function () {
        i(12);
      },
    },
    q = {};
  (s(z, function (e, t) {
    q[e] = function () {
      return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
    };
  }),
    (q.deleteProperty = function (e, t) {
      return q.set.call(this, e, t, void 0);
    }),
    (q.set = function (e, t, r) {
      return z.set.call(this, e[0], t, r, e[0]);
    }));
  var Y = new ((function () {
      function e(e) {
        var t = this;
        ((this.O = M),
          (this.D = !0),
          (this.produce = function (e, r, n) {
            if ("function" == typeof e && "function" != typeof r) {
              var s,
                a = r;
              return (
                (r = e),
                function (e) {
                  var i = this;
                  void 0 === e && (e = a);
                  for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                    o[s - 1] = arguments[s];
                  return t.produce(e, function (e) {
                    var t;
                    return (t = r).call.apply(t, [i, e].concat(o));
                  });
                }
              );
            }
            if (
              ("function" != typeof r && i(6), void 0 !== n && "function" != typeof n && i(7), o(e))
            ) {
              var u = w(t),
                c = I(t, e, void 0),
                d = !0;
              try {
                ((s = r(c)), (d = !1));
              } finally {
                d ? v(u) : y(u);
              }
              return "u" > typeof Promise && s instanceof Promise
                ? s.then(
                    function (e) {
                      return (b(u, n), x(e, u));
                    },
                    function (e) {
                      throw (v(u), e);
                    },
                  )
                : (b(u, n), x(s, u));
            }
            if (!e || "object" != typeof e) {
              if ((void 0 === (s = r(e)) && (s = e), s === j && (s = void 0), t.D && p(s, !0), n)) {
                var l = [],
                  h = [];
                (_("Patches").M(e, s, l, h), n(l, h));
              }
              return s;
            }
            i(21, e);
          }),
          (this.produceWithPatches = function (e, r) {
            if ("function" == typeof e)
              return function (r) {
                for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                  n[o - 1] = arguments[o];
                return t.produceWithPatches(r, function (t) {
                  return e.apply(void 0, [t].concat(n));
                });
              };
            var i,
              n,
              o = t.produce(e, r, function (e, t) {
                ((i = e), (n = t));
              });
            return "u" > typeof Promise && o instanceof Promise
              ? o.then(function (e) {
                  return [e, i, n];
                })
              : [o, i, n];
          }),
          "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
            this.setUseProxies(e.useProxies),
          "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
            this.setAutoFreeze(e.autoFreeze));
      }
      var t = e.prototype;
      return (
        (t.createDraft = function (e) {
          (o(e) || i(8),
            n(e) &&
              (n((t = e)) || i(22, t),
              (e = (function e(t) {
                if (!o(t)) return t;
                var r,
                  i = t[N],
                  n = a(t);
                if (i) {
                  if (!i.P && (i.i < 4 || !_("ES5").K(i))) return i.t;
                  ((i.I = !0), (r = S(t, n)), (i.I = !1));
                } else r = S(t, n);
                return (
                  s(r, function (t, n) {
                    var o;
                    (i && ((o = i.t), (2 === a(o) ? o.get(t) : o[t]) === n)) || c(r, t, e(n));
                  }),
                  3 === n ? new Set(r) : r
                );
              })(t))));
          var t,
            r = w(this),
            u = I(this, e, void 0);
          return ((u[N].C = !0), y(r), u);
        }),
        (t.finishDraft = function (e, t) {
          var r = (e && e[N]).A;
          return (b(r, t), x(void 0, r));
        }),
        (t.setAutoFreeze = function (e) {
          this.D = e;
        }),
        (t.setUseProxies = function (e) {
          (e && !M && i(20), (this.O = e));
        }),
        (t.applyPatches = function (e, t) {
          for (r = t.length - 1; r >= 0; r--) {
            var r,
              i = t[r];
            if (0 === i.path.length && "replace" === i.op) {
              e = i.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          var o = _("Patches").$;
          return n(e)
            ? o(e, t)
            : this.produce(e, function (e) {
                return o(e, t);
              });
        }),
        e
      );
    })())(),
    Q = Y.produce,
    K =
      (Y.produceWithPatches.bind(Y),
      Y.setAutoFreeze.bind(Y),
      Y.setUseProxies.bind(Y),
      Y.applyPatches.bind(Y),
      Y.createDraft.bind(Y)),
    Z = Y.finishDraft.bind(Y);
}
