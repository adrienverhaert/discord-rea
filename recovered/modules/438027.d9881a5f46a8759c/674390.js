/* Recovered shipped factory. Module 674390.
 * Source: recovered/web/assets/438027.d9881a5f46a8759c.js
 * UTF-16 property offsets: 22134..22782
 * Raw property SHA-256: f475b833945d7da1a3f5ee3071bb437b5d81b4a546edaf9dbe79023e56b6c2c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  "use strict";
  var n = e(933373);
  function o() {}
  function i() {}
  ((i.resetWarningCache = o),
    (t.exports = function () {
      function t(t, r, e, o, i, f) {
        if (f !== n) {
          var u = Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((u.name = "Invariant Violation"), u);
        }
      }
      function r() {
        return t;
      }
      t.isRequired = t;
      var e = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: r,
        element: t,
        elementType: t,
        instanceOf: r,
        node: t,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r,
        checkPropTypes: i,
        resetWarningCache: o,
      };
      return ((e.PropTypes = e), e);
    }));
}
