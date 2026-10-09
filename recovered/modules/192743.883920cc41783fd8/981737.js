/* Recovered shipped factory. Module 981737.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 46411..46875
 * Raw property SHA-256: 775b3c0e94ea16c21ec148493fb75dc8ba0546ca9eb110a5faee08254bc231c3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    return function (t, n) {
      var r;
      if (
        "formatting" === (null != n && n.context ? String(n.context) : "standalone") &&
        e.formattingValues
      ) {
        var o = e.defaultFormattingWidth || e.defaultWidth,
          a = null != n && n.width ? String(n.width) : o;
        r = e.formattingValues[a] || e.formattingValues[o];
      } else {
        var i = e.defaultWidth,
          u = null != n && n.width ? String(n.width) : e.defaultWidth;
        r = e.values[u] || e.values[i];
      }
      return r[e.argumentCallback ? e.argumentCallback(t) : t];
    };
  }
  n.d(t, { A: () => r });
}
