/* Recovered shipped factory. Module 314144.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 636726..637825
 * Raw property SHA-256: a5392e78036379a74ecf48f70eb04093f8248d3ace4847545c0055493e8f1b22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r,
    o,
    a,
    i,
    u = n(860511),
    l = n(985848),
    s = n(221015),
    c = n(339626),
    f = n(210140),
    d = n(503628),
    h = n(469520),
    p = n(192819),
    y = n(447280),
    m = n(627),
    v = n(705333),
    g = n(13570),
    b = u.setImmediate,
    w = u.clearImmediate,
    _ = u.process,
    k = u.Dispatch,
    x = u.Function,
    S = u.MessageChannel,
    E = u.String,
    O = 0,
    T = {},
    R = "onreadystatechange";
  d(function () {
    r = u.location;
  });
  var A = function (e) {
      if (f(T, e)) {
        var t = T[e];
        (delete T[e], t());
      }
    },
    C = function (e) {
      return function () {
        A(e);
      };
    },
    M = function (e) {
      A(e.data);
    },
    D = function (e) {
      u.postMessage(E(e), r.protocol + "//" + r.host);
    };
  ((b && w) ||
    ((b = function (e) {
      m(arguments.length, 1);
      var t = c(e) ? e : x(e),
        n = p(arguments, 1);
      return (
        (T[++O] = function () {
          l(t, void 0, n);
        }),
        o(O),
        O
      );
    }),
    (w = function (e) {
      delete T[e];
    }),
    g
      ? (o = function (e) {
          _.nextTick(C(e));
        })
      : k && k.now
        ? (o = function (e) {
            k.now(C(e));
          })
        : S && !v
          ? ((i = (a = new S()).port2), (a.port1.onmessage = M), (o = s(i.postMessage, i)))
          : u.addEventListener &&
              c(u.postMessage) &&
              !u.importScripts &&
              r &&
              "file:" !== r.protocol &&
              !d(D)
            ? ((o = D), u.addEventListener("message", M, !1))
            : (o =
                R in y("script")
                  ? function (e) {
                      h.appendChild(y("script"))[R] = function () {
                        (h.removeChild(this), A(e));
                      };
                    }
                  : function (e) {
                      setTimeout(C(e), 0);
                    })),
    (e.exports = { set: b, clear: w }));
}
