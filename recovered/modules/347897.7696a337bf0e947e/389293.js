/* Recovered shipped factory. Module 389293.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 465767..466699
 * Raw property SHA-256: 38985324f9b4ca065cdcddb7ade010166970347ce6bb8854bc67f3e970491d56
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = "%[a-f0-9]{2}",
    r = RegExp("(" + t + ")|([^%]+?)", "gi"),
    n = RegExp("(" + t + ")+", "gi");
  e.exports = function (e) {
    if ("string" != typeof e)
      throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
      return ((e = e.replace(/\+/g, " ")), decodeURIComponent(e));
    } catch (t) {
      return (function (e) {
        for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, i = n.exec(e); i;) {
          try {
            t[i[0]] = decodeURIComponent(i[0]);
          } catch (e) {
            var o = (function (e) {
              try {
                return decodeURIComponent(e);
              } catch (i) {
                for (var t = e.match(r) || [], n = 1; n < t.length; n++)
                  t =
                    (e = (function e(t, r) {
                      try {
                        return [decodeURIComponent(t.join(""))];
                      } catch (e) {}
                      if (1 === t.length) return t;
                      r = r || 1;
                      var n = t.slice(0, r),
                        i = t.slice(r);
                      return Array.prototype.concat.call([], e(n), e(i));
                    })(t, n).join("")).match(r) || [];
                return e;
              }
            })(i[0]);
            o !== i[0] && (t[i[0]] = o);
          }
          i = n.exec(e);
        }
        t["%C2"] = "\uFFFD";
        for (var a = Object.keys(t), s = 0; s < a.length; s++) {
          var l = a[s];
          e = e.replace(RegExp(l, "g"), t[l]);
        }
        return e;
      })(e);
    }
  };
}
