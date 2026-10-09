/* Recovered shipped factory. Module 868089.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 473630..474052
 * Raw property SHA-256: 46f98f6e6c57702df130f3bc3b9f9c4a70547c110e8e693e67f670daa0cf80d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(326948),
    i = r(267768),
    o = r(741623),
    a = {};
  try {
    a.__proto__ = null;
  } catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
  }
  var s = !("toString" in a),
    l = i && i(Object.prototype, "__proto__");
  e.exports =
    s &&
    ((!!l && "function" == typeof l.set && n([l.set])) ||
      function (e, t) {
        if (null == e) throw new o("set Object.prototype.__proto__ called on null or undefined");
        return ((e.__proto__ = t), t);
      });
}
