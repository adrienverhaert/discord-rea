/* Recovered shipped factory. Module 709055.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6669387..6669634
 * Raw property SHA-256: 6fdf50071b49babb9d0dbd45494ce9c00746ed7405de6f23ebbc9b98f049a01b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(723702),
    r = n(19575),
    a = n(567249);
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = a.A.getWindow(e);
    null == n || n.closed || (i.isPlatformEmbedded ? r.Ay.focus(e, t) : n.focus());
  }
}
