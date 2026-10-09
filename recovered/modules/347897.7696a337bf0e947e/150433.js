/* Recovered shipped factory. Module 150433.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 405234..405797
 * Raw property SHA-256: c525187f59702589391b75d701679c5a9f8213041682c5eceb72ce483cdd980a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = (function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n));
      }
    }
    return function (t, r, n) {
      return (r && e(t.prototype, r), n && e(t, n), t);
    };
  })();
  e.exports = (function () {
    function e() {
      if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
    }
    return (
      t(e, [
        { key: "start", value: function (e, t, r, n) {} },
        { key: "stop", value: function () {} },
        {
          key: "__debouncedOnEnd",
          value: function (e) {
            var t = this.__onEnd;
            ((this.__onEnd = null), t && t(e));
          },
        },
      ]),
      e
    );
  })();
}
