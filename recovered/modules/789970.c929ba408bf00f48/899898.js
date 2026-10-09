/* Recovered shipped factory. Module 899898.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 16526..23260
 * Raw property SHA-256: 5c89f2dcc6c1c82899dda8e9cb31c34c6c7737bd3f91af66e86d24c4867f59ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function () {
  !(function (e, t) {
    "use strict";
    if (
      "IntersectionObserver" in e &&
      "IntersectionObserverEntry" in e &&
      "intersectionRatio" in e.IntersectionObserverEntry.prototype
    ) {
      "isIntersecting" in e.IntersectionObserverEntry.prototype ||
        Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function () {
            return this.intersectionRatio > 0;
          },
        });
      return;
    }
    var r = [];
    function i(e) {
      ((this.time = e.time),
        (this.target = e.target),
        (this.rootBounds = e.rootBounds),
        (this.boundingClientRect = e.boundingClientRect),
        (this.intersectionRect = e.intersectionRect || u()),
        (this.isIntersecting = !!e.intersectionRect));
      var t = this.boundingClientRect,
        r = t.width * t.height,
        i = this.intersectionRect,
        n = i.width * i.height;
      r ? (this.intersectionRatio = n / r) : (this.intersectionRatio = +!!this.isIntersecting);
    }
    function n(e, t) {
      var r,
        i,
        n,
        o = t || {};
      if ("function" != typeof e) throw Error("callback must be a function");
      if (o.root && 1 != o.root.nodeType) throw Error("root must be an Element");
      ((this._checkForIntersections =
        ((r = this._checkForIntersections.bind(this)),
        (i = this.THROTTLE_TIMEOUT),
        (n = null),
        function () {
          n ||
            (n = setTimeout(function () {
              (r(), (n = null));
            }, i));
        })),
        (this._callback = e),
        (this._observationTargets = []),
        (this._queuedEntries = []),
        (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
        (this.thresholds = this._initThresholds(o.threshold)),
        (this.root = o.root || null),
        (this.rootMargin = this._rootMarginValues
          .map(function (e) {
            return e.value + e.unit;
          })
          .join(" ")));
    }
    function o(e, t, r, i) {
      "function" == typeof e.addEventListener
        ? e.addEventListener(t, r, i || !1)
        : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r);
    }
    function s(e, t, r, i) {
      "function" == typeof e.removeEventListener
        ? e.removeEventListener(t, r, i || !1)
        : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r);
    }
    function a(e) {
      var t;
      try {
        t = e.getBoundingClientRect();
      } catch (e) {}
      return t
        ? ((t.width && t.height) ||
            (t = {
              top: t.top,
              right: t.right,
              bottom: t.bottom,
              left: t.left,
              width: t.right - t.left,
              height: t.bottom - t.top,
            }),
          t)
        : u();
    }
    function u() {
      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    }
    function c(e, t) {
      for (var r = t; r;) {
        if (r == e) return !0;
        r = d(r);
      }
      return !1;
    }
    function d(e) {
      var t = e.parentNode;
      return t && 11 == t.nodeType && t.host ? t.host : t;
    }
    ((n.prototype.THROTTLE_TIMEOUT = 100),
      (n.prototype.POLL_INTERVAL = null),
      (n.prototype.USE_MUTATION_OBSERVER = !0),
      (n.prototype.observe = function (e) {
        if (
          !this._observationTargets.some(function (t) {
            return t.element == e;
          })
        ) {
          if (!(e && 1 == e.nodeType)) throw Error("target must be an Element");
          (this._registerInstance(),
            this._observationTargets.push({ element: e, entry: null }),
            this._monitorIntersections(),
            this._checkForIntersections());
        }
      }),
      (n.prototype.unobserve = function (e) {
        ((this._observationTargets = this._observationTargets.filter(function (t) {
          return t.element != e;
        })),
          this._observationTargets.length ||
            (this._unmonitorIntersections(), this._unregisterInstance()));
      }),
      (n.prototype.disconnect = function () {
        ((this._observationTargets = []),
          this._unmonitorIntersections(),
          this._unregisterInstance());
      }),
      (n.prototype.takeRecords = function () {
        var e = this._queuedEntries.slice();
        return ((this._queuedEntries = []), e);
      }),
      (n.prototype._initThresholds = function (e) {
        var t = e || [0];
        return (
          Array.isArray(t) || (t = [t]),
          t.sort().filter(function (e, t, r) {
            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
              throw Error("threshold must be a number between 0 and 1 inclusively");
            return e !== r[t - 1];
          })
        );
      }),
      (n.prototype._parseRootMargin = function (e) {
        var t = (e || "0px").split(/\s+/).map(function (e) {
          var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
          if (!t) throw Error("rootMargin must be specified in pixels or percent");
          return { value: parseFloat(t[1]), unit: t[2] };
        });
        return ((t[1] = t[1] || t[0]), (t[2] = t[2] || t[0]), (t[3] = t[3] || t[1]), t);
      }),
      (n.prototype._monitorIntersections = function () {
        !this._monitoringIntersections &&
          ((this._monitoringIntersections = !0),
          this.POLL_INTERVAL
            ? (this._monitoringInterval = setInterval(
                this._checkForIntersections,
                this.POLL_INTERVAL,
              ))
            : (o(e, "resize", this._checkForIntersections, !0),
              o(t, "scroll", this._checkForIntersections, !0),
              this.USE_MUTATION_OBSERVER &&
                "MutationObserver" in e &&
                ((this._domObserver = new MutationObserver(this._checkForIntersections)),
                this._domObserver.observe(t, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))));
      }),
      (n.prototype._unmonitorIntersections = function () {
        this._monitoringIntersections &&
          ((this._monitoringIntersections = !1),
          clearInterval(this._monitoringInterval),
          (this._monitoringInterval = null),
          s(e, "resize", this._checkForIntersections, !0),
          s(t, "scroll", this._checkForIntersections, !0),
          this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
      }),
      (n.prototype._checkForIntersections = function () {
        var t = this._rootIsInDom(),
          r = t ? this._getRootRect() : u();
        (this._observationTargets.forEach(function (n) {
          var o = n.element,
            s = a(o),
            u = this._rootContainsTarget(o),
            c = n.entry,
            d = t && u && this._computeTargetAndRootIntersection(o, r),
            l = (n.entry = new i({
              time: e.performance && performance.now && performance.now(),
              target: o,
              boundingClientRect: s,
              rootBounds: r,
              intersectionRect: d,
            }));
          c
            ? t && u
              ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l)
              : c && c.isIntersecting && this._queuedEntries.push(l)
            : this._queuedEntries.push(l);
        }, this),
          this._queuedEntries.length && this._callback(this.takeRecords(), this));
      }),
      (n.prototype._computeTargetAndRootIntersection = function (r, i) {
        if ("none" != e.getComputedStyle(r).display) {
          for (var n = a(r), o = d(r), s = !1; !s;) {
            var u = null,
              c = 1 == o.nodeType ? e.getComputedStyle(o) : {};
            if ("none" == c.display) return;
            if (
              (o == this.root || o == t
                ? ((s = !0), (u = i))
                : o != t.body && o != t.documentElement && "visible" != c.overflow && (u = a(o)),
              u &&
                !(n = (function (e, t) {
                  var r = Math.max(e.top, t.top),
                    i = Math.min(e.bottom, t.bottom),
                    n = Math.max(e.left, t.left),
                    o = Math.min(e.right, t.right),
                    s = o - n,
                    a = i - r;
                  return (
                    s >= 0 &&
                    a >= 0 && { top: r, bottom: i, left: n, right: o, width: s, height: a }
                  );
                })(u, n)))
            )
              break;
            o = d(o);
          }
          return n;
        }
      }),
      (n.prototype._getRootRect = function () {
        var e;
        if (this.root) e = a(this.root);
        else {
          var r = t.documentElement,
            i = t.body;
          e = {
            top: 0,
            left: 0,
            right: r.clientWidth || i.clientWidth,
            width: r.clientWidth || i.clientWidth,
            bottom: r.clientHeight || i.clientHeight,
            height: r.clientHeight || i.clientHeight,
          };
        }
        return this._expandRectByRootMargin(e);
      }),
      (n.prototype._expandRectByRootMargin = function (e) {
        var t = this._rootMarginValues.map(function (t, r) {
            return "px" == t.unit ? t.value : (t.value * (r % 2 ? e.width : e.height)) / 100;
          }),
          r = {
            top: e.top - t[0],
            right: e.right + t[1],
            bottom: e.bottom + t[2],
            left: e.left - t[3],
          };
        return ((r.width = r.right - r.left), (r.height = r.bottom - r.top), r);
      }),
      (n.prototype._hasCrossedThreshold = function (e, t) {
        var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
          i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (r !== i)
          for (var n = 0; n < this.thresholds.length; n++) {
            var o = this.thresholds[n];
            if (o == r || o == i || o < r != o < i) return !0;
          }
      }),
      (n.prototype._rootIsInDom = function () {
        return !this.root || c(t, this.root);
      }),
      (n.prototype._rootContainsTarget = function (e) {
        return c(this.root || t, e);
      }),
      (n.prototype._registerInstance = function () {
        0 > r.indexOf(this) && r.push(this);
      }),
      (n.prototype._unregisterInstance = function () {
        var e = r.indexOf(this);
        -1 != e && r.splice(e, 1);
      }),
      (e.IntersectionObserver = n),
      (e.IntersectionObserverEntry = i));
  })(window, document);
}
