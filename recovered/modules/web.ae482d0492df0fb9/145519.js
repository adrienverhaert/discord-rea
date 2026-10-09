/* Recovered shipped factory. Module 145519.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4734..5060
 * Raw property SHA-256: 40521decfa6dfcfb4f68533be9c0d6343681aa8775ded0c656d3a510a576d701
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var i = { "./spritesheet-emoji-40.png.js": "617057", "./spritesheet-emoji-48.png.js": "587353" };
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
    (r.id = 145519));
}
