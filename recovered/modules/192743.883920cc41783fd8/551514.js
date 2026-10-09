/* Recovered shipped factory. Module 551514.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 154931..155323
 * Raw property SHA-256: ff53455a2ea9e89c230992271238d43a0f7c8fe83b03c89525f19411cadbb80e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(24011),
    o = n(941063),
    a = n(548178),
    i = n(883093),
    u = n(859462),
    l = n(26352),
    s = n(456819),
    c = n(999193),
    f = n(377482);
  e.exports = function (e, t, n) {
    t = t.length
      ? r(t, function (e) {
          return f(e)
            ? function (t) {
                return o(t, 1 === e.length ? e[0] : e);
              }
            : e;
        })
      : [c];
    var d = -1;
    return (
      (t = r(t, l(a))),
      u(
        i(e, function (e, n, o) {
          return {
            criteria: r(t, function (t) {
              return t(e);
            }),
            index: ++d,
            value: e,
          };
        }),
        function (e, t) {
          return s(e, t, n);
        },
      )
    );
  };
}
