/* Recovered shipped factory. Module 693510.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 636037..636299
 * Raw property SHA-256: 9eb6592e9edcd4c9a0ab9bd81ea8d375525eb0d39eeaade45ed0f1c5cc1dd5a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(101968);
  e.exports = function () {
    var e = r(this),
      t = "";
    return (
      e.hasIndices && (t += "d"),
      e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.dotAll && (t += "s"),
      e.unicode && (t += "u"),
      e.unicodeSets && (t += "v"),
      e.sticky && (t += "y"),
      t
    );
  };
}
