/* Recovered shipped factory. Module 788409.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 817615..817993
 * Raw property SHA-256: d5a49a78b19be99b45f878aeb29059c70d387e3bd495be88f116908f7f3625c7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(741623),
    i = r(315646),
    o = r(363364),
    a = r(12161),
    s = r(158056) || a || o;
  e.exports = function () {
    var e,
      t = {
        assert: function (e) {
          if (!t.has(e)) throw new n("Side channel does not contain " + i(e));
        },
        delete: function (t) {
          return !!e && e.delete(t);
        },
        get: function (t) {
          return e && e.get(t);
        },
        has: function (t) {
          return !!e && e.has(t);
        },
        set: function (t, r) {
          (e || (e = s()), e.set(t, r));
        },
      };
    return t;
  };
}
