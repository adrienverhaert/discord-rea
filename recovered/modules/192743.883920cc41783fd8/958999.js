/* Recovered shipped factory. Module 958999.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 531180..534448
 * Raw property SHA-256: 6426beb947c413fe64f121e32e56a817b77e38a4a43408b2a0c3792331997573
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(582128);
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(o(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal"),
    l = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(e, t) {
    return "font" === e ? "" : "string" == typeof t ? ("use-credentials" === t ? t : "") : void 0;
  }
  ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (t.createPortal = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(o(299));
      return (function (e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: u,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, n);
    }),
    (t.flushSync = function (e) {
      var t = l.T,
        n = i.p;
      try {
        if (((l.T = null), (i.p = 2), e)) return e();
      } finally {
        ((l.T = t), (i.p = n), i.d.f());
      }
    }),
    (t.preconnect = function (e, t) {
      "string" == typeof e &&
        ((t = t
          ? "string" == typeof (t = t.crossOrigin)
            ? "use-credentials" === t
              ? t
              : ""
            : void 0
          : null),
        i.d.C(e, t));
    }),
    (t.prefetchDNS = function (e) {
      "string" == typeof e && i.d.D(e);
    }),
    (t.preinit = function (e, t) {
      if ("string" == typeof e && t && "string" == typeof t.as) {
        var n = t.as,
          r = s(n, t.crossOrigin),
          o = "string" == typeof t.integrity ? t.integrity : void 0,
          a = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
        "style" === n
          ? i.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
              crossOrigin: r,
              integrity: o,
              fetchPriority: a,
            })
          : "script" === n &&
            i.d.X(e, {
              crossOrigin: r,
              integrity: o,
              fetchPriority: a,
              nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            });
      }
    }),
    (t.preinitModule = function (e, t) {
      if ("string" == typeof e)
        if ("object" == typeof t && null !== t) {
          if (null == t.as || "script" === t.as) {
            var n = s(t.as, t.crossOrigin);
            i.d.M(e, {
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
              nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            });
          }
        } else null == t && i.d.M(e);
    }),
    (t.preload = function (e, t) {
      if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
        var n = t.as,
          r = s(n, t.crossOrigin);
        i.d.L(e, n, {
          crossOrigin: r,
          integrity: "string" == typeof t.integrity ? t.integrity : void 0,
          nonce: "string" == typeof t.nonce ? t.nonce : void 0,
          type: "string" == typeof t.type ? t.type : void 0,
          fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
          referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
          imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
          imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
          media: "string" == typeof t.media ? t.media : void 0,
        });
      }
    }),
    (t.preloadModule = function (e, t) {
      if ("string" == typeof e)
        if (t) {
          var n = s(t.as, t.crossOrigin);
          i.d.m(e, {
            as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
            crossOrigin: n,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
          });
        } else i.d.m(e);
    }),
    (t.requestFormReset = function (e) {
      i.d.r(e);
    }),
    (t.unstable_batchedUpdates = function (e, t) {
      return e(t);
    }),
    (t.useFormState = function (e, t, n) {
      return l.H.useFormState(e, t, n);
    }),
    (t.useFormStatus = function () {
      return l.H.useHostTransitionStatus();
    }),
    (t.version = "19.2.3"));
}
