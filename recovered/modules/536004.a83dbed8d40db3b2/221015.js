/* Recovered shipped factory. Module 221015.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 3952..4117
 * Raw property SHA-256: 8e4e57141e44ab789c2c306afb13462c72eb641ea948514bad5bd4d89590e3cb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(517737),
    o = e(514575),
    a = e(630017),
    i = n(n.bind);
  r.exports = function (r, t) {
    return (
      o(r),
      void 0 === t
        ? r
        : a
          ? i(r, t)
          : function () {
              return r.apply(t, arguments);
            }
    );
  };
}
