/* Recovered shipped factory. Module 113144.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 499513..500019
 * Raw property SHA-256: 452f74342594ca7fc89bbe15ed283cf628c4f2e29437ad6139ab4bbfb9b98226
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = {
      childContextTypes: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = { name: !0, length: !0, prototype: !0, caller: !0, arguments: !0, arity: !0 },
    n = "function" == typeof Object.getOwnPropertySymbols;
  e.exports = function (e, i, o) {
    if ("string" != typeof i) {
      var a = Object.getOwnPropertyNames(i);
      n && (a = a.concat(Object.getOwnPropertySymbols(i)));
      for (var s = 0; s < a.length; ++s)
        if (!t[a[s]] && !r[a[s]] && (!o || !o[a[s]]))
          try {
            e[a[s]] = i[a[s]];
          } catch (e) {}
    }
    return e;
  };
}
