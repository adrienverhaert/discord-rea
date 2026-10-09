/* Recovered shipped factory. Module 264048.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 542271..542742
 * Raw property SHA-256: 0e92874debb94a2dfa4ae10f8656a416ec8ae6ec55b1671f4b7b1465a911c3aa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(691262),
    i = (function () {
      try {
        return !!Object.defineProperty({}, "a", {});
      } catch (e) {
        return !1;
      }
    })();
  i || Object.prototype.__defineGetter__;
  var o = i
      ? Object.defineProperty
      : function (e, t, r) {
          "get" in r && e.__defineGetter__
            ? e.__defineGetter__(t, r.get)
            : (!n.hop.call(e, t) || "value" in r) && (e[t] = r.value);
        },
    a =
      Object.create ||
      function (e, t) {
        var r, i;
        function a() {}
        for (i in ((a.prototype = e), (r = new a()), t)) n.hop.call(t, i) && o(r, i, t[i]);
        return r;
      };
  ((t.defineProperty = o), (t.objCreate = a));
}
