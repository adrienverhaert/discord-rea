/* Recovered shipped factory. Module 483606.
 * Source: recovered/web/assets/918146.e792a241e8075058.js
 * UTF-16 property offsets: 134409..134690
 * Raw property SHA-256: 4b8ac638e9216ea732ca47ddd12b1b7e0df23711b4a6024b408ad71ecd019f3e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var u = r(557939),
    n = r(410323),
    a = r(321727),
    o = r(304880),
    i = n("".charCodeAt);
  u(
    { target: "String", proto: !0 },
    {
      isWellFormed: function () {
        for (var e = o(a(this)), t = e.length, r = 0; r < t; r++) {
          var u = i(e, r);
          if ((63488 & u) == 55296 && (u >= 56320 || ++r >= t || (64512 & i(e, r)) != 56320))
            return !1;
        }
        return !0;
      },
    },
  );
}
