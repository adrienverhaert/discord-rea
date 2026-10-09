/* Recovered shipped factory. Module 104681.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 165008..168204
 * Raw property SHA-256: 7586f380f90ffb5b6951863dc1a2a5f156a4d4f74490afcd2edd3aa00cc0ae03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function i(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
  }
  function n(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
  }
  function o(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      var r,
        i = getComputedStyle(e, null);
      return (
        n(i.overflowY, t) ||
        n(i.overflowX, t) ||
        (!!(r = (function (e) {
          if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
          try {
            return e.ownerDocument.defaultView.frameElement;
          } catch (e) {
            return null;
          }
        })(e)) &&
          (r.clientHeight < e.scrollHeight || r.clientWidth < e.scrollWidth))
      );
    }
    return !1;
  }
  function s(e, t, r, i, n, o, s, a) {
    return (o < e && s > t) || (o > e && s < t)
      ? 0
      : (o <= e && a <= r) || (s >= t && a >= r)
        ? o - e - i
        : (s > t && a < r) || (o < e && a > r)
          ? s - t + n
          : 0;
  }
  r.d(t, { A: () => c });
  var a = function (e, t) {
    var r = window,
      n = t.scrollMode,
      a = t.block,
      u = t.inline,
      c = t.boundary,
      d = t.skipOverflowHiddenElements,
      l =
        "function" == typeof c
          ? c
          : function (e) {
              return e !== c;
            };
    if (!i(e)) throw TypeError("Invalid target");
    for (
      var h, f, p = document.scrollingElement || document.documentElement, m = [], g = e;
      i(g) && l(g);
    ) {
      if ((g = null == (f = (h = g).parentElement) ? h.getRootNode().host || null : f) === p) {
        m.push(g);
        break;
      }
      (null != g && g === document.body && o(g) && !o(document.documentElement)) ||
        (null != g && o(g, d) && m.push(g));
    }
    for (
      var _ = r.visualViewport ? r.visualViewport.width : innerWidth,
        b = r.visualViewport ? r.visualViewport.height : innerHeight,
        v = window.scrollX || pageXOffset,
        y = window.scrollY || pageYOffset,
        w = e.getBoundingClientRect(),
        V = w.height,
        x = w.width,
        T = w.top,
        k = w.right,
        E = w.bottom,
        A = w.left,
        R = "start" === a || "nearest" === a ? T : "end" === a ? E : T + V / 2,
        P = "center" === u ? A + x / 2 : "end" === u ? k : A,
        O = [],
        I = 0;
      I < m.length;
      I++
    ) {
      var S = m[I],
        L = S.getBoundingClientRect(),
        U = L.height,
        C = L.width,
        D = L.top,
        F = L.right,
        M = L.bottom,
        j = L.left;
      if (
        "if-needed" === n &&
        T >= 0 &&
        A >= 0 &&
        E <= b &&
        k <= _ &&
        T >= D &&
        E <= M &&
        A >= j &&
        k <= F
      )
        break;
      var B = getComputedStyle(S),
        N = parseInt(B.borderLeftWidth, 10),
        W = parseInt(B.borderTopWidth, 10),
        H = parseInt(B.borderRightWidth, 10),
        G = parseInt(B.borderBottomWidth, 10),
        X = 0,
        z = 0,
        q = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - N - H : 0,
        Y = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - W - G : 0,
        Q = "offsetWidth" in S ? (0 === S.offsetWidth ? 0 : C / S.offsetWidth) : 0,
        K = "offsetHeight" in S ? (0 === S.offsetHeight ? 0 : U / S.offsetHeight) : 0;
      if (p === S)
        ((X =
          "start" === a
            ? R
            : "end" === a
              ? R - b
              : "nearest" === a
                ? s(y, y + b, b, W, G, y + R, y + R + V, V)
                : R - b / 2),
          (z =
            "start" === u
              ? P
              : "center" === u
                ? P - _ / 2
                : "end" === u
                  ? P - _
                  : s(v, v + _, _, N, H, v + P, v + P + x, x)),
          (X = Math.max(0, X + y)),
          (z = Math.max(0, z + v)));
      else {
        ((X =
          "start" === a
            ? R - D - W
            : "end" === a
              ? R - M + G + Y
              : "nearest" === a
                ? s(D, M, U, W, G + Y, R, R + V, V)
                : R - (D + U / 2) + Y / 2),
          (z =
            "start" === u
              ? P - j - N
              : "center" === u
                ? P - (j + C / 2) + q / 2
                : "end" === u
                  ? P - F + H + q
                  : s(j, F, C, N, H + q, P, P + x, x)));
        var Z = S.scrollLeft,
          J = S.scrollTop;
        ((R += J - (X = Math.max(0, Math.min(J + X / K, S.scrollHeight - U / K + Y)))),
          (P += Z - (z = Math.max(0, Math.min(Z + z / Q, S.scrollWidth - C / Q + q)))));
      }
      O.push({ el: S, top: X, left: z });
    }
    return O;
  };
  function u(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
  }
  let c = function (e, t) {
    var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (u(t) && "function" == typeof t.behavior) return t.behavior(r ? a(e, t) : []);
    if (r) {
      var i,
        n,
        o,
        s =
          !1 === t
            ? { block: "end", inline: "nearest" }
            : u(t)
              ? t
              : { block: "start", inline: "nearest" };
      return (
        (i = a(e, s)),
        void 0 === (n = s.behavior) && (n = "auto"),
        (o = "scrollBehavior" in document.body.style),
        void i.forEach(function (e) {
          var t = e.el,
            r = e.top,
            i = e.left;
          t.scroll && o
            ? t.scroll({ top: r, left: i, behavior: n })
            : ((t.scrollTop = r), (t.scrollLeft = i));
        })
      );
    }
  };
}
