/* Recovered shipped factory. Module 492313.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 47..761
 * Raw property SHA-256: 45546390f3c759ed5ca2cb2daa7c7fc957ca8b282aa4eb3ec129e69f23cf415a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var i = {
    "./icon-file-acrobat.svg": "393105",
    "./icon-file-ae.svg": "209899",
    "./icon-file-ai.svg": "862047",
    "./icon-file-archive.svg": "262369",
    "./icon-file-audio.svg": "439205",
    "./icon-file-code.svg": "602462",
    "./icon-file-document.svg": "655514",
    "./icon-file-image.svg": "528736",
    "./icon-file-ps.svg": "426658",
    "./icon-file-sketch.svg": "101233",
    "./icon-file-spreadsheet.svg": "368877",
    "./icon-file-unknown.svg": "531449",
    "./icon-file-video.svg": "347810",
    "./icon-file-webcode.svg": "144374",
  };
  function r(e) {
    return n(a(e));
  }
  function a(e) {
    if (!n.o(i, e)) {
      var t = Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return i[e];
  }
  ((r.keys = function () {
    return Object.keys(i);
  }),
    (r.resolve = a),
    (e.exports = r),
    (r.id = 492313));
}
