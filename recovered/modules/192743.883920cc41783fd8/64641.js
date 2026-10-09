/* Recovered shipped factory. Module 64641.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 535281..542679
 * Raw property SHA-256: ba3b9dfb81d67acd23ebed9a80fc4ab2e56e897dafd851b5f1973d4e1060cc00
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(72290),
    o = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    m = Symbol.iterator,
    v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    b = {};
  function w(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || v));
  }
  function _() {}
  function k(e, t, n) {
    ((this.props = e), (this.context = t), (this.refs = b), (this.updater = n || v));
  }
  ((w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (w.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (_.prototype = w.prototype));
  var x = (k.prototype = new _());
  ((x.constructor = k), g(x, w.prototype), (x.isPureReactComponent = !0));
  var S = Array.isArray;
  function E() {}
  var O = { H: null, A: null, T: null, S: null },
    T = Object.prototype.hasOwnProperty;
  function R(e, t, n) {
    var r = n.ref;
    return { $$typeof: o, type: e, key: t, ref: void 0 !== r ? r : null, props: n };
  }
  function A(e) {
    return "object" == typeof e && null !== e && e.$$typeof === o;
  }
  var C = /\/+/g;
  function M(e, t) {
    var n, r;
    return "object" == typeof e && null !== e && null != e.key
      ? ((n = "" + e.key),
        (r = { "=": "=0", ":": "=2" }),
        "$" +
          n.replace(/[=:]/g, function (e) {
            return r[e];
          }))
      : t.toString(36);
  }
  function D(e, t, n) {
    if (null == e) return e;
    var r = [],
      i = 0;
    return (
      !(function e(t, n, r, i, u) {
        var l,
          s,
          c,
          f = typeof t;
        ("undefined" === f || "boolean" === f) && (t = null);
        var d = !1;
        if (null === t) d = !0;
        else
          switch (f) {
            case "bigint":
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case o:
                case a:
                  d = !0;
                  break;
                case p:
                  return e((d = t._init)(t._payload), n, r, i, u);
              }
          }
        if (d)
          return (
            (u = u(t)),
            (d = "" === i ? "." + M(t, 0) : i),
            S(u)
              ? ((r = ""),
                null != d && (r = d.replace(C, "$&/") + "/"),
                e(u, n, r, "", function (e) {
                  return e;
                }))
              : null != u &&
                (A(u) &&
                  ((l = u),
                  (s =
                    r +
                    (null == u.key || (t && t.key === u.key)
                      ? ""
                      : ("" + u.key).replace(C, "$&/") + "/") +
                    d),
                  (u = R(l.type, s, l.props))),
                n.push(u)),
            1
          );
        d = 0;
        var h = "" === i ? "." : i + ":";
        if (S(t))
          for (var y = 0; y < t.length; y++) ((f = h + M((i = t[y]), y)), (d += e(i, n, r, f, u)));
        else if (
          "function" ==
          typeof (y =
            null === (c = t) || "object" != typeof c
              ? null
              : "function" == typeof (c = (m && c[m]) || c["@@iterator"])
                ? c
                : null)
        )
          for (t = y.call(t), y = 0; !(i = t.next()).done;)
            ((f = h + M((i = i.value), y++)), (d += e(i, n, r, f, u)));
        else if ("object" === f) {
          if ("function" == typeof t.then)
            return e(
              (function (e) {
                switch (e.status) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                  default:
                    switch (
                      ("string" == typeof e.status
                        ? e.then(E, E)
                        : ((e.status = "pending"),
                          e.then(
                            function (t) {
                              "pending" === e.status && ((e.status = "fulfilled"), (e.value = t));
                            },
                            function (t) {
                              "pending" === e.status && ((e.status = "rejected"), (e.reason = t));
                            },
                          )),
                      e.status)
                    ) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                    }
                }
                throw e;
              })(t),
              n,
              r,
              i,
              u,
            );
          throw Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === (n = String(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : n) +
              "). If you meant to render a collection of children, use an array instead.",
          );
        }
        return d;
      })(e, r, "", "", function (e) {
        return t.call(n, e, i++);
      }),
      r
    );
  }
  function P(e) {
    if (-1 === e._status) {
      var t = e._result;
      ((t = t()).then(
        function (t) {
          (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
        },
      ),
        -1 === e._status && ((e._status = 0), (e._result = t)));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var N =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                "object" == typeof e && null !== e && "string" == typeof e.message
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if ("object" == typeof r && "function" == typeof r.emit)
            return void r.emit("uncaughtException", e);
          console.error(e);
        };
  ((t.Activity = y),
    (t.Children = {
      map: D,
      forEach: function (e, t, n) {
        D(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          D(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          D(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!A(e))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      },
    }),
    (t.Component = w),
    (t.Fragment = i),
    (t.Profiler = l),
    (t.PureComponent = k),
    (t.StrictMode = u),
    (t.Suspense = d),
    (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (t.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (e) {
        return O.H.useMemoCache(e);
      },
    }),
    (t.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    }),
    (t.cacheSignal = function () {
      return null;
    }),
    (t.cloneElement = function (e, t, n) {
      if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
      var r = g({}, e.props),
        o = e.key;
      if (null != t)
        for (a in (void 0 !== t.key && (o = "" + t.key), t))
          T.call(t, a) &&
            "key" !== a &&
            "__self" !== a &&
            "__source" !== a &&
            ("ref" !== a || void 0 !== t.ref) &&
            (r[a] = t[a]);
      var a = arguments.length - 2;
      if (1 === a) r.children = n;
      else if (1 < a) {
        for (var i = Array(a), u = 0; u < a; u++) i[u] = arguments[u + 2];
        r.children = i;
      }
      return R(e.type, o, r);
    }),
    (t.createContext = function (e) {
      return (
        ((e = {
          $$typeof: c,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }).Provider = e),
        (e.Consumer = { $$typeof: s, _context: e }),
        e
      );
    }),
    (t.createElement = function (e, t, n) {
      var r,
        o = {},
        a = null;
      if (null != t)
        for (r in (void 0 !== t.key && (a = "" + t.key), t))
          T.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (o[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) o.children = n;
      else if (1 < i) {
        for (var u = Array(i), l = 0; l < i; l++) u[l] = arguments[l + 2];
        o.children = u;
      }
      if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
      return R(e, a, o);
    }),
    (t.createRef = function () {
      return { current: null };
    }),
    (t.forwardRef = function (e) {
      return { $$typeof: f, render: e };
    }),
    (t.isValidElement = A),
    (t.lazy = function (e) {
      return { $$typeof: p, _payload: { _status: -1, _result: e }, _init: P };
    }),
    (t.memo = function (e, t) {
      return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
    }),
    (t.startTransition = function (e) {
      var t = O.T,
        n = {};
      O.T = n;
      try {
        var r = e(),
          o = O.S;
        (null !== o && o(n, r),
          "object" == typeof r && null !== r && "function" == typeof r.then && r.then(E, N));
      } catch (e) {
        N(e);
      } finally {
        (null !== t && null !== n.types && (t.types = n.types), (O.T = t));
      }
    }),
    (t.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (t.use = function (e) {
      return O.H.use(e);
    }),
    (t.useActionState = function (e, t, n) {
      return O.H.useActionState(e, t, n);
    }),
    (t.useCallback = function (e, t) {
      return O.H.useCallback(e, t);
    }),
    (t.useContext = function (e) {
      return O.H.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e, t) {
      return O.H.useDeferredValue(e, t);
    }),
    (t.useEffect = function (e, t) {
      return O.H.useEffect(e, t);
    }),
    (t.useEffectEvent = function (e) {
      return O.H.useEffectEvent(e);
    }),
    (t.useId = function () {
      return O.H.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
      return O.H.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
      return O.H.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
      return O.H.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
      return O.H.useMemo(e, t);
    }),
    (t.useOptimistic = function (e, t) {
      return O.H.useOptimistic(e, t);
    }),
    (t.useReducer = function (e, t, n) {
      return O.H.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
      return O.H.useRef(e);
    }),
    (t.useState = function (e) {
      return O.H.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
      return O.H.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
      return O.H.useTransition();
    }),
    (t.version = "19.2.3"));
}
