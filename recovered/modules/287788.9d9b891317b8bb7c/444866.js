/* Recovered shipped factory. Module 444866.
 * Source: recovered/web/assets/287788.9d9b891317b8bb7c.js
 * UTF-16 property offsets: 15699..17044
 * Raw property SHA-256: 2dbc0909a76cceb570c2d528f8ae99aae38d13af5f3c95b4d2af1e68db2a0b6e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, r) {
  "use strict";
  var o =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      },
    n = f(r(143243)),
    i = f(r(562627)),
    a = f(r(223108)),
    s = r(582128),
    u = f(s),
    l = f(r(932701));
  function f(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var h = {
      bgColor: a.default.oneOfType([a.default.object, a.default.string]),
      fgColor: a.default.oneOfType([a.default.object, a.default.string]),
      level: a.default.string,
      size: a.default.number,
      value: a.default.string.isRequired,
    },
    g = (0, s.forwardRef)(function (t, e) {
      var r = t.bgColor,
        a = t.fgColor,
        s = t.level,
        f = t.size,
        h = t.value,
        g = (function (t, e) {
          var r = {};
          for (var o in t)
            !(e.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
          return r;
        })(t, ["bgColor", "fgColor", "level", "size", "value"]),
        d = new n.default(-1, i.default[s]);
      (d.addData(h), d.make());
      var c = d.modules;
      return u.default.createElement(
        l.default,
        o({}, g, {
          bgColor: r,
          bgD: c
            .map(function (t, e) {
              return t
                .map(function (t, r) {
                  return t ? "" : "M " + r + " " + e + " l 1 0 0 1 -1 0 Z";
                })
                .join(" ");
            })
            .join(" "),
          fgColor: a,
          fgD: c
            .map(function (t, e) {
              return t
                .map(function (t, r) {
                  return t ? "M " + r + " " + e + " l 1 0 0 1 -1 0 Z" : "";
                })
                .join(" ");
            })
            .join(" "),
          ref: e,
          size: f,
          viewBoxSize: c.length,
        }),
      );
    });
  ((g.displayName = "QRCode"),
    (g.propTypes = h),
    (g.defaultProps = { bgColor: "#FFFFFF", fgColor: "#000000", level: "L", size: 256 }),
    (e.default = g));
}
