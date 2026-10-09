/* Recovered shipped factory. Module 877413.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 2558..2876
 * Raw property SHA-256: a73cddc7a28281c5fa38ae8273a009ffc1fca9dc9d422a1a663c75b0ce1f344b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = function (e) {
    return ((e = String(e || "")), a.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral";
  };
  var n = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    t =
      "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF",
    a = RegExp("^[^" + t + "]*[" + n + "]"),
    r = RegExp("^[^" + n + "]*[" + t + "]");
}
