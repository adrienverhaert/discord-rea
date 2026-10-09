/* Recovered shipped factory. Module 326150.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 646910..647102
 * Raw property SHA-256: 3fa7ddd927fe281e650d5dde4021ca50b60e8155079cf335a4dc1d6dc274bc48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(249759),
    i = r(45804),
    o = r(381265);
  e.exports = function () {
    n();
    var e = i();
    return (
      o(
        Promise,
        { allSettled: e },
        {
          allSettled: function () {
            return Promise.allSettled !== e;
          },
        },
      ),
      e
    );
  };
}
