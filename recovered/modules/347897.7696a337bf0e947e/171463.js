/* Recovered shipped factory. Module 171463.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 826082..826532
 * Raw property SHA-256: 4bdf14d1a94883d0b70e562ab437bafe6c3f69601b8003af8806a4b47a17d6f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(721602),
    i = r(870064),
    o = "object" == typeof StopIteration ? StopIteration : null;
  e.exports = function (e) {
    if (!o) throw new i("this environment lacks StopIteration");
    n.set(e, "[[Done]]", !1);
    var t = {
      next: function () {
        var e = n.get(this, "[[Iterator]]"),
          t = !!n.get(e, "[[Done]]");
        try {
          return { done: t, value: t ? void 0 : e.next() };
        } catch (t) {
          if ((n.set(e, "[[Done]]", !0), t !== o)) throw t;
          return { done: !0, value: void 0 };
        }
      },
    };
    return (n.set(t, "[[Iterator]]", e), t);
  };
}
