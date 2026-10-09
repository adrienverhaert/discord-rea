/* Recovered shipped factory. Module 234097.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 255..4391
 * Raw property SHA-256: 3d61eff61f93f8ce95dcfc27764da95ed1220207b26954ca9b3282d4b291a3f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { J: () => O });
  var i,
    n = [],
    o = "ResizeObserver loop completed with undelivered notifications.",
    s = function () {
      var e;
      ("function" == typeof ErrorEvent
        ? (e = new ErrorEvent("error", { message: o }))
        : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = o)),
        window.dispatchEvent(e));
    },
    a = r(522816),
    u = r(916784),
    c = function (e) {
      if ((0, u.dK)(e)) return 1 / 0;
      for (var t = 0, r = e.parentNode; r;) ((t += 1), (r = r.parentNode));
      return t;
    },
    d = r(623577),
    l = function () {
      var e = 1 / 0,
        t = [];
      n.forEach(function (r) {
        if (0 !== r.activeTargets.length) {
          var i = [];
          (r.activeTargets.forEach(function (t) {
            var r = new a.Z(t.target),
              n = c(t.target);
            (i.push(r), (t.lastReportedSize = (0, d.P)(t.target, t.observedBox)), n < e && (e = n));
          }),
            t.push(function () {
              r.callback.call(r.observer, i, r.observer);
            }),
            r.activeTargets.splice(0, r.activeTargets.length));
        }
      });
      for (var r = 0; r < t.length; r++) (0, t[r])();
      return e;
    },
    h = function (e) {
      n.forEach(function (t) {
        (t.activeTargets.splice(0, t.activeTargets.length),
          t.skippedTargets.splice(0, t.skippedTargets.length),
          t.observationTargets.forEach(function (r) {
            r.isActive() && (c(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
          }));
      });
    },
    f = function () {
      var e = 0;
      for (
        h(0);
        n.some(function (e) {
          return e.activeTargets.length > 0;
        });
      )
        h((e = l()));
      return (
        n.some(function (e) {
          return e.skippedTargets.length > 0;
        }) && s(),
        e > 0
      );
    },
    p = r(717205),
    m = [],
    g = function (e) {
      if (!i) {
        var t = 0,
          r = document.createTextNode("");
        (new MutationObserver(function () {
          return m.splice(0).forEach(function (e) {
            return e();
          });
        }).observe(r, { characterData: !0 }),
          (i = function () {
            r.textContent = "".concat(t ? t-- : t++);
          }));
      }
      (m.push(e), i());
    },
    _ = function (e) {
      g(function () {
        requestAnimationFrame(e);
      });
    },
    b = 0,
    v = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    y = [
      "resize",
      "load",
      "transitionend",
      "animationend",
      "animationstart",
      "animationiteration",
      "keyup",
      "keydown",
      "mouseup",
      "mousedown",
      "mouseover",
      "mouseout",
      "blur",
      "focus",
    ],
    w = function (e) {
      return (void 0 === e && (e = 0), Date.now() + e);
    },
    V = !1,
    x = new ((function () {
      function e() {
        var e = this;
        ((this.stopped = !0),
          (this.listener = function () {
            return e.schedule();
          }));
      }
      return (
        (e.prototype.run = function (e) {
          var t = this;
          if ((void 0 === e && (e = 250), !V)) {
            V = !0;
            var r = w(e);
            _(function () {
              var i = !1;
              try {
                i = f();
              } finally {
                if (((V = !1), (e = r - w()), !b)) return;
                i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
              }
            });
          }
        }),
        (e.prototype.schedule = function () {
          (this.stop(), this.run());
        }),
        (e.prototype.observe = function () {
          var e = this,
            t = function () {
              return e.observer && e.observer.observe(document.body, v);
            };
          document.body ? t() : p.S.addEventListener("DOMContentLoaded", t);
        }),
        (e.prototype.start = function () {
          var e = this;
          this.stopped &&
            ((this.stopped = !1),
            (this.observer = new MutationObserver(this.listener)),
            this.observe(),
            y.forEach(function (t) {
              return p.S.addEventListener(t, e.listener, !0);
            }));
        }),
        (e.prototype.stop = function () {
          var e = this;
          this.stopped ||
            (this.observer && this.observer.disconnect(),
            y.forEach(function (t) {
              return p.S.removeEventListener(t, e.listener, !0);
            }),
            (this.stopped = !0));
        }),
        e
      );
    })())(),
    T = function (e) {
      (!b && e > 0 && x.start(), (b += e) || x.stop());
    },
    k = r(838259),
    E = (function () {
      function e(e, t) {
        ((this.target = e),
          (this.observedBox = t || k.U.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
      }
      return (
        (e.prototype.isActive = function () {
          var e,
            t = (0, d.P)(this.target, this.observedBox, !0);
          return (
            (e = this.target),
            (0, u.XJ)(e) ||
              (0, u.td)(e) ||
              "inline" !== getComputedStyle(e).display ||
              (this.lastReportedSize = t),
            this.lastReportedSize.inlineSize !== t.inlineSize ||
              this.lastReportedSize.blockSize !== t.blockSize
          );
        }),
        e
      );
    })(),
    A = function (e, t) {
      ((this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = e),
        (this.callback = t));
    },
    R = new WeakMap(),
    P = function (e, t) {
      for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
      return -1;
    },
    O = (function () {
      function e() {}
      return (
        (e.connect = function (e, t) {
          var r = new A(e, t);
          R.set(e, r);
        }),
        (e.observe = function (e, t, r) {
          var i = R.get(e),
            o = 0 === i.observationTargets.length;
          0 > P(i.observationTargets, t) &&
            (o && n.push(i), i.observationTargets.push(new E(t, r && r.box)), T(1), x.schedule());
        }),
        (e.unobserve = function (e, t) {
          var r = R.get(e),
            i = P(r.observationTargets, t),
            o = 1 === r.observationTargets.length;
          i >= 0 && (o && n.splice(n.indexOf(r), 1), r.observationTargets.splice(i, 1), T(-1));
        }),
        (e.disconnect = function (e) {
          var t = this,
            r = R.get(e);
          (r.observationTargets.slice().forEach(function (r) {
            return t.unobserve(e, r.target);
          }),
            r.activeTargets.splice(0, r.activeTargets.length));
        }),
        e
      );
    })();
}
