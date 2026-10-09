/* Recovered shipped factory. Module 653944.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 143085..144319
 * Raw property SHA-256: 018f9914cf2723d401b89747a58926df4cf2eb075b964de2f84b900a0e76f9e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { j: () => s });
  var i = r(575241),
    n = r(782376);
  function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  function s(e, t, r) {
    var s, a, u, c, d, l;
    return (
      (s =
        e ||
        function () {
          return {};
        }),
      (a = function () {
        return r.reconnect();
      }),
      (d = (c =
        (function (e) {
          if (Array.isArray(e)) return e;
        })((u = (0, n.F)(t, s, a))) ||
        (function (e) {
          var t,
            r,
            i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
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
        })(u) ||
        (function (e) {
          if (e) {
            if ("string" == typeof e) return o(e, 2);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t)
            )
              return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return o(e, 2);
          }
        })(u) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })())[0]),
      (l = c[1]),
      (0, i.E)(
        function () {
          var e = t.getHandlerId();
          if (null != e) return t.subscribeToStateChange(l, { handlerIds: [e] });
        },
        [t, l],
      ),
      d
    );
  }
}
