/* Recovered shipped factory. Module 881745.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 175370..175795
 * Raw property SHA-256: b1f40153527819db6033a13ac742d9df52fc091f803af8c170111e6b74cee8db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = "\\ud800-\\udfff",
    n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    r = "\\ud83c[\\udffb-\\udfff]",
    o = "[^" + t + "]",
    a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    i = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    u = "(?:" + n + "|" + r + ")?",
    l = "[\\ufe0e\\ufe0f]?",
    s = "(?:\\u200d(?:" + [o, a, i].join("|") + ")" + l + u + ")*",
    c = RegExp(
      r +
        "(?=" +
        r +
        ")|" +
        ("(?:" + [o + n + "?", n, a, i, "[" + t + "]"].join("|")) +
        ")" +
        (l + u + s),
      "g",
    );
  e.exports = function (e) {
    return e.match(c) || [];
  };
}
