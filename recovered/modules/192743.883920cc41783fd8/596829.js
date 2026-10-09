/* Recovered shipped factory. Module 596829.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 643051..643434
 * Raw property SHA-256: 18ad2560e9bd543afb3ea37ebcc82de5500ecf3377342db81603e36a71e9de82
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(557939),
    o = n(230606),
    a = n(503628),
    i = n(627),
    u = n(304880),
    l = n(39911),
    s = o("URL"),
    c =
      l &&
      a(function () {
        s.canParse();
      }),
    f = a(function () {
      return 1 !== s.canParse.length;
    });
  r(
    { target: "URL", stat: !0, forced: !c || f },
    {
      canParse: function (e) {
        var t = i(arguments.length, 1),
          n = u(e),
          r = t < 2 || void 0 === arguments[1] ? void 0 : u(arguments[1]);
        try {
          return (new s(n, r), !0);
        } catch (e) {
          return !1;
        }
      },
    },
  );
}
