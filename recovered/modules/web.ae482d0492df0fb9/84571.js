/* Recovered shipped factory. Module 84571.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10491845..10492059
 * Raw property SHA-256: c023a10845f7ba8c5f8c3efdf09b7c7e6ef27c5edc9afa4cbe8d7f6a51a99422
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    O: () =>
      function e(t) {
        return "string" == typeof t || "number" == typeof t
          ? t.toString()
          : t instanceof Array
            ? t.map(e).join("")
            : i.isValidElement(t)
              ? e(t.props.children)
              : void 0;
      },
  });
  var i = n(582128);
}
