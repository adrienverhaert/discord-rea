/* Recovered shipped factory. Module 623577.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 4831..6834
 * Raw property SHA-256: 41838644b859efc0b1838a6a09aedee3bc30c4d86833e7018c7429b6cbe488bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { P: () => _, m: () => g });
  var i = r(838259),
    n = r(162563),
    o = r(47361),
    s = (function () {
      function e(e, t, r, i) {
        return (
          (this.x = e),
          (this.y = t),
          (this.width = r),
          (this.height = i),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          (0, o.C)(this)
        );
      }
      return (
        (e.prototype.toJSON = function () {
          return {
            x: this.x,
            y: this.y,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
            width: this.width,
            height: this.height,
          };
        }),
        (e.fromRect = function (t) {
          return new e(t.x, t.y, t.width, t.height);
        }),
        e
      );
    })(),
    a = r(916784),
    u = r(717205),
    c = new WeakMap(),
    d = /auto|scroll/,
    l = /^tb|vertical/,
    h = /msie|trident/i.test(u.S.navigator && u.S.navigator.userAgent),
    f = function (e) {
      return parseFloat(e || "0");
    },
    p = function (e, t, r) {
      return (
        void 0 === e && (e = 0),
        void 0 === t && (t = 0),
        void 0 === r && (r = !1),
        new n.a((r ? t : e) || 0, (r ? e : t) || 0)
      );
    },
    m = (0, o.C)({
      devicePixelContentBoxSize: p(),
      borderBoxSize: p(),
      contentBoxSize: p(),
      contentRect: new s(0, 0, 0, 0),
    }),
    g = function (e, t) {
      if ((void 0 === t && (t = !1), c.has(e) && !t)) return c.get(e);
      if ((0, a.dK)(e)) return (c.set(e, m), m);
      var r = getComputedStyle(e),
        i = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
        n = !h && "border-box" === r.boxSizing,
        u = l.test(r.writingMode || ""),
        g = !i && d.test(r.overflowY || ""),
        _ = !i && d.test(r.overflowX || ""),
        b = i ? 0 : f(r.paddingTop),
        v = i ? 0 : f(r.paddingRight),
        y = i ? 0 : f(r.paddingBottom),
        w = i ? 0 : f(r.paddingLeft),
        V = i ? 0 : f(r.borderTopWidth),
        x = i ? 0 : f(r.borderRightWidth),
        T = i ? 0 : f(r.borderBottomWidth),
        k = i ? 0 : f(r.borderLeftWidth),
        E = w + v,
        A = b + y,
        R = k + x,
        P = V + T,
        O = _ ? e.offsetHeight - P - e.clientHeight : 0,
        I = g ? e.offsetWidth - R - e.clientWidth : 0,
        S = i ? i.width : f(r.width) - (n ? E + R : 0) - I,
        L = i ? i.height : f(r.height) - (n ? A + P : 0) - O,
        U = S + E + I + R,
        C = L + A + O + P,
        D = (0, o.C)({
          devicePixelContentBoxSize: p(
            Math.round(S * devicePixelRatio),
            Math.round(L * devicePixelRatio),
            u,
          ),
          borderBoxSize: p(U, C, u),
          contentBoxSize: p(S, L, u),
          contentRect: new s(w, b, S, L),
        });
      return (c.set(e, D), D);
    },
    _ = function (e, t, r) {
      var n = g(e, r),
        o = n.borderBoxSize,
        s = n.contentBoxSize,
        a = n.devicePixelContentBoxSize;
      switch (t) {
        case i.U.DEVICE_PIXEL_CONTENT_BOX:
          return a;
        case i.U.BORDER_BOX:
          return o;
        default:
          return s;
      }
    };
}
