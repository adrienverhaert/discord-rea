/* Recovered shipped factory. Module 934169.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 572321..573044
 * Raw property SHA-256: 404a2f5a09831357c95dd392fad814783699757b3b4afd3f9e1985e5867a2612
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  var r = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
    n = "[0-9a-wy-z]",
    i = n + "(?:-[a-z0-9]{2,8})+",
    o = "x(?:-[a-z0-9]{1,8})+",
    a = RegExp(
      "^(?:" +
        ("(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-" +
          r +
          ")*(?:-" +
          i +
          ")*(?:-" +
          o) +
        ")?|" +
        o +
        "|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$",
      "i",
    ),
    s = RegExp("^(?!x).*?-(" + r + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
    l = RegExp("^(?!x).*?-(" + n + ")-(?:\\w+-(?!x-))*\\1\\b", "i"),
    u = RegExp("-" + i, "ig");
  ((t.expBCP47Syntax = a),
    (t.expVariantDupes = s),
    (t.expSingletonDupes = l),
    (t.expExtSequences = u));
}
