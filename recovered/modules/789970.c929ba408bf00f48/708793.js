/* Recovered shipped factory. Module 708793.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 147882..150588
 * Raw property SHA-256: 012eb80d612c4f32ca5a19f4d1e67cfd6bb536349ef2ef6a078c089423f98c34
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { H: () => m });
  var i = r(290309),
    n = r(204581),
    o = r(575241),
    s = r(321733),
    a = r(582128);
  function u(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = r),
      e
    );
  }
  var c = (function () {
    var e;
    function t(e, r) {
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      (u(this, "spec", void 0), u(this, "monitor", void 0), (this.spec = e), (this.monitor = r));
    }
    return (
      (e = [
        {
          key: "canDrop",
          value: function () {
            var e = this.spec,
              t = this.monitor;
            return !e.canDrop || e.canDrop(t.getItem(), t);
          },
        },
        {
          key: "hover",
          value: function () {
            var e = this.spec,
              t = this.monitor;
            e.hover && e.hover(t.getItem(), t);
          },
        },
        {
          key: "drop",
          value: function () {
            var e = this.spec,
              t = this.monitor;
            if (e.drop) return e.drop(t.getItem(), t);
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
  })();
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  var l = r(22633),
    h = r(635610),
    f = r(202462),
    p = r(653944);
  function m(e, t) {
    var r,
      u,
      m,
      g,
      _,
      b,
      v,
      y,
      w,
      V = (0, l.I)(e, t),
      x =
        ((r = (0, n.u)()),
        (0, a.useMemo)(
          function () {
            return new h.b(r);
          },
          [r],
        )),
      T =
        ((u = V.options),
        (m = (0, n.u)()),
        (g = (0, a.useMemo)(
          function () {
            return new f.P(m.getBackend());
          },
          [m],
        )),
        (0, o.E)(
          function () {
            return (
              (g.dropTargetOptions = u || null),
              g.reconnect(),
              function () {
                return g.disconnectDropTarget();
              }
            );
          },
          [u],
        ),
        g);
    return (
      (_ = (0, n.u)()),
      (b = (0, a.useMemo)(
        function () {
          return new c(V, x);
        },
        [x],
      )),
      (0, a.useEffect)(
        function () {
          b.spec = V;
        },
        [V],
      ),
      (v = b),
      (y = V.accept),
      (w = (0, a.useMemo)(
        function () {
          return ((0, s.V)(null != V.accept, "accept must be defined"), Array.isArray(y) ? y : [y]);
        },
        [y],
      )),
      (0, o.E)(
        function () {
          var e,
            t =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((e = (0, i.l)(w, v, _))) ||
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
                  if ("string" == typeof e) return d(e, 2);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t)
                  )
                    return Array.from(e);
                  if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return d(e, 2);
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
        },
        [
          _,
          x,
          v,
          T,
          w
            .map(function (e) {
              return e.toString();
            })
            .join("|"),
        ],
      ),
      [
        (0, p.j)(V.collect, x, T),
        (0, a.useMemo)(
          function () {
            return T.hooks.dropTarget();
          },
          [T],
        ),
      ]
    );
  }
}
