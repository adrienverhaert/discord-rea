/* Recovered shipped factory. Module 657335.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 144320..147881
 * Raw property SHA-256: e08dcf1ec66acd42febb359fd132ad3e07cca026c3fdea0782f45150b370a574
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { i: () => g });
  var i = r(290309),
    n = r(575241),
    o = r(582128);
  function s(e) {
    return (s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function a(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = r),
      e
    );
  }
  var u = (function () {
      var e;
      function t(e, r, i) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        (a(this, "spec", void 0),
          a(this, "monitor", void 0),
          a(this, "connector", void 0),
          (this.spec = e),
          (this.monitor = r),
          (this.connector = i));
      }
      return (
        (e = [
          {
            key: "beginDrag",
            value: function () {
              var e,
                t = this.spec,
                r = this.monitor;
              return null !=
                (e = "object" === s(t.item) ? t.item : "function" == typeof t.item ? t.item(r) : {})
                ? e
                : null;
            },
          },
          {
            key: "canDrag",
            value: function () {
              var e = this.spec,
                t = this.monitor;
              return "boolean" == typeof e.canDrag
                ? e.canDrag
                : "function" != typeof e.canDrag || e.canDrag(t);
            },
          },
          {
            key: "isDragging",
            value: function (e, t) {
              var r = this.spec,
                i = this.monitor,
                n = r.isDragging;
              return n ? n(i) : t === e.getSourceId();
            },
          },
          {
            key: "endDrag",
            value: function () {
              var e = this.spec,
                t = this.monitor,
                r = this.connector,
                i = e.end;
              (i && i(t.getItem(), t), r.reconnect());
            },
          },
        ]),
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i));
          }
        })(t.prototype, e),
        t
      );
    })(),
    c = r(204581),
    d = r(321733);
  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  var h = r(22633),
    f = r(836539),
    p = r(79726),
    m = r(653944);
  function g(e, t) {
    var r,
      s,
      a,
      g,
      _,
      b,
      v,
      y,
      w,
      V = (0, h.I)(e, t);
    (0, d.V)(
      !V.begin,
      "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var x =
        ((r = (0, c.u)()),
        (0, o.useMemo)(
          function () {
            return new f.G(r);
          },
          [r],
        )),
      T =
        ((s = V.options),
        (a = V.previewOptions),
        (g = (0, c.u)()),
        (_ = (0, o.useMemo)(
          function () {
            return new p.b(g.getBackend());
          },
          [g],
        )),
        (0, n.E)(
          function () {
            return (
              (_.dragSourceOptions = s || null),
              _.reconnect(),
              function () {
                return _.disconnectDragSource();
              }
            );
          },
          [_, s],
        ),
        (0, n.E)(
          function () {
            return (
              (_.dragPreviewOptions = a || null),
              _.reconnect(),
              function () {
                return _.disconnectDragPreview();
              }
            );
          },
          [_, a],
        ),
        _);
    return (
      (b = (0, c.u)()),
      (v = (0, o.useMemo)(
        function () {
          return new u(V, x, T);
        },
        [x, T],
      )),
      (0, o.useEffect)(
        function () {
          v.spec = V;
        },
        [V],
      ),
      (y = v),
      (w = (0, o.useMemo)(
        function () {
          var e = V.type;
          return ((0, d.V)(null != e, "spec.type must be defined"), e);
        },
        [V],
      )),
      (0, n.E)(
        function () {
          if (null != w) {
            var e,
              t =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((e = (0, i.V)(w, y, b))) ||
                (function (e) {
                  var t,
                    r,
                    i =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                  if (null != i) {
                    var n = [],
                      o = !0,
                      s = !1;
                    try {
                      for (
                        i = i.call(e);
                        !(o = (t = i.next()).done) && (n.push(t.value), 2 !== n.length);
                        o = !0
                      );
                    } catch (e) {
                      ((s = !0), (r = e));
                    } finally {
                      try {
                        o || null == i.return || i.return();
                      } finally {
                        if (s) throw r;
                      }
                    }
                    return n;
                  }
                })(e) ||
                (function (e) {
                  if (e) {
                    if ("string" == typeof e) return l(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === t && e.constructor && (t = e.constructor.name),
                      "Map" === t || "Set" === t)
                    )
                      return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                      return l(e, 2);
                  }
                })(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
              r = t[0],
              n = t[1];
            return (x.receiveHandlerId(r), T.receiveHandlerId(r), n);
          }
        },
        [b, x, T, y, w],
      ),
      [
        (0, m.j)(V.collect, x, T),
        (0, o.useMemo)(
          function () {
            return T.hooks.dragSource();
          },
          [T],
        ),
        (0, o.useMemo)(
          function () {
            return T.hooks.dragPreview();
          },
          [T],
        ),
      ]
    );
  }
}
