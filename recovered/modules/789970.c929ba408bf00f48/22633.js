/* Recovered shipped factory. Module 22633.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 150589..151518
 * Raw property SHA-256: 48ec9845fd74fc3d7f361da2cad41736116b4275a95585201912265767a0cc9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { I: () => o });
  var i = r(582128);
  function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
    return i;
  }
  function o(e, t) {
    var r,
      o =
        (function (e) {
          if (Array.isArray(e)) return n(e);
        })((r = t || [])) ||
        (function (e) {
          if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
            return Array.from(e);
        })(r) ||
        (function (e) {
          if (e) {
            if ("string" == typeof e) return n(e, void 0);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (
              ("Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t)
            )
              return Array.from(e);
            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
              return n(e, void 0);
          }
        })(r) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })();
    return (
      null == t && "function" != typeof e && o.push(e),
      (0, i.useMemo)(function () {
        return "function" == typeof e ? e() : e;
      }, o)
    );
  }
}
