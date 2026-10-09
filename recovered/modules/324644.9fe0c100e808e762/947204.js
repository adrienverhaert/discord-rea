/* Recovered shipped factory. Module 947204.
 * Source: recovered/web/assets/324644.9fe0c100e808e762.js
 * UTF-16 property offsets: 1791..2084
 * Raw property SHA-256: 72d17bdd429c6b38e54a79ab04cfe8106ad6f66e4e18434ca7fe333042ad64e8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, n) {
  var e = n(557939),
    o = n(410323),
    c = n(321727),
    u = n(120394),
    a = n(304880),
    i = n(503628),
    p = o("".charAt);
  e(
    {
      target: "String",
      proto: !0,
      forced: i(function () {
        return "\uD842" !== "\uD842\uDFB7".at(-2);
      }),
    },
    {
      at: function (t) {
        var r = a(c(this)),
          n = r.length,
          e = u(t),
          o = e >= 0 ? e : n + e;
        return o < 0 || o >= n ? void 0 : p(r, o);
      },
    },
  );
}
