/* Recovered shipped factory. Module 324988.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 773..1128
 * Raw property SHA-256: c1cf14e08bcd1f961b82fd8fa5e878046a99880aa43ee4a2fe3659bff81ae6f6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(344815),
    o = e(339626),
    i = e(647055),
    u = e(380744)("toStringTag"),
    a = Object,
    c =
      "Arguments" ===
      i(
        (function () {
          return arguments;
        })(),
      ),
    f = function (r, t) {
      try {
        return r[t];
      } catch (r) {}
    };
  r.exports = n
    ? i
    : function (r) {
        var t, e, n;
        return void 0 === r
          ? "Undefined"
          : null === r
            ? "Null"
            : "string" == typeof (e = f((t = a(r)), u))
              ? e
              : c
                ? i(t)
                : "Object" === (n = i(t)) && o(t.callee)
                  ? "Arguments"
                  : n;
      };
}
